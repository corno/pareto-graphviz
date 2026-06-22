
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/file_structure/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/file_structure/data"

import * as v_high_level from "../../high_level/transformers/boilerplate_for_migrate"

export const Directory: t_signatures.Directory = ($) => p_.from.dictionary(
    $,
).map(
    ($, id) => p_decide_state(
        $,
        ($): t_out.Directory.D => {
            switch ($[0]) {
                case 'file':
                    return p_.ss(
                        $,
                        ($) => ['file', v_high_level.Graph(
                            $,
                        )],
                    )
                case 'directory':
                    return p_.ss(
                        $,
                        ($) => ['directory', Directory(
                            $,
                        )],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
)
