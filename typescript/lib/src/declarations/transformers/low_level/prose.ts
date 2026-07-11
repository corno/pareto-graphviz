
import type * as p_ from 'pareto-core/interface/transformer'

import type * as s_in from "../../../interface/schemas/low_level.js"
import type * as s_out from "pareto-fountain-pen/interface/data/prose"

export namespace s_parameters {
    export type Parameters = {
        'graph type': s_in.Graph.type_
    }

}


export type Graph = p_.Transformer<
    s_in.Graph,
    s_out.Paragraph
>
export type Statements = p_.Transformer_With_Parameter<
    s_in.Statements,
    s_out.Phrase,
    s_parameters.Parameters
>
export type ID = p_.Transformer<
    s_in.ID,
    s_out.Phrase
>
export type Attributes = p_.Transformer<
    s_in.Attributes,
    s_out.Phrase
>
export type Node_ID = p_.Transformer<
    s_in.Node_ID,
    s_out.Phrase
>
export type Subgraph = p_.Transformer_With_Parameter<
    s_in.Subgraph,
    s_out.Phrase,
    s_parameters.Parameters
>

