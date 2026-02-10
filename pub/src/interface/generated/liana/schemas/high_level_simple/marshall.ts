
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as i_in from "./data"

export namespace Graph_ {
    
    export type I = i_in.Graph
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
) => Graph_.O

export { 
    Graph_ as Graph, 
}
