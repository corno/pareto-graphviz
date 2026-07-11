import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as s_in from "../../../interface/schemas/high_level.js"
import type * as s_out from "pareto-fountain-pen/interface/data/prose"

//dependencies
import * as t_low_level_to_prose from "../low_level/prose.js"
import * as t_to_low_level from "./low_level.js"


export const Graph: p_i.Transformer<
    s_in.Graph,
    s_out.Paragraph
> = ($) => t_low_level_to_prose.Graph(t_to_low_level.Graph($))
