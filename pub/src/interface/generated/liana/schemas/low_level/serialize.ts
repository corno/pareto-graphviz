
import * as _pi from 'pareto-core/dist/interface'

import * as i_in from "./data"

import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace Graph_ {
    
    export type I = i_in.Graph
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
) => Graph_.O

export namespace Statements_ {
    
    export type I = i_in.Statements
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Statements_ = (
    context: Statements_.I,
) => Statements_.O

export namespace End_Point_ {
    
    export type I = i_in.End_Point
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type End_Point_ = (
    context: End_Point_.I,
) => End_Point_.O

export namespace Attributes_ {
    
    export type I = i_in.Attributes
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Attributes_ = (
    context: Attributes_.I,
) => Attributes_.O

export namespace Node_ID_ {
    
    export type I = i_in.Node_ID
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Node_ID_ = (
    context: Node_ID_.I,
) => Node_ID_.O

export namespace ID_ {
    
    export type I = i_in.ID
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type ID_ = (
    context: ID_.I,
) => ID_.O

export namespace Subgraph_ {
    
    export type I = i_in.Subgraph
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Subgraph_ = (
    context: Subgraph_.I,
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
