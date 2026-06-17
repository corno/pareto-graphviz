import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
import p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/high_level/data"
import * as d_out from "../../../../interface/generated/liana/schemas/low_level/data"

namespace interface_ {

    export type Graph = p_i.Transformer<
        d_in.Graph,
        d_out.Graph
    >

    export type Tree = p_i.Transformer_With_Parameter<
        d_in.Tree,
        d_out.Statements,
        {
            'path': p_di.List<string>
        }
    >

}

//dependencies
import * as t_attributes_to_low_level from "../attributes/low_level"
import * as t_fp_to_loc from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"

//shorthands
import * as sh from "../../../../shorthands/low_level"
import * as sh_fp from "pareto-fountain-pen/dist/shorthands/prose"

const temp_text_from_list_of_separated_texts = (
    $: p_di.List<string>,
    $p: { 'separator': string }
): string => {

    return p_text_from_list(
        t_fp_to_loc.Phrase(
            sh_fp.ph.rich(
                p_.list.from.list($).map(($) => sh_fp.ph.literal($)),
                sh_fp.ph.nothing(),
                sh_fp.ph.nothing(),
                sh_fp.ph.literal($p.separator),
                sh_fp.ph.nothing(),
            ),
            {
                'indentation': "    ",
                'newline': "\n",
            }
        ),
        ($) => $
    )
}

export const Graph: interface_.Graph = ($) => ({
    'strict': true,
    'type': p_.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'directed': return p_.ss($, () => ['digraph', null])
            case 'undirected': return p_.ss($, () => ['graph', null])
            default: return p_.au($[0])
        }
    }),
    'name': p_.optional.from.optional(
        $.name,
    ).map(
        ($) => ['string', $]
    ),
    'statements': p_.literal.nested_list([
        Tree($.tree, { 'path': p_.literal.list([]) }),
        p_.decide.state($.type, ($): d_out.Graph.statements => {
            switch ($[0]) {
                case 'directed': return p_.ss($, ($) => $.edges.__l_map(
                    ($): d_out.Statements.L => ['edge', {
                        "left": ['node', {
                            'id': ['string', $.from.start],
                            'port': p_.literal.not_set()
                        }],
                        "right": p_.literal.list<d_out.Statements.L.edge.right.L>([
                            ['node', {
                                'id': ['string', $.to.start],
                                'port': p_.literal.not_set()
                            }]
                        ]),
                        "attributes": t_attributes_to_low_level.Attributes($.attributes),
                    }]
                ))
                case 'undirected': return p_.ss($, ($) => $.edges.__l_map(($): d_out.Statements.L => ['edge', {
                    "left": ['node', {
                        'id': ['string', $.yin.start],
                        'port': p_.literal.not_set()
                    }],
                    "right": p_.literal.list<d_out.Statements.L.edge.right.L>([
                        ['node', {
                            'id': ['string', $.yang.start],
                            'port': p_.literal.not_set()
                        }]
                    ]),
                    "attributes": p_.literal.list([]), //FIXME: attributes
                }]))
                default: return p_.au($[0])
            }
        })
    ])

})

export const Tree: interface_.Tree = ($, $p) => p_.list.from.dictionary(
    $.elements,
).flatten(
    ($, id): d_out.Statements => {
        const path = p_.literal.nested_list([
            $p.path,
            [
                id
            ]
        ])
        return p_.decide.state($, ($) => {
            switch ($[0]) {
                case 'node': return p_.ss($, ($) => p_.literal.list([
                    sh.s.node(
                        sh.node_id(sh.id.string(temp_text_from_list_of_separated_texts(path, { 'separator': '>' })), null),
                        p_.literal.nested_list([
                            t_attributes_to_low_level.Attributes($.attributes),
                            [
                                sh.attribute(sh.id.id("label"), sh.id.string(id))
                            ]
                        ])
                    )

                    // ['node', {
                    //     'node': {
                    //         'id': ['string', s_list_of_separated_texts(path, { 'separator': '>' })],
                    //         'port': p_.literal.not_set()
                    //     },
                    //     'attribute list': p_.literal.nested_list([
                    //         [
                    //             {
                    //                 'name': ['id', "label"],
                    //                 'value': ['string', id],
                    //             }
                    //         ],
                    //         t_attributes_to_low_level.Attributes($.attributes)
                    //     ]),

                    // }]
                ]))
                case 'sub': return p_.ss($, ($) => Tree($.tree, { 'path': path }))
                default: return p_.au($[0])
            }
        })
    }
)