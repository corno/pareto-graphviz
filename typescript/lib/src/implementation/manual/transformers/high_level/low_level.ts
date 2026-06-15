import * as pt from 'pareto-core/dist/transformer/implementation'
import * as p_di from 'pareto-core/dist/data/interface'
import p_text_from_list from 'pareto-core/dist/specials/text_from_list'
import p_list_from_text from 'pareto-core/dist/specials/list_from_text'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/high_level/data"
import * as d_out from "../../../../interface/generated/liana/schemas/low_level/data"

//dependencies
import * as t_attributes_to_low_level from "../attributes/low_level"
import * as t_fp_to_loc from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"

//shorthands
import * as sh from "../../../../shorthands/low_level"
import * as sh_fp from "pareto-fountain-pen/dist/shorthands/prose"

const temp_text_from_list_of_separated_texts = ($: p_di.List<string>, $p: { 'separator': string }): string => {

    return p_text_from_list(
        t_fp_to_loc.Phrase(
            sh_fp.ph.rich(
                pt.list.from.list($).map(($) => sh_fp.ph.literal($)),
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

export const Graph = ($: d_in.Graph): d_out.Graph => ({
    'strict': true,
    'type': pt.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'directed': return pt.ss($, () => ['digraph', null])
            case 'undirected': return pt.ss($, () => ['graph', null])
            default: return pt.au($[0])
        }
    }),
    'name': pt.optional.from.optional(
        $.name,
    ).map(
        ($) => ['string', $]
    ),
    'statements': pt.list.nested_literal_old([
        Tree($.tree, { 'path': pt.list.literal([]) }),
        pt.decide.state($.type, ($): d_out.Graph.statements => {
            switch ($[0]) {
                case 'directed': return pt.ss($, ($) => $.edges.__l_map(
                    ($): d_out.Statements.L => ['edge', {
                        "left": ['node', {
                            'id': ['string', $.from.start],
                            'port': pt.optional.literal.not_set()
                        }],
                        "right": pt.list.literal<d_out.Statements.L.edge.right.L>([
                            ['node', {
                                'id': ['string', $.to.start],
                                'port': pt.optional.literal.not_set()
                            }]
                        ]),
                        "attributes": t_attributes_to_low_level.Attributes($.attributes),
                    }]
                ))
                case 'undirected': return pt.ss($, ($) => $.edges.__l_map(($): d_out.Statements.L => ['edge', {
                    "left": ['node', {
                        'id': ['string', $.yin.start],
                        'port': pt.optional.literal.not_set()
                    }],
                    "right": pt.list.literal<d_out.Statements.L.edge.right.L>([
                        ['node', {
                            'id': ['string', $.yang.start],
                            'port': pt.optional.literal.not_set()
                        }]
                    ]),
                    "attributes": pt.list.literal([]), //FIXME: attributes
                }]))
                default: return pt.au($[0])
            }
        })
    ])

})

export const Tree = (
    $: d_in.Tree,
    $p: {
        'path': p_di.List<string>
    }
): d_out.Statements => pt.list.from.dictionary(
    $.elements,
).flatten(
    ($, id): d_out.Statements => {
        const path = pt.list.nested_literal_old([
            $p.path,
            [
                id
            ]
        ])
        return pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'node': return pt.ss($, ($) => pt.list.literal([
                    sh.s.node(
                        sh.node_id(sh.id.string(temp_text_from_list_of_separated_texts(path, { 'separator': '>' })), null),
                        pt.list.nested_literal_old([
                            t_attributes_to_low_level.Attributes($.attributes),
                            [
                                sh.attribute(sh.id.id("label"), sh.id.string(id))
                            ]
                        ])
                    )

                    // ['node', {
                    //     'node': {
                    //         'id': ['string', s_list_of_separated_texts(path, { 'separator': '>' })],
                    //         'port': pt.optional.literal.not_set()
                    //     },
                    //     'attribute list': pt.list.nested_literal_old([
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
                case 'sub': return pt.ss($, ($) => Tree($.tree, { 'path': path }))
                default: return pt.au($[0])
            }
        })
    }
)