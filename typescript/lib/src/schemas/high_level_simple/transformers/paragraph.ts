import type * as p_i from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../schema.js"
import type * as s_out from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/schema"

type Graph = p_i.Transformer<
    s_in.Graph,
    s_out.Paragraph
>

//dependencies
import * as t_low_level_to_paragraph from "../../low_level/transformers/paragraph.js"
import * as t_to_low_level from "./low_level.js"

export const Graph: Graph = ($) => t_low_level_to_paragraph.Graph(
    t_to_low_level.Graph($)
)
