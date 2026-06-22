
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/high_level/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/high_level/data"

import * as v_attributes from "../../attributes/transformers/boilerplate_for_migrate"

export const Graph: t_signatures.Graph = ($) => ({
    'name': p_change_context(
        $['name'],
        ($) => p_.from.optional($,
        ).map(
            ($) => $,
        ),
    ),
    'tree': p_change_context(
        $['tree'],
        ($) => Tree(
            $,
        ),
    ),
    'type': p_change_context(
        $['type'],
        ($) => p_decide_state(
            $,
            ($): t_out.Graph.type_ => {
                switch ($[0]) {
                    case 'undirected':
                        return p_.ss(
                            $,
                            ($) => ['undirected', {
                                'edges': p_change_context(
                                    $['edges'],
                                    ($) => p_.from.list($,
                                    ).map(
                                        ($) => ({
                                            'yin': p_change_context(
                                                $['yin'],
                                                ($) => End_Point_Specification(
                                                    $,
                                                ),
                                            ),
                                            'yang': p_change_context(
                                                $['yang'],
                                                ($) => End_Point_Specification(
                                                    $,
                                                ),
                                            ),
                                            'attributes': p_change_context(
                                                $['attributes'],
                                                ($) => v_attributes.Attributes(
                                                    $,
                                                ),
                                            ),
                                        }),
                                    ),
                                ),
                            }],
                        )
                    case 'directed':
                        return p_.ss(
                            $,
                            ($) => ['directed', {
                                'edges': p_change_context(
                                    $['edges'],
                                    ($) => p_.from.list($,
                                    ).map(
                                        ($) => ({
                                            'from': p_change_context(
                                                $['from'],
                                                ($) => End_Point_Specification(
                                                    $,
                                                ),
                                            ),
                                            'to': p_change_context(
                                                $['to'],
                                                ($) => End_Point_Specification(
                                                    $,
                                                ),
                                            ),
                                            'attributes': p_change_context(
                                                $['attributes'],
                                                ($) => v_attributes.Attributes(
                                                    $,
                                                ),
                                            ),
                                        }),
                                    ),
                                ),
                            }],
                        )
                    default:
                        return p_.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})

export const Tree: t_signatures.Tree = ($) => ({
    'attributes': p_change_context(
        $['attributes'],
        ($) => v_attributes.Attributes(
            $,
        ),
    ),
    'elements': p_change_context(
        $['elements'],
        ($) => p_.from.dictionary($,
        ).map(
            ($, id) => p_decide_state(
                $,
                ($): t_out.Tree.elements.D => {
                    switch ($[0]) {
                        case 'node':
                            return p_.ss(
                                $,
                                ($) => ['node', {
                                    'attributes': p_change_context(
                                        $['attributes'],
                                        ($) => v_attributes.Attributes(
                                            $,
                                        ),
                                    ),
                                }],
                            )
                        case 'sub':
                            return p_.ss(
                                $,
                                ($) => ['sub', {
                                    'type': p_change_context(
                                        $['type'],
                                        ($) => p_decide_state(
                                            $,
                                            ($): t_out.Tree.elements.D.sub.type_ => {
                                                switch ($[0]) {
                                                    case 'group':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['group', null],
                                                        )
                                                    case 'cluster':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['cluster', null],
                                                        )
                                                    case 'subgraph':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['subgraph', null],
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                    'tree': p_change_context(
                                        $['tree'],
                                        ($) => Tree(
                                            $,
                                        ),
                                    ),
                                }],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        ),
    ),
})

export const End_Point_Specification: t_signatures.End_Point_Specification = ($) => ({
    'start': p_change_context(
        $['start'],
        ($) => $,
    ),
    'tail': p_change_context(
        $['tail'],
        ($) => p_.from.list($,
        ).map(
            ($) => $,
        ),
    ),
    'port data': p_change_context(
        $['port data'],
        ($) => p_.from.optional($,
        ).map(
            ($) => ({
                'port': p_change_context(
                    $['port'],
                    ($) => $,
                ),
                'compass direction': p_change_context(
                    $['compass direction'],
                    ($) => p_.from.optional($,
                    ).map(
                        ($) => $,
                    ),
                ),
            }),
        ),
    ),
})
