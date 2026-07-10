
import type * as p_ from 'pareto-core/interface/transformer'

import type * as d_in from "../../../interface/data/low_level.js"
import type * as d_out from "pareto-fountain-pen/interface/data/prose"

export namespace d_parameters {
    export type Parameters = {
        'graph type': d_in.Graph.type_
    }

}


export type Graph = p_.Transformer<
    d_in.Graph,
    d_out.Paragraph
>
export type Statements = p_.Transformer_With_Parameter<
    d_in.Statements,
    d_out.Phrase,
    d_parameters.Parameters
>
export type ID = p_.Transformer<
    d_in.ID,
    d_out.Phrase
>
export type Attributes = p_.Transformer<
    d_in.Attributes,
    d_out.Phrase
>
export type Node_ID = p_.Transformer<
    d_in.Node_ID,
    d_out.Phrase
>
export type Subgraph = p_.Transformer_With_Parameter<
    d_in.Subgraph,
    d_out.Phrase,
    d_parameters.Parameters
>

