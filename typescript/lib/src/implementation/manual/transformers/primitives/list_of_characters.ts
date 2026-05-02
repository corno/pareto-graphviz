import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'
import _p_iterate from 'pareto-core/dist/_p_iterate'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

export const decimal: _pi.Transformer<number, d_out.List_of_Characters> = ($) => _p_list_build_deprecated(($i) => {
    if ($ < 0) {
        $i['add item'](45) // '-'
        $ = -$
    }
    const digits = _p_list_build_deprecated<number>(($i) => {
        do {
            const digit = $ % 10
            $i['add item'](digit)
            $ = _p.number.integer.divide(
                $,
                10,
                {
                    divided_by_zero: () => _p_unreachable_code_path("the divisor is hardcoded to 10")
                }
            )
        } while ($ > 0)

    })

    for (let j = digits.__get_number_of_items() - 1; j >= 0; j--) {
        $i['add item'](48 + digits.__deprecated_get_possible_item_at(j).__decide(
            ($) => $,
            () => _p_unreachable_code_path("index cannot be out of bounds")
        ))
    }
})


export const escaped: _pi.Transformer_With_Parameter<
    string,
    d_out.List_of_Characters,
    {
        'escape character code': number
        'character code': number
    }
> = ($, $p) => _p_iterate(
    _p_list_from_text($, ($) => $),
    null,
    (iter) => _p_list_build_deprecated(
        ($i) => {
            iter.list({
                has_more_items: () => true,
                handle: ($) => {
                    iter.discard(() => null)
                    if ($ === $p['escape character code']) { // \
                        $i['add item']($p['escape character code'])
                        $i['add item']($p['escape character code'])
                    } else if ($ === $p['character code']) {
                        $i['add item']($p['escape character code'])
                        $i['add item']($p['character code'])
                    } else {
                        $i['add item']($)
                    }

                }
            })
        }

    )
)
export const quoted: _pi.Transformer<string, d_out.List_of_Characters> = ($) => _p_list_build_deprecated(($i) => {
    $i['add item'](34)
    $i['add list'](escaped(
        $,
        {
            'character code': 34, // "
            'escape character code': 92, // \
        }
    ))
    $i['add item'](34)
})
