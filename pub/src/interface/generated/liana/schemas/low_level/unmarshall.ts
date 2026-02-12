
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "astn-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Graph_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Graph
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
    abort: _pi.Abort<Graph_.E>,
) => Graph_.O

export namespace Statements_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Statements
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Statements_ = (
    context: Statements_.I,
    abort: _pi.Abort<Statements_.E>,
) => Statements_.O

export namespace End_Point_ {
    
    export type I = i_in.Value
    
    export type O = i_out.End_Point
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type End_Point_ = (
    context: End_Point_.I,
    abort: _pi.Abort<End_Point_.E>,
) => End_Point_.O

export namespace Attributes_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Attributes
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Attributes_ = (
    context: Attributes_.I,
    abort: _pi.Abort<Attributes_.E>,
) => Attributes_.O

export namespace Node_ID_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Node_ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Node_ID_ = (
    context: Node_ID_.I,
    abort: _pi.Abort<Node_ID_.E>,
) => Node_ID_.O

export namespace ID_ {
    
    export type I = i_in.Value
    
    export type O = i_out.ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type ID_ = (
    context: ID_.I,
    abort: _pi.Abort<ID_.E>,
) => ID_.O

export namespace Subgraph_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Subgraph
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Subgraph_ = (
    context: Subgraph_.I,
    abort: _pi.Abort<Subgraph_.E>,
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
