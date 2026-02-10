import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/high_level/data"
import * as d_out from "../../../../interface/generated/liana/schemas/low_level/data"

//dependencies
import * as t_attributes_to_low_level from "../attributes/low_level"

//shorthands
import * as sh from "../../../../shorthands/low_level"

const temp_text_from_list_of_separated_texts = (list: _pi.List<string>, params: { 'separator': string }): string => {
    let is_first = true

    const xx: _pi.List<string> = _p.list.from.list(
        list
    ).flatten(
        ($): _pi.List<string> => {
            if (is_first) {
                is_first = false
                return _p.list.literal([])
            }
            return _p.list.literal([
                params.separator,
                $
            ])
        }
    )
    const yy: _pi.List<number> = _p.list.from.list(
        xx
    ).flatten(
        ($) => _p_list_from_text($, ($) => $)
    )

    return _p_text_from_list(
        yy,
        ($) => $
    )
}

export const Graph = ($: d_in.Graph): d_out.Graph => ({
    'strict': true,
    'type': _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'directed': return _p.ss($, () => ['digraph', null])
            case 'undirected': return _p.ss($, () => ['graph', null])
            default: return _p.au($[0])
        }
    }),
    'name': _p.optional.from.optional(
        $.name,
    ).map(
        ($) => ['string', $]
    ),
    'statements': _p.list.nested_literal_old([
        Tree($.tree, { 'path': _p.list.literal([]) }),
        _p.decide.state($.type, ($): d_out.Graph.statements => {
            switch ($[0]) {
                case 'directed': return _p.ss($, ($) => $.edges.__l_map(($): d_out.Statements.L => ['edge', {
                    "left": ['node', {
                        'id': ['string', $.from.start],
                        'port': _p.optional.literal.not_set()
                    }],
                    "right": _p.list.literal<d_out.Statements.L.edge.right.L>([
                        ['node', {
                            'id': ['string', $.to.start],
                            'port': _p.optional.literal.not_set()
                        }]
                    ]),
                    "attributes": t_attributes_to_low_level.Attributes($.attributes),
                }]))
                case 'undirected': return _p.ss($, ($) => $.edges.__l_map(($): d_out.Statements.L => ['edge', {
                    "left": ['node', {
                        'id': ['string', $.yin.start],
                        'port': _p.optional.literal.not_set()
                    }],
                    "right": _p.list.literal<d_out.Statements.L.edge.right.L>([
                        ['node', {
                            'id': ['string', $.yang.start],
                            'port': _p.optional.literal.not_set()
                        }]
                    ]),
                    "attributes": _p.list.literal([]), //FIXME: attributes
                }]))
                default: return _p.au($[0])
            }
        })
    ])

})

export const Tree = (
    $: d_in.Tree,
    $p: {
        'path': _pi.List<string>
    }
): d_out.Statements => _p.list.from.dictionary(
    $.elements,
).flatten(
    ($, id): d_out.Statements => {
        const path = _p.list.nested_literal_old([
            $p.path,
            [
                id
            ]
        ])
        return _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'node': return _p.ss($, ($) => _p.list.literal([
                    sh.s.node(
                        sh.node_id(sh.id.string(temp_text_from_list_of_separated_texts(path, { 'separator': '>' })), null),
                        _p.list.nested_literal_old([
                            t_attributes_to_low_level.Attributes($.attributes),
                            [
                                sh.attribute(sh.id.id("label"), sh.id.string(id))
                            ]
                        ])
                    )

                    // ['node', {
                    //     'node': {
                    //         'id': ['string', s_list_of_separated_texts(path, { 'separator': '>' })],
                    //         'port': _p.optional.literal.not_set()
                    //     },
                    //     'attribute list': _p.list.nested_literal_old([
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
                case 'sub': return _p.ss($, ($) => Tree($.tree, { 'path': path }))
                default: return _p.au($[0])
            }
        })
    }
)