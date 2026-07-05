
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/deserialize"

import * as i_in from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../data.js"

export namespace Attributes_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Attributes
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Attributes_ = (
    context: Attributes_.I,
    abort: p_i.Abort<Attributes_.E>,
    parameters: {
        readonly 'tab size': Attributes_.P.tab_size
    },
) => Attributes_.O

export type { 
    Attributes_ as Attributes, 
}
