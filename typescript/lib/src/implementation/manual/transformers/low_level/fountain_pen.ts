import * as pt from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

import * as d_in from "../../../../interface/generated/liana/schemas/low_level/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

type Parameters = {
    'graph type': d_in.Graph.type_
}

namespace signatures {
    export type Graph = p_i.Transformer<d_in.Graph, d_out.Paragraph>
    export type Statements = p_i.Transformer_With_Parameter<d_in.Statements, d_out.Phrase, Parameters>
    export type ID = p_i.Transformer<d_in.ID, d_out.Phrase>
    export type Attributes = p_i.Transformer<d_in.Attributes, d_out.Phrase>
    export type Node_ID = p_i.Transformer<d_in.Node_ID, d_out.Phrase>
    export type Subgraph = p_i.Transformer_With_Parameter<d_in.Subgraph, d_out.Phrase, Parameters>
}

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"


//dependencies
import * as t_primitives_to_list_of_characters from "../primitives/list_of_characters"
import * as t_html_to_fountain_pen from "pareto-static-html/dist/implementation/manual/transformers/static_html/fountain_pen"


export const Graph: signatures.Graph = ($) => sh.pg.sentences([
    sh.sentence([
        $.strict
            ? sh.ph.literal("strict ")
            : sh.ph.nothing(),
        pt.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'digraph': return pt.ss($, () => sh.ph.literal("digraph "))
                case 'graph': return pt.ss($, () => sh.ph.literal("graph "))
                default: return pt.au($[0])
            }
        }),
        $.name.__decide(
            ($) => sh.ph.composed([
                ID($),
                sh.ph.literal(" "),
            ]),
            () => sh.ph.nothing()
        ),
        Statement_List($.statements, {
            'graph type': $.type
        }),
    ]),
])

export const Statement_List: signatures.Statements = ($, $p) => sh.ph.composed([
    sh.ph.literal("{"),
    sh.ph.indent(
        sh.pg.sentences($.__l_map(($) => sh.sentence([
            pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'attribute assignment': return pt.ss($, ($) => sh.ph.composed([
                        ID($.name),
                        sh.ph.literal(" = "),
                        ID($.value),
                        sh.ph.literal(";"),
                    ]))
                    case 'attributes': return pt.ss($, ($) => sh.ph.composed([
                        pt.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'edge': return pt.ss($, () => sh.ph.literal("edge "))
                                case 'node': return pt.ss($, () => sh.ph.literal("node "))
                                case 'graph': return pt.ss($, () => sh.ph.literal("graph "))
                                default: return pt.au($[0])
                            }
                        }),
                        Attributes($.attributes),
                        sh.ph.literal(";"),
                    ]))
                    case 'edge': return pt.ss($, ($) => sh.ph.composed([
                        pt.decide.state($.left, ($) => {
                            switch ($[0]) {
                                case 'node': return pt.ss($, ($) => Node_ID($))
                                case 'subgraph': return pt.ss($, ($) => Subgraph($, $p))
                                default: return pt.au($[0])
                            }
                        }),
                        pt.decide.state($p['graph type'], ($) => {
                            switch ($[0]) {
                                case 'digraph': return pt.ss($, () => sh.ph.literal(" -> "))
                                case 'graph': return pt.ss($, () => sh.ph.literal(" -- "))
                                default: return pt.au($[0])
                            }
                        }),
                        sh.ph.rich(
                            pt.list.from.list(
                                $.right,
                            ).map(
                                ($) => sh.ph.composed([
                                    pt.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'node': return pt.ss($, ($) => Node_ID($))
                                            case 'subgraph': return pt.ss($, ($) => Subgraph($, $p))
                                            default: return pt.au($[0])
                                        }
                                    }),

                                ]),
                            ),
                            sh.ph.nothing(),
                            sh.ph.nothing(),
                            sh.ph.literal(", "),
                            sh.ph.nothing(),
                        ),
                        Attributes($.attributes),
                    ]))
                    case 'node': return pt.ss($, ($) => sh.ph.composed([
                        Node_ID($.node),
                        pt.boolean.from.list($['attributes']).is_empty()
                            ? sh.ph.nothing()
                            : Attributes($['attributes']),
                        sh.ph.literal(";"),
                    ]))
                    case 'subgraph': return pt.ss($, ($) => Subgraph($, $p))
                    default: return pt.au($[0])
                }
            })
        ]))),
    ),
    sh.ph.literal("}"),
])

export const ID: signatures.ID = ($) => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'id': return pt.ss($, ($) => sh.ph.literal($)) //FIX escaping
        case 'string': return pt.ss($, ($) => sh.ph.serialize(t_primitives_to_list_of_characters.quoted($)))
        case 'html': return pt.ss($, ($) => t_html_to_fountain_pen.Phrasing_Element($))
        case 'number': return pt.ss($, ($) => sh.ph.literal("FIXME NUMBER"))
        default: return pt.au($[0])
    }
})

export const Attributes: signatures.Attributes = ($) => sh.ph.composed([
    sh.ph.literal(" [ "),
    sh.ph.composed($.__l_map(($) => sh.ph.composed([
        ID($.name),
        sh.ph.literal("="),
        ID($.value),
        sh.ph.literal(" "),
    ]))),
    sh.ph.literal("]"),
])

export const Node_ID: signatures.Node_ID = ($) => sh.ph.composed([
    ID($.id),
    $.port.__decide(
        ($) => sh.ph.composed([
            sh.ph.literal(":"),
            ID($.port),
            $['compass point'].__decide(
                ($) => sh.ph.composed([
                    sh.ph.literal(":"),
                    ID($),
                ]),
                () => sh.ph.nothing()
            ),
        ]),
        () => sh.ph.nothing()
    ),
])

export const Subgraph: signatures.Subgraph = ($, $p) => sh.ph.composed([
    $.subgraph.__decide(
        ($) => sh.ph.composed([
            sh.ph.literal("subgraph "),
            $.__decide(
                ($) => sh.ph.composed([
                    ID($),
                    sh.ph.literal(" "),
                ]),
                () => sh.ph.nothing()
            ),
        ]),
        () => sh.ph.nothing()
    ),
    Statement_List($.statements, {
        'graph type': $p['graph type']
    }),
])