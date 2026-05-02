
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as i_in from "../../data"

export namespace Graph_ {
    
    export type I = i_in.Graph
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
) => Graph_.O

export namespace Tree_ {
    
    export type I = i_in.Tree
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Tree_ = (
    context: Tree_.I,
) => Tree_.O

export namespace End_Point_Specification_ {
    
    export type I = i_in.End_Point_Specification
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type End_Point_Specification_ = (
    context: End_Point_Specification_.I,
) => End_Point_Specification_.O

export { 
    Graph_ as Graph, 
    Tree_ as Tree, 
    End_Point_Specification_ as End_Point_Specification, 
}
