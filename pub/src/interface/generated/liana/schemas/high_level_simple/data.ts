
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_attributes from "../attributes/data"

export namespace Graph_ {
    
    export type attributes = i__imports_attributes.Attributes
    
    export namespace nodes {
        
        export namespace D {
            
            export type attributes = i__imports_attributes.Attributes
            
        }
        
        export type D = {
            readonly 'attributes': D.attributes
        }
        
    }
    
    export type nodes = _pi.Dictionary<nodes.D>
    
    export namespace edges {
        
        export namespace L {
            
            export type from_ = string
            
            export type to = string
            
            export type attributes = i__imports_attributes.Attributes
            
        }
        
        export type L = {
            readonly 'from': L.from_
            readonly 'to': L.to
            readonly 'attributes': L.attributes
        }
        
    }
    
    export type edges = _pi.List<edges.L>
    
}

export type Graph_ = {
    readonly 'attributes': Graph_.attributes
    readonly 'nodes': Graph_.nodes
    readonly 'edges': Graph_.edges
}

export { 
    Graph_ as Graph, 
}
