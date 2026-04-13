import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_iterate from 'pareto-core/dist/_p_iterate'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

//dependencies

export const $$: _pi.Transformer_With_Parameter<
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
