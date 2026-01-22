import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/serializer'

import { $$ as s_escaped_character } from "./escaped_character"

type signature = _pi.Text_Serializer

export const $$: signature = ($) => _p.text.deprecated_build(($i) => {
    $i['add character'](34)
    $i['add snippet'](s_escaped_character(
        $,
        {
            'character code': 34, // "
            'escape character code': 92, // \
        }
    ))
    $i['add character'](34)
})