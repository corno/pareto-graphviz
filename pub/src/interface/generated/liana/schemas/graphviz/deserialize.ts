
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Attributes_ {
    
    export type I = string
    
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

export namespace Graph_ {
    
    export type I = string
    
    export type O = i_out.Graph
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
    abort: _pi.Abort<Graph_.E>,
    parameters: {
        readonly 'document resource identifier': Graph_.P.document_resource_identifier
        readonly 'tab size': Graph_.P.tab_size
    },
) => Graph_.O

export { 
    Attributes_ as Attributes, 
    Graph_ as Graph, 
}
