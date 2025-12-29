import * as _et from 'pareto-core-interface'

import * as _i_out from "./data_types/target"
import * as _i_vd from "./value_deserializers"

// **** TYPES

export type _T_Graph = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Graph

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Graph = _T_Graph

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Graph {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Graph
}

// *** ALIASES FOR NESTED TYPES

export namespace Graph {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Graph
}
