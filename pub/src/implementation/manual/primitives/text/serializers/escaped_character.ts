import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'
import * as _pd from 'pareto-core/dist/deserializer'
import * as _ps from 'pareto-core/dist/serializer'

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
}> = ($, $p) => _p.iterate(
    _pd.list.from_text($, ($) => $),
    (iter) => _ps.text.deprecated_build(
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
