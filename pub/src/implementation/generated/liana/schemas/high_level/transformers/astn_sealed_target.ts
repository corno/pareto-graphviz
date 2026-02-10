
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/high_level/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_attributes from "../../attributes/transformers/astn_sealed_target"

export const Graph: t_signatures.Graph = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "name": _p_change_context(
            $['name'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }]],
                () => ['not set', null],
            )],
        ),
        "tree": _p_change_context(
            $['tree'],
            ($) => Tree(
                $,
            ),
        ),
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'undirected':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'undirected',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "edges": _p_change_context(
                                                $['edges'],
                                                ($) => ['list', _p.list.from.list(
                                                    $,
                                                ).map(
                                                    ($) => ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "yin": _p_change_context(
                                                                $['yin'],
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                ),
                                                            ),
                                                            "yang": _p_change_context(
                                                                $['yang'],
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                ),
                                                            ),
                                                            "attributes": _p_change_context(
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
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'directed',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "edges": _p_change_context(
                                                $['edges'],
                                                ($) => ['list', _p.list.from.list(
                                                    $,
                                                ).map(
                                                    ($) => ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "from": _p_change_context(
                                                                $['from'],
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                ),
                                                            ),
                                                            "to": _p_change_context(
                                                                $['to'],
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                ),
                                                            ),
                                                            "attributes": _p_change_context(
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
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Tree: t_signatures.Tree = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "attributes": _p_change_context(
            $['attributes'],
            ($) => v_external_attributes.Attributes(
                $,
            ),
        ),
        "elements": _p_change_context(
            $['elements'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['state', _p.decide.state(
                    $,
                    ($): t_out.Value.state => {
                        switch ($[0]) {
                            case 'node':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'node',
                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                "attributes": _p_change_context(
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
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'sub',
                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                "type": _p_change_context(
                                                    $['type'],
                                                    ($) => ['state', _p.decide.state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'group':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'group',
                                                                            'value': ['nothing', null],
                                                                        }),
                                                                    )
                                                                case 'cluster':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'cluster',
                                                                            'value': ['nothing', null],
                                                                        }),
                                                                    )
                                                                case 'subgraph':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'subgraph',
                                                                            'value': ['nothing', null],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )],
                                                ),
                                                "tree": _p_change_context(
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
                                return _p.au(
                                    $[0],
                                )
                        }
                    },
                )],
            )],
        ),
    },
)]]

export const End_Point_Specification: t_signatures.End_Point_Specification = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "start": _p_change_context(
            $['start'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "tail": _p_change_context(
            $['tail'],
            ($) => ['list', _p.list.from.list(
                $,
            ).map(
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            )],
        ),
        "port data": _p_change_context(
            $['port data'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
                    {
                        "port": _p_change_context(
                            $['port'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "compass direction": _p_change_context(
                            $['compass direction'],
                            ($) => ['optional', _p.decide.optional(
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
