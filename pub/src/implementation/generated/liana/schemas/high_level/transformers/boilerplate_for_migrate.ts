
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/high_level/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/high_level/data"

import * as v_attributes from "../../attributes/transformers/boilerplate_for_migrate"

export const Graph: t_signatures.Graph = ($) => ({
    'attributes': _p_change_context(
        $['attributes'],
        ($) => v_attributes.Attributes(
            $,
        ),
    ),
    'nodes': _p_change_context(
        $['nodes'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => ({
                'attributes': _p_change_context(
                    $['attributes'],
                    ($) => v_attributes.Attributes(
                        $,
                    ),
                ),
            }),
        ),
    ),
    'edges': _p_change_context(
        $['edges'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => ({
                'from': _p_change_context(
                    $['from'],
                    ($) => $,
                ),
                'to': _p_change_context(
                    $['to'],
                    ($) => $,
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
})
