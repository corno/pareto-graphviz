import * as _et from 'pareto-core-interface'

import * as _i_out from "./data_types/target"
import * as _i_in from "./data_types/source"

// **** TYPES

export type _T_Graph = (
    $$_: _i_in._T_Graph,
    $$_p: null,
) => _i_out._T_Graph

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Graph = _T_Graph

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Graph {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Graph
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Graph
}

// *** ALIASES FOR NESTED TYPES

export namespace Graph {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Graph
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Graph
}
