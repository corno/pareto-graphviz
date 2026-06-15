import * as pt from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

import * as d_in from "../../../../interface/generated/liana/schemas/attributes/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

type Attributes = p_i.Transformer<d_in.Attributes, d_out.Paragraph>

//dependencies
import * as t_primitives_to_list_of_characters from "../primitives/list_of_characters"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Attributes: Attributes = ($) => sh.pg.sentences($.__l_map(($) => sh.sentence([
    pt.decide.state($, ($) => {
        switch ($[0]) {
            case 'freeform': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($.key)),
                sh.ph.literal("="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($.value))
            ]))
            case 'color': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("color="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'fillcolor': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("fillcolor="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'penwidth': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("penwidth="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'label': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("label="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'fontcolor': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("fontcolor="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'fontname': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("fontname="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'fontsize': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("fontsize="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'URL': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("URL="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'href': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("href="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'target': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("target="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'tooltip': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("tooltip="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'id': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("id="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'class': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("class="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'comment': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("comment="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'style': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'filled': return pt.ss($, ($) => sh.ph.literal("style=filled"))
                    case 'rounded': return pt.ss($, ($) => sh.ph.literal("style=rounded"))
                    case 'bold': return pt.ss($, ($) => sh.ph.literal("style=bold"))
                    case 'solid': return pt.ss($, ($) => sh.ph.literal("style=solid"))
                    case 'dashed': return pt.ss($, ($) => sh.ph.literal("style=dashed"))
                    case 'dotted': return pt.ss($, ($) => sh.ph.literal("style=dotted"))
                    case 'striped': return pt.ss($, ($) => sh.ph.literal("style=striped"))
                    case 'wedged': return pt.ss($, ($) => sh.ph.literal("style=wedged"))
                    case 'diagonals': return pt.ss($, ($) => sh.ph.literal("style=diagonals"))
                    case 'invis': return pt.ss($, ($) => sh.ph.literal("style=invis"))
                    case 'tapered': return pt.ss($, ($) => sh.ph.literal("style=tapered"))
                    case 'custom': return pt.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("style="),
                        sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
                    default: return pt.au($[0])
                }
            }))
            case 'layout': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'dot': return pt.ss($, ($) => sh.ph.literal("layout=dot"))
                    case 'neato': return pt.ss($, ($) => sh.ph.literal("layout=neato"))
                    case 'fdp': return pt.ss($, ($) => sh.ph.literal("layout=fdp"))
                    case 'sfdp': return pt.ss($, ($) => sh.ph.literal("layout=sfdp"))
                    case 'twopi': return pt.ss($, ($) => sh.ph.literal("layout=twopi"))
                    case 'circo': return pt.ss($, ($) => sh.ph.literal("layout=circo"))
                    case 'custom': return pt.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("layout="),
                        sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
                    default: return pt.au($[0])
                }
            }))
            case 'rankdir': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'TB': return pt.ss($, ($) => sh.ph.literal("rankdir=TB"))
                    case 'BT': return pt.ss($, ($) => sh.ph.literal("rankdir=BT"))
                    case 'LR': return pt.ss($, ($) => sh.ph.literal("rankdir=LR"))
                    case 'RL': return pt.ss($, ($) => sh.ph.literal("rankdir=RL"))
                    default: return pt.au($[0])
                }
            }))
            case 'bgcolor': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("bgcolor="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'labelloc': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 't': return pt.ss($, ($) => sh.ph.literal("labelloc=t"))
                    case 'b': return pt.ss($, ($) => sh.ph.literal("labelloc=b"))
                    default: return pt.au($[0])
                }
            }))
            case 'labeljust': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'l': return pt.ss($, ($) => sh.ph.literal("labeljust=l"))
                    case 'c': return pt.ss($, ($) => sh.ph.literal("labeljust=c"))
                    case 'r': return pt.ss($, ($) => sh.ph.literal("labeljust=r"))
                    default: return pt.au($[0])
                }
            }))
            case 'size': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("size="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))
            ]))
            case 'ratio': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("ratio="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'pad': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("pad="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'nodesep': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("nodesep="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'ranksep': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("ranksep="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'dpi': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("dpi="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'overlap': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'true': return pt.ss($, ($) => sh.ph.literal("overlap=true"))
                    case 'false': return pt.ss($, ($) => sh.ph.literal("overlap=false"))
                    case 'scale': return pt.ss($, ($) => sh.ph.literal("overlap=scale"))
                    case 'scalexy': return pt.ss($, ($) => sh.ph.literal("overlap=scalexy"))
                    case 'orthoxy': return pt.ss($, ($) => sh.ph.literal("overlap=orthoxy"))
                    case 'orthoyx': return pt.ss($, ($) => sh.ph.literal("overlap=orthoyx"))
                    case 'compress': return pt.ss($, ($) => sh.ph.literal("overlap=compress"))
                    case 'vpsc': return pt.ss($, ($) => sh.ph.literal("overlap=vpsc"))
                    case 'ipsep': return pt.ss($, ($) => sh.ph.literal("overlap=ipsep"))
                    case 'prism': return pt.ss($, ($) => sh.ph.literal("overlap=prism"))
                    default: return pt.au($[0])
                }
            }))
            case 'pack': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'true': return pt.ss($, ($) => sh.ph.literal("pack=true"))
                    case 'false': return pt.ss($, ($) => sh.ph.literal("pack=false"))
                    case 'custom': return pt.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("pack="),
                        sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
                    default: return pt.au($[0])
                }
            }))
            case 'packmode': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'node': return pt.ss($, ($) => sh.ph.literal("packmode=node"))
                    case 'clust': return pt.ss($, ($) => sh.ph.literal("packmode=clust"))
                    case 'graph': return pt.ss($, ($) => sh.ph.literal("packmode=graph"))
                    default: return pt.au($[0])
                }
            }))
            case 'concentrate': return pt.ss($, ($) => sh.ph.literal($ ? "concentrate=true" : "concentrate=false"))
            case 'compound': return pt.ss($, ($) => sh.ph.literal($ ? "compound=true" : "compound=false"))
            case 'center': return pt.ss($, ($) => sh.ph.literal($ ? "center=true" : "center=false"))
            case 'normalize': return pt.ss($, ($) => sh.ph.literal($ ? "normalize=true" : "normalize=false"))
            case 'landscape': return pt.ss($, ($) => sh.ph.literal($ ? "landscape=true" : "landscape=false"))
            case 'outputorder': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'breadthfirst': return pt.ss($, ($) => sh.ph.literal("outputorder=breadthfirst"))
                    case 'nodesfirst': return pt.ss($, ($) => sh.ph.literal("outputorder=nodesfirst"))
                    case 'edgesfirst': return pt.ss($, ($) => sh.ph.literal("outputorder=edgesfirst"))
                    default: return pt.au($[0])
                }
            }))
            case 'charset': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("charset="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'clusterrank': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'local': return pt.ss($, ($) => sh.ph.literal("clusterrank=local"))
                    case 'global': return pt.ss($, ($) => sh.ph.literal("clusterrank=global"))
                    case 'none': return pt.ss($, ($) => sh.ph.literal("clusterrank=none"))
                    default: return pt.au($[0])
                }
            }))
            case 'shape': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'box': return pt.ss($, ($) => sh.ph.literal("shape=box"))
                    case 'circle': return pt.ss($, ($) => sh.ph.literal("shape=circle"))
                    case 'ellipse': return pt.ss($, ($) => sh.ph.literal("shape=ellipse"))
                    case 'oval': return pt.ss($, ($) => sh.ph.literal("shape=oval"))
                    case 'point': return pt.ss($, ($) => sh.ph.literal("shape=point"))
                    case 'egg': return pt.ss($, ($) => sh.ph.literal("shape=egg"))
                    case 'triangle': return pt.ss($, ($) => sh.ph.literal("shape=triangle"))
                    case 'plaintext': return pt.ss($, ($) => sh.ph.literal("shape=plaintext"))
                    case 'plain': return pt.ss($, ($) => sh.ph.literal("shape=plain"))
                    case 'diamond': return pt.ss($, ($) => sh.ph.literal("shape=diamond"))
                    case 'trapezium': return pt.ss($, ($) => sh.ph.literal("shape=trapezium"))
                    case 'parallelogram': return pt.ss($, ($) => sh.ph.literal("shape=parallelogram"))
                    case 'house': return pt.ss($, ($) => sh.ph.literal("shape=house"))
                    case 'pentagon': return pt.ss($, ($) => sh.ph.literal("shape=pentagon"))
                    case 'hexagon': return pt.ss($, ($) => sh.ph.literal("shape=hexagon"))
                    case 'septagon': return pt.ss($, ($) => sh.ph.literal("shape=septagon"))
                    case 'octagon': return pt.ss($, ($) => sh.ph.literal("shape=octagon"))
                    case 'polygon': return pt.ss($, ($) => sh.ph.literal("shape=polygon"))
                    case 'record': return pt.ss($, ($) => sh.ph.literal("shape=record"))
                    case 'Mrecord': return pt.ss($, ($) => sh.ph.literal("shape=Mrecord"))
                    case 'custom': return pt.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("shape="),
                        sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
                    default: return pt.au($[0])
                }
            }))
            case 'width': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("width="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'height': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("height="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'fixedsize': return pt.ss($, ($) => sh.ph.literal($ ? "fixedsize=true" : "fixedsize=false"))
            case 'regular': return pt.ss($, ($) => sh.ph.literal($ ? "regular=true" : "regular=false"))
            case 'sides': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("sides="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'skew': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("skew="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'distortion': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("distortion="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'orientation': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("orientation="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'peripheries': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("peripheries="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'pin': return pt.ss($, ($) => sh.ph.literal($ ? "pin=true" : "pin=false"))
            case 'image': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("image="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'imagepos': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'tl': return pt.ss($, ($) => sh.ph.literal("imagepos=tl"))
                    case 'tc': return pt.ss($, ($) => sh.ph.literal("imagepos=tc"))
                    case 'tr': return pt.ss($, ($) => sh.ph.literal("imagepos=tr"))
                    case 'ml': return pt.ss($, ($) => sh.ph.literal("imagepos=ml"))
                    case 'mc': return pt.ss($, ($) => sh.ph.literal("imagepos=mc"))
                    case 'mr': return pt.ss($, ($) => sh.ph.literal("imagepos=mr"))
                    case 'bl': return pt.ss($, ($) => sh.ph.literal("imagepos=bl"))
                    case 'bc': return pt.ss($, ($) => sh.ph.literal("imagepos=bc"))
                    case 'br': return pt.ss($, ($) => sh.ph.literal("imagepos=br"))
                    default: return pt.au($[0])
                }
            }))
            case 'imagescale': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'false': return pt.ss($, ($) => sh.ph.literal("imagescale=false"))
                    case 'true': return pt.ss($, ($) => sh.ph.literal("imagescale=true"))
                    case 'width': return pt.ss($, ($) => sh.ph.literal("imagescale=width"))
                    case 'height': return pt.ss($, ($) => sh.ph.literal("imagescale=height"))
                    case 'both': return pt.ss($, ($) => sh.ph.literal("imagescale=both"))
                    default: return pt.au($[0])
                }
            }))
            case 'group': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("group="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'sortv': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("sortv="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'area': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("area="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'z': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("z="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'margin': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("margin="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'arrowhead': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'normal': return pt.ss($, ($) => sh.ph.literal("arrowhead=normal"))
                    case 'box': return pt.ss($, ($) => sh.ph.literal("arrowhead=box"))
                    case 'crow': return pt.ss($, ($) => sh.ph.literal("arrowhead=crow"))
                    case 'diamond': return pt.ss($, ($) => sh.ph.literal("arrowhead=diamond"))
                    case 'dot': return pt.ss($, ($) => sh.ph.literal("arrowhead=dot"))
                    case 'inv': return pt.ss($, ($) => sh.ph.literal("arrowhead=inv"))
                    case 'none': return pt.ss($, ($) => sh.ph.literal("arrowhead=none"))
                    case 'tee': return pt.ss($, ($) => sh.ph.literal("arrowhead=tee"))
                    case 'vee': return pt.ss($, ($) => sh.ph.literal("arrowhead=vee"))
                    case 'open': return pt.ss($, ($) => sh.ph.literal("arrowhead=open"))
                    case 'halfopen': return pt.ss($, ($) => sh.ph.literal("arrowhead=halfopen"))
                    case 'empty': return pt.ss($, ($) => sh.ph.literal("arrowhead=empty"))
                    case 'invempty': return pt.ss($, ($) => sh.ph.literal("arrowhead=invempty"))
                    case 'odiamond': return pt.ss($, ($) => sh.ph.literal("arrowhead=odiamond"))
                    case 'odot': return pt.ss($, ($) => sh.ph.literal("arrowhead=odot"))
                    case 'obox': return pt.ss($, ($) => sh.ph.literal("arrowhead=obox"))
                    case 'custom': return pt.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("arrowhead="),
                        sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
                    default: return pt.au($[0])
                }
            }))
            case 'arrowtail': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'normal': return pt.ss($, ($) => sh.ph.literal("arrowtail=normal"))
                    case 'box': return pt.ss($, ($) => sh.ph.literal("arrowtail=box"))
                    case 'crow': return pt.ss($, ($) => sh.ph.literal("arrowtail=crow"))
                    case 'diamond': return pt.ss($, ($) => sh.ph.literal("arrowtail=diamond"))
                    case 'dot': return pt.ss($, ($) => sh.ph.literal("arrowtail=dot"))
                    case 'inv': return pt.ss($, ($) => sh.ph.literal("arrowtail=inv"))
                    case 'none': return pt.ss($, ($) => sh.ph.literal("arrowtail=none"))
                    case 'tee': return pt.ss($, ($) => sh.ph.literal("arrowtail=tee"))
                    case 'vee': return pt.ss($, ($) => sh.ph.literal("arrowtail=vee"))
                    case 'open': return pt.ss($, ($) => sh.ph.literal("arrowtail=open"))
                    case 'halfopen': return pt.ss($, ($) => sh.ph.literal("arrowtail=halfopen"))
                    case 'empty': return pt.ss($, ($) => sh.ph.literal("arrowtail=empty"))
                    case 'invempty': return pt.ss($, ($) => sh.ph.literal("arrowtail=invempty"))
                    case 'odiamond': return pt.ss($, ($) => sh.ph.literal("arrowtail=odiamond"))
                    case 'odot': return pt.ss($, ($) => sh.ph.literal("arrowtail=odot"))
                    case 'obox': return pt.ss($, ($) => sh.ph.literal("arrowtail=obox"))
                    case 'custom': return pt.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("arrowtail="),
                        sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
                    default: return pt.au($[0])
                }
            }))
            case 'arrowsize': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("arrowsize="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'dir': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'forward': return pt.ss($, ($) => sh.ph.literal("dir=forward"))
                    case 'back': return pt.ss($, ($) => sh.ph.literal("dir=back"))
                    case 'both': return pt.ss($, ($) => sh.ph.literal("dir=both"))
                    case 'none': return pt.ss($, ($) => sh.ph.literal("dir=none"))
                    default: return pt.au($[0])
                }
            }))
            case 'headlabel': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("headlabel="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'taillabel': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("taillabel="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'labelfontcolor': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("labelfontcolor="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'labelfontname': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("labelfontname="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'labelfontsize': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("labelfontsize="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'labelangle': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("labelangle="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'labeldistance': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("labeldistance="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'labelfloat': return pt.ss($, ($) => sh.ph.literal($ ? "labelfloat=true" : "labelfloat=false"))
            case 'weight': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("weight="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'len': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("len="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'minlen': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("minlen="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'constraint': return pt.ss($, ($) => sh.ph.literal($ ? "constraint=true" : "constraint=false"))
            case 'decorate': return pt.ss($, ($) => sh.ph.literal($ ? "decorate=true" : "decorate=false"))
            case 'headport': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'center': return pt.ss($, ($) => sh.ph.literal("headport=center"))
                    case 'n': return pt.ss($, ($) => sh.ph.literal("headport=n"))
                    case 'ne': return pt.ss($, ($) => sh.ph.literal("headport=ne"))
                    case 'e': return pt.ss($, ($) => sh.ph.literal("headport=e"))
                    case 'se': return pt.ss($, ($) => sh.ph.literal("headport=se"))
                    case 's': return pt.ss($, ($) => sh.ph.literal("headport=s"))
                    case 'sw': return pt.ss($, ($) => sh.ph.literal("headport=sw"))
                    case 'w': return pt.ss($, ($) => sh.ph.literal("headport=w"))
                    case 'nw': return pt.ss($, ($) => sh.ph.literal("headport=nw"))
                    case 'custom': return pt.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("headport="),
                        sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
                    default: return pt.au($[0])
                }
            }))
            case 'tailport': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'center': return pt.ss($, ($) => sh.ph.literal("tailport=center"))
                    case 'n': return pt.ss($, ($) => sh.ph.literal("tailport=n"))
                    case 'ne': return pt.ss($, ($) => sh.ph.literal("tailport=ne"))
                    case 'e': return pt.ss($, ($) => sh.ph.literal("tailport=e"))
                    case 'se': return pt.ss($, ($) => sh.ph.literal("tailport=se"))
                    case 's': return pt.ss($, ($) => sh.ph.literal("tailport=s"))
                    case 'sw': return pt.ss($, ($) => sh.ph.literal("tailport=sw"))
                    case 'w': return pt.ss($, ($) => sh.ph.literal("tailport=w"))
                    case 'nw': return pt.ss($, ($) => sh.ph.literal("tailport=nw"))
                    case 'custom': return pt.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("tailport="),
                        sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
                    default: return pt.au($[0])
                }
            }))
            case 'headclip': return pt.ss($, ($) => sh.ph.literal($ ? "headclip=true" : "headclip=false"))
            case 'tailclip': return pt.ss($, ($) => sh.ph.literal($ ? "tailclip=true" : "tailclip=false"))
            case 'lhead': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("lhead="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'ltail': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("ltail="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'samehead': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("samehead="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'sametail': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("sametail="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'edgeURL': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("edgeURL="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'headURL': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("headURL="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'tailURL': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("tailURL="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'labelURL': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("labelURL="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'edgehref': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("edgehref="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'headhref': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("headhref="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'tailhref': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("tailhref="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'labelhref': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("labelhref="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'edgetarget': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("edgetarget="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'headtarget': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("headtarget="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'tailtarget': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("tailtarget="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'edgetooltip': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("edgetooltip="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'headtooltip': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("headtooltip="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'tailtooltip': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("tailtooltip="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'labeltooltip': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("labeltooltip="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'radius': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("radius="),
                sh.ph.serialize(t_primitives_to_list_of_characters.decimal($))]))
            case 'splines': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'true': return pt.ss($, ($) => sh.ph.literal("splines=true"))
                    case 'false': return pt.ss($, ($) => sh.ph.literal("splines=false"))
                    case 'none': return pt.ss($, ($) => sh.ph.literal("splines=none"))
                    case 'line': return pt.ss($, ($) => sh.ph.literal("splines=line"))
                    case 'spline': return pt.ss($, ($) => sh.ph.literal("splines=spline"))
                    case 'polyline': return pt.ss($, ($) => sh.ph.literal("splines=polyline"))
                    case 'ortho': return pt.ss($, ($) => sh.ph.literal("splines=ortho"))
                    case 'curved': return pt.ss($, ($) => sh.ph.literal("splines=curved"))
                    case 'compound': return pt.ss($, ($) => sh.ph.literal("splines=compound"))
                    default: return pt.au($[0])
                }
            }))
            case 'pos': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("pos="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'xlabel': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("xlabel="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            case 'layer': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("layer="),
                sh.ph.serialize(t_primitives_to_list_of_characters.quoted($))]))
            default: return pt.au($[0])
        }
    })
])
))