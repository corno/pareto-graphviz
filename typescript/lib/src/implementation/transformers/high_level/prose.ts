import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../interface/data/high_level.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"

//dependencies
import * as t_low_level_to_prose from "../low_level/prose.js"
import * as t_to_low_level from "./low_level.js"


export const Graph: p_i.Transformer<
    d_in.Graph,
    d_out.Paragraph
> = ($) => t_low_level_to_prose.Graph(t_to_low_level.Graph($))
