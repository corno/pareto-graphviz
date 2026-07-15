import type * as p_i from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/high_level.js"

//dependencies
import * as t_low_level_to_prose from "../low_level/paragraph.js"
import * as t_to_low_level from "./low_level.js"
import type * as s_out from "../../../interface/schemas/paragraph.js"


export const Graph: p_i.Transformer<
    s_in.Graph,
    s_out.Paragraph
> = ($) => t_low_level_to_prose.Graph(t_to_low_level.Graph($))
