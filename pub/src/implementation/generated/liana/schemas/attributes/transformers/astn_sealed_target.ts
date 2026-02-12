
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/attributes/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_html from "../../html/transformers/astn_sealed_target"

export const Attributes: t_signatures.Attributes = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'freeform':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'freeform',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "key": _p_change_context(
                                        $['key'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                    "value": _p_change_context(
                                        $['value'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'color':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'color',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'fillcolor':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'fillcolor',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'penwidth':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'penwidth',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'label':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'fontcolor':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'fontcolor',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'fontname':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'fontname',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'fontsize':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'fontsize',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'URL':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'URL',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'href':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'href',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'target':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'target',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'tooltip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tooltip',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'id':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'id',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'class':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'class',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'comment':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'comment',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'style':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'style',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'filled':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'filled',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'rounded':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'rounded',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'bold':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'bold',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'solid':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'solid',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dashed':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'dashed',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dotted':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'dotted',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'striped':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'striped',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'wedged':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'wedged',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'diagonals':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'diagonals',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'invis':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'invis',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tapered':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'tapered',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'custom',
                                                    'value': ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'layout':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'layout',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'dot':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'dot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'neato':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'neato',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'fdp':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'fdp',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'sfdp':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'sfdp',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'twopi':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'twopi',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'circo':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'circo',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'custom',
                                                    'value': ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'rankdir':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'rankdir',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'TB':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'TB',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'BT':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'BT',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'LR':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'LR',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'RL':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'RL',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'bgcolor':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'bgcolor',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'labelloc':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labelloc',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 't':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 't',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'b':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'b',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'labeljust':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labeljust',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'l':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'l',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'c':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'c',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'r':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'r',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'size':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'size',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'ratio':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'ratio',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'pad':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'pad',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'nodesep':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'nodesep',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'ranksep':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'ranksep',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'dpi':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'dpi',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'overlap':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'overlap',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'true':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'true',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'false':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'false',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'scale':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'scale',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'scalexy':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'scalexy',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'orthoxy':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'orthoxy',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'orthoyx':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'orthoyx',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'compress':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'compress',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'vpsc':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'vpsc',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ipsep':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ipsep',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'prism':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'prism',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'pack':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'pack',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'true':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'true',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'false':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'false',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'custom',
                                                    'value': ['text', {
                                                        'delimiter': ['none', null],
                                                        'value': _p_text_from_list(
                                                            v_serialize_number.serialize(
                                                                $,
                                                            ),
                                                            ($) => $,
                                                        ),
                                                    }],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'packmode':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'packmode',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'node':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'node',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'clust':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'clust',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'graph':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'graph',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'concentrate':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'concentrate',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'compound':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'compound',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'center':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'center',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'normalize':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'normalize',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'landscape':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'landscape',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'outputorder':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'outputorder',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'breadthfirst':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'breadthfirst',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'nodesfirst':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'nodesfirst',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'edgesfirst':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'edgesfirst',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'charset':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'charset',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'clusterrank':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'clusterrank',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'local':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'local',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'global':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'global',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'shape':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'shape',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'box':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'box',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'circle':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'circle',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ellipse':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ellipse',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'oval':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'oval',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'point':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'point',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'egg':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'egg',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'triangle':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'triangle',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'plaintext':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'plaintext',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'plain':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'plain',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'diamond':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'diamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'trapezium':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'trapezium',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'parallelogram':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'parallelogram',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'house':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'house',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'pentagon':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'pentagon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'hexagon':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'hexagon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'septagon':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'septagon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'octagon':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'octagon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'polygon':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'polygon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'record':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'record',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Mrecord':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Mrecord',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'custom',
                                                    'value': ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'width':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'width',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'height':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'height',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'fixedsize':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'fixedsize',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'regular':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'regular',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'sides':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'sides',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'skew':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'skew',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'distortion':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'distortion',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'orientation':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'orientation',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'peripheries':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'peripheries',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'pin':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'pin',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'image':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'image',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'imagepos':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'imagepos',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'tl':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'tl',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tc':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'tc',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tr':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'tr',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ml':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ml',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'mc':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'mc',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'mr':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'mr',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'bl':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'bl',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'bc':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'bc',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'br':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'br',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'imagescale':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'imagescale',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'false':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'false',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'true':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'true',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'width':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'width',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'height':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'height',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'both':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'both',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'group':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'group',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'sortv':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'sortv',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'area':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'area',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'z':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'z',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'margin':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'margin',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'arrowhead':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'arrowhead',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'normal':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'normal',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'box':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'box',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'crow':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'crow',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'diamond':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'diamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dot':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'dot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'inv':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'inv',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tee':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'tee',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'vee':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'vee',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'open':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'open',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'halfopen':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'halfopen',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'empty':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'empty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'invempty':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'invempty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'odiamond':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'odiamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'odot':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'odot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'obox':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'obox',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'custom',
                                                    'value': ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'arrowtail':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'arrowtail',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'normal':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'normal',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'box':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'box',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'crow':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'crow',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'diamond':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'diamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dot':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'dot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'inv':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'inv',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tee':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'tee',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'vee':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'vee',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'open':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'open',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'halfopen':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'halfopen',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'empty':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'empty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'invempty':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'invempty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'odiamond':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'odiamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'odot':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'odot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'obox':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'obox',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'custom',
                                                    'value': ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'arrowsize':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'arrowsize',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'dir':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'dir',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'forward':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'forward',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'back':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'back',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'both':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'both',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'headlabel':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'headlabel',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'taillabel':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'taillabel',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'labelfontcolor':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labelfontcolor',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'labelfontname':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labelfontname',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'labelfontsize':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labelfontsize',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'labelangle':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labelangle',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'labeldistance':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labeldistance',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'labelfloat':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labelfloat',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'weight':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'weight',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'len':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'len',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'minlen':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'minlen',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'constraint':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'constraint',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'decorate':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'decorate',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'headport':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'headport',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'center':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'center',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'n':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'n',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ne':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ne',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'e':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'e',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'se':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'se',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 's':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 's',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'sw':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'sw',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'w':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'w',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'nw':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'nw',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'custom',
                                                    'value': ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'tailport':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tailport',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'center':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'center',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'n':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'n',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ne':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ne',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'e':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'e',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'se':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'se',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 's':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 's',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'sw':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'sw',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'w':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'w',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'nw':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'nw',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'custom',
                                                    'value': ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'headclip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'headclip',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'tailclip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tailclip',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'lhead':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'lhead',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'ltail':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'ltail',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'samehead':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'samehead',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'sametail':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'sametail',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'edgeURL':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'edgeURL',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'headURL':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'headURL',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'tailURL':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tailURL',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'labelURL':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labelURL',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'edgehref':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'edgehref',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'headhref':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'headhref',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'tailhref':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tailhref',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'labelhref':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labelhref',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'edgetarget':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'edgetarget',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'headtarget':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'headtarget',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'tailtarget':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tailtarget',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'edgetooltip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'edgetooltip',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'headtooltip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'headtooltip',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'tailtooltip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tailtooltip',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'labeltooltip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labeltooltip',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'radius':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'radius',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'splines':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'splines',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'true':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'true',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'false':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'false',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'line':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'line',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'spline':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'spline',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'polyline':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'polyline',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ortho':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ortho',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'curved':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'curved',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'compound':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'compound',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'pos':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'pos',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'xlabel':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'xlabel',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'layer':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'layer',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
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
