import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'
import p_iterate from 'pareto-core/implementation/refiner/specials/iterate'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//data types
import type * as d_out from "pareto-fountain-pen/interface/data/list_of_characters"

export const decimal: p_i.Transformer<
    number, d_out.List_of_Characters
> = ($) => p_list_build_deprecated(
    ($i) => {
        if ($ < 0) {
            $i['add item'](45) // '-'
            $ = -$
        }
        const $v_digits = p_list_build_deprecated<number>(
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

        for (let j = p_.from.list($v_digits).amount_of_items() - 1; j >= 0; j--) {
            $i['add item'](48 + p_.from.optional($v_digits.__deprecated_get_possible_item_at(j)).decide(
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
> = ($, $p) => p_iterate({
    list: p_list_from_text(
        $,
        ($) => $
    ),
    end_info: null,
    assign: (iterator) => iterator.build_list_with_segments({
        has_more_items: () => true,
        handle: () => iterator.peek(
            () => p_unreachable_code_path("has_more_items -> true"),
            ($) => {
                if ($ === $p['escape character code']) { // \
                    return p_.literal.list([
                        $p['escape character code'],
                        iterator.consume(
                            () => p_unreachable_code_path("has_more_items -> true"),
                            ($) => $p['escape character code'],
                        )
                    ])
                } else if ($ === $p['character code']) {
                    return p_.literal.list([
                        $p['escape character code'],
                        iterator.consume(
                            () => p_unreachable_code_path("has_more_items -> true"),
                            ($) => $p['character code'],
                        )
                    ])
                } else {
                    return p_.literal.list([
                        iterator.consume(
                            () => p_unreachable_code_path("has_more_items -> true"),
                            ($) => $,
                        )
                    ])
                }
            },
        ),
        on_no_progression: () => p_unreachable_code_path("'handle' is expected to consume at least one item"),
    }),
    on_dangling_item: null,
})

export const quoted: p_i.Transformer<
    string, d_out.List_of_Characters
> = ($) => p_.literal.segmented_list([
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