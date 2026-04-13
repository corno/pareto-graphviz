
import * as _pi from 'pareto-core/dist/interface'

import * as i_in from "../../data"

import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace Attributes_ {
    
    export type I = i_in.Attributes
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Attributes_ = (
    context: Attributes_.I,
) => Attributes_.O

export { 
    Attributes_ as Attributes, 
}
