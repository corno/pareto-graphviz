import * as _pi from 'pareto-core/dist/interface'
import _p_text_build_deprecated from 'pareto-core/dist/_p_text_build_deprecated'

import { $$ as s_escaped_character } from "./escaped_character"

type signature = _pi.Text_Serializer

export const $$: signature = ($) => _p_text_build_deprecated(($i) => {
    $i.add_character(34)
    $i.add_snippet(s_escaped_character(
        $,
        {
            'character code': 34, // "
            'escape character code': 92, // \
        }
    ))
    $i.add_character(34)
})