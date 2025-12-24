import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as d_in from "../../../interface/generated/pareto/schemas/graphviz/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import { $$ as op_serialize_string } from "../../operations/impure/text/serialize_string"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Graph: _et.Transformer_New<d_in.Graph, d_out.Group> = ($) => {
    return sh.group([
        sh.g.nested_block([
            sh.b.snippet(`digraph {`),
            sh.b.indent([
                sh.g.simple_block(``),
                sh.g.simple_block(`// nodes`),
                sh.g.sub($.nodes.deprecated_to_array(() => 1).map(($) => sh.g.nested_block([
                    sh.b.snippet(`${op_serialize_string($.key)};`),
                ]))),
                sh.g.simple_block(``),
                sh.g.simple_block(`// edges`),
                sh.g.sub($.edges.map(($) => sh.g.nested_block([
                    sh.b.snippet(`${op_serialize_string($.from)} -> ${op_serialize_string($.to)} ;`),
                ]))),
                sh.g.simple_block(``),
            ]),
            sh.b.snippet(`}`),
        ])
    ])
}
