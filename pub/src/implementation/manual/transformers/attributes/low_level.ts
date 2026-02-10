import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/attributes/data"
import * as d_out from "../../../../interface/generated/liana/schemas/low_level/data"

type Attributes = _pi.Transformer<d_in.Attributes, d_out.Attributes>

//dependencies
import { $$ as s_quoted } from "../../primitives/text/serializers/quoted"
import { $$ as s_decimal } from "../../primitives/integer/serializers/decimal"

//shorthands
import * as sh from "../../../../shorthands/low_level"

const temp_boolean = ($: boolean): d_out.ID => sh.id.id($ ? "true" : "false")

export const Attributes: Attributes = ($) => _p.list.from.list($).map(($) => _p.decide.state($, ($): d_out.Attributes.L => {
    switch ($[0]) {
        case 'freeform': return _p.ss($, ($) => sh.attribute(sh.id.string($.key), sh.id.string($.value)))
        case 'color': return _p.ss($, ($) => sh.attribute(sh.id.id("color"), sh.id.string($)))
        case 'fillcolor': return _p.ss($, ($) => sh.attribute(sh.id.id("fillcolor"), sh.id.string($)))
        case 'penwidth': return _p.ss($, ($) => sh.attribute(sh.id.id("penwidth"), sh.id.number($)))
        case 'label': return _p.ss($, ($) => sh.attribute(sh.id.id("label"), sh.id.string($)))
        case 'fontcolor': return _p.ss($, ($) => sh.attribute(sh.id.id("fontcolor"), sh.id.string($)))
        case 'fontname': return _p.ss($, ($) => sh.attribute(sh.id.id("fontname"), sh.id.string($)))
        case 'fontsize': return _p.ss($, ($) => sh.attribute(sh.id.id("fontsize"), sh.id.number($)))
        case 'URL': return _p.ss($, ($) => sh.attribute(sh.id.id("URL"), sh.id.string($)))
        case 'href': return _p.ss($, ($) => sh.attribute(sh.id.id("href"), sh.id.string($)))
        case 'target': return _p.ss($, ($) => sh.attribute(sh.id.id("target"), sh.id.string($)))
        case 'tooltip': return _p.ss($, ($) => sh.attribute(sh.id.id("tooltip"), sh.id.string($)))
        case 'id': return _p.ss($, ($) => sh.attribute(sh.id.id("id"), sh.id.string($)))
        case 'class': return _p.ss($, ($) => sh.attribute(sh.id.id("class"), sh.id.string($)))
        case 'comment': return _p.ss($, ($) => sh.attribute(sh.id.id("comment"), sh.id.string($)))
        case 'style': return _p.ss($, ($) => sh.attribute(sh.id.id("style"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'filled': return _p.ss($, ($) => sh.id.id("filled"))
                case 'rounded': return _p.ss($, ($) => sh.id.id("rounded"))
                case 'bold': return _p.ss($, ($) => sh.id.id("bold"))
                case 'solid': return _p.ss($, ($) => sh.id.id("solid"))
                case 'dashed': return _p.ss($, ($) => sh.id.id("dashed"))
                case 'dotted': return _p.ss($, ($) => sh.id.id("dotted"))
                case 'striped': return _p.ss($, ($) => sh.id.id("striped"))
                case 'wedged': return _p.ss($, ($) => sh.id.id("wedged"))
                case 'diagonals': return _p.ss($, ($) => sh.id.id("diagonals"))
                case 'invis': return _p.ss($, ($) => sh.id.id("invis"))
                case 'tapered': return _p.ss($, ($) => sh.id.id("tapered"))
                case 'custom': return _p.ss($, ($) => sh.id.string($))
                default: return _p.au($[0])
            }
        })))
        case 'layout': return _p.ss($, ($) => sh.attribute(sh.id.id("layout"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'dot': return _p.ss($, ($) => sh.id.id("dot"))
                case 'neato': return _p.ss($, ($) => sh.id.id("neato"))
                case 'fdp': return _p.ss($, ($) => sh.id.id("fdp"))
                case 'sfdp': return _p.ss($, ($) => sh.id.id("sfdp"))
                case 'twopi': return _p.ss($, ($) => sh.id.id("twopi"))
                case 'circo': return _p.ss($, ($) => sh.id.id("circo"))
                case 'custom': return _p.ss($, ($) => sh.id.string($))
                default: return _p.au($[0])
            }
        })))
        case 'rankdir': return _p.ss($, ($) => sh.attribute(sh.id.id("rankdir"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'TB': return _p.ss($, ($) => sh.id.id("TB"))
                case 'BT': return _p.ss($, ($) => sh.id.id("BT"))
                case 'LR': return _p.ss($, ($) => sh.id.id("LR"))
                case 'RL': return _p.ss($, ($) => sh.id.id("RL"))
                default: return _p.au($[0])
            }
        })))
        case 'bgcolor': return _p.ss($, ($) => sh.attribute(sh.id.id("bgcolor"), sh.id.string($)))
        case 'labelloc': return _p.ss($, ($) => sh.attribute(sh.id.id("labelloc"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 't': return _p.ss($, ($) => sh.id.id("t"))
                case 'b': return _p.ss($, ($) => sh.id.id("b"))
                default: return _p.au($[0])
            }
        })))
        case 'labeljust': return _p.ss($, ($) => sh.attribute(sh.id.id("labeljust"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'l': return _p.ss($, ($) => sh.id.id("l"))
                case 'c': return _p.ss($, ($) => sh.id.id("c"))
                case 'r': return _p.ss($, ($) => sh.id.id("r"))
                default: return _p.au($[0])
            }
        })))
        case 'size': return _p.ss($, ($) => sh.attribute(sh.id.id("size"), sh.id.string($)))
        case 'ratio': return _p.ss($, ($) => sh.attribute(sh.id.id("ratio"), sh.id.string($)))
        case 'pad': return _p.ss($, ($) => sh.attribute(sh.id.id("pad"), sh.id.string($)))
        case 'nodesep': return _p.ss($, ($) => sh.attribute(sh.id.id("nodesep"), sh.id.number($)))
        case 'ranksep': return _p.ss($, ($) => sh.attribute(sh.id.id("ranksep"), sh.id.number($)))
        case 'dpi': return _p.ss($, ($) => sh.attribute(sh.id.id("dpi"), sh.id.number($)))
        case 'overlap': return _p.ss($, ($) => sh.attribute(sh.id.id("overlap"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'true': return _p.ss($, ($) => sh.id.id("true"))
                case 'false': return _p.ss($, ($) => sh.id.id("false"))
                case 'scale': return _p.ss($, ($) => sh.id.id("scale"))
                case 'scalexy': return _p.ss($, ($) => sh.id.id("scalexy"))
                case 'orthoxy': return _p.ss($, ($) => sh.id.id("orthoxy"))
                case 'orthoyx': return _p.ss($, ($) => sh.id.id("orthoyx"))
                case 'compress': return _p.ss($, ($) => sh.id.id("compress"))
                case 'vpsc': return _p.ss($, ($) => sh.id.id("vpsc"))
                case 'ipsep': return _p.ss($, ($) => sh.id.id("ipsep"))
                case 'prism': return _p.ss($, ($) => sh.id.id("prism"))
                default: return _p.au($[0])
            }
        })))
        case 'pack': return _p.ss($, ($) => sh.attribute(sh.id.id("pack"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'true': return _p.ss($, ($) => sh.id.id("true"))
                case 'false': return _p.ss($, ($) => sh.id.id("false"))
                case 'custom': return _p.ss($, ($) => sh.id.number($))
                default: return _p.au($[0])
            }
        })))
        case 'packmode': return _p.ss($, ($) => sh.attribute(sh.id.id("packmode"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'node': return _p.ss($, ($) => sh.id.id("node"))
                case 'clust': return _p.ss($, ($) => sh.id.id("clust"))
                case 'graph': return _p.ss($, ($) => sh.id.id("graph"))
                default: return _p.au($[0])
            }
        })))
        case 'concentrate': return _p.ss($, ($) => sh.attribute(sh.id.id("concentrate"), temp_boolean($)))
        case 'compound': return _p.ss($, ($) => sh.attribute(sh.id.id("compound"), temp_boolean($)))
        case 'center': return _p.ss($, ($) => sh.attribute(sh.id.id("center"), temp_boolean($)))
        case 'normalize': return _p.ss($, ($) => sh.attribute(sh.id.id("normalize"), temp_boolean($)))
        case 'landscape': return _p.ss($, ($) => sh.attribute(sh.id.id("landscape"), temp_boolean($)))
        case 'outputorder': return _p.ss($, ($) => sh.attribute(sh.id.id("outputorder"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'breadthfirst': return _p.ss($, ($) => sh.id.id("breadthfirst"))
                case 'nodesfirst': return _p.ss($, ($) => sh.id.id("nodesfirst"))
                case 'edgesfirst': return _p.ss($, ($) => sh.id.id("edgesfirst"))
                default: return _p.au($[0])
            }
        })))
        case 'charset': return _p.ss($, ($) => sh.attribute(sh.id.id("charset"), sh.id.string($)))
        case 'clusterrank': return _p.ss($, ($) => sh.attribute(sh.id.id("clusterrank"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'local': return _p.ss($, ($) => sh.id.id("local"))
                case 'global': return _p.ss($, ($) => sh.id.id("global"))
                case 'none': return _p.ss($, ($) => sh.id.id("none"))
                default: return _p.au($[0])
            }
        })))
        case 'shape': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'box': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("box")))
                case 'circle': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("circle")))
                case 'ellipse': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("ellipse")))
                case 'oval': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("oval")))
                case 'point': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("point")))
                case 'egg': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("egg")))
                case 'triangle': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("triangle")))
                case 'plaintext': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("plaintext")))
                case 'plain': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("plain")))
                case 'diamond': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("diamond")))
                case 'trapezium': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("trapezium")))
                case 'parallelogram': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("parallelogram")))
                case 'house': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("house")))
                case 'pentagon': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("pentagon")))
                case 'hexagon': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("hexagon")))
                case 'septagon': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("septagon")))
                case 'octagon': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("octagon")))
                case 'polygon': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("polygon")))
                case 'record': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("record")))
                case 'Mrecord': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.id("Mrecord")))
                case 'custom': return _p.ss($, ($) => sh.attribute(sh.id.id("shape"), sh.id.string($)))
                default: return _p.au($[0])
            }
        }))
        case 'width': return _p.ss($, ($) => sh.attribute(sh.id.id("width"), sh.id.number($)))
        case 'height': return _p.ss($, ($) => sh.attribute(sh.id.id("height"), sh.id.number($)))
        case 'fixedsize': return _p.ss($, ($) => sh.attribute(sh.id.id("fixedsize"), temp_boolean($)))
        case 'regular': return _p.ss($, ($) => sh.attribute(sh.id.id("regular"), temp_boolean($)))
        case 'sides': return _p.ss($, ($) => sh.attribute(sh.id.id("sides"), sh.id.number($)))
        case 'skew': return _p.ss($, ($) => sh.attribute(sh.id.id("skew"), sh.id.number($)))
        case 'distortion': return _p.ss($, ($) => sh.attribute(sh.id.id("distortion"), sh.id.number($)))
        case 'orientation': return _p.ss($, ($) => sh.attribute(sh.id.id("orientation"), sh.id.number($)))
        case 'peripheries': return _p.ss($, ($) => sh.attribute(sh.id.id("peripheries"), sh.id.number($)))
        case 'pin': return _p.ss($, ($) => sh.attribute(sh.id.id("pin"), temp_boolean($)))
        case 'image': return _p.ss($, ($) => sh.attribute(sh.id.id("image"), sh.id.string($)))
        case 'imagepos': return _p.ss($, ($) => sh.attribute(sh.id.id("imagepos"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'tl': return _p.ss($, ($) => sh.id.id("tl"))
                case 'tc': return _p.ss($, ($) => sh.id.id("tc"))
                case 'tr': return _p.ss($, ($) => sh.id.id("tr"))
                case 'ml': return _p.ss($, ($) => sh.id.id("ml"))
                case 'mc': return _p.ss($, ($) => sh.id.id("mc"))
                case 'mr': return _p.ss($, ($) => sh.id.id("mr"))
                case 'bl': return _p.ss($, ($) => sh.id.id("bl"))
                case 'bc': return _p.ss($, ($) => sh.id.id("bc"))
                case 'br': return _p.ss($, ($) => sh.id.id("br"))
                default: return _p.au($[0])
            }
        })))
        case 'imagescale': return _p.ss($, ($) => sh.attribute(sh.id.id("imagescale"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'false': return _p.ss($, ($) => sh.id.id("false"))
                case 'true': return _p.ss($, ($) => sh.id.id("true"))
                case 'width': return _p.ss($, ($) => sh.id.id("width"))
                case 'height': return _p.ss($, ($) => sh.id.id("height"))
                case 'both': return _p.ss($, ($) => sh.id.id("both"))
                default: return _p.au($[0])
            }
        })))
        case 'group': return _p.ss($, ($) => sh.attribute(sh.id.id("group"), sh.id.string($)))
        case 'sortv': return _p.ss($, ($) => sh.attribute(sh.id.id("sortv"), sh.id.number($)))
        case 'area': return _p.ss($, ($) => sh.attribute(sh.id.id("area"), sh.id.number($)))
        case 'z': return _p.ss($, ($) => sh.attribute(sh.id.id("z"), sh.id.number($)))
        case 'margin': return _p.ss($, ($) => sh.attribute(sh.id.id("margin"), sh.id.string($)))
        case 'arrowhead': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'normal': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("normal")))
                case 'box': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("box")))
                case 'crow': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("crow")))
                case 'diamond': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("diamond")))
                case 'dot': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("dot")))
                case 'inv': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("inv")))
                case 'none': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("none")))
                case 'tee': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("tee")))
                case 'vee': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("vee")))
                case 'open': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("open")))
                case 'halfopen': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("halfopen")))
                case 'empty': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("empty")))
                case 'invempty': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("invempty")))
                case 'odiamond': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("odiamond")))
                case 'odot': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("odot")))
                case 'obox': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.id("obox")))
                case 'custom': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowhead"), sh.id.string($)))
                default: return _p.au($[0])
            }
        }))
        case 'arrowtail': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'normal': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("normal")))
                case 'box': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("box")))
                case 'crow': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("crow")))
                case 'diamond': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("diamond")))
                case 'dot': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("dot")))
                case 'inv': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("inv")))
                case 'none': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("none")))
                case 'tee': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("tee")))
                case 'vee': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("vee")))
                case 'open': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("open")))
                case 'halfopen': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("halfopen")))
                case 'empty': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("empty")))
                case 'invempty': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("invempty")))
                case 'odiamond': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("odiamond")))
                case 'odot': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("odot")))
                case 'obox': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.id("obox")))
                case 'custom': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowtail"), sh.id.string($)))
                default: return _p.au($[0])
            }
        }))
        case 'arrowsize': return _p.ss($, ($) => sh.attribute(sh.id.id("arrowsize"), sh.id.number($)))
        case 'dir': return _p.ss($, ($) => sh.attribute(sh.id.id("dir"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'forward': return _p.ss($, ($) => sh.id.id("forward"))
                case 'back': return _p.ss($, ($) => sh.id.id("back"))
                case 'both': return _p.ss($, ($) => sh.id.id("both"))
                case 'none': return _p.ss($, ($) => sh.id.id("none"))
                default: return _p.au($[0])
            }
        })))
        case 'headlabel': return _p.ss($, ($) => sh.attribute(sh.id.id("headlabel"), sh.id.string($)))
        case 'taillabel': return _p.ss($, ($) => sh.attribute(sh.id.id("taillabel"), sh.id.string($)))
        case 'labelfontcolor': return _p.ss($, ($) => sh.attribute(sh.id.id("labelfontcolor"), sh.id.string($)))
        case 'labelfontname': return _p.ss($, ($) => sh.attribute(sh.id.id("labelfontname"), sh.id.string($)))
        case 'labelfontsize': return _p.ss($, ($) => sh.attribute(sh.id.id("labelfontsize"), sh.id.number($)))
        case 'labelangle': return _p.ss($, ($) => sh.attribute(sh.id.id("labelangle"), sh.id.number($)))
        case 'labeldistance': return _p.ss($, ($) => sh.attribute(sh.id.id("labeldistance"), sh.id.number($)))
        case 'labelfloat': return _p.ss($, ($) => sh.attribute(sh.id.id("labelfloat"), temp_boolean($)))
        case 'weight': return _p.ss($, ($) => sh.attribute(sh.id.id("weight"), sh.id.number($)))
        case 'len': return _p.ss($, ($) => sh.attribute(sh.id.id("len"), sh.id.number($)))
        case 'minlen': return _p.ss($, ($) => sh.attribute(sh.id.id("minlen"), sh.id.number($)))
        case 'constraint': return _p.ss($, ($) => sh.attribute(sh.id.id("constraint"), temp_boolean($)))
        case 'decorate': return _p.ss($, ($) => sh.attribute(sh.id.id("decorate"), temp_boolean($)))
        case 'headport': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'center': return _p.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("center")))
                case 'n': return _p.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("n")))
                case 'ne': return _p.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("ne")))
                case 'e': return _p.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("e")))
                case 'se': return _p.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("se")))
                case 's': return _p.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("s")))
                case 'sw': return _p.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("sw")))
                case 'w': return _p.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("w")))
                case 'nw': return _p.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.id("nw")))
                case 'custom': return _p.ss($, ($) => sh.attribute(sh.id.id("headport"), sh.id.string($)))
                default: return _p.au($[0])
            }
        }))
        case 'tailport': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'center': return _p.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("center")))
                case 'n': return _p.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("n")))
                case 'ne': return _p.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("ne")))
                case 'e': return _p.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("e")))
                case 'se': return _p.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("se")))
                case 's': return _p.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("s")))
                case 'sw': return _p.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("sw")))
                case 'w': return _p.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("w")))
                case 'nw': return _p.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.id("nw")))
                case 'custom': return _p.ss($, ($) => sh.attribute(sh.id.id("tailport"), sh.id.string($)))
                default: return _p.au($[0])
            }
        }))
        case 'headclip': return _p.ss($, ($) => sh.attribute(sh.id.id("headclip"), temp_boolean($)))
        case 'tailclip': return _p.ss($, ($) => sh.attribute(sh.id.id("tailclip"), temp_boolean($)))
        case 'lhead': return _p.ss($, ($) => sh.attribute(sh.id.id("lhead"), sh.id.string($)))
        case 'ltail': return _p.ss($, ($) => sh.attribute(sh.id.id("ltail"), sh.id.string($)))
        case 'samehead': return _p.ss($, ($) => sh.attribute(sh.id.id("samehead"), sh.id.string($)))
        case 'sametail': return _p.ss($, ($) => sh.attribute(sh.id.id("sametail"), sh.id.string($)))
        case 'edgeURL': return _p.ss($, ($) => sh.attribute(sh.id.id("edgeURL"), sh.id.string($)))
        case 'headURL': return _p.ss($, ($) => sh.attribute(sh.id.id("headURL"), sh.id.string($)))
        case 'tailURL': return _p.ss($, ($) => sh.attribute(sh.id.id("tailURL"), sh.id.string($)))
        case 'labelURL': return _p.ss($, ($) => sh.attribute(sh.id.id("labelURL"), sh.id.string($)))
        case 'edgehref': return _p.ss($, ($) => sh.attribute(sh.id.id("edgehref"), sh.id.string($)))
        case 'headhref': return _p.ss($, ($) => sh.attribute(sh.id.id("headhref"), sh.id.string($)))
        case 'tailhref': return _p.ss($, ($) => sh.attribute(sh.id.id("tailhref"), sh.id.string($)))
        case 'labelhref': return _p.ss($, ($) => sh.attribute(sh.id.id("labelhref"), sh.id.string($)))
        case 'edgetarget': return _p.ss($, ($) => sh.attribute(sh.id.id("edgetarget"), sh.id.string($)))
        case 'headtarget': return _p.ss($, ($) => sh.attribute(sh.id.id("headtarget"), sh.id.string($)))
        case 'tailtarget': return _p.ss($, ($) => sh.attribute(sh.id.id("tailtarget"), sh.id.string($)))
        case 'edgetooltip': return _p.ss($, ($) => sh.attribute(sh.id.id("edgetooltip"), sh.id.string($)))
        case 'headtooltip': return _p.ss($, ($) => sh.attribute(sh.id.id("headtooltip"), sh.id.string($)))
        case 'tailtooltip': return _p.ss($, ($) => sh.attribute(sh.id.id("tailtooltip"), sh.id.string($)))
        case 'labeltooltip': return _p.ss($, ($) => sh.attribute(sh.id.id("labeltooltip"), sh.id.string($)))
        case 'radius': return _p.ss($, ($) => sh.attribute(sh.id.id("radius"), sh.id.number($)))
        case 'splines': return _p.ss($, ($) => sh.attribute(sh.id.id("splines"), _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'true': return _p.ss($, ($) => sh.id.id("true"))
                case 'false': return _p.ss($, ($) => sh.id.id("false"))
                case 'none': return _p.ss($, ($) => sh.id.id("none"))
                case 'line': return _p.ss($, ($) => sh.id.id("line"))
                case 'spline': return _p.ss($, ($) => sh.id.id("spline"))
                case 'polyline': return _p.ss($, ($) => sh.id.id("polyline"))
                case 'ortho': return _p.ss($, ($) => sh.id.id("ortho"))
                case 'curved': return _p.ss($, ($) => sh.id.id("curved"))
                case 'compound': return _p.ss($, ($) => sh.id.id("compound"))
                default: return _p.au($[0])
            }
        })))
        case 'pos': return _p.ss($, ($) => sh.attribute(sh.id.id("pos"), sh.id.string($)))
        case 'xlabel': return _p.ss($, ($) => sh.attribute(sh.id.id("xlabel"), sh.id.string($)))
        case 'layer': return _p.ss($, ($) => sh.attribute(sh.id.id("layer"), sh.id.string($)))
        default: return _p.au($[0])
    }
}))