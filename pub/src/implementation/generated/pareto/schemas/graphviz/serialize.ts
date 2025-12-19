import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/graphviz/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Graph: _i_signatures._T_Graph = ($, $p) => _i_serialize.Document(
    _i_marshall.Graph(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
