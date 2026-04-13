
import * as d_in from "../../../../interface/generated/liana/schemas/high_level/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

import * as t_low_level_to_fountain_pen from "../low_level/fountain_pen"
import * as t_to_low_level from "./low_level"


export const Graph = ($: d_in.Graph): d_out.Paragraph => t_low_level_to_fountain_pen.Graph(t_to_low_level.Graph(($)))
