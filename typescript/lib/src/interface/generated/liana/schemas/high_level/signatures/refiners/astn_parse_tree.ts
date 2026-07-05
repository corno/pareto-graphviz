
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/unmarshall"

import * as i_out from "../../data.js"

import * as i_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"

export namespace Graph_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Graph
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
    abort: p_i.Abort<Graph_.E>,
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
    abort: p_i.Abort<Tree_.E>,
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
    abort: p_i.Abort<End_Point_Specification_.E>,
) => End_Point_Specification_.O

export type { 
    Graph_ as Graph, 
    Tree_ as Tree, 
    End_Point_Specification_ as End_Point_Specification, 
}
