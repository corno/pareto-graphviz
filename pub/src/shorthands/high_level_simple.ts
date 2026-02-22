import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core-shorthands/dist/unconstrained'

import * as d_target from "../interface/generated/liana/schemas/high_level_simple/data"
import * as d_target_attributes from "../interface/generated/liana/schemas/attributes/data"


export const Graph = (
    attributes: _p.Raw_Or_Normal_List<d_target_attributes.Attributes.L>,
    nodes: _p.Raw_Or_Normal_Dictionary<d_target.Graph.nodes.D>,
    edges: _p.Raw_Or_Normal_List<d_target.Graph.edges.L>,
): d_target.Graph => ({
    'attributes': _p.list.literal(attributes),
    'nodes': _p.dictionary.literal(nodes),
    'edges': _p.list.literal(edges),
})

// export const attribute = (
//     key: string,

// )

export const node = (
    attributes: _p.Raw_Or_Normal_List<d_target_attributes.Attributes.L>,
): d_target.Graph.nodes.D => ({
    'attributes': _p.list.literal(attributes),
})

export const edge = (
    from: string,
    to: string,
    attributes: _p.Raw_Or_Normal_List<d_target_attributes.Attributes.L>,
): d_target.Graph.edges.L => ({
    'from': from,
    'to': to,
    'attributes': _p.list.literal(attributes),
})