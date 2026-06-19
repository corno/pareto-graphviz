
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/high_level/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_attributes from "../../attributes/transformers/astn_sealed_target"

export const Graph: t_signatures.Graph = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "name": p_change_context(
            $['name'],
            ($) => ['optional', p_decide_optional(
                $,
                ($): t_out.Value.optional => ['set', ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }]],
                () => ['not set', null],
            )],
        ),
        "tree": p_change_context(
            $['tree'],
            ($) => Tree(
                $,
            ),
        ),
        "type": p_change_context(
            $['type'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'undirected':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'undirected',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "edges": p_change_context(
                                                $['edges'],
                                                ($) => ['list', p_.from.list(
                                                    $,
                                                ).map(
                                                    ($) => ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "yin": p_change_context(
                                                                $['yin'],
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                ),
                                                            ),
                                                            "yang": p_change_context(
                                                                $['yang'],
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                ),
                                                            ),
                                                            "attributes": p_change_context(
                                                                $['attributes'],
                                                                ($) => v_external_attributes.Attributes(
                                                                    $,
                                                                ),
                                                            ),
                                                        },
                                                    )]],
                                                )],
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        case 'directed':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'directed',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "edges": p_change_context(
                                                $['edges'],
                                                ($) => ['list', p_.from.list(
                                                    $,
                                                ).map(
                                                    ($) => ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "from": p_change_context(
                                                                $['from'],
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                ),
                                                            ),
                                                            "to": p_change_context(
                                                                $['to'],
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                ),
                                                            ),
                                                            "attributes": p_change_context(
                                                                $['attributes'],
                                                                ($) => v_external_attributes.Attributes(
                                                                    $,
                                                                ),
                                                            ),
                                                        },
                                                    )]],
                                                )],
                                            ),
                                        },
                                    )]],
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
    },
)]]

export const Tree: t_signatures.Tree = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "attributes": p_change_context(
            $['attributes'],
            ($) => v_external_attributes.Attributes(
                $,
            ),
        ),
        "elements": p_change_context(
            $['elements'],
            ($) => ['dictionary', p_.from.dictionary(
                $,
            ).map(
                ($, id) => ['state', p_decide_state(
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
                                                "attributes": p_change_context(
                                                    $['attributes'],
                                                    ($) => v_external_attributes.Attributes(
                                                        $,
                                                    ),
                                                ),
                                            },
                                        )]],
                                    }),
                                )
                            case 'sub':
                                return p_.ss(
                                    $,
                                    ($) => ({
                                        'option': 'sub',
                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "type": p_change_context(
                                                    $['type'],
                                                    ($) => ['state', p_decide_state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'group':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'group',
                                                                            'value': ['nothing', null],
                                                                        }),
                                                                    )
                                                                case 'cluster':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'cluster',
                                                                            'value': ['nothing', null],
                                                                        }),
                                                                    )
                                                                case 'subgraph':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'subgraph',
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
                                                "tree": p_change_context(
                                                    $['tree'],
                                                    ($) => Tree(
                                                        $,
                                                    ),
                                                ),
                                            },
                                        )]],
                                    }),
                                )
                            default:
                                return p_.au(
                                    $[0],
                                )
                        }
                    },
                )],
            )],
        ),
    },
)]]

export const End_Point_Specification: t_signatures.End_Point_Specification = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "start": p_change_context(
            $['start'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "tail": p_change_context(
            $['tail'],
            ($) => ['list', p_.from.list(
                $,
            ).map(
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            )],
        ),
        "port data": p_change_context(
            $['port data'],
            ($) => ['optional', p_decide_optional(
                $,
                ($): t_out.Value.optional => ['set', ['group', ['verbose', p_.literal.dictionary(
                    {
                        "port": p_change_context(
                            $['port'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "compass direction": p_change_context(
                            $['compass direction'],
                            ($) => ['optional', p_decide_optional(
                                $,
                                ($): t_out.Value.optional => ['set', ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]],
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
