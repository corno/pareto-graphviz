    
    import * as _p from "pareto-core/dist/expression"
    
    import _p_change_context from "pareto-core/dist/_p_change_context"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/graphviz/boilerplate_for_migrate"
    
    import * as t_out from "../../../../../../interface/generated/liana/schemas/graphviz/data"
    
    export const Graph: t_signatures.Graph = ($) => ({
        'attributes': _p_change_context(
            $['attributes'],
            ($) => Attributes(
                $,
            ),
        ),
        'nodes': _p_change_context(
            $['nodes'],
            ($) => _p.dictionary.map(
                $,
                ($, id) => ({
                    'attributes': _p_change_context(
                        $['attributes'],
                        ($) => Attributes(
                            $,
                        ),
                    ),
                }),
            ),
        ),
        'edges': _p_change_context(
            $['edges'],
            ($) => _p.list.map(
                $,
                ($) => ({
                    'from': _p_change_context(
                        $['from'],
                        ($) => $,
                    ),
                    'to': _p_change_context(
                        $['to'],
                        ($) => $,
                    ),
                    'attributes': _p_change_context(
                        $['attributes'],
                        ($) => Attributes(
                            $,
                        ),
                    ),
                }),
            ),
        ),
    })
    
    export const Attributes: t_signatures.Attributes = ($) => _p.list.map(
        $,
        ($) => _p.decide.state(
            $,
            ($): t_out.Attributes.L => {
                switch ($[0]) {
                    case 'freeform':
                        return _p.ss(
                            $,
                            ($) => ['freeform', {
                                'key': _p_change_context(
                                    $['key'],
                                    ($) => $,
                                ),
                                'value': _p_change_context(
                                    $['value'],
                                    ($) => $,
                                ),
                            }],
                        )
                    case 'color':
                        return _p.ss(
                            $,
                            ($) => ['color', $],
                        )
                    case 'fillcolor':
                        return _p.ss(
                            $,
                            ($) => ['fillcolor', $],
                        )
                    case 'penwidth':
                        return _p.ss(
                            $,
                            ($) => ['penwidth', $],
                        )
                    case 'label':
                        return _p.ss(
                            $,
                            ($) => ['label', $],
                        )
                    case 'fontcolor':
                        return _p.ss(
                            $,
                            ($) => ['fontcolor', $],
                        )
                    case 'fontname':
                        return _p.ss(
                            $,
                            ($) => ['fontname', $],
                        )
                    case 'fontsize':
                        return _p.ss(
                            $,
                            ($) => ['fontsize', $],
                        )
                    case 'URL':
                        return _p.ss(
                            $,
                            ($) => ['URL', $],
                        )
                    case 'href':
                        return _p.ss(
                            $,
                            ($) => ['href', $],
                        )
                    case 'target':
                        return _p.ss(
                            $,
                            ($) => ['target', $],
                        )
                    case 'tooltip':
                        return _p.ss(
                            $,
                            ($) => ['tooltip', $],
                        )
                    case 'id':
                        return _p.ss(
                            $,
                            ($) => ['id', $],
                        )
                    case 'class':
                        return _p.ss(
                            $,
                            ($) => ['class', $],
                        )
                    case 'comment':
                        return _p.ss(
                            $,
                            ($) => ['comment', $],
                        )
                    case 'style':
                        return _p.ss(
                            $,
                            ($) => ['style', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.style => {
                                    switch ($[0]) {
                                        case 'filled':
                                            return _p.ss(
                                                $,
                                                ($) => ['filled', null],
                                            )
                                        case 'rounded':
                                            return _p.ss(
                                                $,
                                                ($) => ['rounded', null],
                                            )
                                        case 'bold':
                                            return _p.ss(
                                                $,
                                                ($) => ['bold', null],
                                            )
                                        case 'solid':
                                            return _p.ss(
                                                $,
                                                ($) => ['solid', null],
                                            )
                                        case 'dashed':
                                            return _p.ss(
                                                $,
                                                ($) => ['dashed', null],
                                            )
                                        case 'dotted':
                                            return _p.ss(
                                                $,
                                                ($) => ['dotted', null],
                                            )
                                        case 'striped':
                                            return _p.ss(
                                                $,
                                                ($) => ['striped', null],
                                            )
                                        case 'wedged':
                                            return _p.ss(
                                                $,
                                                ($) => ['wedged', null],
                                            )
                                        case 'diagonals':
                                            return _p.ss(
                                                $,
                                                ($) => ['diagonals', null],
                                            )
                                        case 'invis':
                                            return _p.ss(
                                                $,
                                                ($) => ['invis', null],
                                            )
                                        case 'tapered':
                                            return _p.ss(
                                                $,
                                                ($) => ['tapered', null],
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ['custom', $],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'layout':
                        return _p.ss(
                            $,
                            ($) => ['layout', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.layout => {
                                    switch ($[0]) {
                                        case 'dot':
                                            return _p.ss(
                                                $,
                                                ($) => ['dot', null],
                                            )
                                        case 'neato':
                                            return _p.ss(
                                                $,
                                                ($) => ['neato', null],
                                            )
                                        case 'fdp':
                                            return _p.ss(
                                                $,
                                                ($) => ['fdp', null],
                                            )
                                        case 'sfdp':
                                            return _p.ss(
                                                $,
                                                ($) => ['sfdp', null],
                                            )
                                        case 'twopi':
                                            return _p.ss(
                                                $,
                                                ($) => ['twopi', null],
                                            )
                                        case 'circo':
                                            return _p.ss(
                                                $,
                                                ($) => ['circo', null],
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ['custom', $],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'rankdir':
                        return _p.ss(
                            $,
                            ($) => ['rankdir', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.rankdir => {
                                    switch ($[0]) {
                                        case 'TB':
                                            return _p.ss(
                                                $,
                                                ($) => ['TB', null],
                                            )
                                        case 'BT':
                                            return _p.ss(
                                                $,
                                                ($) => ['BT', null],
                                            )
                                        case 'LR':
                                            return _p.ss(
                                                $,
                                                ($) => ['LR', null],
                                            )
                                        case 'RL':
                                            return _p.ss(
                                                $,
                                                ($) => ['RL', null],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'bgcolor':
                        return _p.ss(
                            $,
                            ($) => ['bgcolor', $],
                        )
                    case 'labelloc':
                        return _p.ss(
                            $,
                            ($) => ['labelloc', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.labelloc => {
                                    switch ($[0]) {
                                        case 't':
                                            return _p.ss(
                                                $,
                                                ($) => ['t', null],
                                            )
                                        case 'b':
                                            return _p.ss(
                                                $,
                                                ($) => ['b', null],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'labeljust':
                        return _p.ss(
                            $,
                            ($) => ['labeljust', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.labeljust => {
                                    switch ($[0]) {
                                        case 'l':
                                            return _p.ss(
                                                $,
                                                ($) => ['l', null],
                                            )
                                        case 'c':
                                            return _p.ss(
                                                $,
                                                ($) => ['c', null],
                                            )
                                        case 'r':
                                            return _p.ss(
                                                $,
                                                ($) => ['r', null],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'size':
                        return _p.ss(
                            $,
                            ($) => ['size', $],
                        )
                    case 'ratio':
                        return _p.ss(
                            $,
                            ($) => ['ratio', $],
                        )
                    case 'pad':
                        return _p.ss(
                            $,
                            ($) => ['pad', $],
                        )
                    case 'nodesep':
                        return _p.ss(
                            $,
                            ($) => ['nodesep', $],
                        )
                    case 'ranksep':
                        return _p.ss(
                            $,
                            ($) => ['ranksep', $],
                        )
                    case 'dpi':
                        return _p.ss(
                            $,
                            ($) => ['dpi', $],
                        )
                    case 'overlap':
                        return _p.ss(
                            $,
                            ($) => ['overlap', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.overlap => {
                                    switch ($[0]) {
                                        case 'true':
                                            return _p.ss(
                                                $,
                                                ($) => ['true', null],
                                            )
                                        case 'false':
                                            return _p.ss(
                                                $,
                                                ($) => ['false', null],
                                            )
                                        case 'scale':
                                            return _p.ss(
                                                $,
                                                ($) => ['scale', null],
                                            )
                                        case 'scalexy':
                                            return _p.ss(
                                                $,
                                                ($) => ['scalexy', null],
                                            )
                                        case 'orthoxy':
                                            return _p.ss(
                                                $,
                                                ($) => ['orthoxy', null],
                                            )
                                        case 'orthoyx':
                                            return _p.ss(
                                                $,
                                                ($) => ['orthoyx', null],
                                            )
                                        case 'compress':
                                            return _p.ss(
                                                $,
                                                ($) => ['compress', null],
                                            )
                                        case 'vpsc':
                                            return _p.ss(
                                                $,
                                                ($) => ['vpsc', null],
                                            )
                                        case 'ipsep':
                                            return _p.ss(
                                                $,
                                                ($) => ['ipsep', null],
                                            )
                                        case 'prism':
                                            return _p.ss(
                                                $,
                                                ($) => ['prism', null],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'pack':
                        return _p.ss(
                            $,
                            ($) => ['pack', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.pack => {
                                    switch ($[0]) {
                                        case 'true':
                                            return _p.ss(
                                                $,
                                                ($) => ['true', null],
                                            )
                                        case 'false':
                                            return _p.ss(
                                                $,
                                                ($) => ['false', null],
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ['custom', $],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'packmode':
                        return _p.ss(
                            $,
                            ($) => ['packmode', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.packmode => {
                                    switch ($[0]) {
                                        case 'node':
                                            return _p.ss(
                                                $,
                                                ($) => ['node', null],
                                            )
                                        case 'clust':
                                            return _p.ss(
                                                $,
                                                ($) => ['clust', null],
                                            )
                                        case 'graph':
                                            return _p.ss(
                                                $,
                                                ($) => ['graph', null],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'concentrate':
                        return _p.ss(
                            $,
                            ($) => ['concentrate', $],
                        )
                    case 'compound':
                        return _p.ss(
                            $,
                            ($) => ['compound', $],
                        )
                    case 'center':
                        return _p.ss(
                            $,
                            ($) => ['center', $],
                        )
                    case 'normalize':
                        return _p.ss(
                            $,
                            ($) => ['normalize', $],
                        )
                    case 'landscape':
                        return _p.ss(
                            $,
                            ($) => ['landscape', $],
                        )
                    case 'outputorder':
                        return _p.ss(
                            $,
                            ($) => ['outputorder', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.outputorder => {
                                    switch ($[0]) {
                                        case 'breadthfirst':
                                            return _p.ss(
                                                $,
                                                ($) => ['breadthfirst', null],
                                            )
                                        case 'nodesfirst':
                                            return _p.ss(
                                                $,
                                                ($) => ['nodesfirst', null],
                                            )
                                        case 'edgesfirst':
                                            return _p.ss(
                                                $,
                                                ($) => ['edgesfirst', null],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'charset':
                        return _p.ss(
                            $,
                            ($) => ['charset', $],
                        )
                    case 'clusterrank':
                        return _p.ss(
                            $,
                            ($) => ['clusterrank', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.clusterrank => {
                                    switch ($[0]) {
                                        case 'local':
                                            return _p.ss(
                                                $,
                                                ($) => ['local', null],
                                            )
                                        case 'global':
                                            return _p.ss(
                                                $,
                                                ($) => ['global', null],
                                            )
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ['none', null],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'shape':
                        return _p.ss(
                            $,
                            ($) => ['shape', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.shape => {
                                    switch ($[0]) {
                                        case 'box':
                                            return _p.ss(
                                                $,
                                                ($) => ['box', null],
                                            )
                                        case 'circle':
                                            return _p.ss(
                                                $,
                                                ($) => ['circle', null],
                                            )
                                        case 'ellipse':
                                            return _p.ss(
                                                $,
                                                ($) => ['ellipse', null],
                                            )
                                        case 'oval':
                                            return _p.ss(
                                                $,
                                                ($) => ['oval', null],
                                            )
                                        case 'point':
                                            return _p.ss(
                                                $,
                                                ($) => ['point', null],
                                            )
                                        case 'egg':
                                            return _p.ss(
                                                $,
                                                ($) => ['egg', null],
                                            )
                                        case 'triangle':
                                            return _p.ss(
                                                $,
                                                ($) => ['triangle', null],
                                            )
                                        case 'plaintext':
                                            return _p.ss(
                                                $,
                                                ($) => ['plaintext', null],
                                            )
                                        case 'plain':
                                            return _p.ss(
                                                $,
                                                ($) => ['plain', null],
                                            )
                                        case 'diamond':
                                            return _p.ss(
                                                $,
                                                ($) => ['diamond', null],
                                            )
                                        case 'trapezium':
                                            return _p.ss(
                                                $,
                                                ($) => ['trapezium', null],
                                            )
                                        case 'parallelogram':
                                            return _p.ss(
                                                $,
                                                ($) => ['parallelogram', null],
                                            )
                                        case 'house':
                                            return _p.ss(
                                                $,
                                                ($) => ['house', null],
                                            )
                                        case 'pentagon':
                                            return _p.ss(
                                                $,
                                                ($) => ['pentagon', null],
                                            )
                                        case 'hexagon':
                                            return _p.ss(
                                                $,
                                                ($) => ['hexagon', null],
                                            )
                                        case 'septagon':
                                            return _p.ss(
                                                $,
                                                ($) => ['septagon', null],
                                            )
                                        case 'octagon':
                                            return _p.ss(
                                                $,
                                                ($) => ['octagon', null],
                                            )
                                        case 'polygon':
                                            return _p.ss(
                                                $,
                                                ($) => ['polygon', null],
                                            )
                                        case 'record':
                                            return _p.ss(
                                                $,
                                                ($) => ['record', null],
                                            )
                                        case 'Mrecord':
                                            return _p.ss(
                                                $,
                                                ($) => ['Mrecord', null],
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ['custom', $],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'width':
                        return _p.ss(
                            $,
                            ($) => ['width', $],
                        )
                    case 'height':
                        return _p.ss(
                            $,
                            ($) => ['height', $],
                        )
                    case 'fixedsize':
                        return _p.ss(
                            $,
                            ($) => ['fixedsize', $],
                        )
                    case 'regular':
                        return _p.ss(
                            $,
                            ($) => ['regular', $],
                        )
                    case 'sides':
                        return _p.ss(
                            $,
                            ($) => ['sides', $],
                        )
                    case 'skew':
                        return _p.ss(
                            $,
                            ($) => ['skew', $],
                        )
                    case 'distortion':
                        return _p.ss(
                            $,
                            ($) => ['distortion', $],
                        )
                    case 'orientation':
                        return _p.ss(
                            $,
                            ($) => ['orientation', $],
                        )
                    case 'peripheries':
                        return _p.ss(
                            $,
                            ($) => ['peripheries', $],
                        )
                    case 'pin':
                        return _p.ss(
                            $,
                            ($) => ['pin', $],
                        )
                    case 'image':
                        return _p.ss(
                            $,
                            ($) => ['image', $],
                        )
                    case 'imagepos':
                        return _p.ss(
                            $,
                            ($) => ['imagepos', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.imagepos => {
                                    switch ($[0]) {
                                        case 'tl':
                                            return _p.ss(
                                                $,
                                                ($) => ['tl', null],
                                            )
                                        case 'tc':
                                            return _p.ss(
                                                $,
                                                ($) => ['tc', null],
                                            )
                                        case 'tr':
                                            return _p.ss(
                                                $,
                                                ($) => ['tr', null],
                                            )
                                        case 'ml':
                                            return _p.ss(
                                                $,
                                                ($) => ['ml', null],
                                            )
                                        case 'mc':
                                            return _p.ss(
                                                $,
                                                ($) => ['mc', null],
                                            )
                                        case 'mr':
                                            return _p.ss(
                                                $,
                                                ($) => ['mr', null],
                                            )
                                        case 'bl':
                                            return _p.ss(
                                                $,
                                                ($) => ['bl', null],
                                            )
                                        case 'bc':
                                            return _p.ss(
                                                $,
                                                ($) => ['bc', null],
                                            )
                                        case 'br':
                                            return _p.ss(
                                                $,
                                                ($) => ['br', null],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'imagescale':
                        return _p.ss(
                            $,
                            ($) => ['imagescale', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.imagescale => {
                                    switch ($[0]) {
                                        case 'false':
                                            return _p.ss(
                                                $,
                                                ($) => ['false', null],
                                            )
                                        case 'true':
                                            return _p.ss(
                                                $,
                                                ($) => ['true', null],
                                            )
                                        case 'width':
                                            return _p.ss(
                                                $,
                                                ($) => ['width', null],
                                            )
                                        case 'height':
                                            return _p.ss(
                                                $,
                                                ($) => ['height', null],
                                            )
                                        case 'both':
                                            return _p.ss(
                                                $,
                                                ($) => ['both', null],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'group':
                        return _p.ss(
                            $,
                            ($) => ['group', $],
                        )
                    case 'sortv':
                        return _p.ss(
                            $,
                            ($) => ['sortv', $],
                        )
                    case 'area':
                        return _p.ss(
                            $,
                            ($) => ['area', $],
                        )
                    case 'z':
                        return _p.ss(
                            $,
                            ($) => ['z', $],
                        )
                    case 'margin':
                        return _p.ss(
                            $,
                            ($) => ['margin', $],
                        )
                    case 'arrowhead':
                        return _p.ss(
                            $,
                            ($) => ['arrowhead', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.arrowhead => {
                                    switch ($[0]) {
                                        case 'normal':
                                            return _p.ss(
                                                $,
                                                ($) => ['normal', null],
                                            )
                                        case 'box':
                                            return _p.ss(
                                                $,
                                                ($) => ['box', null],
                                            )
                                        case 'crow':
                                            return _p.ss(
                                                $,
                                                ($) => ['crow', null],
                                            )
                                        case 'diamond':
                                            return _p.ss(
                                                $,
                                                ($) => ['diamond', null],
                                            )
                                        case 'dot':
                                            return _p.ss(
                                                $,
                                                ($) => ['dot', null],
                                            )
                                        case 'inv':
                                            return _p.ss(
                                                $,
                                                ($) => ['inv', null],
                                            )
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ['none', null],
                                            )
                                        case 'tee':
                                            return _p.ss(
                                                $,
                                                ($) => ['tee', null],
                                            )
                                        case 'vee':
                                            return _p.ss(
                                                $,
                                                ($) => ['vee', null],
                                            )
                                        case 'open':
                                            return _p.ss(
                                                $,
                                                ($) => ['open', null],
                                            )
                                        case 'halfopen':
                                            return _p.ss(
                                                $,
                                                ($) => ['halfopen', null],
                                            )
                                        case 'empty':
                                            return _p.ss(
                                                $,
                                                ($) => ['empty', null],
                                            )
                                        case 'invempty':
                                            return _p.ss(
                                                $,
                                                ($) => ['invempty', null],
                                            )
                                        case 'odiamond':
                                            return _p.ss(
                                                $,
                                                ($) => ['odiamond', null],
                                            )
                                        case 'odot':
                                            return _p.ss(
                                                $,
                                                ($) => ['odot', null],
                                            )
                                        case 'obox':
                                            return _p.ss(
                                                $,
                                                ($) => ['obox', null],
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ['custom', $],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'arrowtail':
                        return _p.ss(
                            $,
                            ($) => ['arrowtail', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.arrowtail => {
                                    switch ($[0]) {
                                        case 'normal':
                                            return _p.ss(
                                                $,
                                                ($) => ['normal', null],
                                            )
                                        case 'box':
                                            return _p.ss(
                                                $,
                                                ($) => ['box', null],
                                            )
                                        case 'crow':
                                            return _p.ss(
                                                $,
                                                ($) => ['crow', null],
                                            )
                                        case 'diamond':
                                            return _p.ss(
                                                $,
                                                ($) => ['diamond', null],
                                            )
                                        case 'dot':
                                            return _p.ss(
                                                $,
                                                ($) => ['dot', null],
                                            )
                                        case 'inv':
                                            return _p.ss(
                                                $,
                                                ($) => ['inv', null],
                                            )
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ['none', null],
                                            )
                                        case 'tee':
                                            return _p.ss(
                                                $,
                                                ($) => ['tee', null],
                                            )
                                        case 'vee':
                                            return _p.ss(
                                                $,
                                                ($) => ['vee', null],
                                            )
                                        case 'open':
                                            return _p.ss(
                                                $,
                                                ($) => ['open', null],
                                            )
                                        case 'halfopen':
                                            return _p.ss(
                                                $,
                                                ($) => ['halfopen', null],
                                            )
                                        case 'empty':
                                            return _p.ss(
                                                $,
                                                ($) => ['empty', null],
                                            )
                                        case 'invempty':
                                            return _p.ss(
                                                $,
                                                ($) => ['invempty', null],
                                            )
                                        case 'odiamond':
                                            return _p.ss(
                                                $,
                                                ($) => ['odiamond', null],
                                            )
                                        case 'odot':
                                            return _p.ss(
                                                $,
                                                ($) => ['odot', null],
                                            )
                                        case 'obox':
                                            return _p.ss(
                                                $,
                                                ($) => ['obox', null],
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ['custom', $],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'arrowsize':
                        return _p.ss(
                            $,
                            ($) => ['arrowsize', $],
                        )
                    case 'dir':
                        return _p.ss(
                            $,
                            ($) => ['dir', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.dir => {
                                    switch ($[0]) {
                                        case 'forward':
                                            return _p.ss(
                                                $,
                                                ($) => ['forward', null],
                                            )
                                        case 'back':
                                            return _p.ss(
                                                $,
                                                ($) => ['back', null],
                                            )
                                        case 'both':
                                            return _p.ss(
                                                $,
                                                ($) => ['both', null],
                                            )
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ['none', null],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'headlabel':
                        return _p.ss(
                            $,
                            ($) => ['headlabel', $],
                        )
                    case 'taillabel':
                        return _p.ss(
                            $,
                            ($) => ['taillabel', $],
                        )
                    case 'labelfontcolor':
                        return _p.ss(
                            $,
                            ($) => ['labelfontcolor', $],
                        )
                    case 'labelfontname':
                        return _p.ss(
                            $,
                            ($) => ['labelfontname', $],
                        )
                    case 'labelfontsize':
                        return _p.ss(
                            $,
                            ($) => ['labelfontsize', $],
                        )
                    case 'labelangle':
                        return _p.ss(
                            $,
                            ($) => ['labelangle', $],
                        )
                    case 'labeldistance':
                        return _p.ss(
                            $,
                            ($) => ['labeldistance', $],
                        )
                    case 'labelfloat':
                        return _p.ss(
                            $,
                            ($) => ['labelfloat', $],
                        )
                    case 'weight':
                        return _p.ss(
                            $,
                            ($) => ['weight', $],
                        )
                    case 'len':
                        return _p.ss(
                            $,
                            ($) => ['len', $],
                        )
                    case 'minlen':
                        return _p.ss(
                            $,
                            ($) => ['minlen', $],
                        )
                    case 'constraint':
                        return _p.ss(
                            $,
                            ($) => ['constraint', $],
                        )
                    case 'decorate':
                        return _p.ss(
                            $,
                            ($) => ['decorate', $],
                        )
                    case 'headport':
                        return _p.ss(
                            $,
                            ($) => ['headport', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.headport => {
                                    switch ($[0]) {
                                        case 'center':
                                            return _p.ss(
                                                $,
                                                ($) => ['center', null],
                                            )
                                        case 'n':
                                            return _p.ss(
                                                $,
                                                ($) => ['n', null],
                                            )
                                        case 'ne':
                                            return _p.ss(
                                                $,
                                                ($) => ['ne', null],
                                            )
                                        case 'e':
                                            return _p.ss(
                                                $,
                                                ($) => ['e', null],
                                            )
                                        case 'se':
                                            return _p.ss(
                                                $,
                                                ($) => ['se', null],
                                            )
                                        case 's':
                                            return _p.ss(
                                                $,
                                                ($) => ['s', null],
                                            )
                                        case 'sw':
                                            return _p.ss(
                                                $,
                                                ($) => ['sw', null],
                                            )
                                        case 'w':
                                            return _p.ss(
                                                $,
                                                ($) => ['w', null],
                                            )
                                        case 'nw':
                                            return _p.ss(
                                                $,
                                                ($) => ['nw', null],
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ['custom', $],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'tailport':
                        return _p.ss(
                            $,
                            ($) => ['tailport', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.tailport => {
                                    switch ($[0]) {
                                        case 'center':
                                            return _p.ss(
                                                $,
                                                ($) => ['center', null],
                                            )
                                        case 'n':
                                            return _p.ss(
                                                $,
                                                ($) => ['n', null],
                                            )
                                        case 'ne':
                                            return _p.ss(
                                                $,
                                                ($) => ['ne', null],
                                            )
                                        case 'e':
                                            return _p.ss(
                                                $,
                                                ($) => ['e', null],
                                            )
                                        case 'se':
                                            return _p.ss(
                                                $,
                                                ($) => ['se', null],
                                            )
                                        case 's':
                                            return _p.ss(
                                                $,
                                                ($) => ['s', null],
                                            )
                                        case 'sw':
                                            return _p.ss(
                                                $,
                                                ($) => ['sw', null],
                                            )
                                        case 'w':
                                            return _p.ss(
                                                $,
                                                ($) => ['w', null],
                                            )
                                        case 'nw':
                                            return _p.ss(
                                                $,
                                                ($) => ['nw', null],
                                            )
                                        case 'custom':
                                            return _p.ss(
                                                $,
                                                ($) => ['custom', $],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'headclip':
                        return _p.ss(
                            $,
                            ($) => ['headclip', $],
                        )
                    case 'tailclip':
                        return _p.ss(
                            $,
                            ($) => ['tailclip', $],
                        )
                    case 'lhead':
                        return _p.ss(
                            $,
                            ($) => ['lhead', $],
                        )
                    case 'ltail':
                        return _p.ss(
                            $,
                            ($) => ['ltail', $],
                        )
                    case 'samehead':
                        return _p.ss(
                            $,
                            ($) => ['samehead', $],
                        )
                    case 'sametail':
                        return _p.ss(
                            $,
                            ($) => ['sametail', $],
                        )
                    case 'edgeURL':
                        return _p.ss(
                            $,
                            ($) => ['edgeURL', $],
                        )
                    case 'headURL':
                        return _p.ss(
                            $,
                            ($) => ['headURL', $],
                        )
                    case 'tailURL':
                        return _p.ss(
                            $,
                            ($) => ['tailURL', $],
                        )
                    case 'labelURL':
                        return _p.ss(
                            $,
                            ($) => ['labelURL', $],
                        )
                    case 'edgehref':
                        return _p.ss(
                            $,
                            ($) => ['edgehref', $],
                        )
                    case 'headhref':
                        return _p.ss(
                            $,
                            ($) => ['headhref', $],
                        )
                    case 'tailhref':
                        return _p.ss(
                            $,
                            ($) => ['tailhref', $],
                        )
                    case 'labelhref':
                        return _p.ss(
                            $,
                            ($) => ['labelhref', $],
                        )
                    case 'edgetarget':
                        return _p.ss(
                            $,
                            ($) => ['edgetarget', $],
                        )
                    case 'headtarget':
                        return _p.ss(
                            $,
                            ($) => ['headtarget', $],
                        )
                    case 'tailtarget':
                        return _p.ss(
                            $,
                            ($) => ['tailtarget', $],
                        )
                    case 'edgetooltip':
                        return _p.ss(
                            $,
                            ($) => ['edgetooltip', $],
                        )
                    case 'headtooltip':
                        return _p.ss(
                            $,
                            ($) => ['headtooltip', $],
                        )
                    case 'tailtooltip':
                        return _p.ss(
                            $,
                            ($) => ['tailtooltip', $],
                        )
                    case 'labeltooltip':
                        return _p.ss(
                            $,
                            ($) => ['labeltooltip', $],
                        )
                    case 'radius':
                        return _p.ss(
                            $,
                            ($) => ['radius', $],
                        )
                    case 'splines':
                        return _p.ss(
                            $,
                            ($) => ['splines', _p.decide.state(
                                $,
                                ($): t_out.Attributes.L.splines => {
                                    switch ($[0]) {
                                        case 'true':
                                            return _p.ss(
                                                $,
                                                ($) => ['true', null],
                                            )
                                        case 'false':
                                            return _p.ss(
                                                $,
                                                ($) => ['false', null],
                                            )
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ['none', null],
                                            )
                                        case 'line':
                                            return _p.ss(
                                                $,
                                                ($) => ['line', null],
                                            )
                                        case 'spline':
                                            return _p.ss(
                                                $,
                                                ($) => ['spline', null],
                                            )
                                        case 'polyline':
                                            return _p.ss(
                                                $,
                                                ($) => ['polyline', null],
                                            )
                                        case 'ortho':
                                            return _p.ss(
                                                $,
                                                ($) => ['ortho', null],
                                            )
                                        case 'curved':
                                            return _p.ss(
                                                $,
                                                ($) => ['curved', null],
                                            )
                                        case 'compound':
                                            return _p.ss(
                                                $,
                                                ($) => ['compound', null],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        )
                    case 'pos':
                        return _p.ss(
                            $,
                            ($) => ['pos', $],
                        )
                    case 'xlabel':
                        return _p.ss(
                            $,
                            ($) => ['xlabel', $],
                        )
                    case 'layer':
                        return _p.ss(
                            $,
                            ($) => ['layer', $],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    )
