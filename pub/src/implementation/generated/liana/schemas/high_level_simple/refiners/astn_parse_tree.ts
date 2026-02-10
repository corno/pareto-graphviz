
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/high_level_simple/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/high_level_simple/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

import * as v_external_attributes from "../../attributes/refiners/astn_parse_tree"

export const Graph: t_signatures.Graph = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'attributes': _p_change_context(
            $.__get_entry_deprecated(
                'attributes',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "attributes"],
                    ),
                },
            ),
            ($) => v_external_attributes.Attributes(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'nodes': _p_change_context(
            $.__get_entry_deprecated(
                'nodes',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "nodes"],
                    ),
                },
            ),
            ($) => _p.dictionary.from.dictionary(
                v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null],
                    ),
                ),
            ).map(
                ($, id) => _p_change_context(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null],
                        ),
                    ),
                    ($) => ({
                        'attributes': _p_change_context(
                            $.__get_entry_deprecated(
                                'attributes',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "attributes"],
                                    ),
                                },
                            ),
                            ($) => v_external_attributes.Attributes(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                    }),
                ),
            ),
        ),
        'edges': _p_change_context(
            $.__get_entry_deprecated(
                'edges',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "edges"],
                    ),
                },
            ),
            ($) => _p.list.from.list(
                v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null],
                    ),
                ),
            ).map(
                ($) => _p_change_context(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null],
                        ),
                    ),
                    ($) => ({
                        'from': _p_change_context(
                            $.__get_entry_deprecated(
                                'from',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "from"],
                                    ),
                                },
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        ),
                        'to': _p_change_context(
                            $.__get_entry_deprecated(
                                'to',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "to"],
                                    ),
                                },
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        ),
                        'attributes': _p_change_context(
                            $.__get_entry_deprecated(
                                'attributes',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "attributes"],
                                    ),
                                },
                            ),
                            ($) => v_external_attributes.Attributes(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                    }),
                ),
            ),
        ),
    }),
)
