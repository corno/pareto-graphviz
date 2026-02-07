
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/graphviz/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/graphviz/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

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
                ($) => abort(
                    ['no such entry', "attributes"],
                ),
            ),
            ($) => Attributes(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'nodes': _p_change_context(
            $.__get_entry_deprecated(
                'nodes',
                ($) => abort(
                    ['no such entry', "nodes"],
                ),
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
                                ($) => abort(
                                    ['no such entry', "attributes"],
                                ),
                            ),
                            ($) => Attributes(
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
                ($) => abort(
                    ['no such entry', "edges"],
                ),
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
                                ($) => abort(
                                    ['no such entry', "from"],
                                ),
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
                                ($) => abort(
                                    ['no such entry', "to"],
                                ),
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
                                ($) => abort(
                                    ['no such entry', "attributes"],
                                ),
                            ),
                            ($) => Attributes(
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

export const Attributes: t_signatures.Attributes = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
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
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'key': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'key',
                                            ($) => abort(
                                                ['no such entry', "key"],
                                            ),
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null],
                                            ),
                                        ),
                                    ),
                                    'value': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'value',
                                            ($) => abort(
                                                ['no such entry', "value"],
                                            ),
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null],
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'color':
                        return _p_change_context(
                            $['value'],
                            ($) => ['color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'fillcolor':
                        return _p_change_context(
                            $['value'],
                            ($) => ['fillcolor', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'penwidth':
                        return _p_change_context(
                            $['value'],
                            ($) => ['penwidth', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'label':
                        return _p_change_context(
                            $['value'],
                            ($) => ['label', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'fontcolor':
                        return _p_change_context(
                            $['value'],
                            ($) => ['fontcolor', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'fontname':
                        return _p_change_context(
                            $['value'],
                            ($) => ['fontname', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'fontsize':
                        return _p_change_context(
                            $['value'],
                            ($) => ['fontsize', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'URL':
                        return _p_change_context(
                            $['value'],
                            ($) => ['URL', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'href':
                        return _p_change_context(
                            $['value'],
                            ($) => ['href', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'target':
                        return _p_change_context(
                            $['value'],
                            ($) => ['target', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'tooltip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'id':
                        return _p_change_context(
                            $['value'],
                            ($) => ['id', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'class':
                        return _p_change_context(
                            $['value'],
                            ($) => ['class', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'comment':
                        return _p_change_context(
                            $['value'],
                            ($) => ['comment', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
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
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'rounded':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['rounded', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'bold':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['bold', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'solid':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['solid', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'dashed':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['dashed', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'dotted':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['dotted', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'striped':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['striped', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'wedged':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['wedged', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'diagonals':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['diagonals', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'invis':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['invis', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'tapered':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['tapered', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'custom':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
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
                            )],
                        )
                    case 'layout':
                        return _p_change_context(
                            $['value'],
                            ($) => ['layout', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'neato':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['neato', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'fdp':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['fdp', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'sfdp':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['sfdp', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'twopi':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['twopi', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'circo':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['circo', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'custom':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
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
                            )],
                        )
                    case 'rankdir':
                        return _p_change_context(
                            $['value'],
                            ($) => ['rankdir', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'BT':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['BT', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'LR':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['LR', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'RL':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['RL', v_unmarshalled_from_parse_tree.Nothing(
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
                            )],
                        )
                    case 'bgcolor':
                        return _p_change_context(
                            $['value'],
                            ($) => ['bgcolor', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
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
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'b':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['b', v_unmarshalled_from_parse_tree.Nothing(
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
                            )],
                        )
                    case 'labeljust':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labeljust', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'c':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['c', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'r':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['r', v_unmarshalled_from_parse_tree.Nothing(
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
                            )],
                        )
                    case 'size':
                        return _p_change_context(
                            $['value'],
                            ($) => ['size', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'ratio':
                        return _p_change_context(
                            $['value'],
                            ($) => ['ratio', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'pad':
                        return _p_change_context(
                            $['value'],
                            ($) => ['pad', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'nodesep':
                        return _p_change_context(
                            $['value'],
                            ($) => ['nodesep', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'ranksep':
                        return _p_change_context(
                            $['value'],
                            ($) => ['ranksep', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'dpi':
                        return _p_change_context(
                            $['value'],
                            ($) => ['dpi', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'overlap':
                        return _p_change_context(
                            $['value'],
                            ($) => ['overlap', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'false':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'scale':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['scale', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'scalexy':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['scalexy', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'orthoxy':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['orthoxy', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'orthoyx':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['orthoyx', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'compress':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['compress', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'vpsc':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['vpsc', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'ipsep':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['ipsep', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'prism':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['prism', v_unmarshalled_from_parse_tree.Nothing(
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
                            )],
                        )
                    case 'pack':
                        return _p_change_context(
                            $['value'],
                            ($) => ['pack', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'false':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'custom':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['custom', v_deserialize_number.deserialize(
                                                        _p_list_from_text(
                                                            v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null],
                                                                ),
                                                            ),
                                                            ($) => $,
                                                        ),
                                                        ($) => abort(
                                                            ['not a valid number', null],
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
                            )],
                        )
                    case 'packmode':
                        return _p_change_context(
                            $['value'],
                            ($) => ['packmode', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'clust':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['clust', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'graph':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['graph', v_unmarshalled_from_parse_tree.Nothing(
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
                            )],
                        )
                    case 'concentrate':
                        return _p_change_context(
                            $['value'],
                            ($) => ['concentrate', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'compound':
                        return _p_change_context(
                            $['value'],
                            ($) => ['compound', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'center':
                        return _p_change_context(
                            $['value'],
                            ($) => ['center', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'normalize':
                        return _p_change_context(
                            $['value'],
                            ($) => ['normalize', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'landscape':
                        return _p_change_context(
                            $['value'],
                            ($) => ['landscape', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'outputorder':
                        return _p_change_context(
                            $['value'],
                            ($) => ['outputorder', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'nodesfirst':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['nodesfirst', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'edgesfirst':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['edgesfirst', v_unmarshalled_from_parse_tree.Nothing(
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
                            )],
                        )
                    case 'charset':
                        return _p_change_context(
                            $['value'],
                            ($) => ['charset', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
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
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'global':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['global', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'none':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
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
                            )],
                        )
                    case 'shape':
                        return _p_change_context(
                            $['value'],
                            ($) => ['shape', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'circle':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['circle', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'ellipse':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['ellipse', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'oval':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['oval', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'point':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['point', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'egg':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['egg', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'triangle':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['triangle', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'plaintext':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['plaintext', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'plain':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['plain', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'diamond':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['diamond', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'trapezium':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['trapezium', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'parallelogram':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['parallelogram', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'house':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['house', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'pentagon':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['pentagon', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'hexagon':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['hexagon', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'septagon':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['septagon', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'octagon':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['octagon', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'polygon':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['polygon', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'record':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['record', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'Mrecord':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['Mrecord', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'custom':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
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
                            )],
                        )
                    case 'width':
                        return _p_change_context(
                            $['value'],
                            ($) => ['width', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'height':
                        return _p_change_context(
                            $['value'],
                            ($) => ['height', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'fixedsize':
                        return _p_change_context(
                            $['value'],
                            ($) => ['fixedsize', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'regular':
                        return _p_change_context(
                            $['value'],
                            ($) => ['regular', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'sides':
                        return _p_change_context(
                            $['value'],
                            ($) => ['sides', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'skew':
                        return _p_change_context(
                            $['value'],
                            ($) => ['skew', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'distortion':
                        return _p_change_context(
                            $['value'],
                            ($) => ['distortion', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'orientation':
                        return _p_change_context(
                            $['value'],
                            ($) => ['orientation', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'peripheries':
                        return _p_change_context(
                            $['value'],
                            ($) => ['peripheries', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'pin':
                        return _p_change_context(
                            $['value'],
                            ($) => ['pin', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'image':
                        return _p_change_context(
                            $['value'],
                            ($) => ['image', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
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
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'tc':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['tc', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'tr':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['tr', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'ml':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['ml', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'mc':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['mc', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'mr':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['mr', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'bl':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['bl', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'bc':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['bc', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'br':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['br', v_unmarshalled_from_parse_tree.Nothing(
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
                            )],
                        )
                    case 'imagescale':
                        return _p_change_context(
                            $['value'],
                            ($) => ['imagescale', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'true':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['true', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'width':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['width', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'height':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['height', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'both':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['both', v_unmarshalled_from_parse_tree.Nothing(
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
                            )],
                        )
                    case 'group':
                        return _p_change_context(
                            $['value'],
                            ($) => ['group', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'sortv':
                        return _p_change_context(
                            $['value'],
                            ($) => ['sortv', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'area':
                        return _p_change_context(
                            $['value'],
                            ($) => ['area', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'z':
                        return _p_change_context(
                            $['value'],
                            ($) => ['z', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'margin':
                        return _p_change_context(
                            $['value'],
                            ($) => ['margin', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
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
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'box':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['box', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'crow':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['crow', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'diamond':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['diamond', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'dot':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['dot', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'inv':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['inv', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'none':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'tee':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['tee', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'vee':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['vee', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'open':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['open', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'halfopen':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['halfopen', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'empty':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['empty', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'invempty':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['invempty', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'odiamond':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['odiamond', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'odot':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['odot', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'obox':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['obox', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'custom':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
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
                            )],
                        )
                    case 'arrowtail':
                        return _p_change_context(
                            $['value'],
                            ($) => ['arrowtail', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'box':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['box', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'crow':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['crow', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'diamond':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['diamond', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'dot':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['dot', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'inv':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['inv', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'none':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'tee':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['tee', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'vee':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['vee', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'open':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['open', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'halfopen':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['halfopen', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'empty':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['empty', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'invempty':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['invempty', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'odiamond':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['odiamond', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'odot':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['odot', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'obox':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['obox', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'custom':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
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
                            )],
                        )
                    case 'arrowsize':
                        return _p_change_context(
                            $['value'],
                            ($) => ['arrowsize', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'dir':
                        return _p_change_context(
                            $['value'],
                            ($) => ['dir', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'back':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['back', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'both':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['both', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'none':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
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
                            )],
                        )
                    case 'headlabel':
                        return _p_change_context(
                            $['value'],
                            ($) => ['headlabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'taillabel':
                        return _p_change_context(
                            $['value'],
                            ($) => ['taillabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'labelfontcolor':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labelfontcolor', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'labelfontname':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labelfontname', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'labelfontsize':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labelfontsize', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'labelangle':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labelangle', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'labeldistance':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labeldistance', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'labelfloat':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labelfloat', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'weight':
                        return _p_change_context(
                            $['value'],
                            ($) => ['weight', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'len':
                        return _p_change_context(
                            $['value'],
                            ($) => ['len', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'minlen':
                        return _p_change_context(
                            $['value'],
                            ($) => ['minlen', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'constraint':
                        return _p_change_context(
                            $['value'],
                            ($) => ['constraint', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'decorate':
                        return _p_change_context(
                            $['value'],
                            ($) => ['decorate', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'headport':
                        return _p_change_context(
                            $['value'],
                            ($) => ['headport', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'n':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['n', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'ne':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['ne', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'e':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['e', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'se':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['se', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 's':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['s', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'sw':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['sw', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'w':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['w', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'nw':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['nw', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'custom':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
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
                            )],
                        )
                    case 'tailport':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tailport', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'n':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['n', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'ne':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['ne', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'e':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['e', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'se':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['se', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 's':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['s', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'sw':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['sw', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'w':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['w', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'nw':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['nw', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'custom':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['custom', v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
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
                            )],
                        )
                    case 'headclip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['headclip', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'tailclip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tailclip', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'lhead':
                        return _p_change_context(
                            $['value'],
                            ($) => ['lhead', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'ltail':
                        return _p_change_context(
                            $['value'],
                            ($) => ['ltail', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'samehead':
                        return _p_change_context(
                            $['value'],
                            ($) => ['samehead', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'sametail':
                        return _p_change_context(
                            $['value'],
                            ($) => ['sametail', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'edgeURL':
                        return _p_change_context(
                            $['value'],
                            ($) => ['edgeURL', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'headURL':
                        return _p_change_context(
                            $['value'],
                            ($) => ['headURL', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'tailURL':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tailURL', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'labelURL':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labelURL', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'edgehref':
                        return _p_change_context(
                            $['value'],
                            ($) => ['edgehref', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'headhref':
                        return _p_change_context(
                            $['value'],
                            ($) => ['headhref', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'tailhref':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tailhref', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'labelhref':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labelhref', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'edgetarget':
                        return _p_change_context(
                            $['value'],
                            ($) => ['edgetarget', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'headtarget':
                        return _p_change_context(
                            $['value'],
                            ($) => ['headtarget', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'tailtarget':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tailtarget', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'edgetooltip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['edgetooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'headtooltip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['headtooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'tailtooltip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tailtooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'labeltooltip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labeltooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'radius':
                        return _p_change_context(
                            $['value'],
                            ($) => ['radius', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'splines':
                        return _p_change_context(
                            $['value'],
                            ($) => ['splines', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'false':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'none':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'line':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['line', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'spline':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['spline', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'polyline':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['polyline', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'ortho':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['ortho', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'curved':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['curved', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'compound':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['compound', v_unmarshalled_from_parse_tree.Nothing(
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
                            )],
                        )
                    case 'pos':
                        return _p_change_context(
                            $['value'],
                            ($) => ['pos', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'xlabel':
                        return _p_change_context(
                            $['value'],
                            ($) => ['xlabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'layer':
                        return _p_change_context(
                            $['value'],
                            ($) => ['layer', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
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
)
