import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/graphviz/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Graph: _i_signatures._T_Graph = ($, $p) => ['verbose group', _p.dictionary.literal({
    'nodes': _p.deprecated_cc($['nodes'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
    'edges': _p.deprecated_cc($['edges'], ($) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
        'from': _p.deprecated_cc($['from'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'to': _p.deprecated_cc($['to'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })])]),
})]
