import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/graphviz/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/graphviz/data_types/target"


export const Graph: _i_signatures._T_Graph = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'nodes': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "nodes",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_nothing(
                        $,
                        null
                    ),
                }
            )),
            'edges': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "edges",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'from': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "from",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'to': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "to",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
