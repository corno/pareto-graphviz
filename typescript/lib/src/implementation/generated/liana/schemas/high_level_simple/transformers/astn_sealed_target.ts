
import * as p_ from 'pareto-core/dist/implementation/transformer'

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/high_level_simple/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_attributes from "../../attributes/transformers/astn_sealed_target"

export const Graph: t_signatures.Graph = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "attributes": p_change_context(
            $['attributes'],
            ($) => v_external_attributes.Attributes(
                $,
            ),
        ),
        "nodes": p_change_context(
            $['nodes'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
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
        "edges": p_change_context(
            $['edges'],
            ($) => ['list', p_.from.list($,
            ).map(
                ($) => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "from": p_change_context(
                            $['from'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "to": p_change_context(
                            $['to'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
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
)]]
