
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/high_level_simple/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/high_level_simple/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_attributes from "../../attributes/refiners/astn_parse_tree"

export const Graph: t_signatures.Graph = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "attributes": null,
                    "nodes": null,
                    "edges": null,
                },
            ),
            'document resource identifier': "dummy dri",
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'document resource identifier': "dummy dri",
                },
            )
            return {
                'attributes': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'attributes',
                            'document resource identifier': "dummy dri",
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
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'nodes',
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'document resource identifier': "dummy dri",
                            },
                        ),
                        ($) => _p.dictionary.from.dictionary(
                            $['entries'],
                        ).map(
                            ($, id) => _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "attributes": null,
                                            },
                                        ),
                                        'document resource identifier': "dummy dri",
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'document resource identifier': "dummy dri",
                                            },
                                        )
                                        return {
                                            'attributes': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'attributes',
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => v_external_attributes.Attributes(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
                'edges': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'edges',
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p.list.from.list(
                        v_unmarshalled_from_parse_tree.List(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'document resource identifier': "dummy dri",
                            },
                        )['items'],
                    ).map(
                        ($) => _p_change_context(
                            $['value'],
                            ($) => _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "from": null,
                                                "to": null,
                                                "attributes": null,
                                            },
                                        ),
                                        'document resource identifier': "dummy dri",
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'document resource identifier': "dummy dri",
                                            },
                                        )
                                        return {
                                            'from': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'from',
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'to': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'to',
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'attributes': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'attributes',
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => v_external_attributes.Attributes(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
            }
        },
    ),
)
