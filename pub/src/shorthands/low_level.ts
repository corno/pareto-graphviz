import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core-shorthands/dist/unconstrained'

import * as d_target from "../interface/generated/liana/schemas/low_level/data"


export const Graph = (
    strict: boolean,
    name: null | d_target.ID,
    type: 'directed' | 'undirected',
    statements: _p.Raw_Or_Normal_List<d_target.Statements.L>,
): d_target.Graph => ({
    'strict': strict,
    'type': type === 'directed' ? ['digraph', null] : ['graph', null],
    'name': _p.optional.literalx(name),
    'statements': _p.list.literal(statements),
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
        value: string,
    ): d_target.ID => ['html', value]   

}

export namespace s {

    export const node = (
        id: d_target.Node_ID,
        attributes: _p.Raw_Or_Normal_List<d_target.Attributes.L>,
    ): d_target.Statements.L => ['node', {
        'node': id,
        'attributes': _p.list.literal(attributes),
    }]

    export const edge = (
        left: d_target.End_Point,
        right: _p.Raw_Or_Normal_List<d_target.End_Point>,
        attributes: _p.Raw_Or_Normal_List<d_target.Attributes.L>,
    ): d_target.Statements.L => ['edge', {
        'left': left,
        'right': _p.list.literal(right),
        'attributes': _p.list.literal(attributes),
    }]

    export const attributes = (
        type: 'graph' | 'node' | 'edge',
        attributes: _p.Raw_Or_Normal_List<d_target.Attributes.L>,
    ): d_target.Statements.L => ['attributes', {
        'type': type === 'graph' ? ['graph', null] : type === 'node' ? ['node', null] : ['edge', null],
        'attributes': _p.list.literal(attributes),
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
    'port': _p.optional.literalx(port),
})