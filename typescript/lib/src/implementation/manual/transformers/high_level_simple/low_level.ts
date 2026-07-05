import * as p_ from 'pareto-core/implementation/transformer'
import * as p_i from 'pareto-core/interface/transformer'

import * as d_in from "../../../../interface/generated/liana/schemas/high_level_simple/data.js"
import * as d_out from "../../../../interface/generated/liana/schemas/low_level/data.js"

type Graph = p_i.Transformer<
    d_in.Graph,
    d_out.Graph
>

//dependencies
import * as t_attributes_to_low_level from "../attributes/low_level.js"

//shorthands
import * as sh from "../../../../shorthands/low_level/target.js"


export const Graph: Graph = ($) => sh.Graph(
    true,
    null,
    'directed',
    p_.literal.segmented_list([

        p_.literal.list([
            sh.s.attributes('graph', t_attributes_to_low_level.Attributes($.attributes)),
        ]),
        p_.from.dictionary($.nodes).convert_to_list(
            ($, id) => sh.s.node(
                sh.node_id(
                    sh.id.string(id), null),
                t_attributes_to_low_level.Attributes($.attributes)
            )
        ),
        p_.from.list($.edges).map(
            ($) => sh.s.edge(
                sh.end_point.node(
                    sh.node_id(
                        sh.id.string($.from), null)),
                p_.literal.list([
                    sh.end_point.node(
                        sh.node_id(
                            sh.id.string($.to), null))
                ]),
                t_attributes_to_low_level.Attributes($.attributes)
            )
        )
    ])

)