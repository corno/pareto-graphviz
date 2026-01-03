import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/graphviz/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Graph: _i_signatures._T_Graph = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'nodes': _pa.cc($['nodes'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
    'edges': _pa.cc($['edges'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'from': _pa.cc($['from'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'to': _pa.cc($['to'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })])]),
})]
