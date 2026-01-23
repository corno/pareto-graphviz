
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

export namespace Attributes_ {
    
    export type I = string
    
    export type O = i_out.Attributes
    
    export namespace P {
        
    }
    
}

export type Attributes_ = (
    context: Attributes_.I,
) => Attributes_.O

export namespace Graph_ {
    
    export type I = string
    
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
