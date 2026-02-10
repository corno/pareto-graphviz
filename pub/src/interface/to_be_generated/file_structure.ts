import * as _pi from 'pareto-core/dist/interface'

import * as d_graphviz from "../generated/liana/schemas/high_level/data"

export type Directory = _pi.Dictionary<Node>


export type Node =
| ['file', d_graphviz.Graph]
| ['directory', Directory]