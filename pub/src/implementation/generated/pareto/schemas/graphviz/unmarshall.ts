import * as _p from 'pareto-core-refiner'
import * as _pdev from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/graphviz/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/graphviz/data_types/target"


export const Graph: _i_signatures._T_Graph = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'nodes': _p.deprecated_cc(_i_generic.get_entry(
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
            'edges': _p.deprecated_cc(_i_generic.get_entry(
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
                                'from': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "from",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'to': _p.deprecated_cc(_i_generic.get_entry(
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
