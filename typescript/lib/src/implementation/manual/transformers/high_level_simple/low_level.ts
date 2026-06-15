import * as pt from 'pareto-core/dist/transformer/implementation'
import * as p_ti from 'pareto-core/dist/transformer/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/high_level_simple/data"
import * as d_out from "../../../../interface/generated/liana/schemas/low_level/data"

type Graph = p_ti.Transformer<d_in.Graph, d_out.Graph>

//dependencies
import * as t_attributes_to_low_level from "../attributes/low_level"

//shorthands
import * as sh from "../../../../shorthands/low_level"


export const Graph: Graph = ($) => sh.Graph(
    true,
    null,
    'directed',
    pt.literal.nested_list([

        [
            sh.s.attributes('graph', t_attributes_to_low_level.Attributes($.attributes)),
        ],
        pt.list.from.dictionary(
            $.nodes
        ).convert(
            ($, id) => sh.s.node(
                sh.node_id(sh.id.string(id), null),
                t_attributes_to_low_level.Attributes($.attributes)
            )
        ),
        pt.list.from.list(
            $.edges
        ).map(
            ($) => sh.s.edge(
                sh.end_point.node(sh.node_id(sh.id.string($.from), null)),
                pt.literal.list([
                    sh.end_point.node(sh.node_id(sh.id.string($.to), null))
                ]),
                t_attributes_to_low_level.Attributes($.attributes)
            )
        )
    ])

)