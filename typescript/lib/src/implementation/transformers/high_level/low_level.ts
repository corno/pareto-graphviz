import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import type * as p_di from 'pareto-core/interface/data'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

//schemas
import type * as s_in from "../../../interface/schemas/high_level.js"
import type * as s_out from "../../../interface/schemas/low_level.js"

namespace declarations {

    export type Graph = p_i.Transformer<
        s_in.Graph,
        s_out.Graph
    >

    export type Tree = p_i.Transformer_With_Parameter<
        s_in.Tree,
        s_out.Statements,
        {
            'path': p_di.List<string>
        }
    >

}

//dependencies
import * as t_attributes_to_low_level from "../attributes/low_level.js"
import * as t_fp_to_loc from "pareto-fountain-pen/implementation/transformers/prose/list_of_characters"

//shorthands
import * as sh from "../../../shorthands/low_level/target.js"
import * as sh_fp from "pareto-fountain-pen/shorthands/prose/deprecated"

const temp_text_from_list_of_separated_texts = (
    $: p_di.List<string>,
    $p: { 'separator': string }
): string => {

    return p_text_from_list(
        t_fp_to_loc.Phrase(
            sh_fp.ph.rich(
                p_.from.list($).map(
                    ($) => sh_fp.ph.literal($)),
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

export const Graph: declarations.Graph = ($) => ({
    'strict': true,
    'type': p_.from.state($.type).decide(
        ($) => {
            switch ($[0]) {
                case 'directed': return p_.option($, () => ['digraph', null])
                case 'undirected': return p_.option($, () => ['graph', null])
                default: return p_.exhaustive($[0])
            }
        }),
    'name': p_.from.optional($.name).map(
        ($) => ['string', $]
    ),
    'statements': p_.literal.segmented_list([
        Tree($.tree, { 'path': p_.literal.list([]) }),
        p_.from.state($.type).decide(
            ($): s_out.Graph.statements => {
                switch ($[0]) {
                    case 'directed': return p_.option($, ($) => p_.from.list($.edges).map(
                        ($): s_out.Statements.L => ['edge', {
                            "left": ['node', {
                                'id': ['string', $.from.start],
                                'port': p_.literal.not_set()
                            }],
                            "right": p_.literal.list<s_out.Statements.L.edge.right.L>([
                                ['node', {
                                    'id': ['string', $.to.start],
                                    'port': p_.literal.not_set()
                                }]
                            ]),
                            "attributes": t_attributes_to_low_level.Attributes($.attributes),
                        }]
                    ))
                    case 'undirected': return p_.option($, ($) => p_.from.list($.edges).map(
                        ($): s_out.Statements.L => ['edge', {
                            "left": ['node', {
                                'id': ['string', $.yin.start],
                                'port': p_.literal.not_set()
                            }],
                            "right": p_.literal.list<s_out.Statements.L.edge.right.L>([
                                ['node', {
                                    'id': ['string', $.yang.start],
                                    'port': p_.literal.not_set()
                                }]
                            ]),
                            "attributes": p_.literal.list([]), //FIXME: attributes
                        }]))
                    default: return p_.exhaustive($[0])
                }
            })
    ])

})

export const Tree: declarations.Tree = ($, $p) => p_.from.dictionary($.elements).flatten_to_list(
    ($, id): s_out.Statements => {
        const path = p_.literal.chain(
            $p.path,
            id
        )
        return p_.from.state($).decide(
            ($) => {
                switch ($[0]) {
                    case 'node': return p_.option($, ($) => p_.literal.list([
                        sh.s.node(
                            sh.node_id(
sh.id.string(temp_text_from_list_of_separated_texts(path, { 'separator': '>' })), null),
                            p_.literal.chain(
                                t_attributes_to_low_level.Attributes($.attributes),
                                sh.attribute(
sh.id.id("label"), sh.id.string(id))
                            )
                        )

                        // ['node', {
                        //     'node': {
                        //         'id': ['string', s_list_of_separated_texts(path, { 'separator': '>' })],
                        //         'port': p_.literal.not_set()
                        //     },
                        //     'attribute list': p_.literal.nested_ list([
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
                    case 'sub': return p_.option($, ($) => Tree($.tree, { 'path': path }))
                    default: return p_.exhaustive($[0])
                }
            })
    }
)