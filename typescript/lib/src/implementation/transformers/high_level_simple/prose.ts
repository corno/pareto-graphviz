import type * as p_i from 'pareto-core/interface/transformer'

import type * as d_in from "../../../interface/generated/liana/schemas/high_level_simple/data.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"

type Graph = p_i.Transformer<
    d_in.Graph,
    d_out.Paragraph
>

//dependencies
import * as t_low_level_to_prose from "../low_level/prose.js"
import * as t_to_low_level from "./low_level.js"

export const Graph: Graph = ($) => t_low_level_to_prose.Graph(
    t_to_low_level.Graph($)
)
