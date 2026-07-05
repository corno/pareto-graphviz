
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/deserialize"

import * as i_in from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../data.js"

export namespace Graph_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Graph
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
    abort: p_i.Abort<Graph_.E>,
    parameters: {
        readonly 'tab size': Graph_.P.tab_size
    },
) => Graph_.O

export type { 
    Graph_ as Graph, 
}
