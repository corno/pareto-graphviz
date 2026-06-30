
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/attributes/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/attributes/data"

import * as v_html from "../../html/transformers/boilerplate_for_migrate"

export const Attributes: t_signatures.Attributes = ($) => p_.from.list($,
).map(
    ($) => p_decide_state(
        $,
        ($): t_out.Attributes.L => {
            switch ($[0]) {
                case 'freeform':
                    return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['color', $],
                    )
                case 'fillcolor':
                    return p_.option(
                        $,
                        ($) => ['fillcolor', $],
                    )
                case 'penwidth':
                    return p_.option(
                        $,
                        ($) => ['penwidth', $],
                    )
                case 'label':
                    return p_.option(
                        $,
                        ($) => ['label', $],
                    )
                case 'fontcolor':
                    return p_.option(
                        $,
                        ($) => ['fontcolor', $],
                    )
                case 'fontname':
                    return p_.option(
                        $,
                        ($) => ['fontname', $],
                    )
                case 'fontsize':
                    return p_.option(
                        $,
                        ($) => ['fontsize', $],
                    )
                case 'URL':
                    return p_.option(
                        $,
                        ($) => ['URL', $],
                    )
                case 'href':
                    return p_.option(
                        $,
                        ($) => ['href', $],
                    )
                case 'target':
                    return p_.option(
                        $,
                        ($) => ['target', $],
                    )
                case 'tooltip':
                    return p_.option(
                        $,
                        ($) => ['tooltip', $],
                    )
                case 'id':
                    return p_.option(
                        $,
                        ($) => ['id', $],
                    )
                case 'class':
                    return p_.option(
                        $,
                        ($) => ['class', $],
                    )
                case 'comment':
                    return p_.option(
                        $,
                        ($) => ['comment', $],
                    )
                case 'style':
                    return p_.option(
                        $,
                        ($) => ['style', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.style => {
                                switch ($[0]) {
                                    case 'filled':
                                        return p_.option(
                                            $,
                                            ($) => ['filled', null],
                                        )
                                    case 'rounded':
                                        return p_.option(
                                            $,
                                            ($) => ['rounded', null],
                                        )
                                    case 'bold':
                                        return p_.option(
                                            $,
                                            ($) => ['bold', null],
                                        )
                                    case 'solid':
                                        return p_.option(
                                            $,
                                            ($) => ['solid', null],
                                        )
                                    case 'dashed':
                                        return p_.option(
                                            $,
                                            ($) => ['dashed', null],
                                        )
                                    case 'dotted':
                                        return p_.option(
                                            $,
                                            ($) => ['dotted', null],
                                        )
                                    case 'striped':
                                        return p_.option(
                                            $,
                                            ($) => ['striped', null],
                                        )
                                    case 'wedged':
                                        return p_.option(
                                            $,
                                            ($) => ['wedged', null],
                                        )
                                    case 'diagonals':
                                        return p_.option(
                                            $,
                                            ($) => ['diagonals', null],
                                        )
                                    case 'invis':
                                        return p_.option(
                                            $,
                                            ($) => ['invis', null],
                                        )
                                    case 'tapered':
                                        return p_.option(
                                            $,
                                            ($) => ['tapered', null],
                                        )
                                    case 'custom':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['layout', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.layout => {
                                switch ($[0]) {
                                    case 'dot':
                                        return p_.option(
                                            $,
                                            ($) => ['dot', null],
                                        )
                                    case 'neato':
                                        return p_.option(
                                            $,
                                            ($) => ['neato', null],
                                        )
                                    case 'fdp':
                                        return p_.option(
                                            $,
                                            ($) => ['fdp', null],
                                        )
                                    case 'sfdp':
                                        return p_.option(
                                            $,
                                            ($) => ['sfdp', null],
                                        )
                                    case 'twopi':
                                        return p_.option(
                                            $,
                                            ($) => ['twopi', null],
                                        )
                                    case 'circo':
                                        return p_.option(
                                            $,
                                            ($) => ['circo', null],
                                        )
                                    case 'custom':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['rankdir', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.rankdir => {
                                switch ($[0]) {
                                    case 'TB':
                                        return p_.option(
                                            $,
                                            ($) => ['TB', null],
                                        )
                                    case 'BT':
                                        return p_.option(
                                            $,
                                            ($) => ['BT', null],
                                        )
                                    case 'LR':
                                        return p_.option(
                                            $,
                                            ($) => ['LR', null],
                                        )
                                    case 'RL':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['bgcolor', $],
                    )
                case 'labelloc':
                    return p_.option(
                        $,
                        ($) => ['labelloc', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.labelloc => {
                                switch ($[0]) {
                                    case 't':
                                        return p_.option(
                                            $,
                                            ($) => ['t', null],
                                        )
                                    case 'b':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['labeljust', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.labeljust => {
                                switch ($[0]) {
                                    case 'l':
                                        return p_.option(
                                            $,
                                            ($) => ['l', null],
                                        )
                                    case 'c':
                                        return p_.option(
                                            $,
                                            ($) => ['c', null],
                                        )
                                    case 'r':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['size', $],
                    )
                case 'ratio':
                    return p_.option(
                        $,
                        ($) => ['ratio', $],
                    )
                case 'pad':
                    return p_.option(
                        $,
                        ($) => ['pad', $],
                    )
                case 'nodesep':
                    return p_.option(
                        $,
                        ($) => ['nodesep', $],
                    )
                case 'ranksep':
                    return p_.option(
                        $,
                        ($) => ['ranksep', $],
                    )
                case 'dpi':
                    return p_.option(
                        $,
                        ($) => ['dpi', $],
                    )
                case 'overlap':
                    return p_.option(
                        $,
                        ($) => ['overlap', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.overlap => {
                                switch ($[0]) {
                                    case 'true':
                                        return p_.option(
                                            $,
                                            ($) => ['true', null],
                                        )
                                    case 'false':
                                        return p_.option(
                                            $,
                                            ($) => ['false', null],
                                        )
                                    case 'scale':
                                        return p_.option(
                                            $,
                                            ($) => ['scale', null],
                                        )
                                    case 'scalexy':
                                        return p_.option(
                                            $,
                                            ($) => ['scalexy', null],
                                        )
                                    case 'orthoxy':
                                        return p_.option(
                                            $,
                                            ($) => ['orthoxy', null],
                                        )
                                    case 'orthoyx':
                                        return p_.option(
                                            $,
                                            ($) => ['orthoyx', null],
                                        )
                                    case 'compress':
                                        return p_.option(
                                            $,
                                            ($) => ['compress', null],
                                        )
                                    case 'vpsc':
                                        return p_.option(
                                            $,
                                            ($) => ['vpsc', null],
                                        )
                                    case 'ipsep':
                                        return p_.option(
                                            $,
                                            ($) => ['ipsep', null],
                                        )
                                    case 'prism':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['pack', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.pack => {
                                switch ($[0]) {
                                    case 'true':
                                        return p_.option(
                                            $,
                                            ($) => ['true', null],
                                        )
                                    case 'false':
                                        return p_.option(
                                            $,
                                            ($) => ['false', null],
                                        )
                                    case 'custom':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['packmode', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.packmode => {
                                switch ($[0]) {
                                    case 'node':
                                        return p_.option(
                                            $,
                                            ($) => ['node', null],
                                        )
                                    case 'clust':
                                        return p_.option(
                                            $,
                                            ($) => ['clust', null],
                                        )
                                    case 'graph':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['concentrate', $],
                    )
                case 'compound':
                    return p_.option(
                        $,
                        ($) => ['compound', $],
                    )
                case 'center':
                    return p_.option(
                        $,
                        ($) => ['center', $],
                    )
                case 'normalize':
                    return p_.option(
                        $,
                        ($) => ['normalize', $],
                    )
                case 'landscape':
                    return p_.option(
                        $,
                        ($) => ['landscape', $],
                    )
                case 'outputorder':
                    return p_.option(
                        $,
                        ($) => ['outputorder', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.outputorder => {
                                switch ($[0]) {
                                    case 'breadthfirst':
                                        return p_.option(
                                            $,
                                            ($) => ['breadthfirst', null],
                                        )
                                    case 'nodesfirst':
                                        return p_.option(
                                            $,
                                            ($) => ['nodesfirst', null],
                                        )
                                    case 'edgesfirst':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['charset', $],
                    )
                case 'clusterrank':
                    return p_.option(
                        $,
                        ($) => ['clusterrank', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.clusterrank => {
                                switch ($[0]) {
                                    case 'local':
                                        return p_.option(
                                            $,
                                            ($) => ['local', null],
                                        )
                                    case 'global':
                                        return p_.option(
                                            $,
                                            ($) => ['global', null],
                                        )
                                    case 'none':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['shape', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.shape => {
                                switch ($[0]) {
                                    case 'box':
                                        return p_.option(
                                            $,
                                            ($) => ['box', null],
                                        )
                                    case 'circle':
                                        return p_.option(
                                            $,
                                            ($) => ['circle', null],
                                        )
                                    case 'ellipse':
                                        return p_.option(
                                            $,
                                            ($) => ['ellipse', null],
                                        )
                                    case 'oval':
                                        return p_.option(
                                            $,
                                            ($) => ['oval', null],
                                        )
                                    case 'point':
                                        return p_.option(
                                            $,
                                            ($) => ['point', null],
                                        )
                                    case 'egg':
                                        return p_.option(
                                            $,
                                            ($) => ['egg', null],
                                        )
                                    case 'triangle':
                                        return p_.option(
                                            $,
                                            ($) => ['triangle', null],
                                        )
                                    case 'plaintext':
                                        return p_.option(
                                            $,
                                            ($) => ['plaintext', null],
                                        )
                                    case 'plain':
                                        return p_.option(
                                            $,
                                            ($) => ['plain', null],
                                        )
                                    case 'diamond':
                                        return p_.option(
                                            $,
                                            ($) => ['diamond', null],
                                        )
                                    case 'trapezium':
                                        return p_.option(
                                            $,
                                            ($) => ['trapezium', null],
                                        )
                                    case 'parallelogram':
                                        return p_.option(
                                            $,
                                            ($) => ['parallelogram', null],
                                        )
                                    case 'house':
                                        return p_.option(
                                            $,
                                            ($) => ['house', null],
                                        )
                                    case 'pentagon':
                                        return p_.option(
                                            $,
                                            ($) => ['pentagon', null],
                                        )
                                    case 'hexagon':
                                        return p_.option(
                                            $,
                                            ($) => ['hexagon', null],
                                        )
                                    case 'septagon':
                                        return p_.option(
                                            $,
                                            ($) => ['septagon', null],
                                        )
                                    case 'octagon':
                                        return p_.option(
                                            $,
                                            ($) => ['octagon', null],
                                        )
                                    case 'polygon':
                                        return p_.option(
                                            $,
                                            ($) => ['polygon', null],
                                        )
                                    case 'record':
                                        return p_.option(
                                            $,
                                            ($) => ['record', null],
                                        )
                                    case 'Mrecord':
                                        return p_.option(
                                            $,
                                            ($) => ['Mrecord', null],
                                        )
                                    case 'custom':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['width', $],
                    )
                case 'height':
                    return p_.option(
                        $,
                        ($) => ['height', $],
                    )
                case 'fixedsize':
                    return p_.option(
                        $,
                        ($) => ['fixedsize', $],
                    )
                case 'regular':
                    return p_.option(
                        $,
                        ($) => ['regular', $],
                    )
                case 'sides':
                    return p_.option(
                        $,
                        ($) => ['sides', $],
                    )
                case 'skew':
                    return p_.option(
                        $,
                        ($) => ['skew', $],
                    )
                case 'distortion':
                    return p_.option(
                        $,
                        ($) => ['distortion', $],
                    )
                case 'orientation':
                    return p_.option(
                        $,
                        ($) => ['orientation', $],
                    )
                case 'peripheries':
                    return p_.option(
                        $,
                        ($) => ['peripheries', $],
                    )
                case 'pin':
                    return p_.option(
                        $,
                        ($) => ['pin', $],
                    )
                case 'image':
                    return p_.option(
                        $,
                        ($) => ['image', $],
                    )
                case 'imagepos':
                    return p_.option(
                        $,
                        ($) => ['imagepos', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.imagepos => {
                                switch ($[0]) {
                                    case 'tl':
                                        return p_.option(
                                            $,
                                            ($) => ['tl', null],
                                        )
                                    case 'tc':
                                        return p_.option(
                                            $,
                                            ($) => ['tc', null],
                                        )
                                    case 'tr':
                                        return p_.option(
                                            $,
                                            ($) => ['tr', null],
                                        )
                                    case 'ml':
                                        return p_.option(
                                            $,
                                            ($) => ['ml', null],
                                        )
                                    case 'mc':
                                        return p_.option(
                                            $,
                                            ($) => ['mc', null],
                                        )
                                    case 'mr':
                                        return p_.option(
                                            $,
                                            ($) => ['mr', null],
                                        )
                                    case 'bl':
                                        return p_.option(
                                            $,
                                            ($) => ['bl', null],
                                        )
                                    case 'bc':
                                        return p_.option(
                                            $,
                                            ($) => ['bc', null],
                                        )
                                    case 'br':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['imagescale', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.imagescale => {
                                switch ($[0]) {
                                    case 'false':
                                        return p_.option(
                                            $,
                                            ($) => ['false', null],
                                        )
                                    case 'true':
                                        return p_.option(
                                            $,
                                            ($) => ['true', null],
                                        )
                                    case 'width':
                                        return p_.option(
                                            $,
                                            ($) => ['width', null],
                                        )
                                    case 'height':
                                        return p_.option(
                                            $,
                                            ($) => ['height', null],
                                        )
                                    case 'both':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['group', $],
                    )
                case 'sortv':
                    return p_.option(
                        $,
                        ($) => ['sortv', $],
                    )
                case 'area':
                    return p_.option(
                        $,
                        ($) => ['area', $],
                    )
                case 'z':
                    return p_.option(
                        $,
                        ($) => ['z', $],
                    )
                case 'margin':
                    return p_.option(
                        $,
                        ($) => ['margin', $],
                    )
                case 'arrowhead':
                    return p_.option(
                        $,
                        ($) => ['arrowhead', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.arrowhead => {
                                switch ($[0]) {
                                    case 'normal':
                                        return p_.option(
                                            $,
                                            ($) => ['normal', null],
                                        )
                                    case 'box':
                                        return p_.option(
                                            $,
                                            ($) => ['box', null],
                                        )
                                    case 'crow':
                                        return p_.option(
                                            $,
                                            ($) => ['crow', null],
                                        )
                                    case 'diamond':
                                        return p_.option(
                                            $,
                                            ($) => ['diamond', null],
                                        )
                                    case 'dot':
                                        return p_.option(
                                            $,
                                            ($) => ['dot', null],
                                        )
                                    case 'inv':
                                        return p_.option(
                                            $,
                                            ($) => ['inv', null],
                                        )
                                    case 'none':
                                        return p_.option(
                                            $,
                                            ($) => ['none', null],
                                        )
                                    case 'tee':
                                        return p_.option(
                                            $,
                                            ($) => ['tee', null],
                                        )
                                    case 'vee':
                                        return p_.option(
                                            $,
                                            ($) => ['vee', null],
                                        )
                                    case 'open':
                                        return p_.option(
                                            $,
                                            ($) => ['open', null],
                                        )
                                    case 'halfopen':
                                        return p_.option(
                                            $,
                                            ($) => ['halfopen', null],
                                        )
                                    case 'empty':
                                        return p_.option(
                                            $,
                                            ($) => ['empty', null],
                                        )
                                    case 'invempty':
                                        return p_.option(
                                            $,
                                            ($) => ['invempty', null],
                                        )
                                    case 'odiamond':
                                        return p_.option(
                                            $,
                                            ($) => ['odiamond', null],
                                        )
                                    case 'odot':
                                        return p_.option(
                                            $,
                                            ($) => ['odot', null],
                                        )
                                    case 'obox':
                                        return p_.option(
                                            $,
                                            ($) => ['obox', null],
                                        )
                                    case 'custom':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['arrowtail', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.arrowtail => {
                                switch ($[0]) {
                                    case 'normal':
                                        return p_.option(
                                            $,
                                            ($) => ['normal', null],
                                        )
                                    case 'box':
                                        return p_.option(
                                            $,
                                            ($) => ['box', null],
                                        )
                                    case 'crow':
                                        return p_.option(
                                            $,
                                            ($) => ['crow', null],
                                        )
                                    case 'diamond':
                                        return p_.option(
                                            $,
                                            ($) => ['diamond', null],
                                        )
                                    case 'dot':
                                        return p_.option(
                                            $,
                                            ($) => ['dot', null],
                                        )
                                    case 'inv':
                                        return p_.option(
                                            $,
                                            ($) => ['inv', null],
                                        )
                                    case 'none':
                                        return p_.option(
                                            $,
                                            ($) => ['none', null],
                                        )
                                    case 'tee':
                                        return p_.option(
                                            $,
                                            ($) => ['tee', null],
                                        )
                                    case 'vee':
                                        return p_.option(
                                            $,
                                            ($) => ['vee', null],
                                        )
                                    case 'open':
                                        return p_.option(
                                            $,
                                            ($) => ['open', null],
                                        )
                                    case 'halfopen':
                                        return p_.option(
                                            $,
                                            ($) => ['halfopen', null],
                                        )
                                    case 'empty':
                                        return p_.option(
                                            $,
                                            ($) => ['empty', null],
                                        )
                                    case 'invempty':
                                        return p_.option(
                                            $,
                                            ($) => ['invempty', null],
                                        )
                                    case 'odiamond':
                                        return p_.option(
                                            $,
                                            ($) => ['odiamond', null],
                                        )
                                    case 'odot':
                                        return p_.option(
                                            $,
                                            ($) => ['odot', null],
                                        )
                                    case 'obox':
                                        return p_.option(
                                            $,
                                            ($) => ['obox', null],
                                        )
                                    case 'custom':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['arrowsize', $],
                    )
                case 'dir':
                    return p_.option(
                        $,
                        ($) => ['dir', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.dir => {
                                switch ($[0]) {
                                    case 'forward':
                                        return p_.option(
                                            $,
                                            ($) => ['forward', null],
                                        )
                                    case 'back':
                                        return p_.option(
                                            $,
                                            ($) => ['back', null],
                                        )
                                    case 'both':
                                        return p_.option(
                                            $,
                                            ($) => ['both', null],
                                        )
                                    case 'none':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['headlabel', $],
                    )
                case 'taillabel':
                    return p_.option(
                        $,
                        ($) => ['taillabel', $],
                    )
                case 'labelfontcolor':
                    return p_.option(
                        $,
                        ($) => ['labelfontcolor', $],
                    )
                case 'labelfontname':
                    return p_.option(
                        $,
                        ($) => ['labelfontname', $],
                    )
                case 'labelfontsize':
                    return p_.option(
                        $,
                        ($) => ['labelfontsize', $],
                    )
                case 'labelangle':
                    return p_.option(
                        $,
                        ($) => ['labelangle', $],
                    )
                case 'labeldistance':
                    return p_.option(
                        $,
                        ($) => ['labeldistance', $],
                    )
                case 'labelfloat':
                    return p_.option(
                        $,
                        ($) => ['labelfloat', $],
                    )
                case 'weight':
                    return p_.option(
                        $,
                        ($) => ['weight', $],
                    )
                case 'len':
                    return p_.option(
                        $,
                        ($) => ['len', $],
                    )
                case 'minlen':
                    return p_.option(
                        $,
                        ($) => ['minlen', $],
                    )
                case 'constraint':
                    return p_.option(
                        $,
                        ($) => ['constraint', $],
                    )
                case 'decorate':
                    return p_.option(
                        $,
                        ($) => ['decorate', $],
                    )
                case 'headport':
                    return p_.option(
                        $,
                        ($) => ['headport', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.headport => {
                                switch ($[0]) {
                                    case 'center':
                                        return p_.option(
                                            $,
                                            ($) => ['center', null],
                                        )
                                    case 'n':
                                        return p_.option(
                                            $,
                                            ($) => ['n', null],
                                        )
                                    case 'ne':
                                        return p_.option(
                                            $,
                                            ($) => ['ne', null],
                                        )
                                    case 'e':
                                        return p_.option(
                                            $,
                                            ($) => ['e', null],
                                        )
                                    case 'se':
                                        return p_.option(
                                            $,
                                            ($) => ['se', null],
                                        )
                                    case 's':
                                        return p_.option(
                                            $,
                                            ($) => ['s', null],
                                        )
                                    case 'sw':
                                        return p_.option(
                                            $,
                                            ($) => ['sw', null],
                                        )
                                    case 'w':
                                        return p_.option(
                                            $,
                                            ($) => ['w', null],
                                        )
                                    case 'nw':
                                        return p_.option(
                                            $,
                                            ($) => ['nw', null],
                                        )
                                    case 'custom':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['tailport', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.tailport => {
                                switch ($[0]) {
                                    case 'center':
                                        return p_.option(
                                            $,
                                            ($) => ['center', null],
                                        )
                                    case 'n':
                                        return p_.option(
                                            $,
                                            ($) => ['n', null],
                                        )
                                    case 'ne':
                                        return p_.option(
                                            $,
                                            ($) => ['ne', null],
                                        )
                                    case 'e':
                                        return p_.option(
                                            $,
                                            ($) => ['e', null],
                                        )
                                    case 'se':
                                        return p_.option(
                                            $,
                                            ($) => ['se', null],
                                        )
                                    case 's':
                                        return p_.option(
                                            $,
                                            ($) => ['s', null],
                                        )
                                    case 'sw':
                                        return p_.option(
                                            $,
                                            ($) => ['sw', null],
                                        )
                                    case 'w':
                                        return p_.option(
                                            $,
                                            ($) => ['w', null],
                                        )
                                    case 'nw':
                                        return p_.option(
                                            $,
                                            ($) => ['nw', null],
                                        )
                                    case 'custom':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['headclip', $],
                    )
                case 'tailclip':
                    return p_.option(
                        $,
                        ($) => ['tailclip', $],
                    )
                case 'lhead':
                    return p_.option(
                        $,
                        ($) => ['lhead', $],
                    )
                case 'ltail':
                    return p_.option(
                        $,
                        ($) => ['ltail', $],
                    )
                case 'samehead':
                    return p_.option(
                        $,
                        ($) => ['samehead', $],
                    )
                case 'sametail':
                    return p_.option(
                        $,
                        ($) => ['sametail', $],
                    )
                case 'edgeURL':
                    return p_.option(
                        $,
                        ($) => ['edgeURL', $],
                    )
                case 'headURL':
                    return p_.option(
                        $,
                        ($) => ['headURL', $],
                    )
                case 'tailURL':
                    return p_.option(
                        $,
                        ($) => ['tailURL', $],
                    )
                case 'labelURL':
                    return p_.option(
                        $,
                        ($) => ['labelURL', $],
                    )
                case 'edgehref':
                    return p_.option(
                        $,
                        ($) => ['edgehref', $],
                    )
                case 'headhref':
                    return p_.option(
                        $,
                        ($) => ['headhref', $],
                    )
                case 'tailhref':
                    return p_.option(
                        $,
                        ($) => ['tailhref', $],
                    )
                case 'labelhref':
                    return p_.option(
                        $,
                        ($) => ['labelhref', $],
                    )
                case 'edgetarget':
                    return p_.option(
                        $,
                        ($) => ['edgetarget', $],
                    )
                case 'headtarget':
                    return p_.option(
                        $,
                        ($) => ['headtarget', $],
                    )
                case 'tailtarget':
                    return p_.option(
                        $,
                        ($) => ['tailtarget', $],
                    )
                case 'edgetooltip':
                    return p_.option(
                        $,
                        ($) => ['edgetooltip', $],
                    )
                case 'headtooltip':
                    return p_.option(
                        $,
                        ($) => ['headtooltip', $],
                    )
                case 'tailtooltip':
                    return p_.option(
                        $,
                        ($) => ['tailtooltip', $],
                    )
                case 'labeltooltip':
                    return p_.option(
                        $,
                        ($) => ['labeltooltip', $],
                    )
                case 'radius':
                    return p_.option(
                        $,
                        ($) => ['radius', $],
                    )
                case 'splines':
                    return p_.option(
                        $,
                        ($) => ['splines', p_decide_state(
                            $,
                            ($): t_out.Attributes.L.splines => {
                                switch ($[0]) {
                                    case 'true':
                                        return p_.option(
                                            $,
                                            ($) => ['true', null],
                                        )
                                    case 'false':
                                        return p_.option(
                                            $,
                                            ($) => ['false', null],
                                        )
                                    case 'none':
                                        return p_.option(
                                            $,
                                            ($) => ['none', null],
                                        )
                                    case 'line':
                                        return p_.option(
                                            $,
                                            ($) => ['line', null],
                                        )
                                    case 'spline':
                                        return p_.option(
                                            $,
                                            ($) => ['spline', null],
                                        )
                                    case 'polyline':
                                        return p_.option(
                                            $,
                                            ($) => ['polyline', null],
                                        )
                                    case 'ortho':
                                        return p_.option(
                                            $,
                                            ($) => ['ortho', null],
                                        )
                                    case 'curved':
                                        return p_.option(
                                            $,
                                            ($) => ['curved', null],
                                        )
                                    case 'compound':
                                        return p_.option(
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
                    return p_.option(
                        $,
                        ($) => ['pos', $],
                    )
                case 'xlabel':
                    return p_.option(
                        $,
                        ($) => ['xlabel', $],
                    )
                case 'layer':
                    return p_.option(
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
