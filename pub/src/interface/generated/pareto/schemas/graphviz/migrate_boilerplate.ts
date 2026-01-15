
import * as _pi from "pareto-core-interface"

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Graph_ {
    
    export type I = i_in.Graph
    
    export type O = i_out.Graph
    
    export namespace P {
        
    }
    
}

export type Graph_ = (
    $$_: Graph_.I,
) => Graph_.O

export { 
    Graph_ as Graph, 
}
