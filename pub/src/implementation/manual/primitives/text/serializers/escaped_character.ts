import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'
import _p_iterate from 'pareto-core/dist/_p_iterate'
import _p_text_build_deprecated from 'pareto-core/dist/_p_text_build_deprecated'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

const pump = <Iterator_Element>(
    iter: _pi.Iterator<Iterator_Element>,
    callback: ($: Iterator_Element) => void
) => {
    while (true) {
        const current = iter.look()
        if (current === null) {
            return
        }

        iter.discard(() => null)
        callback(current[0])
    }
}

export const $$: _pi.Text_Serializer_With_Parameters<{
    'escape character code': number
    'character code': number
}> = ($, $p) => _p_iterate(
    _p_list_from_text($, ($) => $),
    (iter) => _p_text_build_deprecated(
        ($i) => {
            pump(
                iter,
                ($) => {
                    if ($ === $p['escape character code']) { // \
                        $i.add_character($p['escape character code'])
                        $i.add_character($p['escape character code'])
                    } else if ($ === $p['character code']) {
                        $i.add_character($p['escape character code'])
                        $i.add_character($p['character code'])
                    } else {
                        $i.add_character($)
                    }

                }
            )
        }

    )
)
