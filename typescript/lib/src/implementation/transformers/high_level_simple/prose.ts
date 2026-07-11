import type * as p_i from 'pareto-core/interface/transformer'

import type * as s_in from "../../../interface/schemas/high_level_simple.js"
import type * as s_out from "pareto-fountain-pen/interface/data/prose"

type Graph = p_i.Transformer<
    s_in.Graph,
    s_out.Paragraph
>

//dependencies
import * as t_low_level_to_prose from "../low_level/prose.js"
import * as t_to_low_level from "./low_level.js"

export const Graph: Graph = ($) => t_low_level_to_prose.Graph(
    t_to_low_level.Graph($)
)
