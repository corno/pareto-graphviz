import * as p_ from 'pareto-core-shorthands/dist/unconstrained'

import * as d_target from "../interface/generated/liana/schemas/high_level_simple/data"
import * as d_target_attributes from "../interface/generated/liana/schemas/attributes/data"


export const Graph = (
    attributes: p_.Raw_Or_Normal_List<d_target_attributes.Attributes.L>,
    nodes: p_.Raw_Or_Normal_Dictionary<d_target.Graph.nodes.D>,
    edges: p_.Raw_Or_Normal_List<d_target.Graph.edges.L>,
): d_target.Graph => ({
    'attributes': p_.list(attributes),
    'nodes': p_.dictionary(nodes),
    'edges': p_.list(edges),
})

// export const attribute = (
//     key: string,

// )

export const node = (
    attributes: p_.Raw_Or_Normal_List<d_target_attributes.Attributes.L>,
): d_target.Graph.nodes.D => ({
    'attributes': p_.list(attributes),
})

export const edge = (
    from: string,
    to: string,
    attributes: p_.Raw_Or_Normal_List<d_target_attributes.Attributes.L>,
): d_target.Graph.edges.L => ({
    'from': from,
    'to': to,
    'attributes': p_.list(attributes),
})