
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/attributes/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_html from "../../html/transformers/astn_sealed_target"

export const Attributes: t_signatures.Attributes = ($) => ['list', p_.from.list(
    $,
).map(
    ($) => ['state', p_decide_state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'freeform':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'freeform',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "key": p_change_context(
                                        $['key'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                    "value": p_change_context(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'penwidth',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'label':
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'fontsize',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'URL':
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'style',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'filled':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'filled',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'rounded':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'rounded',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'bold':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'bold',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'solid':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'solid',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dashed':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'dashed',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dotted':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'dotted',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'striped':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'striped',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'wedged':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'wedged',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'diagonals':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'diagonals',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'invis':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'invis',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tapered':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'tapered',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.ss(
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
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'layout':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'layout',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'dot':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'dot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'neato':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'neato',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'fdp':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'fdp',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'sfdp':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'sfdp',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'twopi':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'twopi',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'circo':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'circo',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.ss(
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
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'rankdir':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'rankdir',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'TB':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'TB',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'BT':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'BT',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'LR':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'LR',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'RL':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'RL',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'bgcolor':
                    return p_.ss(
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
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'labelloc',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 't':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 't',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'b':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'b',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'labeljust':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'labeljust',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'l':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'l',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'c':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'c',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'r':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'r',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'size':
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'nodesep',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'ranksep':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'ranksep',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'dpi':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'dpi',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'overlap':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'overlap',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'true':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'true',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'false':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'false',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'scale':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'scale',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'scalexy':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'scalexy',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'orthoxy':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'orthoxy',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'orthoyx':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'orthoyx',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'compress':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'compress',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'vpsc':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'vpsc',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ipsep':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ipsep',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'prism':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'prism',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'pack':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'pack',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'true':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'true',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'false':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'false',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'custom',
                                                    'value': ['text', {
                                                        'delimiter': ['none', null],
                                                        'value': v_primitives_to_text.decimal(
                                                            $,
                                                        ),
                                                    }],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'packmode':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'packmode',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'node':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'node',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'clust':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'clust',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'graph':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'graph',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'concentrate':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'concentrate',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'compound':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'compound',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'center':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'center',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'normalize':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'normalize',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'landscape':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'landscape',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'outputorder':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'outputorder',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'breadthfirst':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'breadthfirst',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'nodesfirst':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'nodesfirst',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'edgesfirst':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'edgesfirst',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'charset':
                    return p_.ss(
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
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'clusterrank',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'local':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'local',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'global':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'global',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'shape':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'shape',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'box':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'box',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'circle':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'circle',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ellipse':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ellipse',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'oval':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'oval',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'point':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'point',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'egg':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'egg',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'triangle':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'triangle',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'plaintext':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'plaintext',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'plain':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'plain',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'diamond':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'diamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'trapezium':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'trapezium',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'parallelogram':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'parallelogram',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'house':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'house',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'pentagon':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'pentagon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'hexagon':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'hexagon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'septagon':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'septagon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'octagon':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'octagon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'polygon':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'polygon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'record':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'record',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Mrecord':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Mrecord',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.ss(
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
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'width':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'width',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'height':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'height',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'fixedsize':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'fixedsize',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'regular':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'regular',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'sides':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'sides',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.decimal(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'skew':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'skew',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'distortion':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'distortion',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'orientation':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'orientation',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'peripheries':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'peripheries',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.decimal(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'pin':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'pin',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'image':
                    return p_.ss(
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
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'imagepos',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'tl':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'tl',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tc':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'tc',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tr':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'tr',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ml':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ml',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'mc':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'mc',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'mr':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'mr',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'bl':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'bl',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'bc':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'bc',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'br':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'br',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'imagescale':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'imagescale',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'false':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'false',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'true':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'true',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'width':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'width',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'height':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'height',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'both':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'both',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'group':
                    return p_.ss(
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
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'sortv',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.decimal(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'area':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'area',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'z':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'z',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'margin':
                    return p_.ss(
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
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'arrowhead',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'normal':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'normal',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'box':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'box',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'crow':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'crow',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'diamond':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'diamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dot':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'dot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'inv':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'inv',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tee':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'tee',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'vee':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'vee',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'open':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'open',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'halfopen':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'halfopen',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'empty':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'empty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'invempty':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'invempty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'odiamond':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'odiamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'odot':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'odot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'obox':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'obox',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.ss(
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
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'arrowtail':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'arrowtail',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'normal':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'normal',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'box':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'box',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'crow':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'crow',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'diamond':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'diamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dot':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'dot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'inv':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'inv',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tee':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'tee',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'vee':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'vee',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'open':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'open',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'halfopen':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'halfopen',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'empty':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'empty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'invempty':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'invempty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'odiamond':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'odiamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'odot':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'odot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'obox':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'obox',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.ss(
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
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'arrowsize':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'arrowsize',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'dir':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'dir',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'forward':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'forward',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'back':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'back',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'both':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'both',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'headlabel':
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'labelfontsize',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'labelangle':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'labelangle',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'labeldistance':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'labeldistance',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'labelfloat':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'labelfloat',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'weight':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'weight',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'len':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'len',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'minlen':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'minlen',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.decimal(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'constraint':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'constraint',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'decorate':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'decorate',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'headport':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'headport',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'center':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'center',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'n':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'n',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ne':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ne',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'e':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'e',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'se':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'se',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 's':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 's',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'sw':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'sw',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'w':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'w',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'nw':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'nw',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.ss(
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
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'tailport':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'tailport',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'center':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'center',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'n':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'n',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ne':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ne',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'e':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'e',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'se':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'se',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 's':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 's',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'sw':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'sw',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'w':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'w',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'nw':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'nw',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.ss(
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
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'headclip':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'headclip',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'tailclip':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'tailclip',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        }),
                    )
                case 'lhead':
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'radius',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.scientific_notation(
                                    $,
                                    {
                                        'digits': 10,
                                    },
                                ),
                            }],
                        }),
                    )
                case 'splines':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'splines',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'true':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'true',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'false':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'false',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'line':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'line',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'spline':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'spline',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'polyline':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'polyline',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ortho':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ortho',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'curved':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'curved',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'compound':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'compound',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'pos':
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                    return p_.au(
                        $[0],
                    )
            }
        },
    )],
)]
