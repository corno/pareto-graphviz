
import * as p_ from 'pareto-core/implementation/transformer'
import * as p_di from 'pareto-core/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/file_structure/signatures/transformers/astn_sealed_target.js"

import * as t_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/implementation/manual/transformers/primitives/text"

import * as v_external_high_level from "../../high_level/transformers/astn_sealed_target.js"

export const Directory: t_signatures.Directory = ($) => ['dictionary', p_.from.dictionary($,
).map(
    ($, id): t_out.Value => ['state', p_decide_state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'file':
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'file',
                            'value': v_external_high_level.Graph(
                                $,
                            ),
                        }),
                    )
                case 'directory':
                    return p_.option(
                        $,
                        ($) => ({
                            'option': 'directory',
                            'value': Directory(
                                $,
                            ),
                        }),
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    )],
)]
