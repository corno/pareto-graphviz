import * as p_di from 'pareto-core/dist/data/interface'
import * as pt from 'pareto-core-shorthands/dist/unconstrained'

import * as d_target from "../interface/generated/liana/schemas/high_level_simple/data"
import * as d_target_attributes from "../interface/generated/liana/schemas/attributes/data"


export const Graph = (
    attributes: pt.Raw_Or_Normal_List<d_target_attributes.Attributes.L>,
    nodes: pt.Raw_Or_Normal_Dictionary<d_target.Graph.nodes.D>,
    edges: pt.Raw_Or_Normal_List<d_target.Graph.edges.L>,
): d_target.Graph => ({
    'attributes': pt.list.literal(attributes),
    'nodes': pt.dictionary.literal(nodes),
    'edges': pt.list.literal(edges),
})

// export const attribute = (
//     key: string,

// )

export const node = (
    attributes: pt.Raw_Or_Normal_List<d_target_attributes.Attributes.L>,
): d_target.Graph.nodes.D => ({
    'attributes': pt.list.literal(attributes),
})

export const edge = (
    from: string,
    to: string,
    attributes: pt.Raw_Or_Normal_List<d_target_attributes.Attributes.L>,
): d_target.Graph.edges.L => ({
    'from': from,
    'to': to,
    'attributes': pt.list.literal(attributes),
})