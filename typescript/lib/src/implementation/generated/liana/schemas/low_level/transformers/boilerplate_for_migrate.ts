
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/low_level/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/low_level/data"

import * as v_html from "../../html/transformers/boilerplate_for_migrate"

export const Graph: t_signatures.Graph = ($) => ({
    'strict': p_change_context(
        $['strict'],
        ($) => $,
    ),
    'type': p_change_context(
        $['type'],
        ($) => p_decide_state(
            $,
            ($): t_out.Graph.type_ => {
                switch ($[0]) {
                    case 'graph':
                        return p_.ss(
                            $,
                            ($) => ['graph', null],
                        )
                    case 'digraph':
                        return p_.ss(
                            $,
                            ($) => ['digraph', null],
                        )
                    default:
                        return p_.au(
                            $[0],
                        )
                }
            },
        ),
    ),
    'name': p_change_context(
        $['name'],
        ($) => p_.from.optional(
            $,
        ).map(
            ($) => ID(
                $,
            ),
        ),
    ),
    'statements': p_change_context(
        $['statements'],
        ($) => Statements(
            $,
        ),
    ),
})

export const Statements: t_signatures.Statements = ($) => p_.from.list(
    $,
).map(
    ($) => p_decide_state(
        $,
        ($): t_out.Statements.L => {
            switch ($[0]) {
                case 'node':
                    return p_.ss(
                        $,
                        ($) => ['node', {
                            'node': p_change_context(
                                $['node'],
                                ($) => Node_ID(
                                    $,
                                ),
                            ),
                            'attributes': p_change_context(
                                $['attributes'],
                                ($) => Attributes(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'edge':
                    return p_.ss(
                        $,
                        ($) => ['edge', {
                            'left': p_change_context(
                                $['left'],
                                ($) => End_Point(
                                    $,
                                ),
                            ),
                            'right': p_change_context(
                                $['right'],
                                ($) => p_.from.list(
                                    $,
                                ).map(
                                    ($) => End_Point(
                                        $,
                                    ),
                                ),
                            ),
                            'attributes': p_change_context(
                                $['attributes'],
                                ($) => Attributes(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'attributes':
                    return p_.ss(
                        $,
                        ($) => ['attributes', {
                            'type': p_change_context(
                                $['type'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Statements.L.attributes.type_ => {
                                        switch ($[0]) {
                                            case 'graph':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['graph', null],
                                                )
                                            case 'node':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['node', null],
                                                )
                                            case 'edge':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['edge', null],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                            'attributes': p_change_context(
                                $['attributes'],
                                ($) => Attributes(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'attribute assignment':
                    return p_.ss(
                        $,
                        ($) => ['attribute assignment', {
                            'name': p_change_context(
                                $['name'],
                                ($) => ID(
                                    $,
                                ),
                            ),
                            'value': p_change_context(
                                $['value'],
                                ($) => ID(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'subgraph':
                    return p_.ss(
                        $,
                        ($) => ['subgraph', Subgraph(
                            $,
                        )],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
)

export const End_Point: t_signatures.End_Point = ($) => p_decide_state(
    $,
    ($): t_out.End_Point => {
        switch ($[0]) {
            case 'node':
                return p_.ss(
                    $,
                    ($) => ['node', Node_ID(
                        $,
                    )],
                )
            case 'subgraph':
                return p_.ss(
                    $,
                    ($) => ['subgraph', Subgraph(
                        $,
                    )],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)

export const Attributes: t_signatures.Attributes = ($) => p_.from.list(
    $,
).map(
    ($) => ({
        'name': p_change_context(
            $['name'],
            ($) => ID(
                $,
            ),
        ),
        'value': p_change_context(
            $['value'],
            ($) => ID(
                $,
            ),
        ),
    }),
)

export const Node_ID: t_signatures.Node_ID = ($) => ({
    'id': p_change_context(
        $['id'],
        ($) => ID(
            $,
        ),
    ),
    'port': p_change_context(
        $['port'],
        ($) => p_.from.optional(
            $,
        ).map(
            ($) => ({
                'port': p_change_context(
                    $['port'],
                    ($) => ID(
                        $,
                    ),
                ),
                'compass point': p_change_context(
                    $['compass point'],
                    ($) => p_.from.optional(
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

export const ID: t_signatures.ID = ($) => p_decide_state(
    $,
    ($): t_out.ID => {
        switch ($[0]) {
            case 'id':
                return p_.ss(
                    $,
                    ($) => ['id', $],
                )
            case 'string':
                return p_.ss(
                    $,
                    ($) => ['string', $],
                )
            case 'html':
                return p_.ss(
                    $,
                    ($) => ['html', v_html.Phrasing_Element(
                        $,
                    )],
                )
            case 'number':
                return p_.ss(
                    $,
                    ($) => ['number', $],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)

export const Subgraph: t_signatures.Subgraph = ($) => ({
    'subgraph': p_change_context(
        $['subgraph'],
        ($) => p_.from.optional(
            $,
        ).map(
            ($) => p_.from.optional(
                $,
            ).map(
                ($) => ID(
                    $,
                ),
            ),
        ),
    ),
    'statements': p_change_context(
        $['statements'],
        ($) => Statements(
            $,
        ),
    ),
})
