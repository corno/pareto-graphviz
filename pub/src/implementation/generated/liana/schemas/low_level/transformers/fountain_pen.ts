
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/low_level/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Graph: t_signatures.Graph = ($) => v_serialize.Document(
    v_marshall.Graph(
        $,
    ),
)

export const Statements: t_signatures.Statements = ($) => v_serialize.Document(
    v_marshall.Statements(
        $,
    ),
)

export const End_Point: t_signatures.End_Point = ($) => v_serialize.Document(
    v_marshall.End_Point(
        $,
    ),
)

export const Attributes: t_signatures.Attributes = ($) => v_serialize.Document(
    v_marshall.Attributes(
        $,
    ),
)

export const Node_ID: t_signatures.Node_ID = ($) => v_serialize.Document(
    v_marshall.Node_ID(
        $,
    ),
)

export const ID: t_signatures.ID = ($) => v_serialize.Document(
    v_marshall.ID(
        $,
    ),
)

export const Subgraph: t_signatures.Subgraph = ($) => v_serialize.Document(
    v_marshall.Subgraph(
        $,
    ),
)
