
import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/dist/implementation/refiner/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/attributes/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/attributes/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_html from "../../html/refiners/astn_parse_tree"

export const Attributes: t_signatures.Attributes = ($, abort) => p_.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': p_.literal.not_set(),
        },
    )['items'],
).map(
    ($) => p_change_context(
        $['value'],
        ($) => p_change_context(
            v_unmarshalled_from_parse_tree.State(
                $,
                ($) => abort(
                    $,
                ),
            ),
            ($) => p_.from.text(
                $['option']['token']['value'],
            ).state($, 
                ($, $t): t_out.Attributes.L => {
                    switch ($t) {
                        case 'freeform':
                            return p_change_context(
                                $['value'],
                                ($) => ['freeform', p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': p_.literal.dictionary(
                                                {
                                                    "key": null,
                                                    "value": null,
                                                },
                                            ),
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    ),
                                    ($) => p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
                                                {
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            )
                                            return {
                                                'key': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'key',
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                                'value': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'value',
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Text(
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
                        case 'color':
                            return p_change_context(
                                $['value'],
                                ($) => ['color', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'fillcolor':
                            return p_change_context(
                                $['value'],
                                ($) => ['fillcolor', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'penwidth':
                            return p_change_context(
                                $['value'],
                                ($) => ['penwidth', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'label':
                            return p_change_context(
                                $['value'],
                                ($) => ['label', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'fontcolor':
                            return p_change_context(
                                $['value'],
                                ($) => ['fontcolor', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'fontname':
                            return p_change_context(
                                $['value'],
                                ($) => ['fontname', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'fontsize':
                            return p_change_context(
                                $['value'],
                                ($) => ['fontsize', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'URL':
                            return p_change_context(
                                $['value'],
                                ($) => ['URL', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'href':
                            return p_change_context(
                                $['value'],
                                ($) => ['href', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'target':
                            return p_change_context(
                                $['value'],
                                ($) => ['target', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'tooltip':
                            return p_change_context(
                                $['value'],
                                ($) => ['tooltip', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'id':
                            return p_change_context(
                                $['value'],
                                ($) => ['id', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'class':
                            return p_change_context(
                                $['value'],
                                ($) => ['class', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'comment':
                            return p_change_context(
                                $['value'],
                                ($) => ['comment', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'style':
                            return p_change_context(
                                $['value'],
                                ($) => ['style', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_state(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.style => {
                                            switch ($t) {
                                                case 'filled':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['filled', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'rounded':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['rounded', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'bold':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['bold', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'solid':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['solid', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'dashed':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['dashed', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'dotted':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['dotted', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'striped':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['striped', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'wedged':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['wedged', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'diagonals':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['diagonals', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'invis':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['invis', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'tapered':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['tapered', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'layout':
                            return p_change_context(
                                $['value'],
                                ($) => ['layout', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.layout => {
                                            switch ($t) {
                                                case 'dot':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['dot', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'neato':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['neato', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'fdp':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['fdp', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'sfdp':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['sfdp', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'twopi':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['twopi', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'circo':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['circo', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'rankdir':
                            return p_change_context(
                                $['value'],
                                ($) => ['rankdir', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.rankdir => {
                                            switch ($t) {
                                                case 'TB':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['TB', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'BT':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['BT', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'LR':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['LR', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'RL':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['RL', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'bgcolor':
                            return p_change_context(
                                $['value'],
                                ($) => ['bgcolor', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labelloc':
                            return p_change_context(
                                $['value'],
                                ($) => ['labelloc', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.labelloc => {
                                            switch ($t) {
                                                case 't':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['t', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'b':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['b', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'labeljust':
                            return p_change_context(
                                $['value'],
                                ($) => ['labeljust', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.labeljust => {
                                            switch ($t) {
                                                case 'l':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['l', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'c':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['c', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'r':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['r', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'size':
                            return p_change_context(
                                $['value'],
                                ($) => ['size', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'ratio':
                            return p_change_context(
                                $['value'],
                                ($) => ['ratio', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'pad':
                            return p_change_context(
                                $['value'],
                                ($) => ['pad', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'nodesep':
                            return p_change_context(
                                $['value'],
                                ($) => ['nodesep', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'ranksep':
                            return p_change_context(
                                $['value'],
                                ($) => ['ranksep', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'dpi':
                            return p_change_context(
                                $['value'],
                                ($) => ['dpi', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'overlap':
                            return p_change_context(
                                $['value'],
                                ($) => ['overlap', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.overlap => {
                                            switch ($t) {
                                                case 'true':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['true', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'false':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'scale':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['scale', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'scalexy':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['scalexy', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'orthoxy':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['orthoxy', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'orthoyx':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['orthoyx', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'compress':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['compress', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'vpsc':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['vpsc', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'ipsep':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['ipsep', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'prism':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['prism', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'pack':
                            return p_change_context(
                                $['value'],
                                ($) => ['pack', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.pack => {
                                            switch ($t) {
                                                case 'true':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['true', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'false':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['custom', v_unmarshalled_from_parse_tree.Number(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'type': ['decimal', null],
                                                                'subdocument context': p_.literal.not_set(),
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'packmode':
                            return p_change_context(
                                $['value'],
                                ($) => ['packmode', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.packmode => {
                                            switch ($t) {
                                                case 'node':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['node', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'clust':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['clust', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'graph':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['graph', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'concentrate':
                            return p_change_context(
                                $['value'],
                                ($) => ['concentrate', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'compound':
                            return p_change_context(
                                $['value'],
                                ($) => ['compound', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'center':
                            return p_change_context(
                                $['value'],
                                ($) => ['center', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'normalize':
                            return p_change_context(
                                $['value'],
                                ($) => ['normalize', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'landscape':
                            return p_change_context(
                                $['value'],
                                ($) => ['landscape', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'outputorder':
                            return p_change_context(
                                $['value'],
                                ($) => ['outputorder', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.outputorder => {
                                            switch ($t) {
                                                case 'breadthfirst':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['breadthfirst', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'nodesfirst':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['nodesfirst', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'edgesfirst':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['edgesfirst', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'charset':
                            return p_change_context(
                                $['value'],
                                ($) => ['charset', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'clusterrank':
                            return p_change_context(
                                $['value'],
                                ($) => ['clusterrank', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.clusterrank => {
                                            switch ($t) {
                                                case 'local':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['local', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'global':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['global', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'none':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'shape':
                            return p_change_context(
                                $['value'],
                                ($) => ['shape', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.shape => {
                                            switch ($t) {
                                                case 'box':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['box', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'circle':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['circle', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'ellipse':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['ellipse', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'oval':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['oval', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'point':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['point', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'egg':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['egg', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'triangle':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['triangle', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'plaintext':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['plaintext', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'plain':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['plain', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'diamond':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['diamond', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'trapezium':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['trapezium', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'parallelogram':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['parallelogram', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'house':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['house', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'pentagon':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['pentagon', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'hexagon':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['hexagon', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'septagon':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['septagon', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'octagon':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['octagon', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'polygon':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['polygon', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'record':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['record', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'Mrecord':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['Mrecord', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'width':
                            return p_change_context(
                                $['value'],
                                ($) => ['width', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'height':
                            return p_change_context(
                                $['value'],
                                ($) => ['height', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'fixedsize':
                            return p_change_context(
                                $['value'],
                                ($) => ['fixedsize', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'regular':
                            return p_change_context(
                                $['value'],
                                ($) => ['regular', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'sides':
                            return p_change_context(
                                $['value'],
                                ($) => ['sides', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'skew':
                            return p_change_context(
                                $['value'],
                                ($) => ['skew', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'distortion':
                            return p_change_context(
                                $['value'],
                                ($) => ['distortion', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'orientation':
                            return p_change_context(
                                $['value'],
                                ($) => ['orientation', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'peripheries':
                            return p_change_context(
                                $['value'],
                                ($) => ['peripheries', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'pin':
                            return p_change_context(
                                $['value'],
                                ($) => ['pin', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'image':
                            return p_change_context(
                                $['value'],
                                ($) => ['image', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'imagepos':
                            return p_change_context(
                                $['value'],
                                ($) => ['imagepos', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.imagepos => {
                                            switch ($t) {
                                                case 'tl':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['tl', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'tc':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['tc', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'tr':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['tr', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'ml':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['ml', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'mc':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['mc', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'mr':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['mr', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'bl':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['bl', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'bc':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['bc', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'br':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['br', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'imagescale':
                            return p_change_context(
                                $['value'],
                                ($) => ['imagescale', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.imagescale => {
                                            switch ($t) {
                                                case 'false':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'true':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['true', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'width':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['width', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'height':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['height', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'both':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['both', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'group':
                            return p_change_context(
                                $['value'],
                                ($) => ['group', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'sortv':
                            return p_change_context(
                                $['value'],
                                ($) => ['sortv', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'area':
                            return p_change_context(
                                $['value'],
                                ($) => ['area', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'z':
                            return p_change_context(
                                $['value'],
                                ($) => ['z', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'margin':
                            return p_change_context(
                                $['value'],
                                ($) => ['margin', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'arrowhead':
                            return p_change_context(
                                $['value'],
                                ($) => ['arrowhead', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.arrowhead => {
                                            switch ($t) {
                                                case 'normal':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['normal', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'box':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['box', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'crow':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['crow', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'diamond':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['diamond', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'dot':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['dot', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'inv':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['inv', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'none':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'tee':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['tee', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'vee':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['vee', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'open':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['open', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'halfopen':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['halfopen', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'empty':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['empty', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'invempty':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['invempty', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'odiamond':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['odiamond', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'odot':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['odot', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'obox':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['obox', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'arrowtail':
                            return p_change_context(
                                $['value'],
                                ($) => ['arrowtail', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.arrowtail => {
                                            switch ($t) {
                                                case 'normal':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['normal', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'box':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['box', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'crow':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['crow', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'diamond':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['diamond', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'dot':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['dot', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'inv':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['inv', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'none':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'tee':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['tee', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'vee':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['vee', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'open':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['open', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'halfopen':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['halfopen', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'empty':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['empty', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'invempty':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['invempty', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'odiamond':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['odiamond', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'odot':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['odot', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'obox':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['obox', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'arrowsize':
                            return p_change_context(
                                $['value'],
                                ($) => ['arrowsize', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'dir':
                            return p_change_context(
                                $['value'],
                                ($) => ['dir', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.dir => {
                                            switch ($t) {
                                                case 'forward':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['forward', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'back':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['back', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'both':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['both', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'none':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'headlabel':
                            return p_change_context(
                                $['value'],
                                ($) => ['headlabel', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'taillabel':
                            return p_change_context(
                                $['value'],
                                ($) => ['taillabel', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labelfontcolor':
                            return p_change_context(
                                $['value'],
                                ($) => ['labelfontcolor', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labelfontname':
                            return p_change_context(
                                $['value'],
                                ($) => ['labelfontname', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labelfontsize':
                            return p_change_context(
                                $['value'],
                                ($) => ['labelfontsize', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'labelangle':
                            return p_change_context(
                                $['value'],
                                ($) => ['labelangle', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'labeldistance':
                            return p_change_context(
                                $['value'],
                                ($) => ['labeldistance', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'labelfloat':
                            return p_change_context(
                                $['value'],
                                ($) => ['labelfloat', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'weight':
                            return p_change_context(
                                $['value'],
                                ($) => ['weight', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'len':
                            return p_change_context(
                                $['value'],
                                ($) => ['len', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'minlen':
                            return p_change_context(
                                $['value'],
                                ($) => ['minlen', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'constraint':
                            return p_change_context(
                                $['value'],
                                ($) => ['constraint', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'decorate':
                            return p_change_context(
                                $['value'],
                                ($) => ['decorate', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'headport':
                            return p_change_context(
                                $['value'],
                                ($) => ['headport', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.headport => {
                                            switch ($t) {
                                                case 'center':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['center', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'n':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['n', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'ne':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['ne', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'e':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['e', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'se':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['se', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 's':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['s', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'sw':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['sw', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'w':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['w', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'nw':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['nw', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'tailport':
                            return p_change_context(
                                $['value'],
                                ($) => ['tailport', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.tailport => {
                                            switch ($t) {
                                                case 'center':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['center', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'n':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['n', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'ne':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['ne', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'e':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['e', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'se':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['se', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 's':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['s', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'sw':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['sw', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'w':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['w', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'nw':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['nw', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'headclip':
                            return p_change_context(
                                $['value'],
                                ($) => ['headclip', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'tailclip':
                            return p_change_context(
                                $['value'],
                                ($) => ['tailclip', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'lhead':
                            return p_change_context(
                                $['value'],
                                ($) => ['lhead', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'ltail':
                            return p_change_context(
                                $['value'],
                                ($) => ['ltail', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'samehead':
                            return p_change_context(
                                $['value'],
                                ($) => ['samehead', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'sametail':
                            return p_change_context(
                                $['value'],
                                ($) => ['sametail', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'edgeURL':
                            return p_change_context(
                                $['value'],
                                ($) => ['edgeURL', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'headURL':
                            return p_change_context(
                                $['value'],
                                ($) => ['headURL', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'tailURL':
                            return p_change_context(
                                $['value'],
                                ($) => ['tailURL', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labelURL':
                            return p_change_context(
                                $['value'],
                                ($) => ['labelURL', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'edgehref':
                            return p_change_context(
                                $['value'],
                                ($) => ['edgehref', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'headhref':
                            return p_change_context(
                                $['value'],
                                ($) => ['headhref', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'tailhref':
                            return p_change_context(
                                $['value'],
                                ($) => ['tailhref', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labelhref':
                            return p_change_context(
                                $['value'],
                                ($) => ['labelhref', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'edgetarget':
                            return p_change_context(
                                $['value'],
                                ($) => ['edgetarget', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'headtarget':
                            return p_change_context(
                                $['value'],
                                ($) => ['headtarget', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'tailtarget':
                            return p_change_context(
                                $['value'],
                                ($) => ['tailtarget', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'edgetooltip':
                            return p_change_context(
                                $['value'],
                                ($) => ['edgetooltip', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'headtooltip':
                            return p_change_context(
                                $['value'],
                                ($) => ['headtooltip', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'tailtooltip':
                            return p_change_context(
                                $['value'],
                                ($) => ['tailtooltip', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labeltooltip':
                            return p_change_context(
                                $['value'],
                                ($) => ['labeltooltip', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'radius':
                            return p_change_context(
                                $['value'],
                                ($) => ['radius', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['scientific notation', {
                                            'precision': 10,
                                        }],
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )],
                            )
                        case 'splines':
                            return p_change_context(
                                $['value'],
                                ($) => ['splines', p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => p_decide_text(
                                        $['option']['token']['value'],
                                        ($t): t_out.Attributes.L.splines => {
                                            switch ($t) {
                                                case 'true':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['true', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'false':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'none':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'line':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['line', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'spline':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['spline', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'polyline':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['polyline', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'ortho':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['ortho', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'curved':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['curved', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'compound':
                                                    return p_change_context(
                                                        $['value'],
                                                        ($) => ['compound', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'pos':
                            return p_change_context(
                                $['value'],
                                ($) => ['pos', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'xlabel':
                            return p_change_context(
                                $['value'],
                                ($) => ['xlabel', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'layer':
                            return p_change_context(
                                $['value'],
                                ($) => ['layer', v_unmarshalled_from_parse_tree.Text(
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
                                            'subdocument context': p_.literal.not_set(),
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
