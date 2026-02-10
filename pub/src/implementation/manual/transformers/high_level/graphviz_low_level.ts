import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/high_level/data"
import * as d_out from "../../../../interface/generated/liana/schemas/low_level/data"

export const Graph = ($: d_in.Graph): d_out.Graph => ({
    'strict': true,
    'type': _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'directed': return _p.ss($, () => ['digraph', null])
            case 'undirected': return _p.ss($, () => ['graph', null])
            default: return _p.au($[0])
        }
    }),
    'name': _p.optional.map(
        $.name,
        ($) => ['string', $]
    ),
    'statements': _p.list.nested_literal_old([
        Tree($.tree, { 'path': _p.list.literal([]) }),
        _p.decide.state($.type, ($): d_out.Graph.statements => {
            switch ($[0]) {
                case 'directed': return _p.ss($, ($) => $.edges.__l_map(($): d_out.Statement_List.L => ['edge', {
                    "left": ['node', {
                        'id': ['string', $.from.start],
                        'port': _p.optional.literal.not_set()
                    }],
                    "right": _p.list.literal<d_out.Statement_List.L.SG.edge.right.L>([
                        ['node', {
                            'id': ['string', $.to.start],
                            'port': _p.optional.literal.not_set()
                        }]
                    ]),
                    "attributes": $.attributes.__l_map(($) => _p.decide.state($, ($): d_out.Attribute_List.L => {
                        switch ($[0]) {
                    
                            default: return _p.au($[0])
                        }
                    }))
                }]))
                case 'undirected': return _p.ss($, ($) => $.edges.__l_map(($): d_out.Statement_List.L => ['edge', {
                    "left": ['node', {
                        'id': ['string', $.yin.start],
                        'port': _p.optional.literal.not_set()
                    }],
                    "right": _p.list.literal<d_out.Statement_List.L.SG.edge.right.L>([
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
): d_out.Statement_List => _p.list.flatten(
    _p.list.from_dictionary(
        $.elements,
        ($, id): d_out.Statement_List => {
            const path = _p.list.nested_literal_old([
                $p.path,
                [
                    key
                ]
            ])
            return _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'node': return _p.ss($, ($) => _p.list.literal([
                        ['node', {
                            'node': {
                                'id': ['string', s_list_of_separated_texts(path, { 'separator': '>' })],
                                'port': _p.optional.literal.not_set()
                            },
                            'attribute list': _p.list.nested_literal_old([
                                [
                                    {
                                        'name': ['id', "label"],
                                        'value': ['string', key],
                                    }
                                ],
                                $.attributes.__l_map(($): d_out.Attribute_List.L => _p.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'color': return _p.ss($, ($) => ({ "name": ['id', "color"], "value": ['string', $] }))
                                        default: return _pdev.implement_me("xx")
                                    }
                                })),
                            ]),

                        }]
                    ]))
                    case 'sub': return _p.ss($, ($) => Tree($.tree, { 'path': path }))
                    default: return _p.au($[0])
                }
            })
        }
    ),
    ($) => $
)