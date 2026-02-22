
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/file_structure/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/file_structure/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

import * as v_external_high_level from "../../high_level/refiners/astn_parse_tree"

export const Directory: t_signatures.Directory = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p_variables(
        () => {
            
            const var_dictionary_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return _p.dictionary.from.dictionary(
                $['entries'],
            ).map(
                ($, id) => _p_change_context(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                    ($) => _p.decide.text(
                        $['option']['value'],
                        ($t): t_out.Directory.D => {
                            switch ($t) {
                                case 'file':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['file', v_external_high_level.Graph(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        )],
                                    )
                                case 'directory':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['directory', Directory(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        )],
                                    )
                                default:
                                    return abort(
                                        ['liana', {
                                            'type': ['state', ['unknown option', $['option']['value']]],
                                            'range': v_parse_tree_to_location.Value(
                                                $['value'],
                                            ),
                                        }],
                                    )
                            }
                        },
                    ),
                ),
            )
        },
    ),
)
