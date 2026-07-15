import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/low_level.js"
import type * as s_out from "../../../interface/schemas/paragraph.js"

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
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

//dependencies
import * as ser_primitives from "../../serializers/primitives.js"
import * as t_html_to_paragraph from "pareto-static-html/_implementation/transformers/static_html/paragraph"


export const Graph: declarations.Graph = ($) => sh.pg.sentences([
    sh.sentence([
        $.strict
            ? sh.ph.text("strict ")
            : sh.ph.nothing(),
        p_.from.state($.type).decide(
            ($) => {
                switch ($[0]) {
                    case 'digraph': return p_.option($, () => sh.ph.text("digraph "))
                    case 'graph': return p_.option($, () => sh.ph.text("graph "))
                    default: return p_.exhaustive($[0])
                }
            }),
        p_.from.optional($.name).decide(
            ($) => sh.ph.composed([
                ID($),
                sh.ph.text(" "),
            ]),
            () => sh.ph.nothing()
        ),
        Statement_List(
            $.statements,
            {
                'graph type': $.type
            }
        ),
    ]),
])

export const Statement_List: declarations.Statements = ($, $p) => sh.ph.composed([
    sh.ph.text("{"),
    sh.ph.indent(
        sh.pg.sentences(p_.from.list($).map(
            ($) => sh.sentence([
                p_.from.state($).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'attribute assignment': return p_.option($, ($) => sh.ph.composed([
                                ID($.name),
                                sh.ph.text(" = "),
                                ID($.value),
                                sh.ph.text(";"),
                            ]))
                            case 'attributes': return p_.option($, ($) => sh.ph.composed([
                                p_.from.state($.type).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'edge': return p_.option($, () => sh.ph.text("edge "))
                                            case 'node': return p_.option($, () => sh.ph.text("node "))
                                            case 'graph': return p_.option($, () => sh.ph.text("graph "))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }
                                ),
                                Attributes($.attributes),
                                sh.ph.text(";"),
                            ]))
                            case 'edge': return p_.option($, ($) => sh.ph.composed([
                                p_.from.state($.left).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'node': return p_.option($, ($) => Node_ID($))
                                            case 'subgraph': return p_.option($, ($) => Subgraph($, $p))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }
                                ),
                                p_.from.state($p['graph type']).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'digraph': return p_.option($, () => sh.ph.text(" -> "))
                                            case 'graph': return p_.option($, () => sh.ph.text(" -- "))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }
                                ),
                                sh.ph.rich_phrase(
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
                                    sh.ph.text(", "),
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
                                sh.ph.text(";"),
                            ]))
                            case 'subgraph': return p_.option($, ($) => Subgraph($, $p))
                            default: return p_.exhaustive($[0])
                        }
                    })
            ]))),
    ),
    sh.ph.text("}"),
])

export const ID: declarations.ID = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'id': return p_.option($, ($) => sh.ph.text($)) //FIX escaping
            case 'string': return p_.option($, ($) => sh.ph.text(ser_primitives.quoted($)))
            case 'html': return p_.option($, ($) => t_html_to_paragraph.Phrasing_Element($))
            case 'number': return p_.option($, ($) => sh.ph.text("FIXME NUMBER"))
            default: return p_.exhaustive($[0])
        }
    })

export const Attributes: declarations.Attributes = ($) => sh.ph.composed([
    sh.ph.text(" [ "),
    sh.ph.composed(
        p_.from.list($).map(
            ($) => sh.ph.composed([
                ID($.name),
                sh.ph.text("="),
                ID($.value),
                sh.ph.text(" "),
            ])
        )
    ),
    sh.ph.text("]"),
])

export const Node_ID: declarations.Node_ID = ($) => sh.ph.composed([
    ID($.id),
    p_.from.optional($.port).decide(
        ($) => sh.ph.composed([
            sh.ph.text(":"),
            ID($.port),
            p_.from.optional($['compass point']).decide(
                ($) => sh.ph.composed([
                    sh.ph.text(":"),
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
            sh.ph.text("subgraph "),
            p_.from.optional($).decide(
                ($) => sh.ph.composed([
                    ID($),
                    sh.ph.text(" "),
                ]),
                () => sh.ph.nothing()
            ),
        ]),
        () => sh.ph.nothing()
    ),
    Statement_List(
        $.statements,
        {
            'graph type': $p['graph type']
        }
    ),
])