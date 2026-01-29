
import * as _p from "pareto-core/dist/refiner"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/graphviz/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_generic from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
export const Attributes: t_signatures.Attributes = ($,abort) => v_generic.expect_list(
    $, 
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => _p_unreachable_code_path(
    )
)
export const Graph: t_signatures.Graph = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'attributes': _p_cc(
            $.__get_entry(
                'attributes', 
                ($) => abort(
                    ['no such entry', "attributes"]
                )
            ), 
            ($) => Attributes(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
        'nodes': _p_cc(
            $.__get_entry(
                'nodes', 
                ($) => abort(
                    ['no such entry', "nodes"]
                )
            ), 
            ($) => v_generic.expect_dictionary(
                $, 
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($,id) => _p_cc(
                    v_generic.expect_group(
                        $, 
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ), 
                    ($) => ({
                        'attributes': _p_cc(
                            $.__get_entry(
                                'attributes', 
                                ($) => abort(
                                    ['no such entry', "attributes"]
                                )
                            ), 
                            ($) => Attributes(
                                $, 
                                ($) => abort(
                                    $
                                )
                            )
                        ),
                    })
                )
            )
        ),
        'edges': _p_cc(
            $.__get_entry(
                'edges', 
                ($) => abort(
                    ['no such entry', "edges"]
                )
            ), 
            ($) => v_generic.expect_list(
                $, 
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => _p_cc(
                    v_generic.expect_group(
                        $, 
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ), 
                    ($) => ({
                        'from': _p_cc(
                            $.__get_entry(
                                'from', 
                                ($) => abort(
                                    ['no such entry', "from"]
                                )
                            ), 
                            ($) => v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )
                        ),
                        'to': _p_cc(
                            $.__get_entry(
                                'to', 
                                ($) => abort(
                                    ['no such entry', "to"]
                                )
                            ), 
                            ($) => v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )
                        ),
                        'attributes': _p_cc(
                            $.__get_entry(
                                'attributes', 
                                ($) => abort(
                                    ['no such entry', "attributes"]
                                )
                            ), 
                            ($) => Attributes(
                                $, 
                                ($) => abort(
                                    $
                                )
                            )
                        ),
                    })
                )
            )
        ),
    })
)
