
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/high_level_simple/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_attributes from "../../attributes/transformers/astn_sealed_target"

export const Graph: t_signatures.Graph = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "attributes": _p_change_context(
            $['attributes'],
            ($) => v_external_attributes.Attributes(
                $,
            ),
        ),
        "nodes": _p_change_context(
            $['nodes'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
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
        "edges": _p_change_context(
            $['edges'],
            ($) => ['list', _p.list.from.list(
                $,
            ).map(
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "from": _p_change_context(
                            $['from'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "to": _p_change_context(
                            $['to'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
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
)]]
