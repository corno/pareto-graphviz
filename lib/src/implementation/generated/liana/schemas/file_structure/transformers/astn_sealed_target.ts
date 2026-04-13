
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/file_structure/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_high_level from "../../high_level/transformers/astn_sealed_target"

export const Directory: t_signatures.Directory = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'file':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'file',
                            'value': v_external_high_level.Graph(
                                $,
                            ),
                        }),
                    )
                case 'directory':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'directory',
                            'value': Directory(
                                $,
                            ),
                        }),
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )],
)]
