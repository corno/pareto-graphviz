
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

import * as i_out from "./data"

export namespace Graph_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Statements_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Statements
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Statements_ = (
    context: Statements_.I,
    abort: _pi.Abort<Statements_.E>,
    parameters: {
        readonly 'document resource identifier': Statements_.P.document_resource_identifier
        readonly 'tab size': Statements_.P.tab_size
    },
) => Statements_.O

export namespace End_Point_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.End_Point
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type End_Point_ = (
    context: End_Point_.I,
    abort: _pi.Abort<End_Point_.E>,
    parameters: {
        readonly 'document resource identifier': End_Point_.P.document_resource_identifier
        readonly 'tab size': End_Point_.P.tab_size
    },
) => End_Point_.O

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

export namespace Node_ID_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Node_ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Node_ID_ = (
    context: Node_ID_.I,
    abort: _pi.Abort<Node_ID_.E>,
    parameters: {
        readonly 'document resource identifier': Node_ID_.P.document_resource_identifier
        readonly 'tab size': Node_ID_.P.tab_size
    },
) => Node_ID_.O

export namespace ID_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type ID_ = (
    context: ID_.I,
    abort: _pi.Abort<ID_.E>,
    parameters: {
        readonly 'document resource identifier': ID_.P.document_resource_identifier
        readonly 'tab size': ID_.P.tab_size
    },
) => ID_.O

export namespace Subgraph_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Subgraph
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Subgraph_ = (
    context: Subgraph_.I,
    abort: _pi.Abort<Subgraph_.E>,
    parameters: {
        readonly 'document resource identifier': Subgraph_.P.document_resource_identifier
        readonly 'tab size': Subgraph_.P.tab_size
    },
) => Subgraph_.O

export { 
    Graph_ as Graph, 
    Statements_ as Statements, 
    End_Point_ as End_Point, 
    Attributes_ as Attributes, 
    Node_ID_ as Node_ID, 
    ID_ as ID, 
    Subgraph_ as Subgraph, 
}
