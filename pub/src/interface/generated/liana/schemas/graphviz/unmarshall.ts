
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Attributes_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Attributes
    
    export namespace P {
        
    }
    
}

export type Attributes_ = (
    context: Attributes_.I,
) => Attributes_.O

export namespace Graph_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Graph
    
    export namespace P {
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
) => Graph_.O

export { 
    Attributes_ as Attributes, 
    Graph_ as Graph, 
}
