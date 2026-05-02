
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/low_level/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/low_level/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_html from "../../html/refiners/astn_parse_tree"

export const Graph: t_signatures.Graph = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "strict": null,
                    "type": null,
                    "name": null,
                    "statements": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.optional.literal.not_set(),
                },
            )
            return {
                'strict': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'strict',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Boolean(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['true/false', null],
                            'subdocument context': _p.optional.literal.not_set(),
                        },
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
                            'subdocument context': _p.optional.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Graph.type_ => {
                                switch ($t) {
                                    case 'graph':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['graph', v_unmarshalled_from_parse_tree.Nothing(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'digraph':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['digraph', v_unmarshalled_from_parse_tree.Nothing(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
                'name': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'name',
                            'subdocument context': _p.optional.literal.not_set(),
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
                        ($) => ID(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                ),
                'statements': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'statements',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => Statements(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Statements: t_signatures.Statements = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.optional.literal.not_set(),
        },
    )['items'],
).map(
    ($) => _p_change_context(
        $['value'],
        ($) => _p_change_context(
            v_unmarshalled_from_parse_tree.State(
                $,
                ($) => abort(
                    $,
                ),
            ),
            ($) => _p.decide.text(
                $['option']['token']['value'],
                ($t): t_out.Statements.L => {
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
                                                    "node": null,
                                                    "attributes": null,
                                                },
                                            ),
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            )
                                            return {
                                                'node': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'node',
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Node_ID(
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
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Attributes(
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
                        case 'edge':
                            return _p_change_context(
                                $['value'],
                                ($) => ['edge', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "left": null,
                                                    "right": null,
                                                    "attributes": null,
                                                },
                                            ),
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            )
                                            return {
                                                'left': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'left',
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => End_Point(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                                'right': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'right',
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => _p.list.from.list(
                                                        v_unmarshalled_from_parse_tree.List(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'subdocument context': _p.optional.literal.not_set(),
                                                            },
                                                        )['items'],
                                                    ).map(
                                                        ($) => _p_change_context(
                                                            $['value'],
                                                            ($) => End_Point(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
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
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Attributes(
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
                        case 'attributes':
                            return _p_change_context(
                                $['value'],
                                ($) => ['attributes', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "type": null,
                                                    "attributes": null,
                                                },
                                            ),
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
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
                                                            'subdocument context': _p.optional.literal.not_set(),
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
                                                            $['option']['token']['value'],
                                                            ($t): t_out.Statements.L.attributes.type_ => {
                                                                switch ($t) {
                                                                    case 'graph':
                                                                        return _p_change_context(
                                                                            $['value'],
                                                                            ($) => ['graph', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        )
                                                                    case 'node':
                                                                        return _p_change_context(
                                                                            $['value'],
                                                                            ($) => ['node', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        )
                                                                    case 'edge':
                                                                        return _p_change_context(
                                                                            $['value'],
                                                                            ($) => ['edge', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        )
                                                                    default:
                                                                        return abort(
                                                                            ['liana', {
                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                'range': v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                            }],
                                                                        )
                                                                }
                                                            },
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
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Attributes(
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
                        case 'attribute assignment':
                            return _p_change_context(
                                $['value'],
                                ($) => ['attribute assignment', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "name": null,
                                                    "value": null,
                                                },
                                            ),
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
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
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => ID(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                                'value': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'value',
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => ID(
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
                        case 'subgraph':
                            return _p_change_context(
                                $['value'],
                                ($) => ['subgraph', Subgraph(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        default:
                            return abort(
                                ['liana', {
                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                    'range': v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                }],
                            )
                    }
                },
            ),
        ),
    ),
)

export const End_Point: t_signatures.End_Point = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.End_Point => {
            switch ($t) {
                case 'node':
                    return _p_change_context(
                        $['value'],
                        ($) => ['node', Node_ID(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'subgraph':
                    return _p_change_context(
                        $['value'],
                        ($) => ['subgraph', Subgraph(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Attributes: t_signatures.Attributes = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.optional.literal.not_set(),
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
                            "name": null,
                            "value": null,
                        },
                    ),
                    'subdocument context': _p.optional.literal.not_set(),
                },
            ),
            ($) => _p_variables(
                () => {
                    
                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                        $['value'],
                        {
                            'subdocument context': _p.optional.literal.not_set(),
                        },
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
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => ID(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                        'value': _p_change_context(
                            v_unmarshalled_from_parse_tree.Property(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'id': 'value',
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => ID(
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
)

export const Node_ID: t_signatures.Node_ID = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "id": null,
                    "port": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.optional.literal.not_set(),
                },
            )
            return {
                'id': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'id',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => ID(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'port': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'port',
                            'subdocument context': _p.optional.literal.not_set(),
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
                                            "compass point": null,
                                        },
                                    ),
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
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
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => ID(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'compass point': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'compass point',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                                                ($) => ID(
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

export const ID: t_signatures.ID = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.ID => {
            switch ($t) {
                case 'id':
                    return _p_change_context(
                        $['value'],
                        ($) => ['id', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'string':
                    return _p_change_context(
                        $['value'],
                        ($) => ['string', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'html':
                    return _p_change_context(
                        $['value'],
                        ($) => ['html', v_external_html.Phrasing_Element(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'number':
                    return _p_change_context(
                        $['value'],
                        ($) => ['number', v_unmarshalled_from_parse_tree.Number(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'type': ['decimal', null],
                                'subdocument context': _p.optional.literal.not_set(),
                            },
                        )],
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Subgraph: t_signatures.Subgraph = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "subgraph": null,
                    "statements": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.optional.literal.not_set(),
                },
            )
            return {
                'subgraph': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'subgraph',
                            'subdocument context': _p.optional.literal.not_set(),
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
                        ($) => _p.optional.from.optional(
                            v_unmarshalled_from_parse_tree.Optional(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )['optional'],
                        ).map(
                            ($) => ID(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                    ),
                ),
                'statements': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'statements',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => Statements(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)
