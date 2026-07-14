import * as p_ from 'pareto-core/implementation/serializer'

//schemas
import type * as s_in from "../../interface/schemas/attributes.js"

type Attributes = p_.Paragraph_Serializer<
    s_in.Attributes
>

//dependencies
import * as ser_primitives from "./primitives.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Attributes: Attributes = ($) => sh.pg.sentences(p_.from.list($).map(
    ($) => sh.sentence([
        p_.from.state($).decide(
            ($) => {
                switch ($[0]) {
                    case 'freeform': return p_.option($, ($) => sh.ph.composed([
                        ser_primitives.quoted($.key),
                        sh.ph.literal("="),
                        ser_primitives.quoted($.value)
                    ]))
                    case 'color': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("color="),
                        ser_primitives.quoted($)]))
                    case 'fillcolor': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("fillcolor="),
                        ser_primitives.quoted($)]))
                    case 'penwidth': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("penwidth="),
                        ser_primitives.decimal($)]))
                    case 'label': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("label="),
                        ser_primitives.quoted($)]))
                    case 'fontcolor': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("fontcolor="),
                        ser_primitives.quoted($)]))
                    case 'fontname': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("fontname="),
                        ser_primitives.quoted($)]))
                    case 'fontsize': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("fontsize="),
                        ser_primitives.decimal($)]))
                    case 'URL': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("URL="),
                        ser_primitives.quoted($)]))
                    case 'href': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("href="),
                        ser_primitives.quoted($)]))
                    case 'target': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("target="),
                        ser_primitives.quoted($)]))
                    case 'tooltip': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("tooltip="),
                        ser_primitives.quoted($)]))
                    case 'id': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("id="),
                        ser_primitives.quoted($)]))
                    case 'class': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("class="),
                        ser_primitives.quoted($)]))
                    case 'comment': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("comment="),
                        ser_primitives.quoted($)]))
                    case 'style': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'filled': return p_.option($, ($) => sh.ph.literal("style=filled"))
                                case 'rounded': return p_.option($, ($) => sh.ph.literal("style=rounded"))
                                case 'bold': return p_.option($, ($) => sh.ph.literal("style=bold"))
                                case 'solid': return p_.option($, ($) => sh.ph.literal("style=solid"))
                                case 'dashed': return p_.option($, ($) => sh.ph.literal("style=dashed"))
                                case 'dotted': return p_.option($, ($) => sh.ph.literal("style=dotted"))
                                case 'striped': return p_.option($, ($) => sh.ph.literal("style=striped"))
                                case 'wedged': return p_.option($, ($) => sh.ph.literal("style=wedged"))
                                case 'diagonals': return p_.option($, ($) => sh.ph.literal("style=diagonals"))
                                case 'invis': return p_.option($, ($) => sh.ph.literal("style=invis"))
                                case 'tapered': return p_.option($, ($) => sh.ph.literal("style=tapered"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.literal("style="),
                                    ser_primitives.quoted($)]))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'layout': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'dot': return p_.option($, ($) => sh.ph.literal("layout=dot"))
                                case 'neato': return p_.option($, ($) => sh.ph.literal("layout=neato"))
                                case 'fdp': return p_.option($, ($) => sh.ph.literal("layout=fdp"))
                                case 'sfdp': return p_.option($, ($) => sh.ph.literal("layout=sfdp"))
                                case 'twopi': return p_.option($, ($) => sh.ph.literal("layout=twopi"))
                                case 'circo': return p_.option($, ($) => sh.ph.literal("layout=circo"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.literal("layout="),
                                    ser_primitives.quoted($)]))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'rankdir': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'TB': return p_.option($, ($) => sh.ph.literal("rankdir=TB"))
                                case 'BT': return p_.option($, ($) => sh.ph.literal("rankdir=BT"))
                                case 'LR': return p_.option($, ($) => sh.ph.literal("rankdir=LR"))
                                case 'RL': return p_.option($, ($) => sh.ph.literal("rankdir=RL"))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'bgcolor': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("bgcolor="),
                        ser_primitives.quoted($)]))
                    case 'labelloc': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 't': return p_.option($, ($) => sh.ph.literal("labelloc=t"))
                                case 'b': return p_.option($, ($) => sh.ph.literal("labelloc=b"))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'labeljust': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'l': return p_.option($, ($) => sh.ph.literal("labeljust=l"))
                                case 'c': return p_.option($, ($) => sh.ph.literal("labeljust=c"))
                                case 'r': return p_.option($, ($) => sh.ph.literal("labeljust=r"))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'size': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("size="),
                        ser_primitives.quoted($)
                    ]))
                    case 'ratio': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("ratio="),
                        ser_primitives.quoted($)]))
                    case 'pad': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("pad="),
                        ser_primitives.quoted($)]))
                    case 'nodesep': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("nodesep="),
                        ser_primitives.decimal($)]))
                    case 'ranksep': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("ranksep="),
                        ser_primitives.decimal($)]))
                    case 'dpi': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("dpi="),
                        ser_primitives.decimal($)]))
                    case 'overlap': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'true': return p_.option($, ($) => sh.ph.literal("overlap=true"))
                                case 'false': return p_.option($, ($) => sh.ph.literal("overlap=false"))
                                case 'scale': return p_.option($, ($) => sh.ph.literal("overlap=scale"))
                                case 'scalexy': return p_.option($, ($) => sh.ph.literal("overlap=scalexy"))
                                case 'orthoxy': return p_.option($, ($) => sh.ph.literal("overlap=orthoxy"))
                                case 'orthoyx': return p_.option($, ($) => sh.ph.literal("overlap=orthoyx"))
                                case 'compress': return p_.option($, ($) => sh.ph.literal("overlap=compress"))
                                case 'vpsc': return p_.option($, ($) => sh.ph.literal("overlap=vpsc"))
                                case 'ipsep': return p_.option($, ($) => sh.ph.literal("overlap=ipsep"))
                                case 'prism': return p_.option($, ($) => sh.ph.literal("overlap=prism"))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'pack': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'true': return p_.option($, ($) => sh.ph.literal("pack=true"))
                                case 'false': return p_.option($, ($) => sh.ph.literal("pack=false"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.literal("pack="),
                                    ser_primitives.decimal($)]))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'packmode': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'node': return p_.option($, ($) => sh.ph.literal("packmode=node"))
                                case 'clust': return p_.option($, ($) => sh.ph.literal("packmode=clust"))
                                case 'graph': return p_.option($, ($) => sh.ph.literal("packmode=graph"))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'concentrate': return p_.option($, ($) => sh.ph.literal($ ? "concentrate=true" : "concentrate=false"))
                    case 'compound': return p_.option($, ($) => sh.ph.literal($ ? "compound=true" : "compound=false"))
                    case 'center': return p_.option($, ($) => sh.ph.literal($ ? "center=true" : "center=false"))
                    case 'normalize': return p_.option($, ($) => sh.ph.literal($ ? "normalize=true" : "normalize=false"))
                    case 'landscape': return p_.option($, ($) => sh.ph.literal($ ? "landscape=true" : "landscape=false"))
                    case 'outputorder': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'breadthfirst': return p_.option($, ($) => sh.ph.literal("outputorder=breadthfirst"))
                                case 'nodesfirst': return p_.option($, ($) => sh.ph.literal("outputorder=nodesfirst"))
                                case 'edgesfirst': return p_.option($, ($) => sh.ph.literal("outputorder=edgesfirst"))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'charset': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("charset="),
                        ser_primitives.quoted($)]))
                    case 'clusterrank': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'local': return p_.option($, ($) => sh.ph.literal("clusterrank=local"))
                                case 'global': return p_.option($, ($) => sh.ph.literal("clusterrank=global"))
                                case 'none': return p_.option($, ($) => sh.ph.literal("clusterrank=none"))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'shape': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'box': return p_.option($, ($) => sh.ph.literal("shape=box"))
                                case 'circle': return p_.option($, ($) => sh.ph.literal("shape=circle"))
                                case 'ellipse': return p_.option($, ($) => sh.ph.literal("shape=ellipse"))
                                case 'oval': return p_.option($, ($) => sh.ph.literal("shape=oval"))
                                case 'point': return p_.option($, ($) => sh.ph.literal("shape=point"))
                                case 'egg': return p_.option($, ($) => sh.ph.literal("shape=egg"))
                                case 'triangle': return p_.option($, ($) => sh.ph.literal("shape=triangle"))
                                case 'plaintext': return p_.option($, ($) => sh.ph.literal("shape=plaintext"))
                                case 'plain': return p_.option($, ($) => sh.ph.literal("shape=plain"))
                                case 'diamond': return p_.option($, ($) => sh.ph.literal("shape=diamond"))
                                case 'trapezium': return p_.option($, ($) => sh.ph.literal("shape=trapezium"))
                                case 'parallelogram': return p_.option($, ($) => sh.ph.literal("shape=parallelogram"))
                                case 'house': return p_.option($, ($) => sh.ph.literal("shape=house"))
                                case 'pentagon': return p_.option($, ($) => sh.ph.literal("shape=pentagon"))
                                case 'hexagon': return p_.option($, ($) => sh.ph.literal("shape=hexagon"))
                                case 'septagon': return p_.option($, ($) => sh.ph.literal("shape=septagon"))
                                case 'octagon': return p_.option($, ($) => sh.ph.literal("shape=octagon"))
                                case 'polygon': return p_.option($, ($) => sh.ph.literal("shape=polygon"))
                                case 'record': return p_.option($, ($) => sh.ph.literal("shape=record"))
                                case 'Mrecord': return p_.option($, ($) => sh.ph.literal("shape=Mrecord"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.literal("shape="),
                                    ser_primitives.quoted($)]))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'width': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("width="),
                        ser_primitives.decimal($)]))
                    case 'height': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("height="),
                        ser_primitives.decimal($)]))
                    case 'fixedsize': return p_.option($, ($) => sh.ph.literal($ ? "fixedsize=true" : "fixedsize=false"))
                    case 'regular': return p_.option($, ($) => sh.ph.literal($ ? "regular=true" : "regular=false"))
                    case 'sides': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("sides="),
                        ser_primitives.decimal($)]))
                    case 'skew': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("skew="),
                        ser_primitives.decimal($)]))
                    case 'distortion': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("distortion="),
                        ser_primitives.decimal($)]))
                    case 'orientation': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("orientation="),
                        ser_primitives.decimal($)]))
                    case 'peripheries': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("peripheries="),
                        ser_primitives.decimal($)]))
                    case 'pin': return p_.option($, ($) => sh.ph.literal($ ? "pin=true" : "pin=false"))
                    case 'image': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("image="),
                        ser_primitives.quoted($)]))
                    case 'imagepos': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'tl': return p_.option($, ($) => sh.ph.literal("imagepos=tl"))
                                case 'tc': return p_.option($, ($) => sh.ph.literal("imagepos=tc"))
                                case 'tr': return p_.option($, ($) => sh.ph.literal("imagepos=tr"))
                                case 'ml': return p_.option($, ($) => sh.ph.literal("imagepos=ml"))
                                case 'mc': return p_.option($, ($) => sh.ph.literal("imagepos=mc"))
                                case 'mr': return p_.option($, ($) => sh.ph.literal("imagepos=mr"))
                                case 'bl': return p_.option($, ($) => sh.ph.literal("imagepos=bl"))
                                case 'bc': return p_.option($, ($) => sh.ph.literal("imagepos=bc"))
                                case 'br': return p_.option($, ($) => sh.ph.literal("imagepos=br"))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'imagescale': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'false': return p_.option($, ($) => sh.ph.literal("imagescale=false"))
                                case 'true': return p_.option($, ($) => sh.ph.literal("imagescale=true"))
                                case 'width': return p_.option($, ($) => sh.ph.literal("imagescale=width"))
                                case 'height': return p_.option($, ($) => sh.ph.literal("imagescale=height"))
                                case 'both': return p_.option($, ($) => sh.ph.literal("imagescale=both"))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'group': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("group="),
                        ser_primitives.quoted($)]))
                    case 'sortv': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("sortv="),
                        ser_primitives.decimal($)]))
                    case 'area': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("area="),
                        ser_primitives.decimal($)]))
                    case 'z': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("z="),
                        ser_primitives.decimal($)]))
                    case 'margin': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("margin="),
                        ser_primitives.quoted($)]))
                    case 'arrowhead': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'normal': return p_.option($, ($) => sh.ph.literal("arrowhead=normal"))
                                case 'box': return p_.option($, ($) => sh.ph.literal("arrowhead=box"))
                                case 'crow': return p_.option($, ($) => sh.ph.literal("arrowhead=crow"))
                                case 'diamond': return p_.option($, ($) => sh.ph.literal("arrowhead=diamond"))
                                case 'dot': return p_.option($, ($) => sh.ph.literal("arrowhead=dot"))
                                case 'inv': return p_.option($, ($) => sh.ph.literal("arrowhead=inv"))
                                case 'none': return p_.option($, ($) => sh.ph.literal("arrowhead=none"))
                                case 'tee': return p_.option($, ($) => sh.ph.literal("arrowhead=tee"))
                                case 'vee': return p_.option($, ($) => sh.ph.literal("arrowhead=vee"))
                                case 'open': return p_.option($, ($) => sh.ph.literal("arrowhead=open"))
                                case 'halfopen': return p_.option($, ($) => sh.ph.literal("arrowhead=halfopen"))
                                case 'empty': return p_.option($, ($) => sh.ph.literal("arrowhead=empty"))
                                case 'invempty': return p_.option($, ($) => sh.ph.literal("arrowhead=invempty"))
                                case 'odiamond': return p_.option($, ($) => sh.ph.literal("arrowhead=odiamond"))
                                case 'odot': return p_.option($, ($) => sh.ph.literal("arrowhead=odot"))
                                case 'obox': return p_.option($, ($) => sh.ph.literal("arrowhead=obox"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.literal("arrowhead="),
                                    ser_primitives.quoted($)]))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'arrowtail': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'normal': return p_.option($, ($) => sh.ph.literal("arrowtail=normal"))
                                case 'box': return p_.option($, ($) => sh.ph.literal("arrowtail=box"))
                                case 'crow': return p_.option($, ($) => sh.ph.literal("arrowtail=crow"))
                                case 'diamond': return p_.option($, ($) => sh.ph.literal("arrowtail=diamond"))
                                case 'dot': return p_.option($, ($) => sh.ph.literal("arrowtail=dot"))
                                case 'inv': return p_.option($, ($) => sh.ph.literal("arrowtail=inv"))
                                case 'none': return p_.option($, ($) => sh.ph.literal("arrowtail=none"))
                                case 'tee': return p_.option($, ($) => sh.ph.literal("arrowtail=tee"))
                                case 'vee': return p_.option($, ($) => sh.ph.literal("arrowtail=vee"))
                                case 'open': return p_.option($, ($) => sh.ph.literal("arrowtail=open"))
                                case 'halfopen': return p_.option($, ($) => sh.ph.literal("arrowtail=halfopen"))
                                case 'empty': return p_.option($, ($) => sh.ph.literal("arrowtail=empty"))
                                case 'invempty': return p_.option($, ($) => sh.ph.literal("arrowtail=invempty"))
                                case 'odiamond': return p_.option($, ($) => sh.ph.literal("arrowtail=odiamond"))
                                case 'odot': return p_.option($, ($) => sh.ph.literal("arrowtail=odot"))
                                case 'obox': return p_.option($, ($) => sh.ph.literal("arrowtail=obox"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.literal("arrowtail="),
                                    ser_primitives.quoted($)]))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'arrowsize': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("arrowsize="),
                        ser_primitives.decimal($)]))
                    case 'dir': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'forward': return p_.option($, ($) => sh.ph.literal("dir=forward"))
                                case 'back': return p_.option($, ($) => sh.ph.literal("dir=back"))
                                case 'both': return p_.option($, ($) => sh.ph.literal("dir=both"))
                                case 'none': return p_.option($, ($) => sh.ph.literal("dir=none"))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'headlabel': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("headlabel="),
                        ser_primitives.quoted($)]))
                    case 'taillabel': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("taillabel="),
                        ser_primitives.quoted($)]))
                    case 'labelfontcolor': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("labelfontcolor="),
                        ser_primitives.quoted($)]))
                    case 'labelfontname': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("labelfontname="),
                        ser_primitives.quoted($)]))
                    case 'labelfontsize': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("labelfontsize="),
                        ser_primitives.decimal($)]))
                    case 'labelangle': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("labelangle="),
                        ser_primitives.decimal($)]))
                    case 'labeldistance': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("labeldistance="),
                        ser_primitives.decimal($)]))
                    case 'labelfloat': return p_.option($, ($) => sh.ph.literal($ ? "labelfloat=true" : "labelfloat=false"))
                    case 'weight': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("weight="),
                        ser_primitives.decimal($)]))
                    case 'len': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("len="),
                        ser_primitives.decimal($)]))
                    case 'minlen': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("minlen="),
                        ser_primitives.decimal($)]))
                    case 'constraint': return p_.option($, ($) => sh.ph.literal($ ? "constraint=true" : "constraint=false"))
                    case 'decorate': return p_.option($, ($) => sh.ph.literal($ ? "decorate=true" : "decorate=false"))
                    case 'headport': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'center': return p_.option($, ($) => sh.ph.literal("headport=center"))
                                case 'n': return p_.option($, ($) => sh.ph.literal("headport=n"))
                                case 'ne': return p_.option($, ($) => sh.ph.literal("headport=ne"))
                                case 'e': return p_.option($, ($) => sh.ph.literal("headport=e"))
                                case 'se': return p_.option($, ($) => sh.ph.literal("headport=se"))
                                case 's': return p_.option($, ($) => sh.ph.literal("headport=s"))
                                case 'sw': return p_.option($, ($) => sh.ph.literal("headport=sw"))
                                case 'w': return p_.option($, ($) => sh.ph.literal("headport=w"))
                                case 'nw': return p_.option($, ($) => sh.ph.literal("headport=nw"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.literal("headport="),
                                    ser_primitives.quoted($)]))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'tailport': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'center': return p_.option($, ($) => sh.ph.literal("tailport=center"))
                                case 'n': return p_.option($, ($) => sh.ph.literal("tailport=n"))
                                case 'ne': return p_.option($, ($) => sh.ph.literal("tailport=ne"))
                                case 'e': return p_.option($, ($) => sh.ph.literal("tailport=e"))
                                case 'se': return p_.option($, ($) => sh.ph.literal("tailport=se"))
                                case 's': return p_.option($, ($) => sh.ph.literal("tailport=s"))
                                case 'sw': return p_.option($, ($) => sh.ph.literal("tailport=sw"))
                                case 'w': return p_.option($, ($) => sh.ph.literal("tailport=w"))
                                case 'nw': return p_.option($, ($) => sh.ph.literal("tailport=nw"))
                                case 'custom': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.literal("tailport="),
                                    ser_primitives.quoted($)]))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'headclip': return p_.option($, ($) => sh.ph.literal($ ? "headclip=true" : "headclip=false"))
                    case 'tailclip': return p_.option($, ($) => sh.ph.literal($ ? "tailclip=true" : "tailclip=false"))
                    case 'lhead': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("lhead="),
                        ser_primitives.quoted($)]))
                    case 'ltail': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("ltail="),
                        ser_primitives.quoted($)]))
                    case 'samehead': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("samehead="),
                        ser_primitives.quoted($)]))
                    case 'sametail': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("sametail="),
                        ser_primitives.quoted($)]))
                    case 'edgeURL': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("edgeURL="),
                        ser_primitives.quoted($)]))
                    case 'headURL': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("headURL="),
                        ser_primitives.quoted($)]))
                    case 'tailURL': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("tailURL="),
                        ser_primitives.quoted($)]))
                    case 'labelURL': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("labelURL="),
                        ser_primitives.quoted($)]))
                    case 'edgehref': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("edgehref="),
                        ser_primitives.quoted($)]))
                    case 'headhref': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("headhref="),
                        ser_primitives.quoted($)]))
                    case 'tailhref': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("tailhref="),
                        ser_primitives.quoted($)]))
                    case 'labelhref': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("labelhref="),
                        ser_primitives.quoted($)]))
                    case 'edgetarget': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("edgetarget="),
                        ser_primitives.quoted($)]))
                    case 'headtarget': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("headtarget="),
                        ser_primitives.quoted($)]))
                    case 'tailtarget': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("tailtarget="),
                        ser_primitives.quoted($)]))
                    case 'edgetooltip': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("edgetooltip="),
                        ser_primitives.quoted($)]))
                    case 'headtooltip': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("headtooltip="),
                        ser_primitives.quoted($)]))
                    case 'tailtooltip': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("tailtooltip="),
                        ser_primitives.quoted($)]))
                    case 'labeltooltip': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("labeltooltip="),
                        ser_primitives.quoted($)]))
                    case 'radius': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("radius="),
                        ser_primitives.decimal($)]))
                    case 'splines': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'true': return p_.option($, ($) => sh.ph.literal("splines=true"))
                                case 'false': return p_.option($, ($) => sh.ph.literal("splines=false"))
                                case 'none': return p_.option($, ($) => sh.ph.literal("splines=none"))
                                case 'line': return p_.option($, ($) => sh.ph.literal("splines=line"))
                                case 'spline': return p_.option($, ($) => sh.ph.literal("splines=spline"))
                                case 'polyline': return p_.option($, ($) => sh.ph.literal("splines=polyline"))
                                case 'ortho': return p_.option($, ($) => sh.ph.literal("splines=ortho"))
                                case 'curved': return p_.option($, ($) => sh.ph.literal("splines=curved"))
                                case 'compound': return p_.option($, ($) => sh.ph.literal("splines=compound"))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'pos': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("pos="),
                        ser_primitives.quoted($)]))
                    case 'xlabel': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("xlabel="),
                        ser_primitives.quoted($)]))
                    case 'layer': return p_.option($, ($) => sh.ph.composed([
                        sh.ph.literal("layer="),
                        ser_primitives.quoted($)]))
                    default: return p_.exhaustive($[0])
                }
            })
    ])
))