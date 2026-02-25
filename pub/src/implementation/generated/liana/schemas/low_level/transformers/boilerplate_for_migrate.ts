
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/low_level/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/low_level/data"

import * as v_html from "../../html/transformers/boilerplate_for_migrate"

export const Graph: t_signatures.Graph = ($) => ({
    'strict': _p_change_context(
        $['strict'],
        ($) => $,
    ),
    'type': _p_change_context(
        $['type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Graph.type_ => {
                switch ($[0]) {
                    case 'graph':
                        return _p.ss(
                            $,
                            ($) => ['graph', null],
                        )
                    case 'digraph':
                        return _p.ss(
                            $,
                            ($) => ['digraph', null],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    ),
    'name': _p_change_context(
        $['name'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => ID(
                $,
            ),
        ),
    ),
    'statements': _p_change_context(
        $['statements'],
        ($) => Statements(
            $,
        ),
    ),
})

export const Statements: t_signatures.Statements = ($) => _p.list.from.list(
    $,
).map(
    ($) => _p.decide.state(
        $,
        ($): t_out.Statements.L => {
            switch ($[0]) {
                case 'node':
                    return _p.ss(
                        $,
                        ($) => ['node', {
                            'node': _p_change_context(
                                $['node'],
                                ($) => Node_ID(
                                    $,
                                ),
                            ),
                            'attributes': _p_change_context(
                                $['attributes'],
                                ($) => Attributes(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'edge':
                    return _p.ss(
                        $,
                        ($) => ['edge', {
                            'left': _p_change_context(
                                $['left'],
                                ($) => End_Point(
                                    $,
                                ),
                            ),
                            'right': _p_change_context(
                                $['right'],
                                ($) => _p.list.from.list(
                                    $,
                                ).map(
                                    ($) => End_Point(
                                        $,
                                    ),
                                ),
                            ),
                            'attributes': _p_change_context(
                                $['attributes'],
                                ($) => Attributes(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'attributes':
                    return _p.ss(
                        $,
                        ($) => ['attributes', {
                            'type': _p_change_context(
                                $['type'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Statements.L.attributes.type_ => {
                                        switch ($[0]) {
                                            case 'graph':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['graph', null],
                                                )
                                            case 'node':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['node', null],
                                                )
                                            case 'edge':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['edge', null],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                            'attributes': _p_change_context(
                                $['attributes'],
                                ($) => Attributes(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'attribute assignment':
                    return _p.ss(
                        $,
                        ($) => ['attribute assignment', {
                            'name': _p_change_context(
                                $['name'],
                                ($) => ID(
                                    $,
                                ),
                            ),
                            'value': _p_change_context(
                                $['value'],
                                ($) => ID(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'subgraph':
                    return _p.ss(
                        $,
                        ($) => ['subgraph', Subgraph(
                            $,
                        )],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    ),
)

export const End_Point: t_signatures.End_Point = ($) => _p.decide.state(
    $,
    ($): t_out.End_Point => {
        switch ($[0]) {
            case 'node':
                return _p.ss(
                    $,
                    ($) => ['node', Node_ID(
                        $,
                    )],
                )
            case 'subgraph':
                return _p.ss(
                    $,
                    ($) => ['subgraph', Subgraph(
                        $,
                    )],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)

export const Attributes: t_signatures.Attributes = ($) => _p.list.from.list(
    $,
).map(
    ($) => ({
        'name': _p_change_context(
            $['name'],
            ($) => ID(
                $,
            ),
        ),
        'value': _p_change_context(
            $['value'],
            ($) => ID(
                $,
            ),
        ),
    }),
)

export const Node_ID: t_signatures.Node_ID = ($) => ({
    'id': _p_change_context(
        $['id'],
        ($) => ID(
            $,
        ),
    ),
    'port': _p_change_context(
        $['port'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => ({
                'port': _p_change_context(
                    $['port'],
                    ($) => ID(
                        $,
                    ),
                ),
                'compass point': _p_change_context(
                    $['compass point'],
                    ($) => _p.optional.from.optional(
                        $,
                    ).map(
                        ($) => ID(
                            $,
                        ),
                    ),
                ),
            }),
        ),
    ),
})

export const ID: t_signatures.ID = ($) => _p.decide.state(
    $,
    ($): t_out.ID => {
        switch ($[0]) {
            case 'id':
                return _p.ss(
                    $,
                    ($) => ['id', $],
                )
            case 'string':
                return _p.ss(
                    $,
                    ($) => ['string', $],
                )
            case 'html':
                return _p.ss(
                    $,
                    ($) => ['html', v_html.Phrasing_Element(
                        $,
                    )],
                )
            case 'number':
                return _p.ss(
                    $,
                    ($) => ['number', $],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)

export const Subgraph: t_signatures.Subgraph = ($) => ({
    'subgraph': _p_change_context(
        $['subgraph'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => _p.optional.from.optional(
                $,
            ).map(
                ($) => ID(
                    $,
                ),
            ),
        ),
    ),
    'statements': _p_change_context(
        $['statements'],
        ($) => Statements(
            $,
        ),
    ),
})
