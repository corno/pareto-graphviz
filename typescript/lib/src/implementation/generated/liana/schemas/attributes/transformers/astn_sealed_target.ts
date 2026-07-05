
import * as p_ from 'pareto-core/implementation/transformer'
import * as p_di from 'pareto-core/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/attributes/signatures/transformers/astn_sealed_target.js"

import * as t_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/implementation/manual/transformers/primitives/text"

import * as v_external_html from "../../html/transformers/astn_sealed_target.js"

export const Attributes: t_signatures.Attributes = ($) => ['list', p_.from.list($,
).map(
    ($) => ['state', p_decide_state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'freeform':
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'style',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'filled':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'filled',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'rounded':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'rounded',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'bold':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'bold',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'solid':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'solid',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dashed':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'dashed',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dotted':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'dotted',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'striped':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'striped',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'wedged':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'wedged',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'diagonals':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'diagonals',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'invis':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'invis',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tapered':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'tapered',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'layout',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'dot':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'dot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'neato':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'neato',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'fdp':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'fdp',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'sfdp':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'sfdp',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'twopi':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'twopi',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'circo':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'circo',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'rankdir',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'TB':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'TB',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'BT':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'BT',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'LR':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'LR',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'RL':
                                            return p_.option(
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
                    return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'labelloc',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 't':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 't',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'b':
                                            return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'labeljust',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'l':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'l',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'c':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'c',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'r':
                                            return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'overlap',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'true':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'true',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'false':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'false',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'scale':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'scale',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'scalexy':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'scalexy',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'orthoxy':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'orthoxy',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'orthoyx':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'orthoyx',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'compress':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'compress',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'vpsc':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'vpsc',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ipsep':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'ipsep',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'prism':
                                            return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'pack',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'true':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'true',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'false':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'false',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'packmode',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'node':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'node',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'clust':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'clust',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'graph':
                                            return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'outputorder',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'breadthfirst':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'breadthfirst',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'nodesfirst':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'nodesfirst',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'edgesfirst':
                                            return p_.option(
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
                    return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'clusterrank',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'local':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'local',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'global':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'global',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'shape',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'box':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'box',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'circle':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'circle',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ellipse':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'ellipse',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'oval':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'oval',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'point':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'point',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'egg':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'egg',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'triangle':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'triangle',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'plaintext':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'plaintext',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'plain':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'plain',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'diamond':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'diamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'trapezium':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'trapezium',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'parallelogram':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'parallelogram',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'house':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'house',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'pentagon':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'pentagon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'hexagon':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'hexagon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'septagon':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'septagon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'octagon':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'octagon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'polygon':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'polygon',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'record':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'record',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Mrecord':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Mrecord',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'imagepos',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'tl':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'tl',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tc':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'tc',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tr':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'tr',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ml':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'ml',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'mc':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'mc',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'mr':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'mr',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'bl':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'bl',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'bc':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'bc',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'br':
                                            return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'imagescale',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'false':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'false',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'true':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'true',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'width':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'width',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'height':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'height',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'both':
                                            return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'arrowhead',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'normal':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'normal',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'box':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'box',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'crow':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'crow',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'diamond':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'diamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dot':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'dot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'inv':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'inv',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tee':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'tee',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'vee':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'vee',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'open':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'open',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'halfopen':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'halfopen',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'empty':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'empty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'invempty':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'invempty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'odiamond':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'odiamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'odot':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'odot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'obox':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'obox',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'arrowtail',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'normal':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'normal',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'box':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'box',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'crow':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'crow',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'diamond':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'diamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dot':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'dot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'inv':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'inv',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'tee':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'tee',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'vee':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'vee',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'open':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'open',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'halfopen':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'halfopen',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'empty':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'empty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'invempty':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'invempty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'odiamond':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'odiamond',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'odot':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'odot',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'obox':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'obox',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.option(
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
                    return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'dir',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'forward':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'forward',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'back':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'back',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'both':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'both',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'headport',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'center':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'center',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'n':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'n',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ne':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'ne',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'e':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'e',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'se':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'se',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 's':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 's',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'sw':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'sw',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'w':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'w',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'nw':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'nw',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'tailport',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'center':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'center',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'n':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'n',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ne':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'ne',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'e':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'e',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'se':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'se',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 's':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 's',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'sw':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'sw',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'w':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'w',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'nw':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'nw',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'custom':
                                            return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'splines',
                            'value': ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'true':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'true',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'false':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'false',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'line':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'line',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'spline':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'spline',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'polyline':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'polyline',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'ortho':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'ortho',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'curved':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'curved',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'compound':
                                            return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
                    return p_.option(
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
