
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "../../data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Graph_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Graph
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
    abort: _pi.Abort<Graph_.E>,
) => Graph_.O

export namespace Tree_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Tree
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Tree_ = (
    context: Tree_.I,
    abort: _pi.Abort<Tree_.E>,
) => Tree_.O

export namespace End_Point_Specification_ {
    
    export type I = i_in.Value
    
    export type O = i_out.End_Point_Specification
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type End_Point_Specification_ = (
    context: End_Point_Specification_.I,
    abort: _pi.Abort<End_Point_Specification_.E>,
) => End_Point_Specification_.O

export { 
    Graph_ as Graph, 
    Tree_ as Tree, 
    End_Point_Specification_ as End_Point_Specification, 
}
