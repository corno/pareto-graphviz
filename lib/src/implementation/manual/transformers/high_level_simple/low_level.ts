import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/high_level_simple/data"
import * as d_out from "../../../../interface/generated/liana/schemas/low_level/data"

type Graph = _pi.Transformer<d_in.Graph, d_out.Graph>

//dependencies
import { $$ as s_quoted } from "../../primitives/text/serializers/quoted"
import { $$ as s_decimal } from "../../primitives/integer/serializers/decimal"
import * as t_attributes_to_low_level from "../attributes/low_level"

//shorthands
import * as sh from "../../../../shorthands/low_level"


export const Graph: Graph = ($) => sh.Graph(
    true,
    null,
    'directed',
    _p.list.nested_literal_old([

        [
            sh.s.attributes('graph', t_attributes_to_low_level.Attributes($.attributes)),
        ],
        _p.list.from.dictionary(
            $.nodes
        ).convert(
            ($, id) => sh.s.node(
                sh.node_id(sh.id.string(id), null),
                t_attributes_to_low_level.Attributes($.attributes)
            )
        ),
        _p.list.from.list(
            $.edges
        ).map(
            ($) => sh.s.edge(
                sh.end_point.node(sh.node_id(sh.id.string($.from), null)),
                _p.list.literal([
                    sh.end_point.node(sh.node_id(sh.id.string($.to), null))
                ]),
                t_attributes_to_low_level.Attributes($.attributes)
            )
        )
    ])

)