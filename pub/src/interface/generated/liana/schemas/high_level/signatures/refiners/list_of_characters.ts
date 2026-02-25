
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../data"

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

export namespace Tree_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Tree
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Tree_ = (
    context: Tree_.I,
    abort: _pi.Abort<Tree_.E>,
    parameters: {
        readonly 'document resource identifier': Tree_.P.document_resource_identifier
        readonly 'tab size': Tree_.P.tab_size
    },
) => Tree_.O

export namespace End_Point_Specification_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.End_Point_Specification
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type End_Point_Specification_ = (
    context: End_Point_Specification_.I,
    abort: _pi.Abort<End_Point_Specification_.E>,
    parameters: {
        readonly 'document resource identifier': End_Point_Specification_.P.document_resource_identifier
        readonly 'tab size': End_Point_Specification_.P.tab_size
    },
) => End_Point_Specification_.O

export { 
    Graph_ as Graph, 
    Tree_ as Tree, 
    End_Point_Specification_ as End_Point_Specification, 
}
