
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/high_level/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/high_level/data"

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
        'name': _p_change_context(
            $.__get_entry_deprecated(
                'name',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "name"],
                    ),
                },
            ),
            ($) => _p.optional.from.optional(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null],
                    ),
                ),
            ).map(
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            ),
        ),
        'tree': _p_change_context(
            $.__get_entry_deprecated(
                'tree',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "tree"],
                    ),
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
            $.__get_entry_deprecated(
                'type',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "type"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
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
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
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
                                                            'yin': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'yin',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "yin"],
                                                                        ),
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
                                                                $.__get_entry_deprecated(
                                                                    'yang',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "yang"],
                                                                        ),
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
                                    )],
                                )
                            case 'directed':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['directed', _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
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
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
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
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
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
                                    )],
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
    }),
)

export const Tree: t_signatures.Tree = ($, abort) => _p_change_context(
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
        'elements': _p_change_context(
            $.__get_entry_deprecated(
                'elements',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "elements"],
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
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            ['expected a state', null],
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
                                        )],
                                    )
                                case 'sub':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['sub', _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'type': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'type',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "type"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.State(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a state', null],
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
                                                                                    ['expected a nothing', null],
                                                                                ),
                                                                            )],
                                                                        )
                                                                    case 'cluster':
                                                                        return _p_change_context(
                                                                            $['value'],
                                                                            ($) => ['cluster', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null],
                                                                                ),
                                                                            )],
                                                                        )
                                                                    case 'subgraph':
                                                                        return _p_change_context(
                                                                            $['value'],
                                                                            ($) => ['subgraph', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null],
                                                                                ),
                                                                            )],
                                                                        )
                                                                    default:
                                                                        return abort(
                                                                            ['unknown option', $['option']['value']],
                                                                        )
                                                                }
                                                            },
                                                        ),
                                                    ),
                                                ),
                                                'tree': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'tree',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "tree"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => Tree(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            }),
                                        )],
                                    )
                                default:
                                    return abort(
                                        ['unknown option', $['option']['value']],
                                    )
                            }
                        },
                    ),
                ),
            ),
        ),
    }),
)

export const End_Point_Specification: t_signatures.End_Point_Specification = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'start': _p_change_context(
            $.__get_entry_deprecated(
                'start',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "start"],
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
        'tail': _p_change_context(
            $.__get_entry_deprecated(
                'tail',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "tail"],
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
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            ),
        ),
        'port data': _p_change_context(
            $.__get_entry_deprecated(
                'port data',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "port data"],
                    ),
                },
            ),
            ($) => _p.optional.from.optional(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null],
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
                        'port': _p_change_context(
                            $.__get_entry_deprecated(
                                'port',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "port"],
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
                        'compass direction': _p_change_context(
                            $.__get_entry_deprecated(
                                'compass direction',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "compass direction"],
                                    ),
                                },
                            ),
                            ($) => _p.optional.from.optional(
                                v_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    ($) => abort(
                                        ['expected an optional', null],
                                    ),
                                ),
                            ).map(
                                ($) => v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                            ),
                        ),
                    }),
                ),
            ),
        ),
    }),
)
