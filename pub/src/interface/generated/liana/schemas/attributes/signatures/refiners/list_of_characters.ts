
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../data"

export namespace Attributes_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Attributes
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Attributes_ = (
    context: Attributes_.I,
    abort: _pi.Abort<Attributes_.E>,
    parameters: {
        readonly 'document resource identifier': Attributes_.P.document_resource_identifier
        readonly 'tab size': Attributes_.P.tab_size
    },
) => Attributes_.O

export { 
    Attributes_ as Attributes, 
}
