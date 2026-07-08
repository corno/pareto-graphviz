import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

import type * as d_in from "../../../../interface/generated/liana/schemas/attributes/data.js"
import type * as d_out from "../../../../interface/generated/liana/schemas/low_level/data.js"

type Attributes = p_i.Transformer<
    d_in.Attributes, d_out.Attributes
>

//shorthands
import * as sh from "../../../../shorthands/low_level/target.js"

const temp_boolean = ($: boolean): d_out.ID => sh.id.id($ ? "true" : "false")

export const Attributes: Attributes = ($) => p_.from.list($).map(
    ($) => p_.from.state($).decide(
        ($): d_out.Attributes.L => {
            switch ($[0]) {
                case 'freeform': return p_.option($, ($) => sh.attribute(
                    sh.id.string($.key), sh.id.string($.value)))
                case 'color': return p_.option($, ($) => sh.attribute(
                    sh.id.id("color"), sh.id.string($)))
                case 'fillcolor': return p_.option($, ($) => sh.attribute(
                    sh.id.id("fillcolor"), sh.id.string($)))
                case 'penwidth': return p_.option($, ($) => sh.attribute(
                    sh.id.id("penwidth"), sh.id.number($)))
                case 'label': return p_.option($, ($) => sh.attribute(
                    sh.id.id("label"), sh.id.string($)))
                case 'fontcolor': return p_.option($, ($) => sh.attribute(
                    sh.id.id("fontcolor"), sh.id.string($)))
                case 'fontname': return p_.option($, ($) => sh.attribute(
                    sh.id.id("fontname"), sh.id.string($)))
                case 'fontsize': return p_.option($, ($) => sh.attribute(
                    sh.id.id("fontsize"), sh.id.number($)))
                case 'URL': return p_.option($, ($) => sh.attribute(
                    sh.id.id("URL"), sh.id.string($)))
                case 'href': return p_.option($, ($) => sh.attribute(
                    sh.id.id("href"), sh.id.string($)))
                case 'target': return p_.option($, ($) => sh.attribute(
                    sh.id.id("target"), sh.id.string($)))
                case 'tooltip': return p_.option($, ($) => sh.attribute(
                    sh.id.id("tooltip"), sh.id.string($)))
                case 'id': return p_.option($, ($) => sh.attribute(
                    sh.id.id("id"), sh.id.string($)))
                case 'class': return p_.option($, ($) => sh.attribute(
                    sh.id.id("class"), sh.id.string($)))
                case 'comment': return p_.option($, ($) => sh.attribute(
                    sh.id.id("comment"), sh.id.string($)))
                case 'style': return p_.option($, ($) => sh.attribute(
                    sh.id.id("style"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'filled': return p_.option($, ($) => sh.id.id("filled"))
                                case 'rounded': return p_.option($, ($) => sh.id.id("rounded"))
                                case 'bold': return p_.option($, ($) => sh.id.id("bold"))
                                case 'solid': return p_.option($, ($) => sh.id.id("solid"))
                                case 'dashed': return p_.option($, ($) => sh.id.id("dashed"))
                                case 'dotted': return p_.option($, ($) => sh.id.id("dotted"))
                                case 'striped': return p_.option($, ($) => sh.id.id("striped"))
                                case 'wedged': return p_.option($, ($) => sh.id.id("wedged"))
                                case 'diagonals': return p_.option($, ($) => sh.id.id("diagonals"))
                                case 'invis': return p_.option($, ($) => sh.id.id("invis"))
                                case 'tapered': return p_.option($, ($) => sh.id.id("tapered"))
                                case 'custom': return p_.option($, ($) => sh.id.string($))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'layout': return p_.option($, ($) => sh.attribute(
                    sh.id.id("layout"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'dot': return p_.option($, ($) => sh.id.id("dot"))
                                case 'neato': return p_.option($, ($) => sh.id.id("neato"))
                                case 'fdp': return p_.option($, ($) => sh.id.id("fdp"))
                                case 'sfdp': return p_.option($, ($) => sh.id.id("sfdp"))
                                case 'twopi': return p_.option($, ($) => sh.id.id("twopi"))
                                case 'circo': return p_.option($, ($) => sh.id.id("circo"))
                                case 'custom': return p_.option($, ($) => sh.id.string($))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'rankdir': return p_.option($, ($) => sh.attribute(
                    sh.id.id("rankdir"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'TB': return p_.option($, ($) => sh.id.id("TB"))
                                case 'BT': return p_.option($, ($) => sh.id.id("BT"))
                                case 'LR': return p_.option($, ($) => sh.id.id("LR"))
                                case 'RL': return p_.option($, ($) => sh.id.id("RL"))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'bgcolor': return p_.option($, ($) => sh.attribute(
                    sh.id.id("bgcolor"), sh.id.string($)))
                case 'labelloc': return p_.option($, ($) => sh.attribute(
                    sh.id.id("labelloc"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 't': return p_.option($, ($) => sh.id.id("t"))
                                case 'b': return p_.option($, ($) => sh.id.id("b"))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'labeljust': return p_.option($, ($) => sh.attribute(
                    sh.id.id("labeljust"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'l': return p_.option($, ($) => sh.id.id("l"))
                                case 'c': return p_.option($, ($) => sh.id.id("c"))
                                case 'r': return p_.option($, ($) => sh.id.id("r"))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'size': return p_.option($, ($) => sh.attribute(
                    sh.id.id("size"), sh.id.string($)))
                case 'ratio': return p_.option($, ($) => sh.attribute(
                    sh.id.id("ratio"), sh.id.string($)))
                case 'pad': return p_.option($, ($) => sh.attribute(
                    sh.id.id("pad"), sh.id.string($)))
                case 'nodesep': return p_.option($, ($) => sh.attribute(
                    sh.id.id("nodesep"), sh.id.number($)))
                case 'ranksep': return p_.option($, ($) => sh.attribute(
                    sh.id.id("ranksep"), sh.id.number($)))
                case 'dpi': return p_.option($, ($) => sh.attribute(
                    sh.id.id("dpi"), sh.id.number($)))
                case 'overlap': return p_.option($, ($) => sh.attribute(
                    sh.id.id("overlap"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'true': return p_.option($, ($) => sh.id.id("true"))
                                case 'false': return p_.option($, ($) => sh.id.id("false"))
                                case 'scale': return p_.option($, ($) => sh.id.id("scale"))
                                case 'scalexy': return p_.option($, ($) => sh.id.id("scalexy"))
                                case 'orthoxy': return p_.option($, ($) => sh.id.id("orthoxy"))
                                case 'orthoyx': return p_.option($, ($) => sh.id.id("orthoyx"))
                                case 'compress': return p_.option($, ($) => sh.id.id("compress"))
                                case 'vpsc': return p_.option($, ($) => sh.id.id("vpsc"))
                                case 'ipsep': return p_.option($, ($) => sh.id.id("ipsep"))
                                case 'prism': return p_.option($, ($) => sh.id.id("prism"))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'pack': return p_.option($, ($) => sh.attribute(
                    sh.id.id("pack"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'true': return p_.option($, ($) => sh.id.id("true"))
                                case 'false': return p_.option($, ($) => sh.id.id("false"))
                                case 'custom': return p_.option($, ($) => sh.id.number($))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'packmode': return p_.option($, ($) => sh.attribute(
                    sh.id.id("packmode"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'node': return p_.option($, ($) => sh.id.id("node"))
                                case 'clust': return p_.option($, ($) => sh.id.id("clust"))
                                case 'graph': return p_.option($, ($) => sh.id.id("graph"))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'concentrate': return p_.option($, ($) => sh.attribute(
                    sh.id.id("concentrate"), temp_boolean($)))
                case 'compound': return p_.option($, ($) => sh.attribute(
                    sh.id.id("compound"), temp_boolean($)))
                case 'center': return p_.option($, ($) => sh.attribute(
                    sh.id.id("center"), temp_boolean($)))
                case 'normalize': return p_.option($, ($) => sh.attribute(
                    sh.id.id("normalize"), temp_boolean($)))
                case 'landscape': return p_.option($, ($) => sh.attribute(
                    sh.id.id("landscape"), temp_boolean($)))
                case 'outputorder': return p_.option($, ($) => sh.attribute(
                    sh.id.id("outputorder"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'breadthfirst': return p_.option($, ($) => sh.id.id("breadthfirst"))
                                case 'nodesfirst': return p_.option($, ($) => sh.id.id("nodesfirst"))
                                case 'edgesfirst': return p_.option($, ($) => sh.id.id("edgesfirst"))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'charset': return p_.option($, ($) => sh.attribute(
                    sh.id.id("charset"), sh.id.string($)))
                case 'clusterrank': return p_.option($, ($) => sh.attribute(
                    sh.id.id("clusterrank"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'local': return p_.option($, ($) => sh.id.id("local"))
                                case 'global': return p_.option($, ($) => sh.id.id("global"))
                                case 'none': return p_.option($, ($) => sh.id.id("none"))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'shape': return p_.option($, ($) => p_.from.state($).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'box': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("box")))
                            case 'circle': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("circle")))
                            case 'ellipse': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("ellipse")))
                            case 'oval': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("oval")))
                            case 'point': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("point")))
                            case 'egg': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("egg")))
                            case 'triangle': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("triangle")))
                            case 'plaintext': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("plaintext")))
                            case 'plain': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("plain")))
                            case 'diamond': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("diamond")))
                            case 'trapezium': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("trapezium")))
                            case 'parallelogram': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("parallelogram")))
                            case 'house': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("house")))
                            case 'pentagon': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("pentagon")))
                            case 'hexagon': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("hexagon")))
                            case 'septagon': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("septagon")))
                            case 'octagon': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("octagon")))
                            case 'polygon': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("polygon")))
                            case 'record': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("record")))
                            case 'Mrecord': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.id("Mrecord")))
                            case 'custom': return p_.option($, ($) => sh.attribute(
                                sh.id.id("shape"), sh.id.string($)))
                            default: return p_.exhaustive($[0])
                        }
                    }))
                case 'width': return p_.option($, ($) => sh.attribute(
                    sh.id.id("width"), sh.id.number($)))
                case 'height': return p_.option($, ($) => sh.attribute(
                    sh.id.id("height"), sh.id.number($)))
                case 'fixedsize': return p_.option($, ($) => sh.attribute(
                    sh.id.id("fixedsize"), temp_boolean($)))
                case 'regular': return p_.option($, ($) => sh.attribute(
                    sh.id.id("regular"), temp_boolean($)))
                case 'sides': return p_.option($, ($) => sh.attribute(
                    sh.id.id("sides"), sh.id.number($)))
                case 'skew': return p_.option($, ($) => sh.attribute(
                    sh.id.id("skew"), sh.id.number($)))
                case 'distortion': return p_.option($, ($) => sh.attribute(
                    sh.id.id("distortion"), sh.id.number($)))
                case 'orientation': return p_.option($, ($) => sh.attribute(
                    sh.id.id("orientation"), sh.id.number($)))
                case 'peripheries': return p_.option($, ($) => sh.attribute(
                    sh.id.id("peripheries"), sh.id.number($)))
                case 'pin': return p_.option($, ($) => sh.attribute(
                    sh.id.id("pin"), temp_boolean($)))
                case 'image': return p_.option($, ($) => sh.attribute(
                    sh.id.id("image"), sh.id.string($)))
                case 'imagepos': return p_.option($, ($) => sh.attribute(
                    sh.id.id("imagepos"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'tl': return p_.option($, ($) => sh.id.id("tl"))
                                case 'tc': return p_.option($, ($) => sh.id.id("tc"))
                                case 'tr': return p_.option($, ($) => sh.id.id("tr"))
                                case 'ml': return p_.option($, ($) => sh.id.id("ml"))
                                case 'mc': return p_.option($, ($) => sh.id.id("mc"))
                                case 'mr': return p_.option($, ($) => sh.id.id("mr"))
                                case 'bl': return p_.option($, ($) => sh.id.id("bl"))
                                case 'bc': return p_.option($, ($) => sh.id.id("bc"))
                                case 'br': return p_.option($, ($) => sh.id.id("br"))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'imagescale': return p_.option($, ($) => sh.attribute(
                    sh.id.id("imagescale"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'false': return p_.option($, ($) => sh.id.id("false"))
                                case 'true': return p_.option($, ($) => sh.id.id("true"))
                                case 'width': return p_.option($, ($) => sh.id.id("width"))
                                case 'height': return p_.option($, ($) => sh.id.id("height"))
                                case 'both': return p_.option($, ($) => sh.id.id("both"))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'group': return p_.option($, ($) => sh.attribute(
                    sh.id.id("group"), sh.id.string($)))
                case 'sortv': return p_.option($, ($) => sh.attribute(
                    sh.id.id("sortv"), sh.id.number($)))
                case 'area': return p_.option($, ($) => sh.attribute(
                    sh.id.id("area"), sh.id.number($)))
                case 'z': return p_.option($, ($) => sh.attribute(
                    sh.id.id("z"), sh.id.number($)))
                case 'margin': return p_.option($, ($) => sh.attribute(
                    sh.id.id("margin"), sh.id.string($)))
                case 'arrowhead': return p_.option($, ($) => p_.from.state($).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'normal': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("normal")))
                            case 'box': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("box")))
                            case 'crow': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("crow")))
                            case 'diamond': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("diamond")))
                            case 'dot': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("dot")))
                            case 'inv': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("inv")))
                            case 'none': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("none")))
                            case 'tee': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("tee")))
                            case 'vee': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("vee")))
                            case 'open': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("open")))
                            case 'halfopen': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("halfopen")))
                            case 'empty': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("empty")))
                            case 'invempty': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("invempty")))
                            case 'odiamond': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("odiamond")))
                            case 'odot': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("odot")))
                            case 'obox': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.id("obox")))
                            case 'custom': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowhead"), sh.id.string($)))
                            default: return p_.exhaustive($[0])
                        }
                    }))
                case 'arrowtail': return p_.option($, ($) => p_.from.state($).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'normal': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("normal")))
                            case 'box': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("box")))
                            case 'crow': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("crow")))
                            case 'diamond': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("diamond")))
                            case 'dot': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("dot")))
                            case 'inv': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("inv")))
                            case 'none': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("none")))
                            case 'tee': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("tee")))
                            case 'vee': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("vee")))
                            case 'open': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("open")))
                            case 'halfopen': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("halfopen")))
                            case 'empty': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("empty")))
                            case 'invempty': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("invempty")))
                            case 'odiamond': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("odiamond")))
                            case 'odot': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("odot")))
                            case 'obox': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.id("obox")))
                            case 'custom': return p_.option($, ($) => sh.attribute(
                                sh.id.id("arrowtail"), sh.id.string($)))
                            default: return p_.exhaustive($[0])
                        }
                    }))
                case 'arrowsize': return p_.option($, ($) => sh.attribute(
                    sh.id.id("arrowsize"), sh.id.number($)))
                case 'dir': return p_.option($, ($) => sh.attribute(
                    sh.id.id("dir"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'forward': return p_.option($, ($) => sh.id.id("forward"))
                                case 'back': return p_.option($, ($) => sh.id.id("back"))
                                case 'both': return p_.option($, ($) => sh.id.id("both"))
                                case 'none': return p_.option($, ($) => sh.id.id("none"))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'headlabel': return p_.option($, ($) => sh.attribute(
                    sh.id.id("headlabel"), sh.id.string($)))
                case 'taillabel': return p_.option($, ($) => sh.attribute(
                    sh.id.id("taillabel"), sh.id.string($)))
                case 'labelfontcolor': return p_.option($, ($) => sh.attribute(
                    sh.id.id("labelfontcolor"), sh.id.string($)))
                case 'labelfontname': return p_.option($, ($) => sh.attribute(
                    sh.id.id("labelfontname"), sh.id.string($)))
                case 'labelfontsize': return p_.option($, ($) => sh.attribute(
                    sh.id.id("labelfontsize"), sh.id.number($)))
                case 'labelangle': return p_.option($, ($) => sh.attribute(
                    sh.id.id("labelangle"), sh.id.number($)))
                case 'labeldistance': return p_.option($, ($) => sh.attribute(
                    sh.id.id("labeldistance"), sh.id.number($)))
                case 'labelfloat': return p_.option($, ($) => sh.attribute(
                    sh.id.id("labelfloat"), temp_boolean($)))
                case 'weight': return p_.option($, ($) => sh.attribute(
                    sh.id.id("weight"), sh.id.number($)))
                case 'len': return p_.option($, ($) => sh.attribute(
                    sh.id.id("len"), sh.id.number($)))
                case 'minlen': return p_.option($, ($) => sh.attribute(
                    sh.id.id("minlen"), sh.id.number($)))
                case 'constraint': return p_.option($, ($) => sh.attribute(
                    sh.id.id("constraint"), temp_boolean($)))
                case 'decorate': return p_.option($, ($) => sh.attribute(
                    sh.id.id("decorate"), temp_boolean($)))
                case 'headport': return p_.option($, ($) => p_.from.state($).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'center': return p_.option($, ($) => sh.attribute(
                                sh.id.id("headport"), sh.id.id("center")))
                            case 'n': return p_.option($, ($) => sh.attribute(
                                sh.id.id("headport"), sh.id.id("n")))
                            case 'ne': return p_.option($, ($) => sh.attribute(
                                sh.id.id("headport"), sh.id.id("ne")))
                            case 'e': return p_.option($, ($) => sh.attribute(
                                sh.id.id("headport"), sh.id.id("e")))
                            case 'se': return p_.option($, ($) => sh.attribute(
                                sh.id.id("headport"), sh.id.id("se")))
                            case 's': return p_.option($, ($) => sh.attribute(
                                sh.id.id("headport"), sh.id.id("s")))
                            case 'sw': return p_.option($, ($) => sh.attribute(
                                sh.id.id("headport"), sh.id.id("sw")))
                            case 'w': return p_.option($, ($) => sh.attribute(
                                sh.id.id("headport"), sh.id.id("w")))
                            case 'nw': return p_.option($, ($) => sh.attribute(
                                sh.id.id("headport"), sh.id.id("nw")))
                            case 'custom': return p_.option($, ($) => sh.attribute(
                                sh.id.id("headport"), sh.id.string($)))
                            default: return p_.exhaustive($[0])
                        }
                    }))
                case 'tailport': return p_.option($, ($) => p_.from.state($).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'center': return p_.option($, ($) => sh.attribute(
                                sh.id.id("tailport"), sh.id.id("center")))
                            case 'n': return p_.option($, ($) => sh.attribute(
                                sh.id.id("tailport"), sh.id.id("n")))
                            case 'ne': return p_.option($, ($) => sh.attribute(
                                sh.id.id("tailport"), sh.id.id("ne")))
                            case 'e': return p_.option($, ($) => sh.attribute(
                                sh.id.id("tailport"), sh.id.id("e")))
                            case 'se': return p_.option($, ($) => sh.attribute(
                                sh.id.id("tailport"), sh.id.id("se")))
                            case 's': return p_.option($, ($) => sh.attribute(
                                sh.id.id("tailport"), sh.id.id("s")))
                            case 'sw': return p_.option($, ($) => sh.attribute(
                                sh.id.id("tailport"), sh.id.id("sw")))
                            case 'w': return p_.option($, ($) => sh.attribute(
                                sh.id.id("tailport"), sh.id.id("w")))
                            case 'nw': return p_.option($, ($) => sh.attribute(
                                sh.id.id("tailport"), sh.id.id("nw")))
                            case 'custom': return p_.option($, ($) => sh.attribute(
                                sh.id.id("tailport"), sh.id.string($)))
                            default: return p_.exhaustive($[0])
                        }
                    }))
                case 'headclip': return p_.option($, ($) => sh.attribute(
                    sh.id.id("headclip"), temp_boolean($)))
                case 'tailclip': return p_.option($, ($) => sh.attribute(
                    sh.id.id("tailclip"), temp_boolean($)))
                case 'lhead': return p_.option($, ($) => sh.attribute(
                    sh.id.id("lhead"), sh.id.string($)))
                case 'ltail': return p_.option($, ($) => sh.attribute(
                    sh.id.id("ltail"), sh.id.string($)))
                case 'samehead': return p_.option($, ($) => sh.attribute(
                    sh.id.id("samehead"), sh.id.string($)))
                case 'sametail': return p_.option($, ($) => sh.attribute(
                    sh.id.id("sametail"), sh.id.string($)))
                case 'edgeURL': return p_.option($, ($) => sh.attribute(
                    sh.id.id("edgeURL"), sh.id.string($)))
                case 'headURL': return p_.option($, ($) => sh.attribute(
                    sh.id.id("headURL"), sh.id.string($)))
                case 'tailURL': return p_.option($, ($) => sh.attribute(
                    sh.id.id("tailURL"), sh.id.string($)))
                case 'labelURL': return p_.option($, ($) => sh.attribute(
                    sh.id.id("labelURL"), sh.id.string($)))
                case 'edgehref': return p_.option($, ($) => sh.attribute(
                    sh.id.id("edgehref"), sh.id.string($)))
                case 'headhref': return p_.option($, ($) => sh.attribute(
                    sh.id.id("headhref"), sh.id.string($)))
                case 'tailhref': return p_.option($, ($) => sh.attribute(
                    sh.id.id("tailhref"), sh.id.string($)))
                case 'labelhref': return p_.option($, ($) => sh.attribute(
                    sh.id.id("labelhref"), sh.id.string($)))
                case 'edgetarget': return p_.option($, ($) => sh.attribute(
                    sh.id.id("edgetarget"), sh.id.string($)))
                case 'headtarget': return p_.option($, ($) => sh.attribute(
                    sh.id.id("headtarget"), sh.id.string($)))
                case 'tailtarget': return p_.option($, ($) => sh.attribute(
                    sh.id.id("tailtarget"), sh.id.string($)))
                case 'edgetooltip': return p_.option($, ($) => sh.attribute(
                    sh.id.id("edgetooltip"), sh.id.string($)))
                case 'headtooltip': return p_.option($, ($) => sh.attribute(
                    sh.id.id("headtooltip"), sh.id.string($)))
                case 'tailtooltip': return p_.option($, ($) => sh.attribute(
                    sh.id.id("tailtooltip"), sh.id.string($)))
                case 'labeltooltip': return p_.option($, ($) => sh.attribute(
                    sh.id.id("labeltooltip"), sh.id.string($)))
                case 'radius': return p_.option($, ($) => sh.attribute(
                    sh.id.id("radius"), sh.id.number($)))
                case 'splines': return p_.option($, ($) => sh.attribute(
                    sh.id.id("splines"), p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'true': return p_.option($, ($) => sh.id.id("true"))
                                case 'false': return p_.option($, ($) => sh.id.id("false"))
                                case 'none': return p_.option($, ($) => sh.id.id("none"))
                                case 'line': return p_.option($, ($) => sh.id.id("line"))
                                case 'spline': return p_.option($, ($) => sh.id.id("spline"))
                                case 'polyline': return p_.option($, ($) => sh.id.id("polyline"))
                                case 'ortho': return p_.option($, ($) => sh.id.id("ortho"))
                                case 'curved': return p_.option($, ($) => sh.id.id("curved"))
                                case 'compound': return p_.option($, ($) => sh.id.id("compound"))
                                default: return p_.exhaustive($[0])
                            }
                        })))
                case 'pos': return p_.option($, ($) => sh.attribute(
                    sh.id.id("pos"), sh.id.string($)))
                case 'xlabel': return p_.option($, ($) => sh.attribute(
                    sh.id.id("xlabel"), sh.id.string($)))
                case 'layer': return p_.option($, ($) => sh.attribute(
                    sh.id.id("layer"), sh.id.string($)))
                default: return p_.exhaustive($[0])
            }
        }))