import * as pt from 'pareto-core/dist/assign'
import * as pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/attributes/data"
import * as d_out from "../../../../interface/generated/liana/schemas/low_level/data"

type Attributes = pi.Transformer<d_in.Attributes, d_out.Attributes>

//dependencies

//shorthands
import * as sh from "../../../../shorthands/low_level"

const temp_boolean = ($: boolean): d_out.ID => sh.id.id($ ? "true" : "false")

export const Attributes: Attributes = ($) => pt.list.from.list($).map(($) => pt.decide.state($, ($): d_out.Attributes.L => {
    switch ($[0]) {
        case 'freeform': return pt.ss($, ($) => sh.attribute(sh.id.string($.key), sh.id.string($.value)))
        case 'color': return pt.ss($, ($) => sh.attribute(sh.id.id("color"), sh.id.string($)))
        case 'fillcolor': return pt.ss($, ($) => sh.attribute(sh.id.id("fillcolor"), sh.id.string($)))
        case 'penwidth': return pt.ss($, ($) => sh.attribute(sh.id.id("penwidth"), sh.id.number($)))
        case 'label': return pt.ss($, ($) => sh.attribute(sh.id.id("label"), sh.id.string($)))
        case 'fontcolor': return pt.ss($, ($) => sh.attribute(sh.id.id("fontcolor"), sh.id.string($)))
        case 'fontname': return pt.ss($, ($) => sh.attribute(sh.id.id("fontname"), sh.id.string($)))
        case 'fontsize': return pt.ss($, ($) => sh.attribute(sh.id.id("fontsize"), sh.id.number($)))
        case 'URL': return pt.ss($, ($) => sh.attribute(sh.id.id("URL"), sh.id.string($)))
        case 'href': return pt.ss($, ($) => sh.attribute(sh.id.id("href"), sh.id.string($)))
        case 'target': return pt.ss($, ($) => sh.attribute(sh.id.id("target"), sh.id.string($)))
        case 'tooltip': return pt.ss($, ($) => sh.attribute(sh.id.id("tooltip"), sh.id.string($)))
        case 'id': return pt.ss($, ($) => sh.attribute(sh.id.id("id"), sh.id.string($)))
        case 'class': return pt.ss($, ($) => sh.attribute(sh.id.id("class"), sh.id.string($)))
        case 'comment': return pt.ss($, ($) => sh.attribute(sh.id.id("comment"), sh.id.string($)))
        case 'style': return pt.ss($, ($) => sh.attribute(sh.id.id("style"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'filled': return pt.ss($, ($) => sh.id.id("filled"))
                case 'rounded': return pt.ss($, ($) => sh.id.id("rounded"))
                case 'bold': return pt.ss($, ($) => sh.id.id("bold"))
                case 'solid': return pt.ss($, ($) => sh.id.id("solid"))
                case 'dashed': return pt.ss($, ($) => sh.id.id("dashed"))
                case 'dotted': return pt.ss($, ($) => sh.id.id("dotted"))
                case 'striped': return pt.ss($, ($) => sh.id.id("striped"))
                case 'wedged': return pt.ss($, ($) => sh.id.id("wedged"))
                case 'diagonals': return pt.ss($, ($) => sh.id.id("diagonals"))
                case 'invis': return pt.ss($, ($) => sh.id.id("invis"))
                case 'tapered': return pt.ss($, ($) => sh.id.id("tapered"))
                case 'custom': return pt.ss($, ($) => sh.id.string($))
                default: return pt.au($[0])
            }
        })))
        case 'layout': return pt.ss($, ($) => sh.attribute(sh.id.id("layout"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'dot': return pt.ss($, ($) => sh.id.id("dot"))
                case 'neato': return pt.ss($, ($) => sh.id.id("neato"))
                case 'fdp': return pt.ss($, ($) => sh.id.id("fdp"))
                case 'sfdp': return pt.ss($, ($) => sh.id.id("sfdp"))
                case 'twopi': return pt.ss($, ($) => sh.id.id("twopi"))
                case 'circo': return pt.ss($, ($) => sh.id.id("circo"))
                case 'custom': return pt.ss($, ($) => sh.id.string($))
                default: return pt.au($[0])
            }
        })))
        case 'rankdir': return pt.ss($, ($) => sh.attribute(sh.id.id("rankdir"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'TB': return pt.ss($, ($) => sh.id.id("TB"))
                case 'BT': return pt.ss($, ($) => sh.id.id("BT"))
                case 'LR': return pt.ss($, ($) => sh.id.id("LR"))
                case 'RL': return pt.ss($, ($) => sh.id.id("RL"))
                default: return pt.au($[0])
            }
        })))
        case 'bgcolor': return pt.ss($, ($) => sh.attribute(sh.id.id("bgcolor"), sh.id.string($)))
        case 'labelloc': return pt.ss($, ($) => sh.attribute(sh.id.id("labelloc"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 't': return pt.ss($, ($) => sh.id.id("t"))
                case 'b': return pt.ss($, ($) => sh.id.id("b"))
                default: return pt.au($[0])
            }
        })))
        case 'labeljust': return pt.ss($, ($) => sh.attribute(sh.id.id("labeljust"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'l': return pt.ss($, ($) => sh.id.id("l"))
                case 'c': return pt.ss($, ($) => sh.id.id("c"))
                case 'r': return pt.ss($, ($) => sh.id.id("r"))
                default: return pt.au($[0])
            }
        })))
        case 'size': return pt.ss($, ($) => sh.attribute(sh.id.id("size"), sh.id.string($)))
        case 'ratio': return pt.ss($, ($) => sh.attribute(sh.id.id("ratio"), sh.id.string($)))
        case 'pad': return pt.ss($, ($) => sh.attribute(sh.id.id("pad"), sh.id.string($)))
        case 'nodesep': return pt.ss($, ($) => sh.attribute(sh.id.id("nodesep"), sh.id.number($)))
        case 'ranksep': return pt.ss($, ($) => sh.attribute(sh.id.id("ranksep"), sh.id.number($)))
        case 'dpi': return pt.ss($, ($) => sh.attribute(sh.id.id("dpi"), sh.id.number($)))
        case 'overlap': return pt.ss($, ($) => sh.attribute(sh.id.id("overlap"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'true': return pt.ss($, ($) => sh.id.id("true"))
                case 'false': return pt.ss($, ($) => sh.id.id("false"))
                case 'scale': return pt.ss($, ($) => sh.id.id("scale"))
                case 'scalexy': return pt.ss($, ($) => sh.id.id("scalexy"))
                case 'orthoxy': return pt.ss($, ($) => sh.id.id("orthoxy"))
                case 'orthoyx': return pt.ss($, ($) => sh.id.id("orthoyx"))
                case 'compress': return pt.ss($, ($) => sh.id.id("compress"))
                case 'vpsc': return pt.ss($, ($) => sh.id.id("vpsc"))
                case 'ipsep': return pt.ss($, ($) => sh.id.id("ipsep"))
                case 'prism': return pt.ss($, ($) => sh.id.id("prism"))
                default: return pt.au($[0])
            }
        })))
        case 'pack': return pt.ss($, ($) => sh.attribute(sh.id.id("pack"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'true': return pt.ss($, ($) => sh.id.id("true"))
                case 'false': return pt.ss($, ($) => sh.id.id("false"))
                case 'custom': return pt.ss($, ($) => sh.id.number($))
                default: return pt.au($[0])
            }
        })))
        case 'packmode': return pt.ss($, ($) => sh.attribute(sh.id.id("packmode"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'node': return pt.ss($, ($) => sh.id.id("node"))
                case 'clust': return pt.ss($, ($) => sh.id.id("clust"))
                case 'graph': return pt.ss($, ($) => sh.id.id("graph"))
                default: return pt.au($[0])
            }
        })))
        case 'concentrate': return pt.ss($, ($) => sh.attribute(sh.id.id("concentrate"), temp_boolean($)))
        case 'compound': return pt.ss($, ($) => sh.attribute(sh.id.id("compound"), temp_boolean($)))
        case 'center': return pt.ss($, ($) => sh.attribute(sh.id.id("center"), temp_boolean($)))
        case 'normalize': return pt.ss($, ($) => sh.attribute(sh.id.id("normalize"), temp_boolean($)))
        case 'landscape': return pt.ss($, ($) => sh.attribute(sh.id.id("landscape"), temp_boolean($)))
        case 'outputorder': return pt.ss($, ($) => sh.attribute(sh.id.id("outputorder"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'breadthfirst': return pt.ss($, ($) => sh.id.id("breadthfirst"))
                case 'nodesfirst': return pt.ss($, ($) => sh.id.id("nodesfirst"))
                case 'edgesfirst': return pt.ss($, ($) => sh.id.id("edgesfirst"))
                default: return pt.au($[0])
            }
        })))
        case 'charset': return pt.ss($, ($) => sh.attribute(sh.id.id("charset"), sh.id.string($)))
        case 'clusterrank': return pt.ss($, ($) => sh.attribute(sh.id.id("clusterrank"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'local': return pt.ss($, ($) => sh.id.id("local"))
                case 'global': return pt.ss($, ($) => sh.id.id("global"))
                case 'none': return pt.ss($, ($) => sh.id.id("none"))
                default: return pt.au($[0])
            }
        })))
        case 'shape': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'box': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("box")))
                case 'circle': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("circle")))
                case 'ellipse': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("ellipse")))
                case 'oval': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("oval")))
                case 'point': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("point")))
                case 'egg': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("egg")))
                case 'triangle': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("triangle")))
                case 'plaintext': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("plaintext")))
                case 'plain': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("plain")))
                case 'diamond': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("diamond")))
                case 'trapezium': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("trapezium")))
                case 'parallelogram': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("parallelogram")))
                case 'house': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("house")))
                case 'pentagon': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("pentagon")))
                case 'hexagon': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("hexagon")))
                case 'septagon': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("septagon")))
                case 'octagon': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("octagon")))
                case 'polygon': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("polygon")))
                case 'record': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("record")))
                case 'Mrecord': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("Mrecord")))
                case 'custom': return pt.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.string($)))
                default: return pt.au($[0])
            }
        }))
        case 'width': return pt.ss($, ($) => sh.attribute(sh.id.id("width"), sh.id.number($)))
        case 'height': return pt.ss($, ($) => sh.attribute(sh.id.id("height"), sh.id.number($)))
        case 'fixedsize': return pt.ss($, ($) => sh.attribute(sh.id.id("fixedsize"), temp_boolean($)))
        case 'regular': return pt.ss($, ($) => sh.attribute(sh.id.id("regular"), temp_boolean($)))
        case 'sides': return pt.ss($, ($) => sh.attribute(sh.id.id("sides"), sh.id.number($)))
        case 'skew': return pt.ss($, ($) => sh.attribute(sh.id.id("skew"), sh.id.number($)))
        case 'distortion': return pt.ss($, ($) => sh.attribute(sh.id.id("distortion"), sh.id.number($)))
        case 'orientation': return pt.ss($, ($) => sh.attribute(sh.id.id("orientation"), sh.id.number($)))
        case 'peripheries': return pt.ss($, ($) => sh.attribute(sh.id.id("peripheries"), sh.id.number($)))
        case 'pin': return pt.ss($, ($) => sh.attribute(sh.id.id("pin"), temp_boolean($)))
        case 'image': return pt.ss($, ($) => sh.attribute(sh.id.id("image"), sh.id.string($)))
        case 'imagepos': return pt.ss($, ($) => sh.attribute(sh.id.id("imagepos"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'tl': return pt.ss($, ($) => sh.id.id("tl"))
                case 'tc': return pt.ss($, ($) => sh.id.id("tc"))
                case 'tr': return pt.ss($, ($) => sh.id.id("tr"))
                case 'ml': return pt.ss($, ($) => sh.id.id("ml"))
                case 'mc': return pt.ss($, ($) => sh.id.id("mc"))
                case 'mr': return pt.ss($, ($) => sh.id.id("mr"))
                case 'bl': return pt.ss($, ($) => sh.id.id("bl"))
                case 'bc': return pt.ss($, ($) => sh.id.id("bc"))
                case 'br': return pt.ss($, ($) => sh.id.id("br"))
                default: return pt.au($[0])
            }
        })))
        case 'imagescale': return pt.ss($, ($) => sh.attribute(sh.id.id("imagescale"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'false': return pt.ss($, ($) => sh.id.id("false"))
                case 'true': return pt.ss($, ($) => sh.id.id("true"))
                case 'width': return pt.ss($, ($) => sh.id.id("width"))
                case 'height': return pt.ss($, ($) => sh.id.id("height"))
                case 'both': return pt.ss($, ($) => sh.id.id("both"))
                default: return pt.au($[0])
            }
        })))
        case 'group': return pt.ss($, ($) => sh.attribute(sh.id.id("group"), sh.id.string($)))
        case 'sortv': return pt.ss($, ($) => sh.attribute(sh.id.id("sortv"), sh.id.number($)))
        case 'area': return pt.ss($, ($) => sh.attribute(sh.id.id("area"), sh.id.number($)))
        case 'z': return pt.ss($, ($) => sh.attribute(sh.id.id("z"), sh.id.number($)))
        case 'margin': return pt.ss($, ($) => sh.attribute(sh.id.id("margin"), sh.id.string($)))
        case 'arrowhead': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'normal': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("normal")))
                case 'box': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("box")))
                case 'crow': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("crow")))
                case 'diamond': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("diamond")))
                case 'dot': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("dot")))
                case 'inv': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("inv")))
                case 'none': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("none")))
                case 'tee': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("tee")))
                case 'vee': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("vee")))
                case 'open': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("open")))
                case 'halfopen': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("halfopen")))
                case 'empty': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("empty")))
                case 'invempty': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("invempty")))
                case 'odiamond': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("odiamond")))
                case 'odot': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("odot")))
                case 'obox': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("obox")))
                case 'custom': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.string($)))
                default: return pt.au($[0])
            }
        }))
        case 'arrowtail': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'normal': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("normal")))
                case 'box': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("box")))
                case 'crow': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("crow")))
                case 'diamond': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("diamond")))
                case 'dot': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("dot")))
                case 'inv': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("inv")))
                case 'none': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("none")))
                case 'tee': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("tee")))
                case 'vee': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("vee")))
                case 'open': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("open")))
                case 'halfopen': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("halfopen")))
                case 'empty': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("empty")))
                case 'invempty': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("invempty")))
                case 'odiamond': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("odiamond")))
                case 'odot': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("odot")))
                case 'obox': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("obox")))
                case 'custom': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.string($)))
                default: return pt.au($[0])
            }
        }))
        case 'arrowsize': return pt.ss($, ($) => sh.attribute(sh.id.id("arrowsize"), sh.id.number($)))
        case 'dir': return pt.ss($, ($) => sh.attribute(sh.id.id("dir"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'forward': return pt.ss($, ($) => sh.id.id("forward"))
                case 'back': return pt.ss($, ($) => sh.id.id("back"))
                case 'both': return pt.ss($, ($) => sh.id.id("both"))
                case 'none': return pt.ss($, ($) => sh.id.id("none"))
                default: return pt.au($[0])
            }
        })))
        case 'headlabel': return pt.ss($, ($) => sh.attribute(sh.id.id("headlabel"), sh.id.string($)))
        case 'taillabel': return pt.ss($, ($) => sh.attribute(sh.id.id("taillabel"), sh.id.string($)))
        case 'labelfontcolor': return pt.ss($, ($) => sh.attribute(sh.id.id("labelfontcolor"), sh.id.string($)))
        case 'labelfontname': return pt.ss($, ($) => sh.attribute(sh.id.id("labelfontname"), sh.id.string($)))
        case 'labelfontsize': return pt.ss($, ($) => sh.attribute(sh.id.id("labelfontsize"), sh.id.number($)))
        case 'labelangle': return pt.ss($, ($) => sh.attribute(sh.id.id("labelangle"), sh.id.number($)))
        case 'labeldistance': return pt.ss($, ($) => sh.attribute(sh.id.id("labeldistance"), sh.id.number($)))
        case 'labelfloat': return pt.ss($, ($) => sh.attribute(sh.id.id("labelfloat"), temp_boolean($)))
        case 'weight': return pt.ss($, ($) => sh.attribute(sh.id.id("weight"), sh.id.number($)))
        case 'len': return pt.ss($, ($) => sh.attribute(sh.id.id("len"), sh.id.number($)))
        case 'minlen': return pt.ss($, ($) => sh.attribute(sh.id.id("minlen"), sh.id.number($)))
        case 'constraint': return pt.ss($, ($) => sh.attribute(sh.id.id("constraint"), temp_boolean($)))
        case 'decorate': return pt.ss($, ($) => sh.attribute(sh.id.id("decorate"), temp_boolean($)))
        case 'headport': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'center': return pt.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("center")))
                case 'n': return pt.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("n")))
                case 'ne': return pt.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("ne")))
                case 'e': return pt.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("e")))
                case 'se': return pt.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("se")))
                case 's': return pt.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("s")))
                case 'sw': return pt.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("sw")))
                case 'w': return pt.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("w")))
                case 'nw': return pt.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("nw")))
                case 'custom': return pt.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.string($)))
                default: return pt.au($[0])
            }
        }))
        case 'tailport': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'center': return pt.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("center")))
                case 'n': return pt.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("n")))
                case 'ne': return pt.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("ne")))
                case 'e': return pt.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("e")))
                case 'se': return pt.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("se")))
                case 's': return pt.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("s")))
                case 'sw': return pt.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("sw")))
                case 'w': return pt.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("w")))
                case 'nw': return pt.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("nw")))
                case 'custom': return pt.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.string($)))
                default: return pt.au($[0])
            }
        }))
        case 'headclip': return pt.ss($, ($) => sh.attribute(sh.id.id("headclip"), temp_boolean($)))
        case 'tailclip': return pt.ss($, ($) => sh.attribute(sh.id.id("tailclip"), temp_boolean($)))
        case 'lhead': return pt.ss($, ($) => sh.attribute(sh.id.id("lhead"), sh.id.string($)))
        case 'ltail': return pt.ss($, ($) => sh.attribute(sh.id.id("ltail"), sh.id.string($)))
        case 'samehead': return pt.ss($, ($) => sh.attribute(sh.id.id("samehead"), sh.id.string($)))
        case 'sametail': return pt.ss($, ($) => sh.attribute(sh.id.id("sametail"), sh.id.string($)))
        case 'edgeURL': return pt.ss($, ($) => sh.attribute(sh.id.id("edgeURL"), sh.id.string($)))
        case 'headURL': return pt.ss($, ($) => sh.attribute(sh.id.id("headURL"), sh.id.string($)))
        case 'tailURL': return pt.ss($, ($) => sh.attribute(sh.id.id("tailURL"), sh.id.string($)))
        case 'labelURL': return pt.ss($, ($) => sh.attribute(sh.id.id("labelURL"), sh.id.string($)))
        case 'edgehref': return pt.ss($, ($) => sh.attribute(sh.id.id("edgehref"), sh.id.string($)))
        case 'headhref': return pt.ss($, ($) => sh.attribute(sh.id.id("headhref"), sh.id.string($)))
        case 'tailhref': return pt.ss($, ($) => sh.attribute(sh.id.id("tailhref"), sh.id.string($)))
        case 'labelhref': return pt.ss($, ($) => sh.attribute(sh.id.id("labelhref"), sh.id.string($)))
        case 'edgetarget': return pt.ss($, ($) => sh.attribute(sh.id.id("edgetarget"), sh.id.string($)))
        case 'headtarget': return pt.ss($, ($) => sh.attribute(sh.id.id("headtarget"), sh.id.string($)))
        case 'tailtarget': return pt.ss($, ($) => sh.attribute(sh.id.id("tailtarget"), sh.id.string($)))
        case 'edgetooltip': return pt.ss($, ($) => sh.attribute(sh.id.id("edgetooltip"), sh.id.string($)))
        case 'headtooltip': return pt.ss($, ($) => sh.attribute(sh.id.id("headtooltip"), sh.id.string($)))
        case 'tailtooltip': return pt.ss($, ($) => sh.attribute(sh.id.id("tailtooltip"), sh.id.string($)))
        case 'labeltooltip': return pt.ss($, ($) => sh.attribute(sh.id.id("labeltooltip"), sh.id.string($)))
        case 'radius': return pt.ss($, ($) => sh.attribute(sh.id.id("radius"), sh.id.number($)))
        case 'splines': return pt.ss($, ($) => sh.attribute(sh.id.id("splines"), pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'true': return pt.ss($, ($) => sh.id.id("true"))
                case 'false': return pt.ss($, ($) => sh.id.id("false"))
                case 'none': return pt.ss($, ($) => sh.id.id("none"))
                case 'line': return pt.ss($, ($) => sh.id.id("line"))
                case 'spline': return pt.ss($, ($) => sh.id.id("spline"))
                case 'polyline': return pt.ss($, ($) => sh.id.id("polyline"))
                case 'ortho': return pt.ss($, ($) => sh.id.id("ortho"))
                case 'curved': return pt.ss($, ($) => sh.id.id("curved"))
                case 'compound': return pt.ss($, ($) => sh.id.id("compound"))
                default: return pt.au($[0])
            }
        })))
        case 'pos': return pt.ss($, ($) => sh.attribute(sh.id.id("pos"), sh.id.string($)))
        case 'xlabel': return pt.ss($, ($) => sh.attribute(sh.id.id("xlabel"), sh.id.string($)))
        case 'layer': return pt.ss($, ($) => sh.attribute(sh.id.id("layer"), sh.id.string($)))
        default: return pt.au($[0])
    }
}))