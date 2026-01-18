import * as _p from 'pareto-core-serializer'
import * as _pi from 'pareto-core-interface'

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
    _p.list.from_text($, ($) => $),
    (iter) => _p.text.deprecated_build(
        ($i) => {
            pump(
                iter,
                ($) => {
                    if ($ === $p['escape character code']) { // \
                        $i['add character']($p['escape character code'])
                        $i['add character']($p['escape character code'])
                    } else if ($ === $p['character code']) {
                        $i['add character']($p['escape character code'])
                        $i['add character']($p['character code'])
                    } else {
                        $i['add character']($)
                    }

                }
            )
        }

    )
)
