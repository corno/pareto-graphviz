
import * as p_ from 'pareto-core/implementation/transformer'

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/high_level_simple/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/high_level_simple/data.js"

import * as v_attributes from "../../attributes/transformers/boilerplate_for_migrate.js"

export const Graph: t_signatures.Graph = ($) => ({
    'attributes': p_change_context(
        $['attributes'],
        ($) => v_attributes.Attributes(
            $,
        ),
    ),
    'nodes': p_change_context(
        $['nodes'],
        ($) => p_.from.dictionary($,
        ).map(
            ($, id) => ({
                'attributes': p_change_context(
                    $['attributes'],
                    ($) => v_attributes.Attributes(
                        $,
                    ),
                ),
            }),
        ),
    ),
    'edges': p_change_context(
        $['edges'],
        ($) => p_.from.list($,
        ).map(
            ($) => ({
                'from': p_change_context(
                    $['from'],
                    ($) => $,
                ),
                'to': p_change_context(
                    $['to'],
                    ($) => $,
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
})
