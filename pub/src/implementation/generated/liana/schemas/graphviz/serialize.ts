
import * as _p from "pareto-core/dist/serializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/graphviz/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"
export const Attributes: t_signatures.Attributes = ($) => v_serialize.Document(
    v_marshall.Attributes(
        $
    )
)
export const Graph: t_signatures.Graph = ($) => v_serialize.Document(
    v_marshall.Graph(
        $
    )
)
