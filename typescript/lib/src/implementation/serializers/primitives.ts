import * as p_ from 'pareto-core/implementation/serializer'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'
import p_iterate from 'pareto-core/implementation/refiner/specials/iterate'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose_simple/deprecated"

export const decimal: p_.Phrase_Serializer<
    number
> = ($) => sh.ph.list_of_characters(
    p_list_build_deprecated(
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
)


export const escaped: p_.Phrase_Serializer_With_Parameter<
    string,
    {
        'escape character code': number
        'character code': number
    }
> = ($, $p) => sh.ph.list_of_characters(
    p_iterate({
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
)

export const quoted: p_.Phrase_Serializer<
    string
> = ($) => sh.ph.composed([
    sh.ph.literal("\""),
    escaped(
        $,
        {
            'character code': 34, // "
            'escape character code': 92, // \
        }
    ),
    sh.ph.literal("\""),
])