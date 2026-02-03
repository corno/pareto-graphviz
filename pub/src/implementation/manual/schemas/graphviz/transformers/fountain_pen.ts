import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/graphviz/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

type Graph = _pi.Transformer<d_in.Graph, d_out.Group>
type Attributes = _pi.Transformer<d_in.Attributes, d_out.Group_Part>

//dependencies
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted"
import { $$ as s_decimal } from "../../../primitives/integer/serializers/decimal"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Graph: Graph = ($) => sh.group([
    sh.g.nested_block([
        sh.b.literal("digraph {"),
        sh.b.indent([
            Attributes($.attributes),
            sh.g.simple_block(``),
            sh.g.simple_block(`// nodes`),
            sh.g.sub(
                _p.list.from_dictionary(
                    $.nodes,
                    ($, id) => sh.g.nested_block([
                        sh.b.text(s_quoted(id)),
                        sh.b.literal("[ "),
                        sh.b.indent([
                            Attributes($.attributes),
                        ]),
                        sh.b.literal("];")
                    ]))
            ),
            sh.g.simple_block(``),
            sh.g.simple_block(`// edges`),
            sh.g.sub($.edges.__l_map(($) => sh.g.nested_block([
                sh.b.text(s_quoted($.from)),
                sh.b.literal(" -> "),
                sh.b.text(s_quoted($.to)),
                sh.b.literal(" ["),
                sh.b.indent([
                    Attributes($.attributes),
                ]),
                sh.b.literal("];")
            ]))),
            sh.g.simple_block(``),
        ]),
        sh.b.literal("}"),
    ])
])

export const Attributes: Attributes = ($) => sh.g.list($.__l_map(($) =>
    sh.g.nested_block([
        _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'freeform': return _p.ss($, ($) => sh.b.sub([sh.b.text(s_quoted($.key)), sh.b.literal("="), sh.b.text(s_quoted($.value))]))
                case 'color': return _p.ss($, ($) => sh.b.sub([sh.b.literal("color="), sh.b.text(s_quoted($))]))
                case 'fillcolor': return _p.ss($, ($) => sh.b.sub([sh.b.literal("fillcolor="), sh.b.text(s_quoted($))]))
                case 'penwidth': return _p.ss($, ($) => sh.b.sub([sh.b.literal("penwidth="), sh.b.text(s_decimal($))]))
                case 'label': return _p.ss($, ($) => sh.b.sub([sh.b.literal("label="), sh.b.text(s_quoted($))]))
                case 'fontcolor': return _p.ss($, ($) => sh.b.sub([sh.b.literal("fontcolor="), sh.b.text(s_quoted($))]))
                case 'fontname': return _p.ss($, ($) => sh.b.sub([sh.b.literal("fontname="), sh.b.text(s_quoted($))]))
                case 'fontsize': return _p.ss($, ($) => sh.b.sub([sh.b.literal("fontsize="), sh.b.text(s_decimal($))]))
                case 'URL': return _p.ss($, ($) => sh.b.sub([sh.b.literal("URL="), sh.b.text(s_quoted($))]))
                case 'href': return _p.ss($, ($) => sh.b.sub([sh.b.literal("href="), sh.b.text(s_quoted($))]))
                case 'target': return _p.ss($, ($) => sh.b.sub([sh.b.literal("target="), sh.b.text(s_quoted($))]))
                case 'tooltip': return _p.ss($, ($) => sh.b.sub([sh.b.literal("tooltip="), sh.b.text(s_quoted($))]))
                case 'id': return _p.ss($, ($) => sh.b.sub([sh.b.literal("id="), sh.b.text(s_quoted($))]))
                case 'class': return _p.ss($, ($) => sh.b.sub([sh.b.literal("class="), sh.b.text(s_quoted($))]))
                case 'comment': return _p.ss($, ($) => sh.b.sub([sh.b.literal("comment="), sh.b.text(s_quoted($))]))
                case 'style': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'filled': return _p.ss($, ($) => sh.b.literal("style=filled"))
                        case 'rounded': return _p.ss($, ($) => sh.b.literal("style=rounded"))
                        case 'bold': return _p.ss($, ($) => sh.b.literal("style=bold"))
                        case 'solid': return _p.ss($, ($) => sh.b.literal("style=solid"))
                        case 'dashed': return _p.ss($, ($) => sh.b.literal("style=dashed"))
                        case 'dotted': return _p.ss($, ($) => sh.b.literal("style=dotted"))
                        case 'striped': return _p.ss($, ($) => sh.b.literal("style=striped"))
                        case 'wedged': return _p.ss($, ($) => sh.b.literal("style=wedged"))
                        case 'diagonals': return _p.ss($, ($) => sh.b.literal("style=diagonals"))
                        case 'invis': return _p.ss($, ($) => sh.b.literal("style=invis"))
                        case 'tapered': return _p.ss($, ($) => sh.b.literal("style=tapered"))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.literal("style="), sh.b.text(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'layout': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'dot': return _p.ss($, ($) => sh.b.literal("layout=dot"))
                        case 'neato': return _p.ss($, ($) => sh.b.literal("layout=neato"))
                        case 'fdp': return _p.ss($, ($) => sh.b.literal("layout=fdp"))
                        case 'sfdp': return _p.ss($, ($) => sh.b.literal("layout=sfdp"))
                        case 'twopi': return _p.ss($, ($) => sh.b.literal("layout=twopi"))
                        case 'circo': return _p.ss($, ($) => sh.b.literal("layout=circo"))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.literal("layout="), sh.b.text(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'rankdir': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'TB': return _p.ss($, ($) => sh.b.literal("rankdir=TB"))
                        case 'BT': return _p.ss($, ($) => sh.b.literal("rankdir=BT"))
                        case 'LR': return _p.ss($, ($) => sh.b.literal("rankdir=LR"))
                        case 'RL': return _p.ss($, ($) => sh.b.literal("rankdir=RL"))
                        default: return _p.au($[0])
                    }
                }))
                case 'bgcolor': return _p.ss($, ($) => sh.b.sub([sh.b.literal("bgcolor="), sh.b.text(s_quoted($))]))
                case 'labelloc': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 't': return _p.ss($, ($) => sh.b.literal("labelloc=t"))
                        case 'b': return _p.ss($, ($) => sh.b.literal("labelloc=b"))
                        default: return _p.au($[0])
                    }
                }))
                case 'labeljust': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'l': return _p.ss($, ($) => sh.b.literal("labeljust=l"))
                        case 'c': return _p.ss($, ($) => sh.b.literal("labeljust=c"))
                        case 'r': return _p.ss($, ($) => sh.b.literal("labeljust=r"))
                        default: return _p.au($[0])
                    }
                }))
                case 'size': return _p.ss($, ($) => sh.b.sub([sh.b.literal("size="), sh.b.text(s_quoted($))]))
                case 'ratio': return _p.ss($, ($) => sh.b.sub([sh.b.literal("ratio="), sh.b.text(s_quoted($))]))
                case 'pad': return _p.ss($, ($) => sh.b.sub([sh.b.literal("pad="), sh.b.text(s_quoted($))]))
                case 'nodesep': return _p.ss($, ($) => sh.b.sub([sh.b.literal("nodesep="), sh.b.text(s_decimal($))]))
                case 'ranksep': return _p.ss($, ($) => sh.b.sub([sh.b.literal("ranksep="), sh.b.text(s_decimal($))]))
                case 'dpi': return _p.ss($, ($) => sh.b.sub([sh.b.literal("dpi="), sh.b.text(s_decimal($))]))
                case 'overlap': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'true': return _p.ss($, ($) => sh.b.literal("overlap=true"))
                        case 'false': return _p.ss($, ($) => sh.b.literal("overlap=false"))
                        case 'scale': return _p.ss($, ($) => sh.b.literal("overlap=scale"))
                        case 'scalexy': return _p.ss($, ($) => sh.b.literal("overlap=scalexy"))
                        case 'orthoxy': return _p.ss($, ($) => sh.b.literal("overlap=orthoxy"))
                        case 'orthoyx': return _p.ss($, ($) => sh.b.literal("overlap=orthoyx"))
                        case 'compress': return _p.ss($, ($) => sh.b.literal("overlap=compress"))
                        case 'vpsc': return _p.ss($, ($) => sh.b.literal("overlap=vpsc"))
                        case 'ipsep': return _p.ss($, ($) => sh.b.literal("overlap=ipsep"))
                        case 'prism': return _p.ss($, ($) => sh.b.literal("overlap=prism"))
                        default: return _p.au($[0])
                    }
                }))
                case 'pack': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'true': return _p.ss($, ($) => sh.b.literal("pack=true"))
                        case 'false': return _p.ss($, ($) => sh.b.literal("pack=false"))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.literal("pack="), sh.b.text(s_decimal($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'packmode': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'node': return _p.ss($, ($) => sh.b.literal("packmode=node"))
                        case 'clust': return _p.ss($, ($) => sh.b.literal("packmode=clust"))
                        case 'graph': return _p.ss($, ($) => sh.b.literal("packmode=graph"))
                        default: return _p.au($[0])
                    }
                }))
                case 'concentrate': return _p.ss($, ($) => sh.b.literal($ ? `concentrate=true` : `concentrate=false`))
                case 'compound': return _p.ss($, ($) => sh.b.literal($ ? `compound=true` : `compound=false`))
                case 'center': return _p.ss($, ($) => sh.b.literal($ ? `center=true` : `center=false`))
                case 'normalize': return _p.ss($, ($) => sh.b.literal($ ? `normalize=true` : `normalize=false`))
                case 'landscape': return _p.ss($, ($) => sh.b.literal($ ? `landscape=true` : `landscape=false`))
                case 'outputorder': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'breadthfirst': return _p.ss($, ($) => sh.b.literal("outputorder=breadthfirst"))
                        case 'nodesfirst': return _p.ss($, ($) => sh.b.literal("outputorder=nodesfirst"))
                        case 'edgesfirst': return _p.ss($, ($) => sh.b.literal("outputorder=edgesfirst"))
                        default: return _p.au($[0])
                    }
                }))
                case 'charset': return _p.ss($, ($) => sh.b.sub([sh.b.literal("charset="), sh.b.text(s_quoted($))]))
                case 'clusterrank': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'local': return _p.ss($, ($) => sh.b.literal("clusterrank=local"))
                        case 'global': return _p.ss($, ($) => sh.b.literal("clusterrank=global"))
                        case 'none': return _p.ss($, ($) => sh.b.literal("clusterrank=none"))
                        default: return _p.au($[0])
                    }
                }))
                case 'shape': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'box': return _p.ss($, ($) => sh.b.literal("shape=box"))
                        case 'circle': return _p.ss($, ($) => sh.b.literal("shape=circle"))
                        case 'ellipse': return _p.ss($, ($) => sh.b.literal("shape=ellipse"))
                        case 'oval': return _p.ss($, ($) => sh.b.literal("shape=oval"))
                        case 'point': return _p.ss($, ($) => sh.b.literal("shape=point"))
                        case 'egg': return _p.ss($, ($) => sh.b.literal("shape=egg"))
                        case 'triangle': return _p.ss($, ($) => sh.b.literal("shape=triangle"))
                        case 'plaintext': return _p.ss($, ($) => sh.b.literal("shape=plaintext"))
                        case 'plain': return _p.ss($, ($) => sh.b.literal("shape=plain"))
                        case 'diamond': return _p.ss($, ($) => sh.b.literal("shape=diamond"))
                        case 'trapezium': return _p.ss($, ($) => sh.b.literal("shape=trapezium"))
                        case 'parallelogram': return _p.ss($, ($) => sh.b.literal("shape=parallelogram"))
                        case 'house': return _p.ss($, ($) => sh.b.literal("shape=house"))
                        case 'pentagon': return _p.ss($, ($) => sh.b.literal("shape=pentagon"))
                        case 'hexagon': return _p.ss($, ($) => sh.b.literal("shape=hexagon"))
                        case 'septagon': return _p.ss($, ($) => sh.b.literal("shape=septagon"))
                        case 'octagon': return _p.ss($, ($) => sh.b.literal("shape=octagon"))
                        case 'polygon': return _p.ss($, ($) => sh.b.literal("shape=polygon"))
                        case 'record': return _p.ss($, ($) => sh.b.literal("shape=record"))
                        case 'Mrecord': return _p.ss($, ($) => sh.b.literal("shape=Mrecord"))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.literal("shape="), sh.b.text(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'width': return _p.ss($, ($) => sh.b.sub([sh.b.literal("width="), sh.b.text(s_decimal($))]))
                case 'height': return _p.ss($, ($) => sh.b.sub([sh.b.literal("height="), sh.b.text(s_decimal($))]))
                case 'fixedsize': return _p.ss($, ($) => sh.b.literal($ ? `fixedsize=true` : `fixedsize=false`))
                case 'regular': return _p.ss($, ($) => sh.b.literal($ ? `regular=true` : `regular=false`))
                case 'sides': return _p.ss($, ($) => sh.b.sub([sh.b.literal("sides="), sh.b.text(s_decimal($))]))
                case 'skew': return _p.ss($, ($) => sh.b.sub([sh.b.literal("skew="), sh.b.text(s_decimal($))]))
                case 'distortion': return _p.ss($, ($) => sh.b.sub([sh.b.literal("distortion="), sh.b.text(s_decimal($))]))
                case 'orientation': return _p.ss($, ($) => sh.b.sub([sh.b.literal("orientation="), sh.b.text(s_decimal($))]))
                case 'peripheries': return _p.ss($, ($) => sh.b.sub([sh.b.literal("peripheries="), sh.b.text(s_decimal($))]))
                case 'pin': return _p.ss($, ($) => sh.b.literal($ ? `pin=true` : `pin=false`))
                case 'image': return _p.ss($, ($) => sh.b.sub([sh.b.literal("image="), sh.b.text(s_quoted($))]))
                case 'imagepos': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'tl': return _p.ss($, ($) => sh.b.literal("imagepos=tl"))
                        case 'tc': return _p.ss($, ($) => sh.b.literal("imagepos=tc"))
                        case 'tr': return _p.ss($, ($) => sh.b.literal("imagepos=tr"))
                        case 'ml': return _p.ss($, ($) => sh.b.literal("imagepos=ml"))
                        case 'mc': return _p.ss($, ($) => sh.b.literal("imagepos=mc"))
                        case 'mr': return _p.ss($, ($) => sh.b.literal("imagepos=mr"))
                        case 'bl': return _p.ss($, ($) => sh.b.literal("imagepos=bl"))
                        case 'bc': return _p.ss($, ($) => sh.b.literal("imagepos=bc"))
                        case 'br': return _p.ss($, ($) => sh.b.literal("imagepos=br"))
                        default: return _p.au($[0])
                    }
                }))
                case 'imagescale': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'false': return _p.ss($, ($) => sh.b.literal("imagescale=false"))
                        case 'true': return _p.ss($, ($) => sh.b.literal("imagescale=true"))
                        case 'width': return _p.ss($, ($) => sh.b.literal("imagescale=width"))
                        case 'height': return _p.ss($, ($) => sh.b.literal("imagescale=height"))
                        case 'both': return _p.ss($, ($) => sh.b.literal("imagescale=both"))
                        default: return _p.au($[0])
                    }
                }))
                case 'group': return _p.ss($, ($) => sh.b.sub([sh.b.literal("group="), sh.b.text(s_quoted($))]))
                case 'sortv': return _p.ss($, ($) => sh.b.sub([sh.b.literal("sortv="), sh.b.text(s_decimal($))]))
                case 'area': return _p.ss($, ($) => sh.b.sub([sh.b.literal("area="), sh.b.text(s_decimal($))]))
                case 'z': return _p.ss($, ($) => sh.b.sub([sh.b.literal("z="), sh.b.text(s_decimal($))]))
                case 'margin': return _p.ss($, ($) => sh.b.sub([sh.b.literal("margin="), sh.b.text(s_quoted($))]))
                case 'arrowhead': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'normal': return _p.ss($, ($) => sh.b.literal("arrowhead=normal"))
                        case 'box': return _p.ss($, ($) => sh.b.literal("arrowhead=box"))
                        case 'crow': return _p.ss($, ($) => sh.b.literal("arrowhead=crow"))
                        case 'diamond': return _p.ss($, ($) => sh.b.literal("arrowhead=diamond"))
                        case 'dot': return _p.ss($, ($) => sh.b.literal("arrowhead=dot"))
                        case 'inv': return _p.ss($, ($) => sh.b.literal("arrowhead=inv"))
                        case 'none': return _p.ss($, ($) => sh.b.literal("arrowhead=none"))
                        case 'tee': return _p.ss($, ($) => sh.b.literal("arrowhead=tee"))
                        case 'vee': return _p.ss($, ($) => sh.b.literal("arrowhead=vee"))
                        case 'open': return _p.ss($, ($) => sh.b.literal("arrowhead=open"))
                        case 'halfopen': return _p.ss($, ($) => sh.b.literal("arrowhead=halfopen"))
                        case 'empty': return _p.ss($, ($) => sh.b.literal("arrowhead=empty"))
                        case 'invempty': return _p.ss($, ($) => sh.b.literal("arrowhead=invempty"))
                        case 'odiamond': return _p.ss($, ($) => sh.b.literal("arrowhead=odiamond"))
                        case 'odot': return _p.ss($, ($) => sh.b.literal("arrowhead=odot"))
                        case 'obox': return _p.ss($, ($) => sh.b.literal("arrowhead=obox"))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.literal("arrowhead="), sh.b.text(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'arrowtail': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'normal': return _p.ss($, ($) => sh.b.literal("arrowtail=normal"))
                        case 'box': return _p.ss($, ($) => sh.b.literal("arrowtail=box"))
                        case 'crow': return _p.ss($, ($) => sh.b.literal("arrowtail=crow"))
                        case 'diamond': return _p.ss($, ($) => sh.b.literal("arrowtail=diamond"))
                        case 'dot': return _p.ss($, ($) => sh.b.literal("arrowtail=dot"))
                        case 'inv': return _p.ss($, ($) => sh.b.literal("arrowtail=inv"))
                        case 'none': return _p.ss($, ($) => sh.b.literal("arrowtail=none"))
                        case 'tee': return _p.ss($, ($) => sh.b.literal("arrowtail=tee"))
                        case 'vee': return _p.ss($, ($) => sh.b.literal("arrowtail=vee"))
                        case 'open': return _p.ss($, ($) => sh.b.literal("arrowtail=open"))
                        case 'halfopen': return _p.ss($, ($) => sh.b.literal("arrowtail=halfopen"))
                        case 'empty': return _p.ss($, ($) => sh.b.literal("arrowtail=empty"))
                        case 'invempty': return _p.ss($, ($) => sh.b.literal("arrowtail=invempty"))
                        case 'odiamond': return _p.ss($, ($) => sh.b.literal("arrowtail=odiamond"))
                        case 'odot': return _p.ss($, ($) => sh.b.literal("arrowtail=odot"))
                        case 'obox': return _p.ss($, ($) => sh.b.literal("arrowtail=obox"))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.literal("arrowtail="), sh.b.text(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'arrowsize': return _p.ss($, ($) => sh.b.sub([sh.b.literal("arrowsize="), sh.b.text(s_decimal($))]))
                case 'dir': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'forward': return _p.ss($, ($) => sh.b.literal("dir=forward"))
                        case 'back': return _p.ss($, ($) => sh.b.literal("dir=back"))
                        case 'both': return _p.ss($, ($) => sh.b.literal("dir=both"))
                        case 'none': return _p.ss($, ($) => sh.b.literal("dir=none"))
                        default: return _p.au($[0])
                    }
                }))
                case 'headlabel': return _p.ss($, ($) => sh.b.sub([sh.b.literal("headlabel="), sh.b.text(s_quoted($))]))
                case 'taillabel': return _p.ss($, ($) => sh.b.sub([sh.b.literal("taillabel="), sh.b.text(s_quoted($))]))
                case 'labelfontcolor': return _p.ss($, ($) => sh.b.sub([sh.b.literal("labelfontcolor="), sh.b.text(s_quoted($))]))
                case 'labelfontname': return _p.ss($, ($) => sh.b.sub([sh.b.literal("labelfontname="), sh.b.text(s_quoted($))]))
                case 'labelfontsize': return _p.ss($, ($) => sh.b.sub([sh.b.literal("labelfontsize="), sh.b.text(s_decimal($))]))
                case 'labelangle': return _p.ss($, ($) => sh.b.sub([sh.b.literal("labelangle="), sh.b.text(s_decimal($))]))
                case 'labeldistance': return _p.ss($, ($) => sh.b.sub([sh.b.literal("labeldistance="), sh.b.text(s_decimal($))]))
                case 'labelfloat': return _p.ss($, ($) => sh.b.literal($ ? `labelfloat=true` : `labelfloat=false`))
                case 'weight': return _p.ss($, ($) => sh.b.sub([sh.b.literal("weight="), sh.b.text(s_decimal($))]))
                case 'len': return _p.ss($, ($) => sh.b.sub([sh.b.literal("len="), sh.b.text(s_decimal($))]))
                case 'minlen': return _p.ss($, ($) => sh.b.sub([sh.b.literal("minlen="), sh.b.text(s_decimal($))]))
                case 'constraint': return _p.ss($, ($) => sh.b.literal($ ? `constraint=true` : `constraint=false`))
                case 'decorate': return _p.ss($, ($) => sh.b.literal($ ? `decorate=true` : `decorate=false`))
                case 'headport': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'center': return _p.ss($, ($) => sh.b.literal("headport=center"))
                        case 'n': return _p.ss($, ($) => sh.b.literal("headport=n"))
                        case 'ne': return _p.ss($, ($) => sh.b.literal("headport=ne"))
                        case 'e': return _p.ss($, ($) => sh.b.literal("headport=e"))
                        case 'se': return _p.ss($, ($) => sh.b.literal("headport=se"))
                        case 's': return _p.ss($, ($) => sh.b.literal("headport=s"))
                        case 'sw': return _p.ss($, ($) => sh.b.literal("headport=sw"))
                        case 'w': return _p.ss($, ($) => sh.b.literal("headport=w"))
                        case 'nw': return _p.ss($, ($) => sh.b.literal("headport=nw"))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.literal("headport="), sh.b.text(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'tailport': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'center': return _p.ss($, ($) => sh.b.literal("tailport=center"))
                        case 'n': return _p.ss($, ($) => sh.b.literal("tailport=n"))
                        case 'ne': return _p.ss($, ($) => sh.b.literal("tailport=ne"))
                        case 'e': return _p.ss($, ($) => sh.b.literal("tailport=e"))
                        case 'se': return _p.ss($, ($) => sh.b.literal("tailport=se"))
                        case 's': return _p.ss($, ($) => sh.b.literal("tailport=s"))
                        case 'sw': return _p.ss($, ($) => sh.b.literal("tailport=sw"))
                        case 'w': return _p.ss($, ($) => sh.b.literal("tailport=w"))
                        case 'nw': return _p.ss($, ($) => sh.b.literal("tailport=nw"))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.literal("tailport="), sh.b.text(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'headclip': return _p.ss($, ($) => sh.b.literal($ ? `headclip=true` : `headclip=false`))
                case 'tailclip': return _p.ss($, ($) => sh.b.literal($ ? `tailclip=true` : `tailclip=false`))
                case 'lhead': return _p.ss($, ($) => sh.b.sub([sh.b.literal("lhead="), sh.b.text(s_quoted($))]))
                case 'ltail': return _p.ss($, ($) => sh.b.sub([sh.b.literal("ltail="), sh.b.text(s_quoted($))]))
                case 'samehead': return _p.ss($, ($) => sh.b.sub([sh.b.literal("samehead="), sh.b.text(s_quoted($))]))
                case 'sametail': return _p.ss($, ($) => sh.b.sub([sh.b.literal("sametail="), sh.b.text(s_quoted($))]))
                case 'edgeURL': return _p.ss($, ($) => sh.b.sub([sh.b.literal("edgeURL="), sh.b.text(s_quoted($))]))
                case 'headURL': return _p.ss($, ($) => sh.b.sub([sh.b.literal("headURL="), sh.b.text(s_quoted($))]))
                case 'tailURL': return _p.ss($, ($) => sh.b.sub([sh.b.literal("tailURL="), sh.b.text(s_quoted($))]))
                case 'labelURL': return _p.ss($, ($) => sh.b.sub([sh.b.literal("labelURL="), sh.b.text(s_quoted($))]))
                case 'edgehref': return _p.ss($, ($) => sh.b.sub([sh.b.literal("edgehref="), sh.b.text(s_quoted($))]))
                case 'headhref': return _p.ss($, ($) => sh.b.sub([sh.b.literal("headhref="), sh.b.text(s_quoted($))]))
                case 'tailhref': return _p.ss($, ($) => sh.b.sub([sh.b.literal("tailhref="), sh.b.text(s_quoted($))]))
                case 'labelhref': return _p.ss($, ($) => sh.b.sub([sh.b.literal("labelhref="), sh.b.text(s_quoted($))]))
                case 'edgetarget': return _p.ss($, ($) => sh.b.sub([sh.b.literal("edgetarget="), sh.b.text(s_quoted($))]))
                case 'headtarget': return _p.ss($, ($) => sh.b.sub([sh.b.literal("headtarget="), sh.b.text(s_quoted($))]))
                case 'tailtarget': return _p.ss($, ($) => sh.b.sub([sh.b.literal("tailtarget="), sh.b.text(s_quoted($))]))
                case 'edgetooltip': return _p.ss($, ($) => sh.b.sub([sh.b.literal("edgetooltip="), sh.b.text(s_quoted($))]))
                case 'headtooltip': return _p.ss($, ($) => sh.b.sub([sh.b.literal("headtooltip="), sh.b.text(s_quoted($))]))
                case 'tailtooltip': return _p.ss($, ($) => sh.b.sub([sh.b.literal("tailtooltip="), sh.b.text(s_quoted($))]))
                case 'labeltooltip': return _p.ss($, ($) => sh.b.sub([sh.b.literal("labeltooltip="), sh.b.text(s_quoted($))]))
                case 'radius': return _p.ss($, ($) => sh.b.sub([sh.b.literal("radius="), sh.b.text(s_decimal($))]))
                case 'splines': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'true': return _p.ss($, ($) => sh.b.literal("splines=true"))
                        case 'false': return _p.ss($, ($) => sh.b.literal("splines=false"))
                        case 'none': return _p.ss($, ($) => sh.b.literal("splines=none"))
                        case 'line': return _p.ss($, ($) => sh.b.literal("splines=line"))
                        case 'spline': return _p.ss($, ($) => sh.b.literal("splines=spline"))
                        case 'polyline': return _p.ss($, ($) => sh.b.literal("splines=polyline"))
                        case 'ortho': return _p.ss($, ($) => sh.b.literal("splines=ortho"))
                        case 'curved': return _p.ss($, ($) => sh.b.literal("splines=curved"))
                        case 'compound': return _p.ss($, ($) => sh.b.literal("splines=compound"))
                        default: return _p.au($[0])
                    }
                }))
                case 'pos': return _p.ss($, ($) => sh.b.sub([sh.b.literal("pos="), sh.b.text(s_quoted($))]))
                case 'xlabel': return _p.ss($, ($) => sh.b.sub([sh.b.literal("xlabel="), sh.b.text(s_quoted($))]))
                case 'layer': return _p.ss($, ($) => sh.b.sub([sh.b.literal("layer="), sh.b.text(s_quoted($))]))
                default: return _p.au($[0])
            }
        })
    ])
))