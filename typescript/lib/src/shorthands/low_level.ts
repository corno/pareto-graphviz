import * as pt from 'pareto-core-shorthands/dist/unconstrained'

import * as d_target from "../interface/generated/liana/schemas/low_level/data"
import * as d_target_html from "../interface/generated/liana/schemas/html/data"


export const Graph = (
    strict: boolean,
    name: null | d_target.ID,
    type: 'directed' | 'undirected',
    statements: pt.Raw_Or_Normal_List<d_target.Statements.L>,
): d_target.Graph => ({
    'strict': strict,
    'type': type === 'directed' ? ['digraph', null] : ['graph', null],
    'name': pt.optional.null_or_value(name),
    'statements': pt.list(statements),
})

export namespace id {

    export const id = (
        value: string,
    ): d_target.ID => ['id', value]

    export const string = (
        value: string,
    ): d_target.ID => ['string', value]

    export const number = (
        value: number,
    ): d_target.ID => ['number', value]

    export const html = (
        value: d_target_html.Phrasing_Element,
    ): d_target.ID => ['html', value]   

}

export namespace s {

    export const node = (
        id: d_target.Node_ID,
        attributes: pt.Raw_Or_Normal_List<d_target.Attributes.L>,
    ): d_target.Statements.L => ['node', {
        'node': id,
        'attributes': pt.list(attributes),
    }]

    export const edge = (
        left: d_target.End_Point,
        right: pt.Raw_Or_Normal_List<d_target.End_Point>,
        attributes: pt.Raw_Or_Normal_List<d_target.Attributes.L>,
    ): d_target.Statements.L => ['edge', {
        'left': left,
        'right': pt.list(right),
        'attributes': pt.list(attributes),
    }]

    export const attributes = (
        type: 'graph' | 'node' | 'edge',
        attributes: pt.Raw_Or_Normal_List<d_target.Attributes.L>,
    ): d_target.Statements.L => ['attributes', {
        'type': type === 'graph' ? ['graph', null] : type === 'node' ? ['node', null] : ['edge', null],
        'attributes': pt.list(attributes),
    }]

    export const attribute_assignment = (
        name: d_target.ID,
        value: d_target.ID,
    ): d_target.Statements.L => ['attribute assignment', {
        'name': name,
        'value': value,
    }]

    export const subgraph = (
        subgraph: d_target.Subgraph,
    ): d_target.Statements.L => ['subgraph', subgraph]

}

export const attribute = (
    name: d_target.ID,
    value: d_target.ID,
): d_target.Attributes.L => ({
    'name': name,
    'value': value,
})

export namespace end_point {

    export const node = (
        id: d_target.Node_ID,
    ): d_target.End_Point => ['node', id]

    export const subgraph = (
        subgraph: d_target.Subgraph,
    ): d_target.End_Point => ['subgraph', subgraph]

}

export const node_id = (
    id: d_target.ID,
    port: null | d_target.Node_ID.port.O,
): d_target.Node_ID => ({
    'id': id,
    'port': pt.optional.null_or_value(port),
})