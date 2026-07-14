import type * as p_i from 'pareto-core/implementation/serializer'

//schemas
import type * as s_in from "../../interface/schemas/high_level.js"

//dependencies
import * as t_low_level_to_prose from "./low_level.js"
import * as t_to_low_level from "../transformers/high_level/low_level.js"


export const Graph: p_i.Paragraph_Serializer<
    s_in.Graph
> = ($) => t_low_level_to_prose.Graph(t_to_low_level.Graph($))
