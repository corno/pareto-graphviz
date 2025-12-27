import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as d_in from "../../../../interface/generated/pareto/schemas/graphviz/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import { $$ as s_quoted } from "../../../serializers/primitives/text/quoted"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Graph: _et.Transformer<d_in.Graph, d_out.Group> = ($) => {
    return sh.group([
        sh.g.nested_block([
            sh.b.snippet(`digraph {`),
            sh.b.indent([
                sh.g.simple_block(``),
                sh.g.simple_block(`// nodes`),
                sh.g.sub($.nodes.to_list(($, key) => sh.g.nested_block([
                    sh.b.snippet(`${s_quoted(key)};`),
                ]))),
                sh.g.simple_block(``),
                sh.g.simple_block(`// edges`),
                sh.g.sub($.edges.map(($) => sh.g.nested_block([
                    sh.b.snippet(`${s_quoted($.from)} -> ${s_quoted($.to)} ;`),
                ]))),
                sh.g.simple_block(``),
            ]),
            sh.b.snippet(`}`),
        ])
    ])
}
