import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as d_in from "../../../interface/generated/pareto/schemas/graphviz/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Graph: _et.Transformer<d_out.Block_Part, d_in.Graph> = ($) => {
    return sh.b.sub([

        sh.b.snippet(`graph {`),
        sh.b.indent([
            sh.g.sub($.nodes.deprecated_to_array(() => 1).map(($) => sh.g.nested_block([
                sh.b.snippet(`${$.key} ;`),
            ]))),
            sh.g.sub($.edges.map(($) => sh.g.nested_block([
                sh.b.snippet(`${$.from} -> ${$.to} ;`),
            ])))
        ]),
        sh.b.snippet(`}`),
    ])
}
