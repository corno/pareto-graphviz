import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/graphviz/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data"

type Graph = _pi.Transformer<d_in.Graph, d_out.Group>
type Attributes = _pi.Transformer<d_in.Attributes, d_out.Group_Part>

//dependencies
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted"
import { $$ as s_decimal } from "../../../primitives/integer/serializers/decimal"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Graph: Graph = ($) => sh.group([
    sh.g.nested_block([
        sh.b.snippet(`digraph {`),
        sh.b.indent([
            Attributes($.attributes),
            sh.g.simple_block(``),
            sh.g.simple_block(`// nodes`),
            sh.g.sub(
                _p.list.from_dictionary(
                    $.nodes,
                    ($, key) => sh.g.nested_block([
                        sh.b.snippet(`${s_quoted(key)} [`),
                        sh.b.indent([
                            Attributes($.attributes),
                        ]),
                        sh.b.snippet(`];`)
                    ]))
            ),
            sh.g.simple_block(``),
            sh.g.simple_block(`// edges`),
            sh.g.sub($.edges.__l_map(($) => sh.g.nested_block([
                sh.b.snippet(`${s_quoted($.from)} -> ${s_quoted($.to)} [`),
                sh.b.indent([
                    Attributes($.attributes),
                ]),
                sh.b.snippet(`];`)
            ]))),
            sh.g.simple_block(``),
        ]),
        sh.b.snippet(`}`),
    ])
])

export const Attributes: Attributes = ($) => sh.g.list($.__l_map(($) => 
    sh.g.nested_block([
        _p.sg($, ($) => {
            switch ($[0]) {
                case 'freeform': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(s_quoted($.key)), sh.b.snippet(`=`), sh.b.snippet(s_quoted($.value))]))
                case 'color': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`color=`), sh.b.snippet(s_quoted($))]))
                case 'fillcolor': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`fillcolor=`), sh.b.snippet(s_quoted($))]))
                case 'penwidth': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`penwidth=`), sh.b.snippet(s_decimal($))]))
                case 'label': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`label=`), sh.b.snippet(s_quoted($))]))
                case 'fontcolor': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`fontcolor=`), sh.b.snippet(s_quoted($))]))
                case 'fontname': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`fontname=`), sh.b.snippet(s_quoted($))]))
                case 'fontsize': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`fontsize=`), sh.b.snippet(s_decimal($))]))
                case 'URL': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`URL=`), sh.b.snippet(s_quoted($))]))
                case 'href': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`href=`), sh.b.snippet(s_quoted($))]))
                case 'target': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`target=`), sh.b.snippet(s_quoted($))]))
                case 'tooltip': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`tooltip=`), sh.b.snippet(s_quoted($))]))
                case 'id': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`id=`), sh.b.snippet(s_quoted($))]))
                case 'class': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`class=`), sh.b.snippet(s_quoted($))]))
                case 'comment': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`comment=`), sh.b.snippet(s_quoted($))]))
                case 'style': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'filled': return _p.ss($, ($) => sh.b.snippet(`style=filled`))
                        case 'rounded': return _p.ss($, ($) => sh.b.snippet(`style=rounded`))
                        case 'bold': return _p.ss($, ($) => sh.b.snippet(`style=bold`))
                        case 'solid': return _p.ss($, ($) => sh.b.snippet(`style=solid`))
                        case 'dashed': return _p.ss($, ($) => sh.b.snippet(`style=dashed`))
                        case 'dotted': return _p.ss($, ($) => sh.b.snippet(`style=dotted`))
                        case 'striped': return _p.ss($, ($) => sh.b.snippet(`style=striped`))
                        case 'wedged': return _p.ss($, ($) => sh.b.snippet(`style=wedged`))
                        case 'diagonals': return _p.ss($, ($) => sh.b.snippet(`style=diagonals`))
                        case 'invis': return _p.ss($, ($) => sh.b.snippet(`style=invis`))
                        case 'tapered': return _p.ss($, ($) => sh.b.snippet(`style=tapered`))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`style=`), sh.b.snippet(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'layout': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'dot': return _p.ss($, ($) => sh.b.snippet(`layout=dot`))
                        case 'neato': return _p.ss($, ($) => sh.b.snippet(`layout=neato`))
                        case 'fdp': return _p.ss($, ($) => sh.b.snippet(`layout=fdp`))
                        case 'sfdp': return _p.ss($, ($) => sh.b.snippet(`layout=sfdp`))
                        case 'twopi': return _p.ss($, ($) => sh.b.snippet(`layout=twopi`))
                        case 'circo': return _p.ss($, ($) => sh.b.snippet(`layout=circo`))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`layout=`), sh.b.snippet(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'rankdir': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'TB': return _p.ss($, ($) => sh.b.snippet(`rankdir=TB`))
                        case 'BT': return _p.ss($, ($) => sh.b.snippet(`rankdir=BT`))
                        case 'LR': return _p.ss($, ($) => sh.b.snippet(`rankdir=LR`))
                        case 'RL': return _p.ss($, ($) => sh.b.snippet(`rankdir=RL`))
                        default: return _p.au($[0])
                    }
                }))
                case 'bgcolor': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`bgcolor=`), sh.b.snippet(s_quoted($))]))
                case 'labelloc': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 't': return _p.ss($, ($) => sh.b.snippet(`labelloc=t`))
                        case 'b': return _p.ss($, ($) => sh.b.snippet(`labelloc=b`))
                        default: return _p.au($[0])
                    }
                }))
                case 'labeljust': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'l': return _p.ss($, ($) => sh.b.snippet(`labeljust=l`))
                        case 'c': return _p.ss($, ($) => sh.b.snippet(`labeljust=c`))
                        case 'r': return _p.ss($, ($) => sh.b.snippet(`labeljust=r`))
                        default: return _p.au($[0])
                    }
                }))
                case 'size': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`size=`), sh.b.snippet(s_quoted($))]))
                case 'ratio': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`ratio=`), sh.b.snippet(s_quoted($))]))
                case 'pad': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`pad=`), sh.b.snippet(s_quoted($))]))
                case 'nodesep': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`nodesep=`), sh.b.snippet(s_decimal($))]))
                case 'ranksep': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`ranksep=`), sh.b.snippet(s_decimal($))]))
                case 'dpi': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`dpi=`), sh.b.snippet(s_decimal($))]))
                case 'overlap': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'true': return _p.ss($, ($) => sh.b.snippet(`overlap=true`))
                        case 'false': return _p.ss($, ($) => sh.b.snippet(`overlap=false`))
                        case 'scale': return _p.ss($, ($) => sh.b.snippet(`overlap=scale`))
                        case 'scalexy': return _p.ss($, ($) => sh.b.snippet(`overlap=scalexy`))
                        case 'orthoxy': return _p.ss($, ($) => sh.b.snippet(`overlap=orthoxy`))
                        case 'orthoyx': return _p.ss($, ($) => sh.b.snippet(`overlap=orthoyx`))
                        case 'compress': return _p.ss($, ($) => sh.b.snippet(`overlap=compress`))
                        case 'vpsc': return _p.ss($, ($) => sh.b.snippet(`overlap=vpsc`))
                        case 'ipsep': return _p.ss($, ($) => sh.b.snippet(`overlap=ipsep`))
                        case 'prism': return _p.ss($, ($) => sh.b.snippet(`overlap=prism`))
                        default: return _p.au($[0])
                    }
                }))
                case 'pack': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'true': return _p.ss($, ($) => sh.b.snippet(`pack=true`))
                        case 'false': return _p.ss($, ($) => sh.b.snippet(`pack=false`))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`pack=`), sh.b.snippet(s_decimal($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'packmode': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'node': return _p.ss($, ($) => sh.b.snippet(`packmode=node`))
                        case 'clust': return _p.ss($, ($) => sh.b.snippet(`packmode=clust`))
                        case 'graph': return _p.ss($, ($) => sh.b.snippet(`packmode=graph`))
                        default: return _p.au($[0])
                    }
                }))
                case 'concentrate': return _p.ss($, ($) => sh.b.snippet($ ? `concentrate=true` : `concentrate=false`))
                case 'compound': return _p.ss($, ($) => sh.b.snippet($ ? `compound=true` : `compound=false`))
                case 'center': return _p.ss($, ($) => sh.b.snippet($ ? `center=true` : `center=false`))
                case 'normalize': return _p.ss($, ($) => sh.b.snippet($ ? `normalize=true` : `normalize=false`))
                case 'landscape': return _p.ss($, ($) => sh.b.snippet($ ? `landscape=true` : `landscape=false`))
                case 'outputorder': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'breadthfirst': return _p.ss($, ($) => sh.b.snippet(`outputorder=breadthfirst`))
                        case 'nodesfirst': return _p.ss($, ($) => sh.b.snippet(`outputorder=nodesfirst`))
                        case 'edgesfirst': return _p.ss($, ($) => sh.b.snippet(`outputorder=edgesfirst`))
                        default: return _p.au($[0])
                    }
                }))
                case 'charset': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`charset=`), sh.b.snippet(s_quoted($))]))
                case 'clusterrank': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'local': return _p.ss($, ($) => sh.b.snippet(`clusterrank=local`))
                        case 'global': return _p.ss($, ($) => sh.b.snippet(`clusterrank=global`))
                        case 'none': return _p.ss($, ($) => sh.b.snippet(`clusterrank=none`))
                        default: return _p.au($[0])
                    }
                }))
                case 'shape': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'box': return _p.ss($, ($) => sh.b.snippet(`shape=box`))
                        case 'circle': return _p.ss($, ($) => sh.b.snippet(`shape=circle`))
                        case 'ellipse': return _p.ss($, ($) => sh.b.snippet(`shape=ellipse`))
                        case 'oval': return _p.ss($, ($) => sh.b.snippet(`shape=oval`))
                        case 'point': return _p.ss($, ($) => sh.b.snippet(`shape=point`))
                        case 'egg': return _p.ss($, ($) => sh.b.snippet(`shape=egg`))
                        case 'triangle': return _p.ss($, ($) => sh.b.snippet(`shape=triangle`))
                        case 'plaintext': return _p.ss($, ($) => sh.b.snippet(`shape=plaintext`))
                        case 'plain': return _p.ss($, ($) => sh.b.snippet(`shape=plain`))
                        case 'diamond': return _p.ss($, ($) => sh.b.snippet(`shape=diamond`))
                        case 'trapezium': return _p.ss($, ($) => sh.b.snippet(`shape=trapezium`))
                        case 'parallelogram': return _p.ss($, ($) => sh.b.snippet(`shape=parallelogram`))
                        case 'house': return _p.ss($, ($) => sh.b.snippet(`shape=house`))
                        case 'pentagon': return _p.ss($, ($) => sh.b.snippet(`shape=pentagon`))
                        case 'hexagon': return _p.ss($, ($) => sh.b.snippet(`shape=hexagon`))
                        case 'septagon': return _p.ss($, ($) => sh.b.snippet(`shape=septagon`))
                        case 'octagon': return _p.ss($, ($) => sh.b.snippet(`shape=octagon`))
                        case 'polygon': return _p.ss($, ($) => sh.b.snippet(`shape=polygon`))
                        case 'record': return _p.ss($, ($) => sh.b.snippet(`shape=record`))
                        case 'Mrecord': return _p.ss($, ($) => sh.b.snippet(`shape=Mrecord`))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`shape=`), sh.b.snippet(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'width': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`width=`), sh.b.snippet(s_decimal($))]))
                case 'height': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`height=`), sh.b.snippet(s_decimal($))]))
                case 'fixedsize': return _p.ss($, ($) => sh.b.snippet($ ? `fixedsize=true` : `fixedsize=false`))
                case 'regular': return _p.ss($, ($) => sh.b.snippet($ ? `regular=true` : `regular=false`))
                case 'sides': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`sides=`), sh.b.snippet(s_decimal($))]))
                case 'skew': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`skew=`), sh.b.snippet(s_decimal($))]))
                case 'distortion': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`distortion=`), sh.b.snippet(s_decimal($))]))
                case 'orientation': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`orientation=`), sh.b.snippet(s_decimal($))]))
                case 'peripheries': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`peripheries=`), sh.b.snippet(s_decimal($))]))
                case 'pin': return _p.ss($, ($) => sh.b.snippet($ ? `pin=true` : `pin=false`))
                case 'image': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`image=`), sh.b.snippet(s_quoted($))]))
                case 'imagepos': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'tl': return _p.ss($, ($) => sh.b.snippet(`imagepos=tl`))
                        case 'tc': return _p.ss($, ($) => sh.b.snippet(`imagepos=tc`))
                        case 'tr': return _p.ss($, ($) => sh.b.snippet(`imagepos=tr`))
                        case 'ml': return _p.ss($, ($) => sh.b.snippet(`imagepos=ml`))
                        case 'mc': return _p.ss($, ($) => sh.b.snippet(`imagepos=mc`))
                        case 'mr': return _p.ss($, ($) => sh.b.snippet(`imagepos=mr`))
                        case 'bl': return _p.ss($, ($) => sh.b.snippet(`imagepos=bl`))
                        case 'bc': return _p.ss($, ($) => sh.b.snippet(`imagepos=bc`))
                        case 'br': return _p.ss($, ($) => sh.b.snippet(`imagepos=br`))
                        default: return _p.au($[0])
                    }
                }))
                case 'imagescale': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'false': return _p.ss($, ($) => sh.b.snippet(`imagescale=false`))
                        case 'true': return _p.ss($, ($) => sh.b.snippet(`imagescale=true`))
                        case 'width': return _p.ss($, ($) => sh.b.snippet(`imagescale=width`))
                        case 'height': return _p.ss($, ($) => sh.b.snippet(`imagescale=height`))
                        case 'both': return _p.ss($, ($) => sh.b.snippet(`imagescale=both`))
                        default: return _p.au($[0])
                    }
                }))
                case 'group': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`group=`), sh.b.snippet(s_quoted($))]))
                case 'sortv': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`sortv=`), sh.b.snippet(s_decimal($))]))
                case 'area': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`area=`), sh.b.snippet(s_decimal($))]))
                case 'z': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`z=`), sh.b.snippet(s_decimal($))]))
                case 'margin': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`margin=`), sh.b.snippet(s_quoted($))]))
                case 'arrowhead': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'normal': return _p.ss($, ($) => sh.b.snippet(`arrowhead=normal`))
                        case 'box': return _p.ss($, ($) => sh.b.snippet(`arrowhead=box`))
                        case 'crow': return _p.ss($, ($) => sh.b.snippet(`arrowhead=crow`))
                        case 'diamond': return _p.ss($, ($) => sh.b.snippet(`arrowhead=diamond`))
                        case 'dot': return _p.ss($, ($) => sh.b.snippet(`arrowhead=dot`))
                        case 'inv': return _p.ss($, ($) => sh.b.snippet(`arrowhead=inv`))
                        case 'none': return _p.ss($, ($) => sh.b.snippet(`arrowhead=none`))
                        case 'tee': return _p.ss($, ($) => sh.b.snippet(`arrowhead=tee`))
                        case 'vee': return _p.ss($, ($) => sh.b.snippet(`arrowhead=vee`))
                        case 'open': return _p.ss($, ($) => sh.b.snippet(`arrowhead=open`))
                        case 'halfopen': return _p.ss($, ($) => sh.b.snippet(`arrowhead=halfopen`))
                        case 'empty': return _p.ss($, ($) => sh.b.snippet(`arrowhead=empty`))
                        case 'invempty': return _p.ss($, ($) => sh.b.snippet(`arrowhead=invempty`))
                        case 'odiamond': return _p.ss($, ($) => sh.b.snippet(`arrowhead=odiamond`))
                        case 'odot': return _p.ss($, ($) => sh.b.snippet(`arrowhead=odot`))
                        case 'obox': return _p.ss($, ($) => sh.b.snippet(`arrowhead=obox`))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`arrowhead=`), sh.b.snippet(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'arrowtail': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'normal': return _p.ss($, ($) => sh.b.snippet(`arrowtail=normal`))
                        case 'box': return _p.ss($, ($) => sh.b.snippet(`arrowtail=box`))
                        case 'crow': return _p.ss($, ($) => sh.b.snippet(`arrowtail=crow`))
                        case 'diamond': return _p.ss($, ($) => sh.b.snippet(`arrowtail=diamond`))
                        case 'dot': return _p.ss($, ($) => sh.b.snippet(`arrowtail=dot`))
                        case 'inv': return _p.ss($, ($) => sh.b.snippet(`arrowtail=inv`))
                        case 'none': return _p.ss($, ($) => sh.b.snippet(`arrowtail=none`))
                        case 'tee': return _p.ss($, ($) => sh.b.snippet(`arrowtail=tee`))
                        case 'vee': return _p.ss($, ($) => sh.b.snippet(`arrowtail=vee`))
                        case 'open': return _p.ss($, ($) => sh.b.snippet(`arrowtail=open`))
                        case 'halfopen': return _p.ss($, ($) => sh.b.snippet(`arrowtail=halfopen`))
                        case 'empty': return _p.ss($, ($) => sh.b.snippet(`arrowtail=empty`))
                        case 'invempty': return _p.ss($, ($) => sh.b.snippet(`arrowtail=invempty`))
                        case 'odiamond': return _p.ss($, ($) => sh.b.snippet(`arrowtail=odiamond`))
                        case 'odot': return _p.ss($, ($) => sh.b.snippet(`arrowtail=odot`))
                        case 'obox': return _p.ss($, ($) => sh.b.snippet(`arrowtail=obox`))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`arrowtail=`), sh.b.snippet(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'arrowsize': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`arrowsize=`), sh.b.snippet(s_decimal($))]))
                case 'dir': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'forward': return _p.ss($, ($) => sh.b.snippet(`dir=forward`))
                        case 'back': return _p.ss($, ($) => sh.b.snippet(`dir=back`))
                        case 'both': return _p.ss($, ($) => sh.b.snippet(`dir=both`))
                        case 'none': return _p.ss($, ($) => sh.b.snippet(`dir=none`))
                        default: return _p.au($[0])
                    }
                }))
                case 'headlabel': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`headlabel=`), sh.b.snippet(s_quoted($))]))
                case 'taillabel': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`taillabel=`), sh.b.snippet(s_quoted($))]))
                case 'labelfontcolor': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`labelfontcolor=`), sh.b.snippet(s_quoted($))]))
                case 'labelfontname': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`labelfontname=`), sh.b.snippet(s_quoted($))]))
                case 'labelfontsize': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`labelfontsize=`), sh.b.snippet(s_decimal($))]))
                case 'labelangle': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`labelangle=`), sh.b.snippet(s_decimal($))]))
                case 'labeldistance': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`labeldistance=`), sh.b.snippet(s_decimal($))]))
                case 'labelfloat': return _p.ss($, ($) => sh.b.snippet($ ? `labelfloat=true` : `labelfloat=false`))
                case 'weight': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`weight=`), sh.b.snippet(s_decimal($))]))
                case 'len': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`len=`), sh.b.snippet(s_decimal($))]))
                case 'minlen': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`minlen=`), sh.b.snippet(s_decimal($))]))
                case 'constraint': return _p.ss($, ($) => sh.b.snippet($ ? `constraint=true` : `constraint=false`))
                case 'decorate': return _p.ss($, ($) => sh.b.snippet($ ? `decorate=true` : `decorate=false`))
                case 'headport': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'center': return _p.ss($, ($) => sh.b.snippet(`headport=center`))
                        case 'n': return _p.ss($, ($) => sh.b.snippet(`headport=n`))
                        case 'ne': return _p.ss($, ($) => sh.b.snippet(`headport=ne`))
                        case 'e': return _p.ss($, ($) => sh.b.snippet(`headport=e`))
                        case 'se': return _p.ss($, ($) => sh.b.snippet(`headport=se`))
                        case 's': return _p.ss($, ($) => sh.b.snippet(`headport=s`))
                        case 'sw': return _p.ss($, ($) => sh.b.snippet(`headport=sw`))
                        case 'w': return _p.ss($, ($) => sh.b.snippet(`headport=w`))
                        case 'nw': return _p.ss($, ($) => sh.b.snippet(`headport=nw`))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`headport=`), sh.b.snippet(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'tailport': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'center': return _p.ss($, ($) => sh.b.snippet(`tailport=center`))
                        case 'n': return _p.ss($, ($) => sh.b.snippet(`tailport=n`))
                        case 'ne': return _p.ss($, ($) => sh.b.snippet(`tailport=ne`))
                        case 'e': return _p.ss($, ($) => sh.b.snippet(`tailport=e`))
                        case 'se': return _p.ss($, ($) => sh.b.snippet(`tailport=se`))
                        case 's': return _p.ss($, ($) => sh.b.snippet(`tailport=s`))
                        case 'sw': return _p.ss($, ($) => sh.b.snippet(`tailport=sw`))
                        case 'w': return _p.ss($, ($) => sh.b.snippet(`tailport=w`))
                        case 'nw': return _p.ss($, ($) => sh.b.snippet(`tailport=nw`))
                        case 'custom': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`tailport=`), sh.b.snippet(s_quoted($))]))
                        default: return _p.au($[0])
                    }
                }))
                case 'headclip': return _p.ss($, ($) => sh.b.snippet($ ? `headclip=true` : `headclip=false`))
                case 'tailclip': return _p.ss($, ($) => sh.b.snippet($ ? `tailclip=true` : `tailclip=false`))
                case 'lhead': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`lhead=`), sh.b.snippet(s_quoted($))]))
                case 'ltail': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`ltail=`), sh.b.snippet(s_quoted($))]))
                case 'samehead': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`samehead=`), sh.b.snippet(s_quoted($))]))
                case 'sametail': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`sametail=`), sh.b.snippet(s_quoted($))]))
                case 'edgeURL': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`edgeURL=`), sh.b.snippet(s_quoted($))]))
                case 'headURL': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`headURL=`), sh.b.snippet(s_quoted($))]))
                case 'tailURL': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`tailURL=`), sh.b.snippet(s_quoted($))]))
                case 'labelURL': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`labelURL=`), sh.b.snippet(s_quoted($))]))
                case 'edgehref': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`edgehref=`), sh.b.snippet(s_quoted($))]))
                case 'headhref': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`headhref=`), sh.b.snippet(s_quoted($))]))
                case 'tailhref': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`tailhref=`), sh.b.snippet(s_quoted($))]))
                case 'labelhref': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`labelhref=`), sh.b.snippet(s_quoted($))]))
                case 'edgetarget': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`edgetarget=`), sh.b.snippet(s_quoted($))]))
                case 'headtarget': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`headtarget=`), sh.b.snippet(s_quoted($))]))
                case 'tailtarget': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`tailtarget=`), sh.b.snippet(s_quoted($))]))
                case 'edgetooltip': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`edgetooltip=`), sh.b.snippet(s_quoted($))]))
                case 'headtooltip': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`headtooltip=`), sh.b.snippet(s_quoted($))]))
                case 'tailtooltip': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`tailtooltip=`), sh.b.snippet(s_quoted($))]))
                case 'labeltooltip': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`labeltooltip=`), sh.b.snippet(s_quoted($))]))
                case 'radius': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`radius=`), sh.b.snippet(s_decimal($))]))
                case 'splines': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'true': return _p.ss($, ($) => sh.b.snippet(`splines=true`))
                        case 'false': return _p.ss($, ($) => sh.b.snippet(`splines=false`))
                        case 'none': return _p.ss($, ($) => sh.b.snippet(`splines=none`))
                        case 'line': return _p.ss($, ($) => sh.b.snippet(`splines=line`))
                        case 'spline': return _p.ss($, ($) => sh.b.snippet(`splines=spline`))
                        case 'polyline': return _p.ss($, ($) => sh.b.snippet(`splines=polyline`))
                        case 'ortho': return _p.ss($, ($) => sh.b.snippet(`splines=ortho`))
                        case 'curved': return _p.ss($, ($) => sh.b.snippet(`splines=curved`))
                        case 'compound': return _p.ss($, ($) => sh.b.snippet(`splines=compound`))
                        default: return _p.au($[0])
                    }
                }))
                case 'pos': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`pos=`), sh.b.snippet(s_quoted($))]))
                case 'xlabel': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`xlabel=`), sh.b.snippet(s_quoted($))]))
                case 'layer': return _p.ss($, ($) => sh.b.sub([sh.b.snippet(`layer=`), sh.b.snippet(s_quoted($))]))
                default: return _p.au($[0])
            }
        })
    ])
))