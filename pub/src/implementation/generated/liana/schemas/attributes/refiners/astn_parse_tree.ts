
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/attributes/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/attributes/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

import * as v_external_html from "../../html/refiners/astn_parse_tree"

export const Attributes: t_signatures.Attributes = ($, abort) => _p.list.from.list(
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
            v_unmarshalled_from_parse_tree.State(
                $,
                ($) => abort(
                    $,
                ),
            ),
            ($) => _p.decide.text(
                $['option']['value'],
                ($t): t_out.Attributes.L => {
                    switch ($t) {
                        case 'freeform':
                            return _p_change_context(
                                $['value'],
                                ($) => ['freeform', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "key": null,
                                                    "value": null,
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
                                                'key': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'key',
                                                        },
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Text(
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
                            return _p_change_context(
                                $['value'],
                                ($) => ['color', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'fillcolor':
                            return _p_change_context(
                                $['value'],
                                ($) => ['fillcolor', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'penwidth':
                            return _p_change_context(
                                $['value'],
                                ($) => ['penwidth', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'label':
                            return _p_change_context(
                                $['value'],
                                ($) => ['label', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'fontcolor':
                            return _p_change_context(
                                $['value'],
                                ($) => ['fontcolor', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'fontname':
                            return _p_change_context(
                                $['value'],
                                ($) => ['fontname', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'fontsize':
                            return _p_change_context(
                                $['value'],
                                ($) => ['fontsize', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'URL':
                            return _p_change_context(
                                $['value'],
                                ($) => ['URL', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'href':
                            return _p_change_context(
                                $['value'],
                                ($) => ['href', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'target':
                            return _p_change_context(
                                $['value'],
                                ($) => ['target', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'tooltip':
                            return _p_change_context(
                                $['value'],
                                ($) => ['tooltip', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
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
                        case 'class':
                            return _p_change_context(
                                $['value'],
                                ($) => ['class', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'comment':
                            return _p_change_context(
                                $['value'],
                                ($) => ['comment', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'style':
                            return _p_change_context(
                                $['value'],
                                ($) => ['style', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.style => {
                                            switch ($t) {
                                                case 'filled':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['filled', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'rounded':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['rounded', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'bold':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['bold', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'solid':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['solid', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'dashed':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['dashed', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'dotted':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['dotted', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'striped':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['striped', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'wedged':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['wedged', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'diagonals':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['diagonals', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'invis':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['invis', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'tapered':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['tapered', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'layout':
                            return _p_change_context(
                                $['value'],
                                ($) => ['layout', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.layout => {
                                            switch ($t) {
                                                case 'dot':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['dot', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'neato':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['neato', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'fdp':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['fdp', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'sfdp':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['sfdp', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'twopi':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['twopi', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'circo':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['circo', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'rankdir':
                            return _p_change_context(
                                $['value'],
                                ($) => ['rankdir', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.rankdir => {
                                            switch ($t) {
                                                case 'TB':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['TB', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'BT':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['BT', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'LR':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['LR', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'RL':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'bgcolor':
                            return _p_change_context(
                                $['value'],
                                ($) => ['bgcolor', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labelloc':
                            return _p_change_context(
                                $['value'],
                                ($) => ['labelloc', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.labelloc => {
                                            switch ($t) {
                                                case 't':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['t', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'b':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'labeljust':
                            return _p_change_context(
                                $['value'],
                                ($) => ['labeljust', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.labeljust => {
                                            switch ($t) {
                                                case 'l':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['l', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'c':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['c', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'r':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'size':
                            return _p_change_context(
                                $['value'],
                                ($) => ['size', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'ratio':
                            return _p_change_context(
                                $['value'],
                                ($) => ['ratio', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'pad':
                            return _p_change_context(
                                $['value'],
                                ($) => ['pad', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'nodesep':
                            return _p_change_context(
                                $['value'],
                                ($) => ['nodesep', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'ranksep':
                            return _p_change_context(
                                $['value'],
                                ($) => ['ranksep', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'dpi':
                            return _p_change_context(
                                $['value'],
                                ($) => ['dpi', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'overlap':
                            return _p_change_context(
                                $['value'],
                                ($) => ['overlap', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.overlap => {
                                            switch ($t) {
                                                case 'true':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['true', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'false':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'scale':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['scale', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'scalexy':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['scalexy', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'orthoxy':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['orthoxy', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'orthoyx':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['orthoyx', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'compress':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['compress', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'vpsc':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['vpsc', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'ipsep':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['ipsep', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'prism':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'pack':
                            return _p_change_context(
                                $['value'],
                                ($) => ['pack', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.pack => {
                                            switch ($t) {
                                                case 'true':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['true', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'false':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['custom', v_unmarshalled_from_parse_tree.Number(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'type': ['decimal', null],
                                                            },
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
                                )],
                            )
                        case 'packmode':
                            return _p_change_context(
                                $['value'],
                                ($) => ['packmode', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.packmode => {
                                            switch ($t) {
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
                                                case 'clust':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['clust', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
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
                                )],
                            )
                        case 'concentrate':
                            return _p_change_context(
                                $['value'],
                                ($) => ['concentrate', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'compound':
                            return _p_change_context(
                                $['value'],
                                ($) => ['compound', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'center':
                            return _p_change_context(
                                $['value'],
                                ($) => ['center', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'normalize':
                            return _p_change_context(
                                $['value'],
                                ($) => ['normalize', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'landscape':
                            return _p_change_context(
                                $['value'],
                                ($) => ['landscape', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'outputorder':
                            return _p_change_context(
                                $['value'],
                                ($) => ['outputorder', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.outputorder => {
                                            switch ($t) {
                                                case 'breadthfirst':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['breadthfirst', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'nodesfirst':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['nodesfirst', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'edgesfirst':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'charset':
                            return _p_change_context(
                                $['value'],
                                ($) => ['charset', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'clusterrank':
                            return _p_change_context(
                                $['value'],
                                ($) => ['clusterrank', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.clusterrank => {
                                            switch ($t) {
                                                case 'local':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['local', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'global':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['global', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'none':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'shape':
                            return _p_change_context(
                                $['value'],
                                ($) => ['shape', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.shape => {
                                            switch ($t) {
                                                case 'box':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['box', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'circle':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['circle', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'ellipse':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['ellipse', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'oval':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['oval', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'point':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['point', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'egg':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['egg', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'triangle':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['triangle', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'plaintext':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['plaintext', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'plain':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['plain', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'diamond':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['diamond', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'trapezium':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['trapezium', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'parallelogram':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['parallelogram', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'house':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['house', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'pentagon':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['pentagon', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'hexagon':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['hexagon', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'septagon':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['septagon', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'octagon':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['octagon', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'polygon':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['polygon', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'record':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['record', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'Mrecord':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['Mrecord', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'width':
                            return _p_change_context(
                                $['value'],
                                ($) => ['width', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'height':
                            return _p_change_context(
                                $['value'],
                                ($) => ['height', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'fixedsize':
                            return _p_change_context(
                                $['value'],
                                ($) => ['fixedsize', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'regular':
                            return _p_change_context(
                                $['value'],
                                ($) => ['regular', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'sides':
                            return _p_change_context(
                                $['value'],
                                ($) => ['sides', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'skew':
                            return _p_change_context(
                                $['value'],
                                ($) => ['skew', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'distortion':
                            return _p_change_context(
                                $['value'],
                                ($) => ['distortion', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'orientation':
                            return _p_change_context(
                                $['value'],
                                ($) => ['orientation', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'peripheries':
                            return _p_change_context(
                                $['value'],
                                ($) => ['peripheries', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'pin':
                            return _p_change_context(
                                $['value'],
                                ($) => ['pin', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'image':
                            return _p_change_context(
                                $['value'],
                                ($) => ['image', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'imagepos':
                            return _p_change_context(
                                $['value'],
                                ($) => ['imagepos', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.imagepos => {
                                            switch ($t) {
                                                case 'tl':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['tl', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'tc':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['tc', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'tr':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['tr', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'ml':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['ml', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'mc':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['mc', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'mr':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['mr', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'bl':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['bl', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'bc':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['bc', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'br':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'imagescale':
                            return _p_change_context(
                                $['value'],
                                ($) => ['imagescale', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.imagescale => {
                                            switch ($t) {
                                                case 'false':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'true':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['true', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'width':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['width', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'height':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['height', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'both':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'group':
                            return _p_change_context(
                                $['value'],
                                ($) => ['group', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'sortv':
                            return _p_change_context(
                                $['value'],
                                ($) => ['sortv', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'area':
                            return _p_change_context(
                                $['value'],
                                ($) => ['area', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'z':
                            return _p_change_context(
                                $['value'],
                                ($) => ['z', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'margin':
                            return _p_change_context(
                                $['value'],
                                ($) => ['margin', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'arrowhead':
                            return _p_change_context(
                                $['value'],
                                ($) => ['arrowhead', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.arrowhead => {
                                            switch ($t) {
                                                case 'normal':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['normal', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'box':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['box', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'crow':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['crow', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'diamond':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['diamond', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'dot':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['dot', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'inv':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['inv', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'none':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'tee':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['tee', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'vee':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['vee', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'open':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['open', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'halfopen':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['halfopen', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'empty':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['empty', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'invempty':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['invempty', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'odiamond':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['odiamond', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'odot':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['odot', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'obox':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['obox', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'arrowtail':
                            return _p_change_context(
                                $['value'],
                                ($) => ['arrowtail', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.arrowtail => {
                                            switch ($t) {
                                                case 'normal':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['normal', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'box':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['box', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'crow':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['crow', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'diamond':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['diamond', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'dot':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['dot', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'inv':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['inv', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'none':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'tee':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['tee', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'vee':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['vee', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'open':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['open', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'halfopen':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['halfopen', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'empty':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['empty', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'invempty':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['invempty', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'odiamond':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['odiamond', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'odot':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['odot', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'obox':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['obox', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'arrowsize':
                            return _p_change_context(
                                $['value'],
                                ($) => ['arrowsize', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'dir':
                            return _p_change_context(
                                $['value'],
                                ($) => ['dir', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.dir => {
                                            switch ($t) {
                                                case 'forward':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['forward', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'back':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['back', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'both':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['both', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'none':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'headlabel':
                            return _p_change_context(
                                $['value'],
                                ($) => ['headlabel', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'taillabel':
                            return _p_change_context(
                                $['value'],
                                ($) => ['taillabel', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labelfontcolor':
                            return _p_change_context(
                                $['value'],
                                ($) => ['labelfontcolor', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labelfontname':
                            return _p_change_context(
                                $['value'],
                                ($) => ['labelfontname', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labelfontsize':
                            return _p_change_context(
                                $['value'],
                                ($) => ['labelfontsize', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'labelangle':
                            return _p_change_context(
                                $['value'],
                                ($) => ['labelangle', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'labeldistance':
                            return _p_change_context(
                                $['value'],
                                ($) => ['labeldistance', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'labelfloat':
                            return _p_change_context(
                                $['value'],
                                ($) => ['labelfloat', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'weight':
                            return _p_change_context(
                                $['value'],
                                ($) => ['weight', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'len':
                            return _p_change_context(
                                $['value'],
                                ($) => ['len', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'minlen':
                            return _p_change_context(
                                $['value'],
                                ($) => ['minlen', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'constraint':
                            return _p_change_context(
                                $['value'],
                                ($) => ['constraint', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'decorate':
                            return _p_change_context(
                                $['value'],
                                ($) => ['decorate', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'headport':
                            return _p_change_context(
                                $['value'],
                                ($) => ['headport', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.headport => {
                                            switch ($t) {
                                                case 'center':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['center', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'n':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['n', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'ne':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['ne', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'e':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['e', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'se':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['se', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 's':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['s', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'sw':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['sw', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'w':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['w', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'nw':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['nw', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'tailport':
                            return _p_change_context(
                                $['value'],
                                ($) => ['tailport', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.tailport => {
                                            switch ($t) {
                                                case 'center':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['center', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'n':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['n', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'ne':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['ne', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'e':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['e', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'se':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['se', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 's':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['s', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'sw':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['sw', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'w':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['w', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'nw':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['nw', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'custom':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'headclip':
                            return _p_change_context(
                                $['value'],
                                ($) => ['headclip', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'tailclip':
                            return _p_change_context(
                                $['value'],
                                ($) => ['tailclip', v_unmarshalled_from_parse_tree.Boolean(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['true/false', null],
                                    },
                                )],
                            )
                        case 'lhead':
                            return _p_change_context(
                                $['value'],
                                ($) => ['lhead', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'ltail':
                            return _p_change_context(
                                $['value'],
                                ($) => ['ltail', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'samehead':
                            return _p_change_context(
                                $['value'],
                                ($) => ['samehead', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'sametail':
                            return _p_change_context(
                                $['value'],
                                ($) => ['sametail', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'edgeURL':
                            return _p_change_context(
                                $['value'],
                                ($) => ['edgeURL', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'headURL':
                            return _p_change_context(
                                $['value'],
                                ($) => ['headURL', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'tailURL':
                            return _p_change_context(
                                $['value'],
                                ($) => ['tailURL', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labelURL':
                            return _p_change_context(
                                $['value'],
                                ($) => ['labelURL', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'edgehref':
                            return _p_change_context(
                                $['value'],
                                ($) => ['edgehref', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'headhref':
                            return _p_change_context(
                                $['value'],
                                ($) => ['headhref', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'tailhref':
                            return _p_change_context(
                                $['value'],
                                ($) => ['tailhref', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labelhref':
                            return _p_change_context(
                                $['value'],
                                ($) => ['labelhref', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'edgetarget':
                            return _p_change_context(
                                $['value'],
                                ($) => ['edgetarget', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'headtarget':
                            return _p_change_context(
                                $['value'],
                                ($) => ['headtarget', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'tailtarget':
                            return _p_change_context(
                                $['value'],
                                ($) => ['tailtarget', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'edgetooltip':
                            return _p_change_context(
                                $['value'],
                                ($) => ['edgetooltip', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'headtooltip':
                            return _p_change_context(
                                $['value'],
                                ($) => ['headtooltip', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'tailtooltip':
                            return _p_change_context(
                                $['value'],
                                ($) => ['tailtooltip', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'labeltooltip':
                            return _p_change_context(
                                $['value'],
                                ($) => ['labeltooltip', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'radius':
                            return _p_change_context(
                                $['value'],
                                ($) => ['radius', v_unmarshalled_from_parse_tree.Number(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'type': ['decimal', null],
                                    },
                                )],
                            )
                        case 'splines':
                            return _p_change_context(
                                $['value'],
                                ($) => ['splines', _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.Attributes.L.splines => {
                                            switch ($t) {
                                                case 'true':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['true', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'false':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'none':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'line':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['line', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'spline':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['spline', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'polyline':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['polyline', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'ortho':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['ortho', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'curved':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['curved', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'compound':
                                                    return _p_change_context(
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
                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                            'range': v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            ),
                                                        }],
                                                    )
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'pos':
                            return _p_change_context(
                                $['value'],
                                ($) => ['pos', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'xlabel':
                            return _p_change_context(
                                $['value'],
                                ($) => ['xlabel', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'layer':
                            return _p_change_context(
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
)
