
import * as _pi from 'pareto-core/dist/interface'

export namespace Graph_ {
    
    export type attributes = Attributes_
    
    export namespace nodes {
        
        export namespace D {
            
            export type attributes = Attributes_
            
        }
        
        export type D = {
            readonly 'attributes': D.attributes
        }
        
    }
    
    export type nodes = _pi.Dictionary<nodes.D>
    
    export namespace edges {
        
        export namespace L {
            
            export type from_ = string
            
            export type to = string
            
            export type attributes = Attributes_
            
        }
        
        export type L = {
            readonly 'from': L.from_
            readonly 'to': L.to
            readonly 'attributes': L.attributes
        }
        
    }
    
    export type edges = _pi.List<edges.L>
    
}

export type Graph_ = {
    readonly 'attributes': Graph_.attributes
    readonly 'nodes': Graph_.nodes
    readonly 'edges': Graph_.edges
}

export namespace Attributes_ {
    
    export namespace L {
        
        export namespace freeform {
            
            export type key = string
            
            export type value = string
            
        }
        
        export type freeform = {
            readonly 'key': freeform.key
            readonly 'value': freeform.value
        }
        
        export type color = string
        
        export type fillcolor = string
        
        export type penwidth = number
        
        export type label = string
        
        export type fontcolor = string
        
        export type fontname = string
        
        export type fontsize = number
        
        export type URL = string
        
        export type href = string
        
        export type target = string
        
        export type tooltip = string
        
        export type id = string
        
        export type class_ = string
        
        export type comment = string
        
        export namespace style {
            
            export type filled = null
            
            export type rounded = null
            
            export type bold = null
            
            export type solid = null
            
            export type dashed = null
            
            export type dotted = null
            
            export type striped = null
            
            export type wedged = null
            
            export type diagonals = null
            
            export type invis = null
            
            export type tapered = null
            
            export type custom = string
            
        }
        
        export type style = 
            | readonly ['filled', style.filled]
            | readonly ['rounded', style.rounded]
            | readonly ['bold', style.bold]
            | readonly ['solid', style.solid]
            | readonly ['dashed', style.dashed]
            | readonly ['dotted', style.dotted]
            | readonly ['striped', style.striped]
            | readonly ['wedged', style.wedged]
            | readonly ['diagonals', style.diagonals]
            | readonly ['invis', style.invis]
            | readonly ['tapered', style.tapered]
            | readonly ['custom', style.custom]
        
        export namespace layout {
            
            export type dot = null
            
            export type neato = null
            
            export type fdp = null
            
            export type sfdp = null
            
            export type twopi = null
            
            export type circo = null
            
            export type custom = string
            
        }
        
        export type layout = 
            | readonly ['dot', layout.dot]
            | readonly ['neato', layout.neato]
            | readonly ['fdp', layout.fdp]
            | readonly ['sfdp', layout.sfdp]
            | readonly ['twopi', layout.twopi]
            | readonly ['circo', layout.circo]
            | readonly ['custom', layout.custom]
        
        export namespace rankdir {
            
            export type TB = null
            
            export type BT = null
            
            export type LR = null
            
            export type RL = null
            
        }
        
        export type rankdir = 
            | readonly ['TB', rankdir.TB]
            | readonly ['BT', rankdir.BT]
            | readonly ['LR', rankdir.LR]
            | readonly ['RL', rankdir.RL]
        
        export type bgcolor = string
        
        export namespace labelloc {
            
            export type t = null
            
            export type b = null
            
        }
        
        export type labelloc = 
            | readonly ['t', labelloc.t]
            | readonly ['b', labelloc.b]
        
        export namespace labeljust {
            
            export type l = null
            
            export type c = null
            
            export type r = null
            
        }
        
        export type labeljust = 
            | readonly ['l', labeljust.l]
            | readonly ['c', labeljust.c]
            | readonly ['r', labeljust.r]
        
        export type size = string
        
        export type ratio = string
        
        export type pad = string
        
        export type nodesep = number
        
        export type ranksep = number
        
        export type dpi = number
        
        export namespace overlap {
            
            export type true_ = null
            
            export type false_ = null
            
            export type scale = null
            
            export type scalexy = null
            
            export type orthoxy = null
            
            export type orthoyx = null
            
            export type compress = null
            
            export type vpsc = null
            
            export type ipsep = null
            
            export type prism = null
            
        }
        
        export type overlap = 
            | readonly ['true', overlap.true_]
            | readonly ['false', overlap.false_]
            | readonly ['scale', overlap.scale]
            | readonly ['scalexy', overlap.scalexy]
            | readonly ['orthoxy', overlap.orthoxy]
            | readonly ['orthoyx', overlap.orthoyx]
            | readonly ['compress', overlap.compress]
            | readonly ['vpsc', overlap.vpsc]
            | readonly ['ipsep', overlap.ipsep]
            | readonly ['prism', overlap.prism]
        
        export namespace pack {
            
            export type true_ = null
            
            export type false_ = null
            
            export type custom = number
            
        }
        
        export type pack = 
            | readonly ['true', pack.true_]
            | readonly ['false', pack.false_]
            | readonly ['custom', pack.custom]
        
        export namespace packmode {
            
            export type node = null
            
            export type clust = null
            
            export type graph = null
            
        }
        
        export type packmode = 
            | readonly ['node', packmode.node]
            | readonly ['clust', packmode.clust]
            | readonly ['graph', packmode.graph]
        
        export type concentrate = boolean
        
        export type compound = boolean
        
        export type center = boolean
        
        export type normalize = boolean
        
        export type landscape = boolean
        
        export namespace outputorder {
            
            export type breadthfirst = null
            
            export type nodesfirst = null
            
            export type edgesfirst = null
            
        }
        
        export type outputorder = 
            | readonly ['breadthfirst', outputorder.breadthfirst]
            | readonly ['nodesfirst', outputorder.nodesfirst]
            | readonly ['edgesfirst', outputorder.edgesfirst]
        
        export type charset = string
        
        export namespace clusterrank {
            
            export type local = null
            
            export type global = null
            
            export type none = null
            
        }
        
        export type clusterrank = 
            | readonly ['local', clusterrank.local]
            | readonly ['global', clusterrank.global]
            | readonly ['none', clusterrank.none]
        
        export namespace shape {
            
            export type box = null
            
            export type circle = null
            
            export type ellipse = null
            
            export type oval = null
            
            export type point = null
            
            export type egg = null
            
            export type triangle = null
            
            export type plaintext = null
            
            export type plain = null
            
            export type diamond = null
            
            export type trapezium = null
            
            export type parallelogram = null
            
            export type house = null
            
            export type pentagon = null
            
            export type hexagon = null
            
            export type septagon = null
            
            export type octagon = null
            
            export type polygon = null
            
            export type record = null
            
            export type Mrecord = null
            
            export type custom = string
            
        }
        
        export type shape = 
            | readonly ['box', shape.box]
            | readonly ['circle', shape.circle]
            | readonly ['ellipse', shape.ellipse]
            | readonly ['oval', shape.oval]
            | readonly ['point', shape.point]
            | readonly ['egg', shape.egg]
            | readonly ['triangle', shape.triangle]
            | readonly ['plaintext', shape.plaintext]
            | readonly ['plain', shape.plain]
            | readonly ['diamond', shape.diamond]
            | readonly ['trapezium', shape.trapezium]
            | readonly ['parallelogram', shape.parallelogram]
            | readonly ['house', shape.house]
            | readonly ['pentagon', shape.pentagon]
            | readonly ['hexagon', shape.hexagon]
            | readonly ['septagon', shape.septagon]
            | readonly ['octagon', shape.octagon]
            | readonly ['polygon', shape.polygon]
            | readonly ['record', shape.record]
            | readonly ['Mrecord', shape.Mrecord]
            | readonly ['custom', shape.custom]
        
        export type width = number
        
        export type height = number
        
        export type fixedsize = boolean
        
        export type regular = boolean
        
        export type sides = number
        
        export type skew = number
        
        export type distortion = number
        
        export type orientation = number
        
        export type peripheries = number
        
        export type pin = boolean
        
        export type image = string
        
        export namespace imagepos {
            
            export type tl = null
            
            export type tc = null
            
            export type tr = null
            
            export type ml = null
            
            export type mc = null
            
            export type mr = null
            
            export type bl = null
            
            export type bc = null
            
            export type br = null
            
        }
        
        export type imagepos = 
            | readonly ['tl', imagepos.tl]
            | readonly ['tc', imagepos.tc]
            | readonly ['tr', imagepos.tr]
            | readonly ['ml', imagepos.ml]
            | readonly ['mc', imagepos.mc]
            | readonly ['mr', imagepos.mr]
            | readonly ['bl', imagepos.bl]
            | readonly ['bc', imagepos.bc]
            | readonly ['br', imagepos.br]
        
        export namespace imagescale {
            
            export type false_ = null
            
            export type true_ = null
            
            export type width = null
            
            export type height = null
            
            export type both = null
            
        }
        
        export type imagescale = 
            | readonly ['false', imagescale.false_]
            | readonly ['true', imagescale.true_]
            | readonly ['width', imagescale.width]
            | readonly ['height', imagescale.height]
            | readonly ['both', imagescale.both]
        
        export type group = string
        
        export type sortv = number
        
        export type area = number
        
        export type z = number
        
        export type margin = string
        
        export namespace arrowhead {
            
            export type normal = null
            
            export type box = null
            
            export type crow = null
            
            export type diamond = null
            
            export type dot = null
            
            export type inv = null
            
            export type none = null
            
            export type tee = null
            
            export type vee = null
            
            export type open = null
            
            export type halfopen = null
            
            export type empty = null
            
            export type invempty = null
            
            export type odiamond = null
            
            export type odot = null
            
            export type obox = null
            
            export type custom = string
            
        }
        
        export type arrowhead = 
            | readonly ['normal', arrowhead.normal]
            | readonly ['box', arrowhead.box]
            | readonly ['crow', arrowhead.crow]
            | readonly ['diamond', arrowhead.diamond]
            | readonly ['dot', arrowhead.dot]
            | readonly ['inv', arrowhead.inv]
            | readonly ['none', arrowhead.none]
            | readonly ['tee', arrowhead.tee]
            | readonly ['vee', arrowhead.vee]
            | readonly ['open', arrowhead.open]
            | readonly ['halfopen', arrowhead.halfopen]
            | readonly ['empty', arrowhead.empty]
            | readonly ['invempty', arrowhead.invempty]
            | readonly ['odiamond', arrowhead.odiamond]
            | readonly ['odot', arrowhead.odot]
            | readonly ['obox', arrowhead.obox]
            | readonly ['custom', arrowhead.custom]
        
        export namespace arrowtail {
            
            export type normal = null
            
            export type box = null
            
            export type crow = null
            
            export type diamond = null
            
            export type dot = null
            
            export type inv = null
            
            export type none = null
            
            export type tee = null
            
            export type vee = null
            
            export type open = null
            
            export type halfopen = null
            
            export type empty = null
            
            export type invempty = null
            
            export type odiamond = null
            
            export type odot = null
            
            export type obox = null
            
            export type custom = string
            
        }
        
        export type arrowtail = 
            | readonly ['normal', arrowtail.normal]
            | readonly ['box', arrowtail.box]
            | readonly ['crow', arrowtail.crow]
            | readonly ['diamond', arrowtail.diamond]
            | readonly ['dot', arrowtail.dot]
            | readonly ['inv', arrowtail.inv]
            | readonly ['none', arrowtail.none]
            | readonly ['tee', arrowtail.tee]
            | readonly ['vee', arrowtail.vee]
            | readonly ['open', arrowtail.open]
            | readonly ['halfopen', arrowtail.halfopen]
            | readonly ['empty', arrowtail.empty]
            | readonly ['invempty', arrowtail.invempty]
            | readonly ['odiamond', arrowtail.odiamond]
            | readonly ['odot', arrowtail.odot]
            | readonly ['obox', arrowtail.obox]
            | readonly ['custom', arrowtail.custom]
        
        export type arrowsize = number
        
        export namespace dir {
            
            export type forward = null
            
            export type back = null
            
            export type both = null
            
            export type none = null
            
        }
        
        export type dir = 
            | readonly ['forward', dir.forward]
            | readonly ['back', dir.back]
            | readonly ['both', dir.both]
            | readonly ['none', dir.none]
        
        export type headlabel = string
        
        export type taillabel = string
        
        export type labelfontcolor = string
        
        export type labelfontname = string
        
        export type labelfontsize = number
        
        export type labelangle = number
        
        export type labeldistance = number
        
        export type labelfloat = boolean
        
        export type weight = number
        
        export type len = number
        
        export type minlen = number
        
        export type constraint = boolean
        
        export type decorate = boolean
        
        export namespace headport {
            
            export type center = null
            
            export type n = null
            
            export type ne = null
            
            export type e = null
            
            export type se = null
            
            export type s = null
            
            export type sw = null
            
            export type w = null
            
            export type nw = null
            
            export type custom = string
            
        }
        
        export type headport = 
            | readonly ['center', headport.center]
            | readonly ['n', headport.n]
            | readonly ['ne', headport.ne]
            | readonly ['e', headport.e]
            | readonly ['se', headport.se]
            | readonly ['s', headport.s]
            | readonly ['sw', headport.sw]
            | readonly ['w', headport.w]
            | readonly ['nw', headport.nw]
            | readonly ['custom', headport.custom]
        
        export namespace tailport {
            
            export type center = null
            
            export type n = null
            
            export type ne = null
            
            export type e = null
            
            export type se = null
            
            export type s = null
            
            export type sw = null
            
            export type w = null
            
            export type nw = null
            
            export type custom = string
            
        }
        
        export type tailport = 
            | readonly ['center', tailport.center]
            | readonly ['n', tailport.n]
            | readonly ['ne', tailport.ne]
            | readonly ['e', tailport.e]
            | readonly ['se', tailport.se]
            | readonly ['s', tailport.s]
            | readonly ['sw', tailport.sw]
            | readonly ['w', tailport.w]
            | readonly ['nw', tailport.nw]
            | readonly ['custom', tailport.custom]
        
        export type headclip = boolean
        
        export type tailclip = boolean
        
        export type lhead = string
        
        export type ltail = string
        
        export type samehead = string
        
        export type sametail = string
        
        export type edgeURL = string
        
        export type headURL = string
        
        export type tailURL = string
        
        export type labelURL = string
        
        export type edgehref = string
        
        export type headhref = string
        
        export type tailhref = string
        
        export type labelhref = string
        
        export type edgetarget = string
        
        export type headtarget = string
        
        export type tailtarget = string
        
        export type edgetooltip = string
        
        export type headtooltip = string
        
        export type tailtooltip = string
        
        export type labeltooltip = string
        
        export type radius = number
        
        export namespace splines {
            
            export type true_ = null
            
            export type false_ = null
            
            export type none = null
            
            export type line = null
            
            export type spline = null
            
            export type polyline = null
            
            export type ortho = null
            
            export type curved = null
            
            export type compound = null
            
        }
        
        export type splines = 
            | readonly ['true', splines.true_]
            | readonly ['false', splines.false_]
            | readonly ['none', splines.none]
            | readonly ['line', splines.line]
            | readonly ['spline', splines.spline]
            | readonly ['polyline', splines.polyline]
            | readonly ['ortho', splines.ortho]
            | readonly ['curved', splines.curved]
            | readonly ['compound', splines.compound]
        
        export type pos = string
        
        export type xlabel = string
        
        export type layer = string
        
    }
    
    export type L = 
        | readonly ['freeform', L.freeform]
        | readonly ['color', L.color]
        | readonly ['fillcolor', L.fillcolor]
        | readonly ['penwidth', L.penwidth]
        | readonly ['label', L.label]
        | readonly ['fontcolor', L.fontcolor]
        | readonly ['fontname', L.fontname]
        | readonly ['fontsize', L.fontsize]
        | readonly ['URL', L.URL]
        | readonly ['href', L.href]
        | readonly ['target', L.target]
        | readonly ['tooltip', L.tooltip]
        | readonly ['id', L.id]
        | readonly ['class', L.class_]
        | readonly ['comment', L.comment]
        | readonly ['style', L.style]
        | readonly ['layout', L.layout]
        | readonly ['rankdir', L.rankdir]
        | readonly ['bgcolor', L.bgcolor]
        | readonly ['labelloc', L.labelloc]
        | readonly ['labeljust', L.labeljust]
        | readonly ['size', L.size]
        | readonly ['ratio', L.ratio]
        | readonly ['pad', L.pad]
        | readonly ['nodesep', L.nodesep]
        | readonly ['ranksep', L.ranksep]
        | readonly ['dpi', L.dpi]
        | readonly ['overlap', L.overlap]
        | readonly ['pack', L.pack]
        | readonly ['packmode', L.packmode]
        | readonly ['concentrate', L.concentrate]
        | readonly ['compound', L.compound]
        | readonly ['center', L.center]
        | readonly ['normalize', L.normalize]
        | readonly ['landscape', L.landscape]
        | readonly ['outputorder', L.outputorder]
        | readonly ['charset', L.charset]
        | readonly ['clusterrank', L.clusterrank]
        | readonly ['shape', L.shape]
        | readonly ['width', L.width]
        | readonly ['height', L.height]
        | readonly ['fixedsize', L.fixedsize]
        | readonly ['regular', L.regular]
        | readonly ['sides', L.sides]
        | readonly ['skew', L.skew]
        | readonly ['distortion', L.distortion]
        | readonly ['orientation', L.orientation]
        | readonly ['peripheries', L.peripheries]
        | readonly ['pin', L.pin]
        | readonly ['image', L.image]
        | readonly ['imagepos', L.imagepos]
        | readonly ['imagescale', L.imagescale]
        | readonly ['group', L.group]
        | readonly ['sortv', L.sortv]
        | readonly ['area', L.area]
        | readonly ['z', L.z]
        | readonly ['margin', L.margin]
        | readonly ['arrowhead', L.arrowhead]
        | readonly ['arrowtail', L.arrowtail]
        | readonly ['arrowsize', L.arrowsize]
        | readonly ['dir', L.dir]
        | readonly ['headlabel', L.headlabel]
        | readonly ['taillabel', L.taillabel]
        | readonly ['labelfontcolor', L.labelfontcolor]
        | readonly ['labelfontname', L.labelfontname]
        | readonly ['labelfontsize', L.labelfontsize]
        | readonly ['labelangle', L.labelangle]
        | readonly ['labeldistance', L.labeldistance]
        | readonly ['labelfloat', L.labelfloat]
        | readonly ['weight', L.weight]
        | readonly ['len', L.len]
        | readonly ['minlen', L.minlen]
        | readonly ['constraint', L.constraint]
        | readonly ['decorate', L.decorate]
        | readonly ['headport', L.headport]
        | readonly ['tailport', L.tailport]
        | readonly ['headclip', L.headclip]
        | readonly ['tailclip', L.tailclip]
        | readonly ['lhead', L.lhead]
        | readonly ['ltail', L.ltail]
        | readonly ['samehead', L.samehead]
        | readonly ['sametail', L.sametail]
        | readonly ['edgeURL', L.edgeURL]
        | readonly ['headURL', L.headURL]
        | readonly ['tailURL', L.tailURL]
        | readonly ['labelURL', L.labelURL]
        | readonly ['edgehref', L.edgehref]
        | readonly ['headhref', L.headhref]
        | readonly ['tailhref', L.tailhref]
        | readonly ['labelhref', L.labelhref]
        | readonly ['edgetarget', L.edgetarget]
        | readonly ['headtarget', L.headtarget]
        | readonly ['tailtarget', L.tailtarget]
        | readonly ['edgetooltip', L.edgetooltip]
        | readonly ['headtooltip', L.headtooltip]
        | readonly ['tailtooltip', L.tailtooltip]
        | readonly ['labeltooltip', L.labeltooltip]
        | readonly ['radius', L.radius]
        | readonly ['splines', L.splines]
        | readonly ['pos', L.pos]
        | readonly ['xlabel', L.xlabel]
        | readonly ['layer', L.layer]
    
}

export type Attributes_ = _pi.List<Attributes_.L>

export { 
    Graph_ as Graph, 
    Attributes_ as Attributes, 
}
