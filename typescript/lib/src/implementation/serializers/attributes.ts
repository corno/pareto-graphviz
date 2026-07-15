import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../interface/schemas/attributes.js"
import type * as s_out from "../../interface/schemas/paragraph.js"

type Attributes = p_.Transformer<
    s_in.Attributes,
    s_out.Paragraph
>

//dependencies
import * as ser_primitives from "./primitives.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

export const Attributes: Attributes = ($) => sh.pg.sentences(p_.from.list($).map(
    ($) => sh.sentence([
        p_.from.state($).decide(
            ($) => {
                switch ($[0]) {
                    case 'freeform': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text(ser_primitives.quoted($.key)),
                        sh.ph.text("="),
                        sh.ph.text(ser_primitives.quoted($.value))
                    ]))
                    case 'color': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("color="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'fillcolor': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("fillcolor="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'penwidth': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("penwidth="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'label': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("label="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'fontcolor': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("fontcolor="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'fontname': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("fontname="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'fontsize': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("fontsize="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'URL': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("URL="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'href': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("href="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'target': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("target="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'tooltip': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("tooltip="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'id': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("id="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'class': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("class="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'comment': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("comment="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'style': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'filled': return p_.option($, ($) => sh.ph.text("style=filled"))
                                case 'rounded': return p_.option($, ($) => sh.ph.text("style=rounded"))
                                case 'bold': return p_.option($, ($) => sh.ph.text("style=bold"))
                                case 'solid': return p_.option($, ($) => sh.ph.text("style=solid"))
                                case 'dashed': return p_.option($, ($) => sh.ph.text("style=dashed"))
                                case 'dotted': return p_.option($, ($) => sh.ph.text("style=dotted"))
                                case 'striped': return p_.option($, ($) => sh.ph.text("style=striped"))
                                case 'wedged': return p_.option($, ($) => sh.ph.text("style=wedged"))
                                case 'diagonals': return p_.option($, ($) => sh.ph.text("style=diagonals"))
                                case 'invis': return p_.option($, ($) => sh.ph.text("style=invis"))
                                case 'tapered': return p_.option($, ($) => sh.ph.text("style=tapered"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.text("style="),
                                    sh.ph.text(ser_primitives.quoted($))
                                ]))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'layout': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'dot': return p_.option($, ($) => sh.ph.text("layout=dot"))
                                case 'neato': return p_.option($, ($) => sh.ph.text("layout=neato"))
                                case 'fdp': return p_.option($, ($) => sh.ph.text("layout=fdp"))
                                case 'sfdp': return p_.option($, ($) => sh.ph.text("layout=sfdp"))
                                case 'twopi': return p_.option($, ($) => sh.ph.text("layout=twopi"))
                                case 'circo': return p_.option($, ($) => sh.ph.text("layout=circo"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.text("layout="),
                                    sh.ph.text(ser_primitives.quoted($))
                                ]))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'rankdir': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'TB': return p_.option($, ($) => sh.ph.text("rankdir=TB"))
                                case 'BT': return p_.option($, ($) => sh.ph.text("rankdir=BT"))
                                case 'LR': return p_.option($, ($) => sh.ph.text("rankdir=LR"))
                                case 'RL': return p_.option($, ($) => sh.ph.text("rankdir=RL"))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'bgcolor': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("bgcolor="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'labelloc': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 't': return p_.option($, ($) => sh.ph.text("labelloc=t"))
                                case 'b': return p_.option($, ($) => sh.ph.text("labelloc=b"))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'labeljust': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'l': return p_.option($, ($) => sh.ph.text("labeljust=l"))
                                case 'c': return p_.option($, ($) => sh.ph.text("labeljust=c"))
                                case 'r': return p_.option($, ($) => sh.ph.text("labeljust=r"))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'size': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("size="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'ratio': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("ratio="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'pad': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("pad="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'nodesep': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("nodesep="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'ranksep': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("ranksep="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'dpi': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("dpi="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'overlap': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'true': return p_.option($, ($) => sh.ph.text("overlap=true"))
                                case 'false': return p_.option($, ($) => sh.ph.text("overlap=false"))
                                case 'scale': return p_.option($, ($) => sh.ph.text("overlap=scale"))
                                case 'scalexy': return p_.option($, ($) => sh.ph.text("overlap=scalexy"))
                                case 'orthoxy': return p_.option($, ($) => sh.ph.text("overlap=orthoxy"))
                                case 'orthoyx': return p_.option($, ($) => sh.ph.text("overlap=orthoyx"))
                                case 'compress': return p_.option($, ($) => sh.ph.text("overlap=compress"))
                                case 'vpsc': return p_.option($, ($) => sh.ph.text("overlap=vpsc"))
                                case 'ipsep': return p_.option($, ($) => sh.ph.text("overlap=ipsep"))
                                case 'prism': return p_.option($, ($) => sh.ph.text("overlap=prism"))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'pack': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'true': return p_.option($, ($) => sh.ph.text("pack=true"))
                                case 'false': return p_.option($, ($) => sh.ph.text("pack=false"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.text("pack="),
                                    sh.ph.text(ser_primitives.decimal($))
                                ]))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'packmode': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'node': return p_.option($, ($) => sh.ph.text("packmode=node"))
                                case 'clust': return p_.option($, ($) => sh.ph.text("packmode=clust"))
                                case 'graph': return p_.option($, ($) => sh.ph.text("packmode=graph"))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'concentrate': return p_.option($, ($) => sh.ph.text($ ? "concentrate=true" : "concentrate=false"))
                    case 'compound': return p_.option($, ($) => sh.ph.text($ ? "compound=true" : "compound=false"))
                    case 'center': return p_.option($, ($) => sh.ph.text($ ? "center=true" : "center=false"))
                    case 'normalize': return p_.option($, ($) => sh.ph.text($ ? "normalize=true" : "normalize=false"))
                    case 'landscape': return p_.option($, ($) => sh.ph.text($ ? "landscape=true" : "landscape=false"))
                    case 'outputorder': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'breadthfirst': return p_.option($, ($) => sh.ph.text("outputorder=breadthfirst"))
                                case 'nodesfirst': return p_.option($, ($) => sh.ph.text("outputorder=nodesfirst"))
                                case 'edgesfirst': return p_.option($, ($) => sh.ph.text("outputorder=edgesfirst"))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'charset': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("charset="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'clusterrank': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'local': return p_.option($, ($) => sh.ph.text("clusterrank=local"))
                                case 'global': return p_.option($, ($) => sh.ph.text("clusterrank=global"))
                                case 'none': return p_.option($, ($) => sh.ph.text("clusterrank=none"))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'shape': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'box': return p_.option($, ($) => sh.ph.text("shape=box"))
                                case 'circle': return p_.option($, ($) => sh.ph.text("shape=circle"))
                                case 'ellipse': return p_.option($, ($) => sh.ph.text("shape=ellipse"))
                                case 'oval': return p_.option($, ($) => sh.ph.text("shape=oval"))
                                case 'point': return p_.option($, ($) => sh.ph.text("shape=point"))
                                case 'egg': return p_.option($, ($) => sh.ph.text("shape=egg"))
                                case 'triangle': return p_.option($, ($) => sh.ph.text("shape=triangle"))
                                case 'plaintext': return p_.option($, ($) => sh.ph.text("shape=plaintext"))
                                case 'plain': return p_.option($, ($) => sh.ph.text("shape=plain"))
                                case 'diamond': return p_.option($, ($) => sh.ph.text("shape=diamond"))
                                case 'trapezium': return p_.option($, ($) => sh.ph.text("shape=trapezium"))
                                case 'parallelogram': return p_.option($, ($) => sh.ph.text("shape=parallelogram"))
                                case 'house': return p_.option($, ($) => sh.ph.text("shape=house"))
                                case 'pentagon': return p_.option($, ($) => sh.ph.text("shape=pentagon"))
                                case 'hexagon': return p_.option($, ($) => sh.ph.text("shape=hexagon"))
                                case 'septagon': return p_.option($, ($) => sh.ph.text("shape=septagon"))
                                case 'octagon': return p_.option($, ($) => sh.ph.text("shape=octagon"))
                                case 'polygon': return p_.option($, ($) => sh.ph.text("shape=polygon"))
                                case 'record': return p_.option($, ($) => sh.ph.text("shape=record"))
                                case 'Mrecord': return p_.option($, ($) => sh.ph.text("shape=Mrecord"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.text("shape="),
                                    sh.ph.text(ser_primitives.quoted($))
                                ]))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'width': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("width="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'height': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("height="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'fixedsize': return p_.option($, ($) => sh.ph.text($ ? "fixedsize=true" : "fixedsize=false"))
                    case 'regular': return p_.option($, ($) => sh.ph.text($ ? "regular=true" : "regular=false"))
                    case 'sides': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("sides="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'skew': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("skew="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'distortion': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("distortion="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'orientation': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("orientation="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'peripheries': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("peripheries="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'pin': return p_.option($, ($) => sh.ph.text($ ? "pin=true" : "pin=false"))
                    case 'image': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("image="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'imagepos': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'tl': return p_.option($, ($) => sh.ph.text("imagepos=tl"))
                                case 'tc': return p_.option($, ($) => sh.ph.text("imagepos=tc"))
                                case 'tr': return p_.option($, ($) => sh.ph.text("imagepos=tr"))
                                case 'ml': return p_.option($, ($) => sh.ph.text("imagepos=ml"))
                                case 'mc': return p_.option($, ($) => sh.ph.text("imagepos=mc"))
                                case 'mr': return p_.option($, ($) => sh.ph.text("imagepos=mr"))
                                case 'bl': return p_.option($, ($) => sh.ph.text("imagepos=bl"))
                                case 'bc': return p_.option($, ($) => sh.ph.text("imagepos=bc"))
                                case 'br': return p_.option($, ($) => sh.ph.text("imagepos=br"))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'imagescale': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'false': return p_.option($, ($) => sh.ph.text("imagescale=false"))
                                case 'true': return p_.option($, ($) => sh.ph.text("imagescale=true"))
                                case 'width': return p_.option($, ($) => sh.ph.text("imagescale=width"))
                                case 'height': return p_.option($, ($) => sh.ph.text("imagescale=height"))
                                case 'both': return p_.option($, ($) => sh.ph.text("imagescale=both"))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'group': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("group="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'sortv': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("sortv="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'area': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("area="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'z': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("z="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'margin': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("margin="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'arrowhead': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'normal': return p_.option($, ($) => sh.ph.text("arrowhead=normal"))
                                case 'box': return p_.option($, ($) => sh.ph.text("arrowhead=box"))
                                case 'crow': return p_.option($, ($) => sh.ph.text("arrowhead=crow"))
                                case 'diamond': return p_.option($, ($) => sh.ph.text("arrowhead=diamond"))
                                case 'dot': return p_.option($, ($) => sh.ph.text("arrowhead=dot"))
                                case 'inv': return p_.option($, ($) => sh.ph.text("arrowhead=inv"))
                                case 'none': return p_.option($, ($) => sh.ph.text("arrowhead=none"))
                                case 'tee': return p_.option($, ($) => sh.ph.text("arrowhead=tee"))
                                case 'vee': return p_.option($, ($) => sh.ph.text("arrowhead=vee"))
                                case 'open': return p_.option($, ($) => sh.ph.text("arrowhead=open"))
                                case 'halfopen': return p_.option($, ($) => sh.ph.text("arrowhead=halfopen"))
                                case 'empty': return p_.option($, ($) => sh.ph.text("arrowhead=empty"))
                                case 'invempty': return p_.option($, ($) => sh.ph.text("arrowhead=invempty"))
                                case 'odiamond': return p_.option($, ($) => sh.ph.text("arrowhead=odiamond"))
                                case 'odot': return p_.option($, ($) => sh.ph.text("arrowhead=odot"))
                                case 'obox': return p_.option($, ($) => sh.ph.text("arrowhead=obox"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.text("arrowhead="),
                                    sh.ph.text(ser_primitives.quoted($))
                                ]))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'arrowtail': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'normal': return p_.option($, ($) => sh.ph.text("arrowtail=normal"))
                                case 'box': return p_.option($, ($) => sh.ph.text("arrowtail=box"))
                                case 'crow': return p_.option($, ($) => sh.ph.text("arrowtail=crow"))
                                case 'diamond': return p_.option($, ($) => sh.ph.text("arrowtail=diamond"))
                                case 'dot': return p_.option($, ($) => sh.ph.text("arrowtail=dot"))
                                case 'inv': return p_.option($, ($) => sh.ph.text("arrowtail=inv"))
                                case 'none': return p_.option($, ($) => sh.ph.text("arrowtail=none"))
                                case 'tee': return p_.option($, ($) => sh.ph.text("arrowtail=tee"))
                                case 'vee': return p_.option($, ($) => sh.ph.text("arrowtail=vee"))
                                case 'open': return p_.option($, ($) => sh.ph.text("arrowtail=open"))
                                case 'halfopen': return p_.option($, ($) => sh.ph.text("arrowtail=halfopen"))
                                case 'empty': return p_.option($, ($) => sh.ph.text("arrowtail=empty"))
                                case 'invempty': return p_.option($, ($) => sh.ph.text("arrowtail=invempty"))
                                case 'odiamond': return p_.option($, ($) => sh.ph.text("arrowtail=odiamond"))
                                case 'odot': return p_.option($, ($) => sh.ph.text("arrowtail=odot"))
                                case 'obox': return p_.option($, ($) => sh.ph.text("arrowtail=obox"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.text("arrowtail="),
                                    sh.ph.text(ser_primitives.quoted($))
                                ]))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'arrowsize': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("arrowsize="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'dir': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'forward': return p_.option($, ($) => sh.ph.text("dir=forward"))
                                case 'back': return p_.option($, ($) => sh.ph.text("dir=back"))
                                case 'both': return p_.option($, ($) => sh.ph.text("dir=both"))
                                case 'none': return p_.option($, ($) => sh.ph.text("dir=none"))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'headlabel': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("headlabel="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'taillabel': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("taillabel="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'labelfontcolor': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("labelfontcolor="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'labelfontname': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("labelfontname="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'labelfontsize': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("labelfontsize="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'labelangle': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("labelangle="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'labeldistance': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("labeldistance="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'labelfloat': return p_.option($, ($) => sh.ph.text($ ? "labelfloat=true" : "labelfloat=false"))
                    case 'weight': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("weight="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'len': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("len="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'minlen': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("minlen="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'constraint': return p_.option($, ($) => sh.ph.text($ ? "constraint=true" : "constraint=false"))
                    case 'decorate': return p_.option($, ($) => sh.ph.text($ ? "decorate=true" : "decorate=false"))
                    case 'headport': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'center': return p_.option($, ($) => sh.ph.text("headport=center"))
                                case 'n': return p_.option($, ($) => sh.ph.text("headport=n"))
                                case 'ne': return p_.option($, ($) => sh.ph.text("headport=ne"))
                                case 'e': return p_.option($, ($) => sh.ph.text("headport=e"))
                                case 'se': return p_.option($, ($) => sh.ph.text("headport=se"))
                                case 's': return p_.option($, ($) => sh.ph.text("headport=s"))
                                case 'sw': return p_.option($, ($) => sh.ph.text("headport=sw"))
                                case 'w': return p_.option($, ($) => sh.ph.text("headport=w"))
                                case 'nw': return p_.option($, ($) => sh.ph.text("headport=nw"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.text("headport="),
                                    sh.ph.text(ser_primitives.quoted($))
                                ]))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'tailport': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'center': return p_.option($, ($) => sh.ph.text("tailport=center"))
                                case 'n': return p_.option($, ($) => sh.ph.text("tailport=n"))
                                case 'ne': return p_.option($, ($) => sh.ph.text("tailport=ne"))
                                case 'e': return p_.option($, ($) => sh.ph.text("tailport=e"))
                                case 'se': return p_.option($, ($) => sh.ph.text("tailport=se"))
                                case 's': return p_.option($, ($) => sh.ph.text("tailport=s"))
                                case 'sw': return p_.option($, ($) => sh.ph.text("tailport=sw"))
                                case 'w': return p_.option($, ($) => sh.ph.text("tailport=w"))
                                case 'nw': return p_.option($, ($) => sh.ph.text("tailport=nw"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.text("tailport="),
                                    sh.ph.text(ser_primitives.quoted($))
                                ]))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'headclip': return p_.option($, ($) => sh.ph.text($ ? "headclip=true" : "headclip=false"))
                    case 'tailclip': return p_.option($, ($) => sh.ph.text($ ? "tailclip=true" : "tailclip=false"))
                    case 'lhead': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("lhead="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'ltail': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("ltail="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'samehead': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("samehead="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'sametail': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("sametail="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'edgeURL': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("edgeURL="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'headURL': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("headURL="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'tailURL': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("tailURL="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'labelURL': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("labelURL="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'edgehref': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("edgehref="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'headhref': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("headhref="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'tailhref': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("tailhref="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'labelhref': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("labelhref="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'edgetarget': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("edgetarget="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'headtarget': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("headtarget="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'tailtarget': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("tailtarget="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'edgetooltip': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("edgetooltip="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'headtooltip': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("headtooltip="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'tailtooltip': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("tailtooltip="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'labeltooltip': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("labeltooltip="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'radius': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("radius="),
                        sh.ph.text(ser_primitives.decimal($))
                    ]))
                    case 'splines': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'true': return p_.option($, ($) => sh.ph.text("splines=true"))
                                case 'false': return p_.option($, ($) => sh.ph.text("splines=false"))
                                case 'none': return p_.option($, ($) => sh.ph.text("splines=none"))
                                case 'line': return p_.option($, ($) => sh.ph.text("splines=line"))
                                case 'spline': return p_.option($, ($) => sh.ph.text("splines=spline"))
                                case 'polyline': return p_.option($, ($) => sh.ph.text("splines=polyline"))
                                case 'ortho': return p_.option($, ($) => sh.ph.text("splines=ortho"))
                                case 'curved': return p_.option($, ($) => sh.ph.text("splines=curved"))
                                case 'compound': return p_.option($, ($) => sh.ph.text("splines=compound"))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'pos': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("pos="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'xlabel': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("xlabel="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    case 'layer': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.text("layer="),
                        sh.ph.text(ser_primitives.quoted($))
                    ]))
                    default: return p_.exhaustive($[0])
                }
            })
    ])
))