
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/low_level/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_html from "../../html/transformers/astn_sealed_target"

export const Graph: t_signatures.Graph = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "strict": p_change_context(
            $['strict'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.true_false(
                    $,
                ),
            }],
        ),
        "type": p_change_context(
            $['type'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'graph':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'graph',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'digraph':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'digraph',
                                    'value': ['nothing', null],
                                }),
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
        "name": p_change_context(
            $['name'],
            ($) => ['optional', p_decide_optional(
                $,
                ($): t_out.Value.optional => ['set', ID(
                    $,
                )],
                () => ['not set', null],
            )],
        ),
        "statements": p_change_context(
            $['statements'],
            ($) => Statements(
                $,
            ),
        ),
    },
)]]

export const Statements: t_signatures.Statements = ($) => ['list', p_.from.list(
    $,
).map(
    ($) => ['state', p_decide_state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'node':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'node',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "node": p_change_context(
                                        $['node'],
                                        ($) => Node_ID(
                                            $,
                                        ),
                                    ),
                                    "attributes": p_change_context(
                                        $['attributes'],
                                        ($) => Attributes(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'edge':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'edge',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "left": p_change_context(
                                        $['left'],
                                        ($) => End_Point(
                                            $,
                                        ),
                                    ),
                                    "right": p_change_context(
                                        $['right'],
                                        ($) => ['list', p_.from.list(
                                            $,
                                        ).map(
                                            ($) => End_Point(
                                                $,
                                            ),
                                        )],
                                    ),
                                    "attributes": p_change_context(
                                        $['attributes'],
                                        ($) => Attributes(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'attributes':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'attributes',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "type": p_change_context(
                                        $['type'],
                                        ($) => ['state', p_decide_state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'graph':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'graph',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'node':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'node',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'edge':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'edge',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    ),
                                    "attributes": p_change_context(
                                        $['attributes'],
                                        ($) => Attributes(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'attribute assignment':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'attribute assignment',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "name": p_change_context(
                                        $['name'],
                                        ($) => ID(
                                            $,
                                        ),
                                    ),
                                    "value": p_change_context(
                                        $['value'],
                                        ($) => ID(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'subgraph':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'subgraph',
                            'value': Subgraph(
                                $,
                            ),
                        }),
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    )],
)]

export const End_Point: t_signatures.End_Point = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'node':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'node',
                        'value': Node_ID(
                            $,
                        ),
                    }),
                )
            case 'subgraph':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'subgraph',
                        'value': Subgraph(
                            $,
                        ),
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]

export const Attributes: t_signatures.Attributes = ($) => ['list', p_.from.list(
    $,
).map(
    ($) => ['group', ['verbose', p_.literal.dictionary(
        {
            "name": p_change_context(
                $['name'],
                ($) => ID(
                    $,
                ),
            ),
            "value": p_change_context(
                $['value'],
                ($) => ID(
                    $,
                ),
            ),
        },
    )]],
)]

export const Node_ID: t_signatures.Node_ID = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "id": p_change_context(
            $['id'],
            ($) => ID(
                $,
            ),
        ),
        "port": p_change_context(
            $['port'],
            ($) => ['optional', p_decide_optional(
                $,
                ($): t_out.Value.optional => ['set', ['group', ['verbose', p_.literal.dictionary(
                    {
                        "port": p_change_context(
                            $['port'],
                            ($) => ID(
                                $,
                            ),
                        ),
                        "compass point": p_change_context(
                            $['compass point'],
                            ($) => ['optional', p_decide_optional(
                                $,
                                ($): t_out.Value.optional => ['set', ID(
                                    $,
                                )],
                                () => ['not set', null],
                            )],
                        ),
                    },
                )]]],
                () => ['not set', null],
            )],
        ),
    },
)]]

export const ID: t_signatures.ID = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'id':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'id',
                        'value': ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    }),
                )
            case 'string':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'string',
                        'value': ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    }),
                )
            case 'html':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'html',
                        'value': v_external_html.Phrasing_Element(
                            $,
                        ),
                    }),
                )
            case 'number':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'number',
                        'value': ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.decimal(
                                $,
                            ),
                        }],
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]

export const Subgraph: t_signatures.Subgraph = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "subgraph": p_change_context(
            $['subgraph'],
            ($) => ['optional', p_decide_optional(
                $,
                ($): t_out.Value.optional => ['set', ['optional', p_decide_optional(
                    $,
                    ($): t_out.Value.optional => ['set', ID(
                        $,
                    )],
                    () => ['not set', null],
                )]],
                () => ['not set', null],
            )],
        ),
        "statements": p_change_context(
            $['statements'],
            ($) => Statements(
                $,
            ),
        ),
    },
)]]
