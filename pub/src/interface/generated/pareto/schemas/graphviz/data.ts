
import * as _pi from "pareto-core-interface"

import * as i__location from "../../core/location"

export namespace Graph_ {
    
    export namespace nodes {
        
        export type D = null
        
    }
    
    export type nodes = _pi.Dictionary<nodes.D>
    
    export namespace edges {
        
        export namespace L {
            
            export type _from = string
            
            export type to = string
            
        }
        
        export type L = {
            readonly 'from': L._from
            readonly 'to': L.to
        }
        
    }
    
    export type edges = _pi.List<edges.L>
    
}

export type Graph_ = {
    readonly 'nodes': Graph_.nodes
    readonly 'edges': Graph_.edges
}

export { 
    Graph_ as Graph, 
}
