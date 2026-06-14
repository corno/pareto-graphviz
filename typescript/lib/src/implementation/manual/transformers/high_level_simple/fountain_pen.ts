import * as pt from 'pareto-core/dist/assign'
import * as p_ti from 'pareto-core/dist/transformer/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/high_level_simple/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

type Graph = p_ti.Transformer<d_in.Graph, d_out.Paragraph>

//dependencies
import * as t_low_level_to_fountain_pen from "../low_level/fountain_pen"
import * as t_to_low_level from "./low_level"

export const Graph: Graph = ($) => t_low_level_to_fountain_pen.Graph(
    t_to_low_level.Graph($)
)
