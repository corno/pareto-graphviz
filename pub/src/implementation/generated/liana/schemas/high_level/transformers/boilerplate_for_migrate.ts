
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/high_level/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/high_level/data"

import * as v_attributes from "../../attributes/transformers/boilerplate_for_migrate"

export const Graph: t_signatures.Graph = ($) => ({
    'name': _p_change_context(
        $['name'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => $,
        ),
    ),
    'tree': _p_change_context(
        $['tree'],
        ($) => Tree(
            $,
        ),
    ),
    'type': _p_change_context(
        $['type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Graph.type_ => {
                switch ($[0]) {
                    case 'undirected':
                        return _p.ss(
                            $,
                            ($) => ['undirected', {
                                'edges': _p_change_context(
                                    $['edges'],
                                    ($) => _p.list.from.list(
                                        $,
                                    ).map(
                                        ($) => ({
                                            'yin': _p_change_context(
                                                $['yin'],
                                                ($) => End_Point_Specification(
                                                    $,
                                                ),
                                            ),
                                            'yang': _p_change_context(
                                                $['yang'],
                                                ($) => End_Point_Specification(
                                                    $,
                                                ),
                                            ),
                                            'attributes': _p_change_context(
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
                        return _p.ss(
                            $,
                            ($) => ['directed', {
                                'edges': _p_change_context(
                                    $['edges'],
                                    ($) => _p.list.from.list(
                                        $,
                                    ).map(
                                        ($) => ({
                                            'from': _p_change_context(
                                                $['from'],
                                                ($) => End_Point_Specification(
                                                    $,
                                                ),
                                            ),
                                            'to': _p_change_context(
                                                $['to'],
                                                ($) => End_Point_Specification(
                                                    $,
                                                ),
                                            ),
                                            'attributes': _p_change_context(
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
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})

export const Tree: t_signatures.Tree = ($) => ({
    'attributes': _p_change_context(
        $['attributes'],
        ($) => v_attributes.Attributes(
            $,
        ),
    ),
    'elements': _p_change_context(
        $['elements'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => _p.decide.state(
                $,
                ($): t_out.Tree.elements.D => {
                    switch ($[0]) {
                        case 'node':
                            return _p.ss(
                                $,
                                ($) => ['node', {
                                    'attributes': _p_change_context(
                                        $['attributes'],
                                        ($) => v_attributes.Attributes(
                                            $,
                                        ),
                                    ),
                                }],
                            )
                        case 'sub':
                            return _p.ss(
                                $,
                                ($) => ['sub', {
                                    'type': _p_change_context(
                                        $['type'],
                                        ($) => _p.decide.state(
                                            $,
                                            ($): t_out.Tree.elements.D.sub.type_ => {
                                                switch ($[0]) {
                                                    case 'group':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['group', null],
                                                        )
                                                    case 'cluster':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['cluster', null],
                                                        )
                                                    case 'subgraph':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['subgraph', null],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                    'tree': _p_change_context(
                                        $['tree'],
                                        ($) => Tree(
                                            $,
                                        ),
                                    ),
                                }],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        ),
    ),
})

export const End_Point_Specification: t_signatures.End_Point_Specification = ($) => ({
    'start': _p_change_context(
        $['start'],
        ($) => $,
    ),
    'tail': _p_change_context(
        $['tail'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => $,
        ),
    ),
    'port data': _p_change_context(
        $['port data'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => ({
                'port': _p_change_context(
                    $['port'],
                    ($) => $,
                ),
                'compass direction': _p_change_context(
                    $['compass direction'],
                    ($) => _p.optional.from.optional(
                        $,
                    ).map(
                        ($) => $,
                    ),
                ),
            }),
        ),
    ),
})
