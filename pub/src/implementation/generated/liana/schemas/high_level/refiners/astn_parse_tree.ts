
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/high_level/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/high_level/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

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
                    "name": null,
                    "tree": null,
                    "type": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'name': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'name',
                        },
                    ),
                    ($) => _p.optional.from.optional(
                        v_unmarshalled_from_parse_tree.Optional(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )['optional'],
                    ).map(
                        ($) => v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                ),
                'tree': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'tree',
                        },
                    ),
                    ($) => Tree(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'type': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['value'],
                            ($t): t_out.Graph.type_ => {
                                switch ($t) {
                                    case 'undirected':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['undirected', _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.dictionary.literal(
                                                            {
                                                                "edges": null,
                                                            },
                                                        ),
                                                    },
                                                ),
                                                ($) => _p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        )
                                                        return {
                                                            'edges': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'edges',
                                                                    },
                                                                ),
                                                                ($) => _p.list.from.list(
                                                                    v_unmarshalled_from_parse_tree.List(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
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
                                                                                            "yin": null,
                                                                                            "yang": null,
                                                                                            "attributes": null,
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    )
                                                                                    return {
                                                                                        'yin': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'yin',
                                                                                                },
                                                                                            ),
                                                                                            ($) => End_Point_Specification(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'yang': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'yang',
                                                                                                },
                                                                                            ),
                                                                                            ($) => End_Point_Specification(
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
                                            )],
                                        )
                                    case 'directed':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['directed', _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.dictionary.literal(
                                                            {
                                                                "edges": null,
                                                            },
                                                        ),
                                                    },
                                                ),
                                                ($) => _p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        )
                                                        return {
                                                            'edges': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'edges',
                                                                    },
                                                                ),
                                                                ($) => _p.list.from.list(
                                                                    v_unmarshalled_from_parse_tree.List(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
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
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
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
                                                                                                },
                                                                                            ),
                                                                                            ($) => End_Point_Specification(
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
                                                                                                },
                                                                                            ),
                                                                                            ($) => End_Point_Specification(
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
                ),
            }
        },
    ),
)

export const Tree: t_signatures.Tree = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "attributes": null,
                    "elements": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
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
                        },
                    ),
                    ($) => v_external_attributes.Attributes(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'elements': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'elements',
                        },
                    ),
                    ($) => _p_change_context(
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
                                            ($t): t_out.Tree.elements.D => {
                                                switch ($t) {
                                                    case 'node':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ['node', _p_change_context(
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
                                                                    },
                                                                ),
                                                                ($) => _p_variables(
                                                                    () => {
                                                                        
                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                            $['value'],
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
                                                            )],
                                                        )
                                                    case 'sub':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ['sub', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'expected properties': _p.dictionary.literal(
                                                                            {
                                                                                "type": null,
                                                                                "tree": null,
                                                                            },
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => _p_variables(
                                                                    () => {
                                                                        
                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                            $['value'],
                                                                        )
                                                                        return {
                                                                            'type': _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'id': 'type',
                                                                                    },
                                                                                ),
                                                                                ($) => _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p.decide.text(
                                                                                        $['option']['value'],
                                                                                        ($t): t_out.Tree.elements.D.sub.type_ => {
                                                                                            switch ($t) {
                                                                                                case 'group':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['group', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    )
                                                                                                case 'cluster':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['cluster', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    )
                                                                                                case 'subgraph':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['subgraph', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                            ),
                                                                            'tree': _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'id': 'tree',
                                                                                    },
                                                                                ),
                                                                                ($) => Tree(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }
                                                                    },
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
                    ),
                ),
            }
        },
    ),
)

export const End_Point_Specification: t_signatures.End_Point_Specification = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "start": null,
                    "tail": null,
                    "port data": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'start': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'start',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'tail': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'tail',
                        },
                    ),
                    ($) => _p.list.from.list(
                        v_unmarshalled_from_parse_tree.List(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )['items'],
                    ).map(
                        ($) => _p_change_context(
                            $['value'],
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                    ),
                ),
                'port data': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'port data',
                        },
                    ),
                    ($) => _p.optional.from.optional(
                        v_unmarshalled_from_parse_tree.Optional(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )['optional'],
                    ).map(
                        ($) => _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "port": null,
                                            "compass direction": null,
                                        },
                                    ),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                    )
                                    return {
                                        'port': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'port',
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'compass direction': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'compass direction',
                                                },
                                            ),
                                            ($) => _p.optional.from.optional(
                                                v_unmarshalled_from_parse_tree.Optional(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )['optional'],
                                            ).map(
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        ),
                    ),
                ),
            }
        },
    ),
)
