
import * as p_i from 'pareto-core/interface/__internal/Abort'
import * as p_di from 'pareto-core/interface/data'

import * as i_imports_attributes from "./attributes.js"

export namespace Graph_ {
    
    export type attributes = i_imports_attributes.Attributes
    
    export namespace nodes {
        
        export namespace D {
            
            export type attributes = i_imports_attributes.Attributes
            
        }
        
        export type D = {
            readonly 'attributes': D.attributes
        }
        
    }
    
    export type nodes = p_di.Dictionary<nodes.D>
    
    export namespace edges {
        
        export namespace L {
            
            export type from_ = string
            
            export type to = string
            
            export type attributes = i_imports_attributes.Attributes
            
        }
        
        export type L = {
            readonly 'from': L.from_
            readonly 'to': L.to
            readonly 'attributes': L.attributes
        }
        
    }
    
    export type edges = p_di.List<edges.L>
    
}

export type Graph_ = {
    readonly 'attributes': Graph_.attributes
    readonly 'nodes': Graph_.nodes
    readonly 'edges': Graph_.edges
}

export type { 
    Graph_ as Graph, 
}
