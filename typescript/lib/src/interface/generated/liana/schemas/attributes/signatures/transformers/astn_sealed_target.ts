
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as i_in from "../../data.js"

export namespace Attributes_ {
    
    export type I = i_in.Attributes
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Attributes_ = (
    context: Attributes_.I,
) => Attributes_.O

export type { 
    Attributes_ as Attributes, 
}
