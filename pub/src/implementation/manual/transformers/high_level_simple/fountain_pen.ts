import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/high_level_simple/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

type Graph = _pi.Transformer<d_in.Graph, d_out.Paragraph>

//dependencies
import * as t_low_level_to_fountain_pen from "../low_level/fountain_pen"
import * as t_to_low_level from "./low_level"

export const Graph: Graph = ($) => t_low_level_to_fountain_pen.Graph(
    t_to_low_level.Graph($)
)
