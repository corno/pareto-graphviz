import * as p_ from 'pareto-core/dist/implementation/transformer'
import p_unreachable_code_path from 'pareto-core/dist/implementation/transformer/specials/unreachable_code_path'
import p_iterate from 'pareto-core/dist/implementation/refiner/specials/iterate'
import p_list_build_deprecated from 'pareto-core/dist/implementation/refiner/specials/list_build_deprecated'
import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'
import * as p_i from 'pareto-core/dist/interface/transformer'

import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

export const decimal: p_i.Transformer<number, d_out.List_of_Characters> = ($) => p_list_build_deprecated(
    ($i) => {
        if ($ < 0) {
            $i['add item'](45) // '-'
            $ = -$
        }
        const digits = p_list_build_deprecated<number>(
            ($i) => {
                do {
                    const digit = $ % 10
                    $i['add item'](digit)
                    $ = p_.from.number($).divide(
                        10,
                        ['towards zero', null],
                        {
                            divided_by_zero: () => p_unreachable_code_path("the divisor is hardcoded to 10")
                        }
                    )
                } while ($ > 0)

            })

        for (let j = p_.from.list(digits).amount_of_items() - 1; j >= 0; j--) {
            $i['add item'](48 + p_.from.optional(digits.__deprecated_get_possible_item_at(j)).decide(
                ($) => $,
                () => p_unreachable_code_path("index cannot be out of bounds")
            ))
        }
    })


export const escaped: p_i.Transformer_With_Parameter<
    string,
    d_out.List_of_Characters,
    {
        'escape character code': number
        'character code': number
    }
> = ($, $p) => p_iterate(
    p_list_from_text(
        $,
        ($) => $
    ),
    null,
    (iter) => p_list_build_deprecated(
        ($i) => {
            iter.list({
                has_more_items: () => true,
                handle: ($) => {
                    iter.discard(
                        () => null)
                    if ($ === $p['escape character code']) { // \
                        $i['add item']($p['escape character code'])
                        $i['add item']($p['escape character code'])
                    } else if ($ === $p['character code']) {
                        $i['add item']($p['escape character code'])
                        $i['add item']($p['character code'])
                    } else {
                        $i['add item']($)
                    }
                    return null
                }
            })
        }

    )
)
export const quoted: p_i.Transformer<string, d_out.List_of_Characters> = ($) => p_.literal.segmented_list([
    p_.literal.list([
        34, // "
    ]),
    escaped(
        $,
        {
            'character code': 34, // "
            'escape character code': 92, // \
        }
    ),
    p_.literal.list([
        34, // "
    ])
])