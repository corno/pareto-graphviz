import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/high_level_simple/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

type Graph = _pi.Transformer<d_in.Graph, d_out.Paragraph>

//dependencies
import { $$ as s_quoted } from "../../primitives/text/serializers/quoted"
import { $$ as s_decimal } from "../../primitives/integer/serializers/decimal"
import * as t_attributes_to_fountain_pen from "../attributes/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Graph: Graph = ($) => sh.pg.sentences([
    sh.sentence([
        sh.ph.literal("digraph {"),
        sh.ph.indent(sh.pg.composed([
            t_attributes_to_fountain_pen.Attributes($.attributes),
            sh.pg.sentences([
                sh.sentence([]),
                sh.sentence([
                    sh.ph.literal("// nodes"),
                ])
            ]),
            sh.pg.sentences(
                _p.list.from.dictionary(
                    $.nodes,
                ).convert(
                    ($, id) => sh.sentence([
                        sh.ph.serialize(s_quoted(id)),
                        sh.ph.literal("[ "),
                        sh.ph.indent(
                            t_attributes_to_fountain_pen.Attributes($.attributes),
                        ),
                        sh.ph.literal("];")
                    ]))
            ),
            sh.pg.sentences([
                sh.sentence([]),
                sh.sentence([
                    sh.ph.literal("// edges"),
                ])
            ]),
            sh.pg.sentences($.edges.__l_map(($) => sh.sentence([
                sh.ph.serialize(s_quoted($.from)),
                sh.ph.literal(" -> "),
                sh.ph.serialize(s_quoted($.to)),
                sh.ph.literal(" ["),
                sh.ph.indent(
                    t_attributes_to_fountain_pen.Attributes($.attributes),
                ),
                sh.ph.literal("];")
            ]))),
            sh.pg.sentences([
                sh.sentence([]),
            ]),
        ])),
        sh.ph.literal("}"),
    ])
])
