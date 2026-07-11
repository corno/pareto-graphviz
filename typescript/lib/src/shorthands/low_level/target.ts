import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_target from "../../interface/schemas/low_level.js"
import type * as s_target_html from "../../interface/schemas/html.js"


export const Graph = (
    strict: boolean,
    name: null | s_target.ID,
    type: 'directed' | 'undirected',
    statements: p_.Normal_List<s_target.Statements.L>,
): s_target.Graph => ({
    'strict': strict,
    'type': type === 'directed' ? ['digraph', null] : ['graph', null],
    'name': p_.optional.null_or_value(name),
    'statements': p_.list(statements),
})

export namespace id {

    export const id = (
        value: string,
    ): s_target.ID => ['id', value]

    export const string = (
        value: string,
    ): s_target.ID => ['string', value]

    export const number = (
        value: number,
    ): s_target.ID => ['number', value]

    export const html = (
        value: s_target_html.Phrasing_Element,
    ): s_target.ID => ['html', value]   

}

export namespace s {

    export const node = (
        id: s_target.Node_ID,
        attributes: p_.Normal_List<s_target.Attributes.L>,
    ): s_target.Statements.L => ['node', {
        'node': id,
        'attributes': p_.list(attributes),
    }]

    export const edge = (
        left: s_target.End_Point,
        right: p_.Normal_List<s_target.End_Point>,
        attributes: p_.Normal_List<s_target.Attributes.L>,
    ): s_target.Statements.L => ['edge', {
        'left': left,
        'right': p_.list(right),
        'attributes': p_.list(attributes),
    }]

    export const attributes = (
        type: 'graph' | 'node' | 'edge',
        attributes: p_.Normal_List<s_target.Attributes.L>,
    ): s_target.Statements.L => ['attributes', {
        'type': type === 'graph' ? ['graph', null] : type === 'node' ? ['node', null] : ['edge', null],
        'attributes': p_.list(attributes),
    }]

    export const attribute_assignment = (
        name: s_target.ID,
        value: s_target.ID,
    ): s_target.Statements.L => ['attribute assignment', {
        'name': name,
        'value': value,
    }]

    export const subgraph = (
        subgraph: s_target.Subgraph,
    ): s_target.Statements.L => ['subgraph', subgraph]

}

export const attribute = (
    name: s_target.ID,
    value: s_target.ID,
): s_target.Attributes.L => ({
    'name': name,
    'value': value,
})

export namespace end_point {

    export const node = (
        id: s_target.Node_ID,
    ): s_target.End_Point => ['node', id]

    export const subgraph = (
        subgraph: s_target.Subgraph,
    ): s_target.End_Point => ['subgraph', subgraph]

}

export const node_id = (
    id: s_target.ID,
    port: null | s_target.Node_ID.port.O,
): s_target.Node_ID => ({
    'id': id,
    'port': p_.optional.null_or_value(port),
})