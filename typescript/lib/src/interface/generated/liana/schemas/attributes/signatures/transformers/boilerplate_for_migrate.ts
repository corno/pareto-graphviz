
import * as p_i from 'pareto-core/dist/__internals/Abort'

import * as i_out from "../../data"

import * as i_in from "../../data"

export namespace Attributes_ {
    
    export type I = i_in.Attributes
    
    export type O = i_out.Attributes
    
    export namespace P {
        
    }
    
}

export type Attributes_ = (
    context: Attributes_.I,
) => Attributes_.O

export { 
    Attributes_ as Attributes, 
}
