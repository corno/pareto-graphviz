
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/unmarshall"

import * as i_out from "../../data.js"

import * as i_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"

export namespace Attributes_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Attributes
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Attributes_ = (
    context: Attributes_.I,
    abort: p_i.Abort<Attributes_.E>,
) => Attributes_.O

export type { 
    Attributes_ as Attributes, 
}
