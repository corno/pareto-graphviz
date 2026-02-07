import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/graphviz/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

type Graph = _pi.Transformer<d_in.Graph, d_out.Paragraph>
type Attributes = _pi.Transformer<d_in.Attributes, d_out.Paragraph>

//dependencies
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted"
import { $$ as s_decimal } from "../../../primitives/integer/serializers/decimal"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Graph: Graph = ($) => sh.pg.sentences([
    sh.ph.composed([
        sh.ph.literal("digraph {"),
        sh.ph.indent(sh.pg.composed([
            Attributes($.attributes),
            sh.pg.sentences([
                sh.ph.literal(""),
                sh.ph.literal("// nodes"),
            ]),
            sh.pg.sentences(
                _p.list.from.dictionary(
                    $.nodes,
                ).convert(
                    ($, id) => sh.ph.composed([
                        sh.ph.serialize(s_quoted(id)),
                        sh.ph.literal("[ "),
                        sh.ph.indent(
                            Attributes($.attributes),
                        ),
                        sh.ph.literal("];")
                    ]))
            ),
            sh.pg.sentences([
                sh.ph.literal(""),
                sh.ph.literal("// edges"),
            ]),
            sh.pg.sentences($.edges.__l_map(($) => sh.ph.composed([
                sh.ph.serialize(s_quoted($.from)),
                sh.ph.literal(" -> "),
                sh.ph.serialize(s_quoted($.to)),
                sh.ph.literal(" ["),
                sh.ph.indent(
                    Attributes($.attributes),
                ),
                sh.ph.literal("];")
            ]))),
            sh.pg.sentences([
                sh.ph.literal(""),
            ]),
        ])),
        sh.ph.literal("}"),
    ])
])

export const Attributes: Attributes = ($) => sh.pg.sentences($.__l_map(($) => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'freeform': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.serialize(s_quoted($.key)),
            sh.ph.literal("="),
            sh.ph.serialize(s_quoted($.value))
        ]))
        case 'color': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("color="),
            sh.ph.serialize(s_quoted($))]))
        case 'fillcolor': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("fillcolor="),
            sh.ph.serialize(s_quoted($))]))
        case 'penwidth': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("penwidth="),
            sh.ph.serialize(s_decimal($))]))
        case 'label': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("label="),
            sh.ph.serialize(s_quoted($))]))
        case 'fontcolor': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("fontcolor="),
            sh.ph.serialize(s_quoted($))]))
        case 'fontname': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("fontname="),
            sh.ph.serialize(s_quoted($))]))
        case 'fontsize': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("fontsize="),
            sh.ph.serialize(s_decimal($))]))
        case 'URL': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("URL="),
            sh.ph.serialize(s_quoted($))]))
        case 'href': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("href="),
            sh.ph.serialize(s_quoted($))]))
        case 'target': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("target="),
            sh.ph.serialize(s_quoted($))]))
        case 'tooltip': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("tooltip="),
            sh.ph.serialize(s_quoted($))]))
        case 'id': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("id="),
            sh.ph.serialize(s_quoted($))]))
        case 'class': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("class="),
            sh.ph.serialize(s_quoted($))]))
        case 'comment': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("comment="),
            sh.ph.serialize(s_quoted($))]))
        case 'style': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'filled': return _p.ss($, ($) => sh.ph.literal("style=filled"))
                case 'rounded': return _p.ss($, ($) => sh.ph.literal("style=rounded"))
                case 'bold': return _p.ss($, ($) => sh.ph.literal("style=bold"))
                case 'solid': return _p.ss($, ($) => sh.ph.literal("style=solid"))
                case 'dashed': return _p.ss($, ($) => sh.ph.literal("style=dashed"))
                case 'dotted': return _p.ss($, ($) => sh.ph.literal("style=dotted"))
                case 'striped': return _p.ss($, ($) => sh.ph.literal("style=striped"))
                case 'wedged': return _p.ss($, ($) => sh.ph.literal("style=wedged"))
                case 'diagonals': return _p.ss($, ($) => sh.ph.literal("style=diagonals"))
                case 'invis': return _p.ss($, ($) => sh.ph.literal("style=invis"))
                case 'tapered': return _p.ss($, ($) => sh.ph.literal("style=tapered"))
                case 'custom': return _p.ss($, ($) => sh.ph.composed([
                    sh.ph.literal("style="),
                    sh.ph.serialize(s_quoted($))]))
                default: return _p.au($[0])
            }
        }))
        case 'layout': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'dot': return _p.ss($, ($) => sh.ph.literal("layout=dot"))
                case 'neato': return _p.ss($, ($) => sh.ph.literal("layout=neato"))
                case 'fdp': return _p.ss($, ($) => sh.ph.literal("layout=fdp"))
                case 'sfdp': return _p.ss($, ($) => sh.ph.literal("layout=sfdp"))
                case 'twopi': return _p.ss($, ($) => sh.ph.literal("layout=twopi"))
                case 'circo': return _p.ss($, ($) => sh.ph.literal("layout=circo"))
                case 'custom': return _p.ss($, ($) => sh.ph.composed([
                    sh.ph.literal("layout="),
                    sh.ph.serialize(s_quoted($))]))
                default: return _p.au($[0])
            }
        }))
        case 'rankdir': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'TB': return _p.ss($, ($) => sh.ph.literal("rankdir=TB"))
                case 'BT': return _p.ss($, ($) => sh.ph.literal("rankdir=BT"))
                case 'LR': return _p.ss($, ($) => sh.ph.literal("rankdir=LR"))
                case 'RL': return _p.ss($, ($) => sh.ph.literal("rankdir=RL"))
                default: return _p.au($[0])
            }
        }))
        case 'bgcolor': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("bgcolor="),
            sh.ph.serialize(s_quoted($))]))
        case 'labelloc': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 't': return _p.ss($, ($) => sh.ph.literal("labelloc=t"))
                case 'b': return _p.ss($, ($) => sh.ph.literal("labelloc=b"))
                default: return _p.au($[0])
            }
        }))
        case 'labeljust': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'l': return _p.ss($, ($) => sh.ph.literal("labeljust=l"))
                case 'c': return _p.ss($, ($) => sh.ph.literal("labeljust=c"))
                case 'r': return _p.ss($, ($) => sh.ph.literal("labeljust=r"))
                default: return _p.au($[0])
            }
        }))
        case 'size': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("size="),
            sh.ph.serialize(s_quoted($))
        ]))
        case 'ratio': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("ratio="),
            sh.ph.serialize(s_quoted($))]))
        case 'pad': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("pad="),
            sh.ph.serialize(s_quoted($))]))
        case 'nodesep': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("nodesep="),
            sh.ph.serialize(s_decimal($))]))
        case 'ranksep': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("ranksep="),
            sh.ph.serialize(s_decimal($))]))
        case 'dpi': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("dpi="),
            sh.ph.serialize(s_decimal($))]))
        case 'overlap': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'true': return _p.ss($, ($) => sh.ph.literal("overlap=true"))
                case 'false': return _p.ss($, ($) => sh.ph.literal("overlap=false"))
                case 'scale': return _p.ss($, ($) => sh.ph.literal("overlap=scale"))
                case 'scalexy': return _p.ss($, ($) => sh.ph.literal("overlap=scalexy"))
                case 'orthoxy': return _p.ss($, ($) => sh.ph.literal("overlap=orthoxy"))
                case 'orthoyx': return _p.ss($, ($) => sh.ph.literal("overlap=orthoyx"))
                case 'compress': return _p.ss($, ($) => sh.ph.literal("overlap=compress"))
                case 'vpsc': return _p.ss($, ($) => sh.ph.literal("overlap=vpsc"))
                case 'ipsep': return _p.ss($, ($) => sh.ph.literal("overlap=ipsep"))
                case 'prism': return _p.ss($, ($) => sh.ph.literal("overlap=prism"))
                default: return _p.au($[0])
            }
        }))
        case 'pack': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'true': return _p.ss($, ($) => sh.ph.literal("pack=true"))
                case 'false': return _p.ss($, ($) => sh.ph.literal("pack=false"))
                case 'custom': return _p.ss($, ($) => sh.ph.composed([
                    sh.ph.literal("pack="),
                    sh.ph.serialize(s_decimal($))]))
                default: return _p.au($[0])
            }
        }))
        case 'packmode': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'node': return _p.ss($, ($) => sh.ph.literal("packmode=node"))
                case 'clust': return _p.ss($, ($) => sh.ph.literal("packmode=clust"))
                case 'graph': return _p.ss($, ($) => sh.ph.literal("packmode=graph"))
                default: return _p.au($[0])
            }
        }))
        case 'concentrate': return _p.ss($, ($) => sh.ph.literal($ ? "concentrate=true" : "concentrate=false"))
        case 'compound': return _p.ss($, ($) => sh.ph.literal($ ? "compound=true" : "compound=false"))
        case 'center': return _p.ss($, ($) => sh.ph.literal($ ? "center=true" : "center=false"))
        case 'normalize': return _p.ss($, ($) => sh.ph.literal($ ? "normalize=true" : "normalize=false"))
        case 'landscape': return _p.ss($, ($) => sh.ph.literal($ ? "landscape=true" : "landscape=false"))
        case 'outputorder': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'breadthfirst': return _p.ss($, ($) => sh.ph.literal("outputorder=breadthfirst"))
                case 'nodesfirst': return _p.ss($, ($) => sh.ph.literal("outputorder=nodesfirst"))
                case 'edgesfirst': return _p.ss($, ($) => sh.ph.literal("outputorder=edgesfirst"))
                default: return _p.au($[0])
            }
        }))
        case 'charset': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("charset="),
            sh.ph.serialize(s_quoted($))]))
        case 'clusterrank': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'local': return _p.ss($, ($) => sh.ph.literal("clusterrank=local"))
                case 'global': return _p.ss($, ($) => sh.ph.literal("clusterrank=global"))
                case 'none': return _p.ss($, ($) => sh.ph.literal("clusterrank=none"))
                default: return _p.au($[0])
            }
        }))
        case 'shape': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'box': return _p.ss($, ($) => sh.ph.literal("shape=box"))
                case 'circle': return _p.ss($, ($) => sh.ph.literal("shape=circle"))
                case 'ellipse': return _p.ss($, ($) => sh.ph.literal("shape=ellipse"))
                case 'oval': return _p.ss($, ($) => sh.ph.literal("shape=oval"))
                case 'point': return _p.ss($, ($) => sh.ph.literal("shape=point"))
                case 'egg': return _p.ss($, ($) => sh.ph.literal("shape=egg"))
                case 'triangle': return _p.ss($, ($) => sh.ph.literal("shape=triangle"))
                case 'plaintext': return _p.ss($, ($) => sh.ph.literal("shape=plaintext"))
                case 'plain': return _p.ss($, ($) => sh.ph.literal("shape=plain"))
                case 'diamond': return _p.ss($, ($) => sh.ph.literal("shape=diamond"))
                case 'trapezium': return _p.ss($, ($) => sh.ph.literal("shape=trapezium"))
                case 'parallelogram': return _p.ss($, ($) => sh.ph.literal("shape=parallelogram"))
                case 'house': return _p.ss($, ($) => sh.ph.literal("shape=house"))
                case 'pentagon': return _p.ss($, ($) => sh.ph.literal("shape=pentagon"))
                case 'hexagon': return _p.ss($, ($) => sh.ph.literal("shape=hexagon"))
                case 'septagon': return _p.ss($, ($) => sh.ph.literal("shape=septagon"))
                case 'octagon': return _p.ss($, ($) => sh.ph.literal("shape=octagon"))
                case 'polygon': return _p.ss($, ($) => sh.ph.literal("shape=polygon"))
                case 'record': return _p.ss($, ($) => sh.ph.literal("shape=record"))
                case 'Mrecord': return _p.ss($, ($) => sh.ph.literal("shape=Mrecord"))
                case 'custom': return _p.ss($, ($) => sh.ph.composed([
                    sh.ph.literal("shape="),
                    sh.ph.serialize(s_quoted($))]))
                default: return _p.au($[0])
            }
        }))
        case 'width': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("width="),
            sh.ph.serialize(s_decimal($))]))
        case 'height': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("height="),
            sh.ph.serialize(s_decimal($))]))
        case 'fixedsize': return _p.ss($, ($) => sh.ph.literal($ ? "fixedsize=true" : "fixedsize=false"))
        case 'regular': return _p.ss($, ($) => sh.ph.literal($ ? "regular=true" : "regular=false"))
        case 'sides': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("sides="),
            sh.ph.serialize(s_decimal($))]))
        case 'skew': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("skew="),
            sh.ph.serialize(s_decimal($))]))
        case 'distortion': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("distortion="),
            sh.ph.serialize(s_decimal($))]))
        case 'orientation': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("orientation="),
            sh.ph.serialize(s_decimal($))]))
        case 'peripheries': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("peripheries="),
            sh.ph.serialize(s_decimal($))]))
        case 'pin': return _p.ss($, ($) => sh.ph.literal($ ? "pin=true" : "pin=false"))
        case 'image': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("image="),
            sh.ph.serialize(s_quoted($))]))
        case 'imagepos': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'tl': return _p.ss($, ($) => sh.ph.literal("imagepos=tl"))
                case 'tc': return _p.ss($, ($) => sh.ph.literal("imagepos=tc"))
                case 'tr': return _p.ss($, ($) => sh.ph.literal("imagepos=tr"))
                case 'ml': return _p.ss($, ($) => sh.ph.literal("imagepos=ml"))
                case 'mc': return _p.ss($, ($) => sh.ph.literal("imagepos=mc"))
                case 'mr': return _p.ss($, ($) => sh.ph.literal("imagepos=mr"))
                case 'bl': return _p.ss($, ($) => sh.ph.literal("imagepos=bl"))
                case 'bc': return _p.ss($, ($) => sh.ph.literal("imagepos=bc"))
                case 'br': return _p.ss($, ($) => sh.ph.literal("imagepos=br"))
                default: return _p.au($[0])
            }
        }))
        case 'imagescale': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'false': return _p.ss($, ($) => sh.ph.literal("imagescale=false"))
                case 'true': return _p.ss($, ($) => sh.ph.literal("imagescale=true"))
                case 'width': return _p.ss($, ($) => sh.ph.literal("imagescale=width"))
                case 'height': return _p.ss($, ($) => sh.ph.literal("imagescale=height"))
                case 'both': return _p.ss($, ($) => sh.ph.literal("imagescale=both"))
                default: return _p.au($[0])
            }
        }))
        case 'group': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("group="),
            sh.ph.serialize(s_quoted($))]))
        case 'sortv': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("sortv="),
            sh.ph.serialize(s_decimal($))]))
        case 'area': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("area="),
            sh.ph.serialize(s_decimal($))]))
        case 'z': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("z="),
            sh.ph.serialize(s_decimal($))]))
        case 'margin': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("margin="),
            sh.ph.serialize(s_quoted($))]))
        case 'arrowhead': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'normal': return _p.ss($, ($) => sh.ph.literal("arrowhead=normal"))
                case 'box': return _p.ss($, ($) => sh.ph.literal("arrowhead=box"))
                case 'crow': return _p.ss($, ($) => sh.ph.literal("arrowhead=crow"))
                case 'diamond': return _p.ss($, ($) => sh.ph.literal("arrowhead=diamond"))
                case 'dot': return _p.ss($, ($) => sh.ph.literal("arrowhead=dot"))
                case 'inv': return _p.ss($, ($) => sh.ph.literal("arrowhead=inv"))
                case 'none': return _p.ss($, ($) => sh.ph.literal("arrowhead=none"))
                case 'tee': return _p.ss($, ($) => sh.ph.literal("arrowhead=tee"))
                case 'vee': return _p.ss($, ($) => sh.ph.literal("arrowhead=vee"))
                case 'open': return _p.ss($, ($) => sh.ph.literal("arrowhead=open"))
                case 'halfopen': return _p.ss($, ($) => sh.ph.literal("arrowhead=halfopen"))
                case 'empty': return _p.ss($, ($) => sh.ph.literal("arrowhead=empty"))
                case 'invempty': return _p.ss($, ($) => sh.ph.literal("arrowhead=invempty"))
                case 'odiamond': return _p.ss($, ($) => sh.ph.literal("arrowhead=odiamond"))
                case 'odot': return _p.ss($, ($) => sh.ph.literal("arrowhead=odot"))
                case 'obox': return _p.ss($, ($) => sh.ph.literal("arrowhead=obox"))
                case 'custom': return _p.ss($, ($) => sh.ph.composed([
                    sh.ph.literal("arrowhead="),
                    sh.ph.serialize(s_quoted($))]))
                default: return _p.au($[0])
            }
        }))
        case 'arrowtail': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'normal': return _p.ss($, ($) => sh.ph.literal("arrowtail=normal"))
                case 'box': return _p.ss($, ($) => sh.ph.literal("arrowtail=box"))
                case 'crow': return _p.ss($, ($) => sh.ph.literal("arrowtail=crow"))
                case 'diamond': return _p.ss($, ($) => sh.ph.literal("arrowtail=diamond"))
                case 'dot': return _p.ss($, ($) => sh.ph.literal("arrowtail=dot"))
                case 'inv': return _p.ss($, ($) => sh.ph.literal("arrowtail=inv"))
                case 'none': return _p.ss($, ($) => sh.ph.literal("arrowtail=none"))
                case 'tee': return _p.ss($, ($) => sh.ph.literal("arrowtail=tee"))
                case 'vee': return _p.ss($, ($) => sh.ph.literal("arrowtail=vee"))
                case 'open': return _p.ss($, ($) => sh.ph.literal("arrowtail=open"))
                case 'halfopen': return _p.ss($, ($) => sh.ph.literal("arrowtail=halfopen"))
                case 'empty': return _p.ss($, ($) => sh.ph.literal("arrowtail=empty"))
                case 'invempty': return _p.ss($, ($) => sh.ph.literal("arrowtail=invempty"))
                case 'odiamond': return _p.ss($, ($) => sh.ph.literal("arrowtail=odiamond"))
                case 'odot': return _p.ss($, ($) => sh.ph.literal("arrowtail=odot"))
                case 'obox': return _p.ss($, ($) => sh.ph.literal("arrowtail=obox"))
                case 'custom': return _p.ss($, ($) => sh.ph.composed([
                    sh.ph.literal("arrowtail="),
                    sh.ph.serialize(s_quoted($))]))
                default: return _p.au($[0])
            }
        }))
        case 'arrowsize': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("arrowsize="),
            sh.ph.serialize(s_decimal($))]))
        case 'dir': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'forward': return _p.ss($, ($) => sh.ph.literal("dir=forward"))
                case 'back': return _p.ss($, ($) => sh.ph.literal("dir=back"))
                case 'both': return _p.ss($, ($) => sh.ph.literal("dir=both"))
                case 'none': return _p.ss($, ($) => sh.ph.literal("dir=none"))
                default: return _p.au($[0])
            }
        }))
        case 'headlabel': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("headlabel="),
            sh.ph.serialize(s_quoted($))]))
        case 'taillabel': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("taillabel="),
            sh.ph.serialize(s_quoted($))]))
        case 'labelfontcolor': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("labelfontcolor="),
            sh.ph.serialize(s_quoted($))]))
        case 'labelfontname': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("labelfontname="),
            sh.ph.serialize(s_quoted($))]))
        case 'labelfontsize': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("labelfontsize="),
            sh.ph.serialize(s_decimal($))]))
        case 'labelangle': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("labelangle="),
            sh.ph.serialize(s_decimal($))]))
        case 'labeldistance': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("labeldistance="),
            sh.ph.serialize(s_decimal($))]))
        case 'labelfloat': return _p.ss($, ($) => sh.ph.literal($ ? "labelfloat=true" : "labelfloat=false"))
        case 'weight': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("weight="),
            sh.ph.serialize(s_decimal($))]))
        case 'len': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("len="),
            sh.ph.serialize(s_decimal($))]))
        case 'minlen': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("minlen="),
            sh.ph.serialize(s_decimal($))]))
        case 'constraint': return _p.ss($, ($) => sh.ph.literal($ ? "constraint=true" : "constraint=false"))
        case 'decorate': return _p.ss($, ($) => sh.ph.literal($ ? "decorate=true" : "decorate=false"))
        case 'headport': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'center': return _p.ss($, ($) => sh.ph.literal("headport=center"))
                case 'n': return _p.ss($, ($) => sh.ph.literal("headport=n"))
                case 'ne': return _p.ss($, ($) => sh.ph.literal("headport=ne"))
                case 'e': return _p.ss($, ($) => sh.ph.literal("headport=e"))
                case 'se': return _p.ss($, ($) => sh.ph.literal("headport=se"))
                case 's': return _p.ss($, ($) => sh.ph.literal("headport=s"))
                case 'sw': return _p.ss($, ($) => sh.ph.literal("headport=sw"))
                case 'w': return _p.ss($, ($) => sh.ph.literal("headport=w"))
                case 'nw': return _p.ss($, ($) => sh.ph.literal("headport=nw"))
                case 'custom': return _p.ss($, ($) => sh.ph.composed([
                    sh.ph.literal("headport="),
                    sh.ph.serialize(s_quoted($))]))
                default: return _p.au($[0])
            }
        }))
        case 'tailport': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'center': return _p.ss($, ($) => sh.ph.literal("tailport=center"))
                case 'n': return _p.ss($, ($) => sh.ph.literal("tailport=n"))
                case 'ne': return _p.ss($, ($) => sh.ph.literal("tailport=ne"))
                case 'e': return _p.ss($, ($) => sh.ph.literal("tailport=e"))
                case 'se': return _p.ss($, ($) => sh.ph.literal("tailport=se"))
                case 's': return _p.ss($, ($) => sh.ph.literal("tailport=s"))
                case 'sw': return _p.ss($, ($) => sh.ph.literal("tailport=sw"))
                case 'w': return _p.ss($, ($) => sh.ph.literal("tailport=w"))
                case 'nw': return _p.ss($, ($) => sh.ph.literal("tailport=nw"))
                case 'custom': return _p.ss($, ($) => sh.ph.composed([
                    sh.ph.literal("tailport="),
                    sh.ph.serialize(s_quoted($))]))
                default: return _p.au($[0])
            }
        }))
        case 'headclip': return _p.ss($, ($) => sh.ph.literal($ ? "headclip=true" : "headclip=false"))
        case 'tailclip': return _p.ss($, ($) => sh.ph.literal($ ? "tailclip=true" : "tailclip=false"))
        case 'lhead': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("lhead="),
            sh.ph.serialize(s_quoted($))]))
        case 'ltail': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("ltail="),
            sh.ph.serialize(s_quoted($))]))
        case 'samehead': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("samehead="),
            sh.ph.serialize(s_quoted($))]))
        case 'sametail': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("sametail="),
            sh.ph.serialize(s_quoted($))]))
        case 'edgeURL': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("edgeURL="),
            sh.ph.serialize(s_quoted($))]))
        case 'headURL': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("headURL="),
            sh.ph.serialize(s_quoted($))]))
        case 'tailURL': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("tailURL="),
            sh.ph.serialize(s_quoted($))]))
        case 'labelURL': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("labelURL="),
            sh.ph.serialize(s_quoted($))]))
        case 'edgehref': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("edgehref="),
            sh.ph.serialize(s_quoted($))]))
        case 'headhref': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("headhref="),
            sh.ph.serialize(s_quoted($))]))
        case 'tailhref': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("tailhref="),
            sh.ph.serialize(s_quoted($))]))
        case 'labelhref': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("labelhref="),
            sh.ph.serialize(s_quoted($))]))
        case 'edgetarget': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("edgetarget="),
            sh.ph.serialize(s_quoted($))]))
        case 'headtarget': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("headtarget="),
            sh.ph.serialize(s_quoted($))]))
        case 'tailtarget': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("tailtarget="),
            sh.ph.serialize(s_quoted($))]))
        case 'edgetooltip': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("edgetooltip="),
            sh.ph.serialize(s_quoted($))]))
        case 'headtooltip': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("headtooltip="),
            sh.ph.serialize(s_quoted($))]))
        case 'tailtooltip': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("tailtooltip="),
            sh.ph.serialize(s_quoted($))]))
        case 'labeltooltip': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("labeltooltip="),
            sh.ph.serialize(s_quoted($))]))
        case 'radius': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("radius="),
            sh.ph.serialize(s_decimal($))]))
        case 'splines': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'true': return _p.ss($, ($) => sh.ph.literal("splines=true"))
                case 'false': return _p.ss($, ($) => sh.ph.literal("splines=false"))
                case 'none': return _p.ss($, ($) => sh.ph.literal("splines=none"))
                case 'line': return _p.ss($, ($) => sh.ph.literal("splines=line"))
                case 'spline': return _p.ss($, ($) => sh.ph.literal("splines=spline"))
                case 'polyline': return _p.ss($, ($) => sh.ph.literal("splines=polyline"))
                case 'ortho': return _p.ss($, ($) => sh.ph.literal("splines=ortho"))
                case 'curved': return _p.ss($, ($) => sh.ph.literal("splines=curved"))
                case 'compound': return _p.ss($, ($) => sh.ph.literal("splines=compound"))
                default: return _p.au($[0])
            }
        }))
        case 'pos': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("pos="),
            sh.ph.serialize(s_quoted($))]))
        case 'xlabel': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("xlabel="),
            sh.ph.serialize(s_quoted($))]))
        case 'layer': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("layer="),
            sh.ph.serialize(s_quoted($))]))
        default: return _p.au($[0])
    }
})
))