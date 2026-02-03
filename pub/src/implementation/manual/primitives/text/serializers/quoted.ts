import * as _pi from 'pareto-core/dist/interface'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/to_be_generated/text"

//dependencies
import { $$ as s_escaped_character } from "./escaped_character"


type signature = _pi.Transformer<string, d_out.Text>

export const $$: signature = ($) => _p_list_build_deprecated(($i) => {
    $i['add item'](34)
    $i['add list'](s_escaped_character(
        $,
        {
            'character code': 34, // "
            'escape character code': 92, // \
        }
    ))
    $i['add item'](34)
})