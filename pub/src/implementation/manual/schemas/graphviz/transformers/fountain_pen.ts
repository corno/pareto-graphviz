import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/graphviz/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

type signature = _pi.Transformer<d_in.Graph, d_out.Group>

//dependencies
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Graph: signature = ($) => sh.group([
    sh.g.nested_block([
        sh.b.snippet(`digraph {`),
        sh.b.indent([
            sh.g.simple_block(``),
            sh.g.simple_block(`// nodes`),
            sh.g.sub(
                _p.list.from_dictionary(
                    $.nodes,
                    ($, key) => sh.g.nested_block([
                        sh.b.snippet(`${s_quoted(key)};`),
                    ]))
            ),
            sh.g.simple_block(``),
            sh.g.simple_block(`// edges`),
            sh.g.sub($.edges.__l_map(($) => sh.g.nested_block([
                sh.b.snippet(`${s_quoted($.from)} -> ${s_quoted($.to)} ;`),
            ]))),
            sh.g.simple_block(``),
        ]),
        sh.b.snippet(`}`),
    ])
])