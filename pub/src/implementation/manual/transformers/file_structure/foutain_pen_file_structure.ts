import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'   

//data types
import * as d_in from "../../../../interface/to_be_generated/file_structure"
import * as d_out from "pareto-fountain-pen-file-structure/dist/interface/to_be_generated/file-system"

//dependencies
import * as t_graphviz_to_fountain_pen from "../high_level_simple/fountain_pen"

export type Diretory = _pi.Transformer<d_in.Directory, d_out.Directory>

// export type Node = _pi.Transformer<d_in.Node, d_out.Directory__nodes>

export const Directory: Diretory = ($) => _p.dictionary.from.dictionary(
    $,
).map(
    ($) => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'file': return _p.ss($, ($) => ['file', t_graphviz_to_fountain_pen.Graph($)])
            case 'directory': return _p.ss($, ($) => ['directory', Directory($)])
            default: return _p.au($[0])
        }
    })
)