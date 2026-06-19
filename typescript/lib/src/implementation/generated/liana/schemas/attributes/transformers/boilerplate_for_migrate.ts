
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/attributes/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/attributes/data"

import * as v_html from "../../html/transformers/boilerplate_for_migrate"

export const Attributes: t_signatures.Attributes = ($) => p_.from.list(
    $,
).map(
    ($) => p_decide_state(
        $,
        ($): t_out.Attributes.L => {
            switch ($[0]) {
                case 'freeform':
                    return p_.ss(
                        $,
                        ($) => ['freeform', {
                            'key': p_change_context(
                                $['key'],
                                ($) => $,
                            ),
                            'value': p_change_context(
                                $['value'],
                                ($) => $,
                            ),
                        }],
                    )
                case 'color':
                    return p_.ss(
                        $,
                        ($) => ['color', $],
                    )
                case 'fillcolor':
                    return p_.ss(
                        $,
                        ($) => ['fillcolor', $],
                    )
                case 'penwidth':
                    return p_.ss(
                        $,
                        ($) => ['penwidth', $],
                    )
                case 'label':
                    return p_.ss(
                        $,
                        ($) => ['label', $],
                    )
                case 'fontcolor':
                    return p_.ss(
                        $,
                        ($) => ['fontcolor', $],
                    )
                case 'fontname':
                    return p_.ss(
                        $,
                        ($) => ['fontname', $],
                    )
                case 'fontsize':
                    return p_.ss(
                        $,
                        ($) => ['fontsize', $],
                    )
                case 'URL':
                    return p_.ss(
                        $,
                        ($) => ['URL', $],
                    )
                case 'href':
                    return p_.ss(
                        $,
                        ($) => ['href', $],
                    )
                case 'target':
                    return p_.ss(
                        $,
                        ($) => ['target', $],
                    )
                case 'tooltip':
                    return p_.ss(
                        $,
                        ($) => ['tooltip', $],
                    )
                case 'id':
                    return p_.ss(
                        $,
                        ($) => ['id', $],
                    )
                case 'class':
                    return p_.ss(
                        $,
                        ($) => ['class', $],
                    )
                case 'comment':
                    return p_.ss(
                        $,
                        ($) => ['comment', $],
                    )
                case 'style':
                    return p_.ss(
                        $,
                        ($) => ['style', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.style => {
                                switch ($[0]) {
                                    case 'filled':
                                        return p_.ss(
                                            $,
                                            ($) => ['filled', null],
                                        )
                                    case 'rounded':
                                        return p_.ss(
                                            $,
                                            ($) => ['rounded', null],
                                        )
                                    case 'bold':
                                        return p_.ss(
                                            $,
                                            ($) => ['bold', null],
                                        )
                                    case 'solid':
                                        return p_.ss(
                                            $,
                                            ($) => ['solid', null],
                                        )
                                    case 'dashed':
                                        return p_.ss(
                                            $,
                                            ($) => ['dashed', null],
                                        )
                                    case 'dotted':
                                        return p_.ss(
                                            $,
                                            ($) => ['dotted', null],
                                        )
                                    case 'striped':
                                        return p_.ss(
                                            $,
                                            ($) => ['striped', null],
                                        )
                                    case 'wedged':
                                        return p_.ss(
                                            $,
                                            ($) => ['wedged', null],
                                        )
                                    case 'diagonals':
                                        return p_.ss(
                                            $,
                                            ($) => ['diagonals', null],
                                        )
                                    case 'invis':
                                        return p_.ss(
                                            $,
                                            ($) => ['invis', null],
                                        )
                                    case 'tapered':
                                        return p_.ss(
                                            $,
                                            ($) => ['tapered', null],
                                        )
                                    case 'custom':
                                        return p_.ss(
                                            $,
                                            ($) => ['custom', $],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'layout':
                    return p_.ss(
                        $,
                        ($) => ['layout', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.layout => {
                                switch ($[0]) {
                                    case 'dot':
                                        return p_.ss(
                                            $,
                                            ($) => ['dot', null],
                                        )
                                    case 'neato':
                                        return p_.ss(
                                            $,
                                            ($) => ['neato', null],
                                        )
                                    case 'fdp':
                                        return p_.ss(
                                            $,
                                            ($) => ['fdp', null],
                                        )
                                    case 'sfdp':
                                        return p_.ss(
                                            $,
                                            ($) => ['sfdp', null],
                                        )
                                    case 'twopi':
                                        return p_.ss(
                                            $,
                                            ($) => ['twopi', null],
                                        )
                                    case 'circo':
                                        return p_.ss(
                                            $,
                                            ($) => ['circo', null],
                                        )
                                    case 'custom':
                                        return p_.ss(
                                            $,
                                            ($) => ['custom', $],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'rankdir':
                    return p_.ss(
                        $,
                        ($) => ['rankdir', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.rankdir => {
                                switch ($[0]) {
                                    case 'TB':
                                        return p_.ss(
                                            $,
                                            ($) => ['TB', null],
                                        )
                                    case 'BT':
                                        return p_.ss(
                                            $,
                                            ($) => ['BT', null],
                                        )
                                    case 'LR':
                                        return p_.ss(
                                            $,
                                            ($) => ['LR', null],
                                        )
                                    case 'RL':
                                        return p_.ss(
                                            $,
                                            ($) => ['RL', null],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'bgcolor':
                    return p_.ss(
                        $,
                        ($) => ['bgcolor', $],
                    )
                case 'labelloc':
                    return p_.ss(
                        $,
                        ($) => ['labelloc', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.labelloc => {
                                switch ($[0]) {
                                    case 't':
                                        return p_.ss(
                                            $,
                                            ($) => ['t', null],
                                        )
                                    case 'b':
                                        return p_.ss(
                                            $,
                                            ($) => ['b', null],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'labeljust':
                    return p_.ss(
                        $,
                        ($) => ['labeljust', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.labeljust => {
                                switch ($[0]) {
                                    case 'l':
                                        return p_.ss(
                                            $,
                                            ($) => ['l', null],
                                        )
                                    case 'c':
                                        return p_.ss(
                                            $,
                                            ($) => ['c', null],
                                        )
                                    case 'r':
                                        return p_.ss(
                                            $,
                                            ($) => ['r', null],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'size':
                    return p_.ss(
                        $,
                        ($) => ['size', $],
                    )
                case 'ratio':
                    return p_.ss(
                        $,
                        ($) => ['ratio', $],
                    )
                case 'pad':
                    return p_.ss(
                        $,
                        ($) => ['pad', $],
                    )
                case 'nodesep':
                    return p_.ss(
                        $,
                        ($) => ['nodesep', $],
                    )
                case 'ranksep':
                    return p_.ss(
                        $,
                        ($) => ['ranksep', $],
                    )
                case 'dpi':
                    return p_.ss(
                        $,
                        ($) => ['dpi', $],
                    )
                case 'overlap':
                    return p_.ss(
                        $,
                        ($) => ['overlap', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.overlap => {
                                switch ($[0]) {
                                    case 'true':
                                        return p_.ss(
                                            $,
                                            ($) => ['true', null],
                                        )
                                    case 'false':
                                        return p_.ss(
                                            $,
                                            ($) => ['false', null],
                                        )
                                    case 'scale':
                                        return p_.ss(
                                            $,
                                            ($) => ['scale', null],
                                        )
                                    case 'scalexy':
                                        return p_.ss(
                                            $,
                                            ($) => ['scalexy', null],
                                        )
                                    case 'orthoxy':
                                        return p_.ss(
                                            $,
                                            ($) => ['orthoxy', null],
                                        )
                                    case 'orthoyx':
                                        return p_.ss(
                                            $,
                                            ($) => ['orthoyx', null],
                                        )
                                    case 'compress':
                                        return p_.ss(
                                            $,
                                            ($) => ['compress', null],
                                        )
                                    case 'vpsc':
                                        return p_.ss(
                                            $,
                                            ($) => ['vpsc', null],
                                        )
                                    case 'ipsep':
                                        return p_.ss(
                                            $,
                                            ($) => ['ipsep', null],
                                        )
                                    case 'prism':
                                        return p_.ss(
                                            $,
                                            ($) => ['prism', null],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'pack':
                    return p_.ss(
                        $,
                        ($) => ['pack', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.pack => {
                                switch ($[0]) {
                                    case 'true':
                                        return p_.ss(
                                            $,
                                            ($) => ['true', null],
                                        )
                                    case 'false':
                                        return p_.ss(
                                            $,
                                            ($) => ['false', null],
                                        )
                                    case 'custom':
                                        return p_.ss(
                                            $,
                                            ($) => ['custom', $],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'packmode':
                    return p_.ss(
                        $,
                        ($) => ['packmode', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.packmode => {
                                switch ($[0]) {
                                    case 'node':
                                        return p_.ss(
                                            $,
                                            ($) => ['node', null],
                                        )
                                    case 'clust':
                                        return p_.ss(
                                            $,
                                            ($) => ['clust', null],
                                        )
                                    case 'graph':
                                        return p_.ss(
                                            $,
                                            ($) => ['graph', null],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'concentrate':
                    return p_.ss(
                        $,
                        ($) => ['concentrate', $],
                    )
                case 'compound':
                    return p_.ss(
                        $,
                        ($) => ['compound', $],
                    )
                case 'center':
                    return p_.ss(
                        $,
                        ($) => ['center', $],
                    )
                case 'normalize':
                    return p_.ss(
                        $,
                        ($) => ['normalize', $],
                    )
                case 'landscape':
                    return p_.ss(
                        $,
                        ($) => ['landscape', $],
                    )
                case 'outputorder':
                    return p_.ss(
                        $,
                        ($) => ['outputorder', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.outputorder => {
                                switch ($[0]) {
                                    case 'breadthfirst':
                                        return p_.ss(
                                            $,
                                            ($) => ['breadthfirst', null],
                                        )
                                    case 'nodesfirst':
                                        return p_.ss(
                                            $,
                                            ($) => ['nodesfirst', null],
                                        )
                                    case 'edgesfirst':
                                        return p_.ss(
                                            $,
                                            ($) => ['edgesfirst', null],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'charset':
                    return p_.ss(
                        $,
                        ($) => ['charset', $],
                    )
                case 'clusterrank':
                    return p_.ss(
                        $,
                        ($) => ['clusterrank', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.clusterrank => {
                                switch ($[0]) {
                                    case 'local':
                                        return p_.ss(
                                            $,
                                            ($) => ['local', null],
                                        )
                                    case 'global':
                                        return p_.ss(
                                            $,
                                            ($) => ['global', null],
                                        )
                                    case 'none':
                                        return p_.ss(
                                            $,
                                            ($) => ['none', null],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'shape':
                    return p_.ss(
                        $,
                        ($) => ['shape', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.shape => {
                                switch ($[0]) {
                                    case 'box':
                                        return p_.ss(
                                            $,
                                            ($) => ['box', null],
                                        )
                                    case 'circle':
                                        return p_.ss(
                                            $,
                                            ($) => ['circle', null],
                                        )
                                    case 'ellipse':
                                        return p_.ss(
                                            $,
                                            ($) => ['ellipse', null],
                                        )
                                    case 'oval':
                                        return p_.ss(
                                            $,
                                            ($) => ['oval', null],
                                        )
                                    case 'point':
                                        return p_.ss(
                                            $,
                                            ($) => ['point', null],
                                        )
                                    case 'egg':
                                        return p_.ss(
                                            $,
                                            ($) => ['egg', null],
                                        )
                                    case 'triangle':
                                        return p_.ss(
                                            $,
                                            ($) => ['triangle', null],
                                        )
                                    case 'plaintext':
                                        return p_.ss(
                                            $,
                                            ($) => ['plaintext', null],
                                        )
                                    case 'plain':
                                        return p_.ss(
                                            $,
                                            ($) => ['plain', null],
                                        )
                                    case 'diamond':
                                        return p_.ss(
                                            $,
                                            ($) => ['diamond', null],
                                        )
                                    case 'trapezium':
                                        return p_.ss(
                                            $,
                                            ($) => ['trapezium', null],
                                        )
                                    case 'parallelogram':
                                        return p_.ss(
                                            $,
                                            ($) => ['parallelogram', null],
                                        )
                                    case 'house':
                                        return p_.ss(
                                            $,
                                            ($) => ['house', null],
                                        )
                                    case 'pentagon':
                                        return p_.ss(
                                            $,
                                            ($) => ['pentagon', null],
                                        )
                                    case 'hexagon':
                                        return p_.ss(
                                            $,
                                            ($) => ['hexagon', null],
                                        )
                                    case 'septagon':
                                        return p_.ss(
                                            $,
                                            ($) => ['septagon', null],
                                        )
                                    case 'octagon':
                                        return p_.ss(
                                            $,
                                            ($) => ['octagon', null],
                                        )
                                    case 'polygon':
                                        return p_.ss(
                                            $,
                                            ($) => ['polygon', null],
                                        )
                                    case 'record':
                                        return p_.ss(
                                            $,
                                            ($) => ['record', null],
                                        )
                                    case 'Mrecord':
                                        return p_.ss(
                                            $,
                                            ($) => ['Mrecord', null],
                                        )
                                    case 'custom':
                                        return p_.ss(
                                            $,
                                            ($) => ['custom', $],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'width':
                    return p_.ss(
                        $,
                        ($) => ['width', $],
                    )
                case 'height':
                    return p_.ss(
                        $,
                        ($) => ['height', $],
                    )
                case 'fixedsize':
                    return p_.ss(
                        $,
                        ($) => ['fixedsize', $],
                    )
                case 'regular':
                    return p_.ss(
                        $,
                        ($) => ['regular', $],
                    )
                case 'sides':
                    return p_.ss(
                        $,
                        ($) => ['sides', $],
                    )
                case 'skew':
                    return p_.ss(
                        $,
                        ($) => ['skew', $],
                    )
                case 'distortion':
                    return p_.ss(
                        $,
                        ($) => ['distortion', $],
                    )
                case 'orientation':
                    return p_.ss(
                        $,
                        ($) => ['orientation', $],
                    )
                case 'peripheries':
                    return p_.ss(
                        $,
                        ($) => ['peripheries', $],
                    )
                case 'pin':
                    return p_.ss(
                        $,
                        ($) => ['pin', $],
                    )
                case 'image':
                    return p_.ss(
                        $,
                        ($) => ['image', $],
                    )
                case 'imagepos':
                    return p_.ss(
                        $,
                        ($) => ['imagepos', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.imagepos => {
                                switch ($[0]) {
                                    case 'tl':
                                        return p_.ss(
                                            $,
                                            ($) => ['tl', null],
                                        )
                                    case 'tc':
                                        return p_.ss(
                                            $,
                                            ($) => ['tc', null],
                                        )
                                    case 'tr':
                                        return p_.ss(
                                            $,
                                            ($) => ['tr', null],
                                        )
                                    case 'ml':
                                        return p_.ss(
                                            $,
                                            ($) => ['ml', null],
                                        )
                                    case 'mc':
                                        return p_.ss(
                                            $,
                                            ($) => ['mc', null],
                                        )
                                    case 'mr':
                                        return p_.ss(
                                            $,
                                            ($) => ['mr', null],
                                        )
                                    case 'bl':
                                        return p_.ss(
                                            $,
                                            ($) => ['bl', null],
                                        )
                                    case 'bc':
                                        return p_.ss(
                                            $,
                                            ($) => ['bc', null],
                                        )
                                    case 'br':
                                        return p_.ss(
                                            $,
                                            ($) => ['br', null],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'imagescale':
                    return p_.ss(
                        $,
                        ($) => ['imagescale', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.imagescale => {
                                switch ($[0]) {
                                    case 'false':
                                        return p_.ss(
                                            $,
                                            ($) => ['false', null],
                                        )
                                    case 'true':
                                        return p_.ss(
                                            $,
                                            ($) => ['true', null],
                                        )
                                    case 'width':
                                        return p_.ss(
                                            $,
                                            ($) => ['width', null],
                                        )
                                    case 'height':
                                        return p_.ss(
                                            $,
                                            ($) => ['height', null],
                                        )
                                    case 'both':
                                        return p_.ss(
                                            $,
                                            ($) => ['both', null],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'group':
                    return p_.ss(
                        $,
                        ($) => ['group', $],
                    )
                case 'sortv':
                    return p_.ss(
                        $,
                        ($) => ['sortv', $],
                    )
                case 'area':
                    return p_.ss(
                        $,
                        ($) => ['area', $],
                    )
                case 'z':
                    return p_.ss(
                        $,
                        ($) => ['z', $],
                    )
                case 'margin':
                    return p_.ss(
                        $,
                        ($) => ['margin', $],
                    )
                case 'arrowhead':
                    return p_.ss(
                        $,
                        ($) => ['arrowhead', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.arrowhead => {
                                switch ($[0]) {
                                    case 'normal':
                                        return p_.ss(
                                            $,
                                            ($) => ['normal', null],
                                        )
                                    case 'box':
                                        return p_.ss(
                                            $,
                                            ($) => ['box', null],
                                        )
                                    case 'crow':
                                        return p_.ss(
                                            $,
                                            ($) => ['crow', null],
                                        )
                                    case 'diamond':
                                        return p_.ss(
                                            $,
                                            ($) => ['diamond', null],
                                        )
                                    case 'dot':
                                        return p_.ss(
                                            $,
                                            ($) => ['dot', null],
                                        )
                                    case 'inv':
                                        return p_.ss(
                                            $,
                                            ($) => ['inv', null],
                                        )
                                    case 'none':
                                        return p_.ss(
                                            $,
                                            ($) => ['none', null],
                                        )
                                    case 'tee':
                                        return p_.ss(
                                            $,
                                            ($) => ['tee', null],
                                        )
                                    case 'vee':
                                        return p_.ss(
                                            $,
                                            ($) => ['vee', null],
                                        )
                                    case 'open':
                                        return p_.ss(
                                            $,
                                            ($) => ['open', null],
                                        )
                                    case 'halfopen':
                                        return p_.ss(
                                            $,
                                            ($) => ['halfopen', null],
                                        )
                                    case 'empty':
                                        return p_.ss(
                                            $,
                                            ($) => ['empty', null],
                                        )
                                    case 'invempty':
                                        return p_.ss(
                                            $,
                                            ($) => ['invempty', null],
                                        )
                                    case 'odiamond':
                                        return p_.ss(
                                            $,
                                            ($) => ['odiamond', null],
                                        )
                                    case 'odot':
                                        return p_.ss(
                                            $,
                                            ($) => ['odot', null],
                                        )
                                    case 'obox':
                                        return p_.ss(
                                            $,
                                            ($) => ['obox', null],
                                        )
                                    case 'custom':
                                        return p_.ss(
                                            $,
                                            ($) => ['custom', $],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'arrowtail':
                    return p_.ss(
                        $,
                        ($) => ['arrowtail', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.arrowtail => {
                                switch ($[0]) {
                                    case 'normal':
                                        return p_.ss(
                                            $,
                                            ($) => ['normal', null],
                                        )
                                    case 'box':
                                        return p_.ss(
                                            $,
                                            ($) => ['box', null],
                                        )
                                    case 'crow':
                                        return p_.ss(
                                            $,
                                            ($) => ['crow', null],
                                        )
                                    case 'diamond':
                                        return p_.ss(
                                            $,
                                            ($) => ['diamond', null],
                                        )
                                    case 'dot':
                                        return p_.ss(
                                            $,
                                            ($) => ['dot', null],
                                        )
                                    case 'inv':
                                        return p_.ss(
                                            $,
                                            ($) => ['inv', null],
                                        )
                                    case 'none':
                                        return p_.ss(
                                            $,
                                            ($) => ['none', null],
                                        )
                                    case 'tee':
                                        return p_.ss(
                                            $,
                                            ($) => ['tee', null],
                                        )
                                    case 'vee':
                                        return p_.ss(
                                            $,
                                            ($) => ['vee', null],
                                        )
                                    case 'open':
                                        return p_.ss(
                                            $,
                                            ($) => ['open', null],
                                        )
                                    case 'halfopen':
                                        return p_.ss(
                                            $,
                                            ($) => ['halfopen', null],
                                        )
                                    case 'empty':
                                        return p_.ss(
                                            $,
                                            ($) => ['empty', null],
                                        )
                                    case 'invempty':
                                        return p_.ss(
                                            $,
                                            ($) => ['invempty', null],
                                        )
                                    case 'odiamond':
                                        return p_.ss(
                                            $,
                                            ($) => ['odiamond', null],
                                        )
                                    case 'odot':
                                        return p_.ss(
                                            $,
                                            ($) => ['odot', null],
                                        )
                                    case 'obox':
                                        return p_.ss(
                                            $,
                                            ($) => ['obox', null],
                                        )
                                    case 'custom':
                                        return p_.ss(
                                            $,
                                            ($) => ['custom', $],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'arrowsize':
                    return p_.ss(
                        $,
                        ($) => ['arrowsize', $],
                    )
                case 'dir':
                    return p_.ss(
                        $,
                        ($) => ['dir', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.dir => {
                                switch ($[0]) {
                                    case 'forward':
                                        return p_.ss(
                                            $,
                                            ($) => ['forward', null],
                                        )
                                    case 'back':
                                        return p_.ss(
                                            $,
                                            ($) => ['back', null],
                                        )
                                    case 'both':
                                        return p_.ss(
                                            $,
                                            ($) => ['both', null],
                                        )
                                    case 'none':
                                        return p_.ss(
                                            $,
                                            ($) => ['none', null],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'headlabel':
                    return p_.ss(
                        $,
                        ($) => ['headlabel', $],
                    )
                case 'taillabel':
                    return p_.ss(
                        $,
                        ($) => ['taillabel', $],
                    )
                case 'labelfontcolor':
                    return p_.ss(
                        $,
                        ($) => ['labelfontcolor', $],
                    )
                case 'labelfontname':
                    return p_.ss(
                        $,
                        ($) => ['labelfontname', $],
                    )
                case 'labelfontsize':
                    return p_.ss(
                        $,
                        ($) => ['labelfontsize', $],
                    )
                case 'labelangle':
                    return p_.ss(
                        $,
                        ($) => ['labelangle', $],
                    )
                case 'labeldistance':
                    return p_.ss(
                        $,
                        ($) => ['labeldistance', $],
                    )
                case 'labelfloat':
                    return p_.ss(
                        $,
                        ($) => ['labelfloat', $],
                    )
                case 'weight':
                    return p_.ss(
                        $,
                        ($) => ['weight', $],
                    )
                case 'len':
                    return p_.ss(
                        $,
                        ($) => ['len', $],
                    )
                case 'minlen':
                    return p_.ss(
                        $,
                        ($) => ['minlen', $],
                    )
                case 'constraint':
                    return p_.ss(
                        $,
                        ($) => ['constraint', $],
                    )
                case 'decorate':
                    return p_.ss(
                        $,
                        ($) => ['decorate', $],
                    )
                case 'headport':
                    return p_.ss(
                        $,
                        ($) => ['headport', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.headport => {
                                switch ($[0]) {
                                    case 'center':
                                        return p_.ss(
                                            $,
                                            ($) => ['center', null],
                                        )
                                    case 'n':
                                        return p_.ss(
                                            $,
                                            ($) => ['n', null],
                                        )
                                    case 'ne':
                                        return p_.ss(
                                            $,
                                            ($) => ['ne', null],
                                        )
                                    case 'e':
                                        return p_.ss(
                                            $,
                                            ($) => ['e', null],
                                        )
                                    case 'se':
                                        return p_.ss(
                                            $,
                                            ($) => ['se', null],
                                        )
                                    case 's':
                                        return p_.ss(
                                            $,
                                            ($) => ['s', null],
                                        )
                                    case 'sw':
                                        return p_.ss(
                                            $,
                                            ($) => ['sw', null],
                                        )
                                    case 'w':
                                        return p_.ss(
                                            $,
                                            ($) => ['w', null],
                                        )
                                    case 'nw':
                                        return p_.ss(
                                            $,
                                            ($) => ['nw', null],
                                        )
                                    case 'custom':
                                        return p_.ss(
                                            $,
                                            ($) => ['custom', $],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'tailport':
                    return p_.ss(
                        $,
                        ($) => ['tailport', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.tailport => {
                                switch ($[0]) {
                                    case 'center':
                                        return p_.ss(
                                            $,
                                            ($) => ['center', null],
                                        )
                                    case 'n':
                                        return p_.ss(
                                            $,
                                            ($) => ['n', null],
                                        )
                                    case 'ne':
                                        return p_.ss(
                                            $,
                                            ($) => ['ne', null],
                                        )
                                    case 'e':
                                        return p_.ss(
                                            $,
                                            ($) => ['e', null],
                                        )
                                    case 'se':
                                        return p_.ss(
                                            $,
                                            ($) => ['se', null],
                                        )
                                    case 's':
                                        return p_.ss(
                                            $,
                                            ($) => ['s', null],
                                        )
                                    case 'sw':
                                        return p_.ss(
                                            $,
                                            ($) => ['sw', null],
                                        )
                                    case 'w':
                                        return p_.ss(
                                            $,
                                            ($) => ['w', null],
                                        )
                                    case 'nw':
                                        return p_.ss(
                                            $,
                                            ($) => ['nw', null],
                                        )
                                    case 'custom':
                                        return p_.ss(
                                            $,
                                            ($) => ['custom', $],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'headclip':
                    return p_.ss(
                        $,
                        ($) => ['headclip', $],
                    )
                case 'tailclip':
                    return p_.ss(
                        $,
                        ($) => ['tailclip', $],
                    )
                case 'lhead':
                    return p_.ss(
                        $,
                        ($) => ['lhead', $],
                    )
                case 'ltail':
                    return p_.ss(
                        $,
                        ($) => ['ltail', $],
                    )
                case 'samehead':
                    return p_.ss(
                        $,
                        ($) => ['samehead', $],
                    )
                case 'sametail':
                    return p_.ss(
                        $,
                        ($) => ['sametail', $],
                    )
                case 'edgeURL':
                    return p_.ss(
                        $,
                        ($) => ['edgeURL', $],
                    )
                case 'headURL':
                    return p_.ss(
                        $,
                        ($) => ['headURL', $],
                    )
                case 'tailURL':
                    return p_.ss(
                        $,
                        ($) => ['tailURL', $],
                    )
                case 'labelURL':
                    return p_.ss(
                        $,
                        ($) => ['labelURL', $],
                    )
                case 'edgehref':
                    return p_.ss(
                        $,
                        ($) => ['edgehref', $],
                    )
                case 'headhref':
                    return p_.ss(
                        $,
                        ($) => ['headhref', $],
                    )
                case 'tailhref':
                    return p_.ss(
                        $,
                        ($) => ['tailhref', $],
                    )
                case 'labelhref':
                    return p_.ss(
                        $,
                        ($) => ['labelhref', $],
                    )
                case 'edgetarget':
                    return p_.ss(
                        $,
                        ($) => ['edgetarget', $],
                    )
                case 'headtarget':
                    return p_.ss(
                        $,
                        ($) => ['headtarget', $],
                    )
                case 'tailtarget':
                    return p_.ss(
                        $,
                        ($) => ['tailtarget', $],
                    )
                case 'edgetooltip':
                    return p_.ss(
                        $,
                        ($) => ['edgetooltip', $],
                    )
                case 'headtooltip':
                    return p_.ss(
                        $,
                        ($) => ['headtooltip', $],
                    )
                case 'tailtooltip':
                    return p_.ss(
                        $,
                        ($) => ['tailtooltip', $],
                    )
                case 'labeltooltip':
                    return p_.ss(
                        $,
                        ($) => ['labeltooltip', $],
                    )
                case 'radius':
                    return p_.ss(
                        $,
                        ($) => ['radius', $],
                    )
                case 'splines':
                    return p_.ss(
                        $,
                        ($) => ['splines', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.splines => {
                                switch ($[0]) {
                                    case 'true':
                                        return p_.ss(
                                            $,
                                            ($) => ['true', null],
                                        )
                                    case 'false':
                                        return p_.ss(
                                            $,
                                            ($) => ['false', null],
                                        )
                                    case 'none':
                                        return p_.ss(
                                            $,
                                            ($) => ['none', null],
                                        )
                                    case 'line':
                                        return p_.ss(
                                            $,
                                            ($) => ['line', null],
                                        )
                                    case 'spline':
                                        return p_.ss(
                                            $,
                                            ($) => ['spline', null],
                                        )
                                    case 'polyline':
                                        return p_.ss(
                                            $,
                                            ($) => ['polyline', null],
                                        )
                                    case 'ortho':
                                        return p_.ss(
                                            $,
                                            ($) => ['ortho', null],
                                        )
                                    case 'curved':
                                        return p_.ss(
                                            $,
                                            ($) => ['curved', null],
                                        )
                                    case 'compound':
                                        return p_.ss(
                                            $,
                                            ($) => ['compound', null],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'pos':
                    return p_.ss(
                        $,
                        ($) => ['pos', $],
                    )
                case 'xlabel':
                    return p_.ss(
                        $,
                        ($) => ['xlabel', $],
                    )
                case 'layer':
                    return p_.ss(
                        $,
                        ($) => ['layer', $],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
)
