import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/low_level.js"
import type * as s_out from "../../../interface/schemas/prose.js"
namespace s_parameters {
    export type Parameters = {
        'graph type': s_in.Graph.type_
    }

}

namespace declarations {
    export type Graph = p_.Transformer<
        s_in.Graph,
        s_out.Paragraph
    >
    export type Statements = p_.Transformer_With_Parameter<
        s_in.Statements,
        s_out.Phrase,
        s_parameters.Parameters
    >
    export type ID = p_.Transformer<
        s_in.ID,
        s_out.Phrase
    >
    export type Attributes = p_.Transformer<
        s_in.Attributes,
        s_out.Phrase
    >
    export type Node_ID = p_.Transformer<
        s_in.Node_ID,
        s_out.Phrase
    >
    export type Subgraph = p_.Transformer_With_Parameter<
        s_in.Subgraph,
        s_out.Phrase,
        s_parameters.Parameters
    >
}

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

//dependencies
import * as t_primitives_to_list_of_characters from "../primitives/deprecated_list_of_characters.js"
import * as t_html_to_prose from "pareto-static-html/implementation/transformers/static_html/prose"


export const Graph: declarations.Graph = ($) => sh.pg.sentences([
    sh.sentence([
        $.strict
            ? sh.ph.literal("strict ")
            : sh.ph.nothing(),
        p_.from.state($.type).decide(
            ($) => {
                switch ($[0]) {
                    case 'digraph': return p_.option($, () => sh.ph.literal("digraph "))
                    case 'graph': return p_.option($, () => sh.ph.literal("graph "))
                    default: return p_.exhaustive($[0])
                }
            }),
        p_.from.optional($.name).decide(
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

export const Statement_List: declarations.Statements = ($, $p) => sh.ph.composed([
    sh.ph.literal("{"),
    sh.ph.indent(
        sh.pg.sentences(p_.from.list($).map(
            ($) => sh.sentence([
                p_.from.state($).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'attribute assignment': return p_.option($, ($) => sh.ph.composed([
                                ID($.name),
                                sh.ph.literal(" = "),
                                ID($.value),
                                sh.ph.literal(";"),
                            ]))
                            case 'attributes': return p_.option($, ($) => sh.ph.composed([
                                p_.from.state($.type).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'edge': return p_.option($, () => sh.ph.literal("edge "))
                                            case 'node': return p_.option($, () => sh.ph.literal("node "))
                                            case 'graph': return p_.option($, () => sh.ph.literal("graph "))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }),
                                Attributes($.attributes),
                                sh.ph.literal(";"),
                            ]))
                            case 'edge': return p_.option($, ($) => sh.ph.composed([
                                p_.from.state($.left).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'node': return p_.option($, ($) => Node_ID($))
                                            case 'subgraph': return p_.option($, ($) => Subgraph($, $p))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }),
                                p_.from.state($p['graph type']).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'digraph': return p_.option($, () => sh.ph.literal(" -> "))
                                            case 'graph': return p_.option($, () => sh.ph.literal(" -- "))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }),
                                sh.ph.rich(
                                    p_.from.list($.right).map(
                                        ($) => sh.ph.composed([
                                            p_.from.state($).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'node': return p_.option($, ($) => Node_ID($))
                                                        case 'subgraph': return p_.option($, ($) => Subgraph($, $p))
                                                        default: return p_.exhaustive($[0])
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
                            case 'node': return p_.option($, ($) => sh.ph.composed([
                                Node_ID($.node),
                                p_.from.list($['attributes']).on_has_items(
                                    ($) => Attributes($),
                                    () => sh.ph.nothing()
                                ),
                                sh.ph.literal(";"),
                            ]))
                            case 'subgraph': return p_.option($, ($) => Subgraph($, $p))
                            default: return p_.exhaustive($[0])
                        }
                    })
            ]))),
    ),
    sh.ph.literal("}"),
])

export const ID: declarations.ID = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'id': return p_.option($, ($) => sh.ph.literal($)) //FIX escaping
            case 'string': return p_.option($, ($) => sh.ph.serialize(t_primitives_to_list_of_characters.quoted($)))
            case 'html': return p_.option($, ($) => t_html_to_prose.Phrasing_Element($))
            case 'number': return p_.option($, ($) => sh.ph.literal("FIXME NUMBER"))
            default: return p_.exhaustive($[0])
        }
    })

export const Attributes: declarations.Attributes = ($) => sh.ph.composed([
    sh.ph.literal(" [ "),
    sh.ph.composed(p_.from.list($).map(
        ($) => sh.ph.composed([
            ID($.name),
            sh.ph.literal("="),
            ID($.value),
            sh.ph.literal(" "),
        ]))),
    sh.ph.literal("]"),
])

export const Node_ID: declarations.Node_ID = ($) => sh.ph.composed([
    ID($.id),
    p_.from.optional($.port).decide(
        ($) => sh.ph.composed([
            sh.ph.literal(":"),
            ID($.port),
            p_.from.optional($['compass point']).decide(
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

export const Subgraph: declarations.Subgraph = ($, $p) => sh.ph.composed([
    p_.from.optional($.subgraph).decide(
        ($) => sh.ph.composed([
            sh.ph.literal("subgraph "),
            p_.from.optional($).decide(
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