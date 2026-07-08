import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

import type * as d_in from "../../../../interface/generated/liana/schemas/low_level/data.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"

export namespace d_parameters {
    export type Parameters = {
        'graph type': d_in.Graph.type_
    }

}

export namespace interface_ {
    export type Graph = p_i.Transformer<
        d_in.Graph,
        d_out.Paragraph
    >
    export type Statements = p_i.Transformer_With_Parameter<
        d_in.Statements,
        d_out.Phrase,
        d_parameters.Parameters
    >
    export type ID = p_i.Transformer<
        d_in.ID,
        d_out.Phrase
    >
    export type Attributes = p_i.Transformer<
        d_in.Attributes,
        d_out.Phrase
    >
    export type Node_ID = p_i.Transformer<
        d_in.Node_ID,
        d_out.Phrase
    >
    export type Subgraph = p_i.Transformer_With_Parameter<
        d_in.Subgraph,
        d_out.Phrase,
        d_parameters.Parameters
    >
}
