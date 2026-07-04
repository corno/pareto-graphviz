import * as p_i from 'pareto-core/dist/interface/transformer'

import * as d_in from "../../../../interface/generated/liana/schemas/high_level_simple/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

type Graph = p_i.Transformer<
d_in.Graph, d_out.Paragraph
>

//dependencies
import * as t_low_level_to_fountain_pen from "../low_level/prose"
import * as t_to_low_level from "./low_level"

export const Graph: Graph = ($) => t_low_level_to_fountain_pen.Graph(
    t_to_low_level.Graph($)
)
