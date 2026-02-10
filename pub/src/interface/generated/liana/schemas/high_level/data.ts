
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_attributes from "../attributes/data"

export namespace Graph_ {
    
    export namespace name {
        
        export type O = string
        
    }
    
    export type name = _pi.Optional_Value<name.O>
    
    export type tree = Tree_
    
    export namespace type_ {
        
        export namespace undirected {
            
            export namespace edges {
                
                export namespace L {
                    
                    export type yin = End_Point_Specification_
                    
                    export type yang = End_Point_Specification_
                    
                    export type attributes = i__imports_attributes.Attributes
                    
                }
                
                export type L = {
                    readonly 'yin': L.yin
                    readonly 'yang': L.yang
                    readonly 'attributes': L.attributes
                }
                
            }
            
            export type edges = _pi.List<edges.L>
            
        }
        
        export type undirected = {
            readonly 'edges': undirected.edges
        }
        
        export namespace directed {
            
            export namespace edges {
                
                export namespace L {
                    
                    export type from_ = End_Point_Specification_
                    
                    export type to = End_Point_Specification_
                    
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
        
        export type directed = {
            readonly 'edges': directed.edges
        }
        
    }
    
    export type type_ = 
        | readonly ['undirected', type_.undirected]
        | readonly ['directed', type_.directed]
    
}

export type Graph_ = {
    readonly 'name': Graph_.name
    readonly 'tree': Graph_.tree
    readonly 'type': Graph_.type_
}

export namespace Tree_ {
    
    export type attributes = i__imports_attributes.Attributes
    
    export namespace elements {
        
        export namespace D {
            
            export namespace node {
                
                export type attributes = i__imports_attributes.Attributes
                
            }
            
            export type node = {
                readonly 'attributes': node.attributes
            }
            
            export namespace sub {
                
                export namespace type_ {
                    
                    export type group = null
                    
                    export type cluster = null
                    
                    export type subgraph = null
                    
                }
                
                export type type_ = 
                    | readonly ['group', type_.group]
                    | readonly ['cluster', type_.cluster]
                    | readonly ['subgraph', type_.subgraph]
                
                export type tree = Tree_
                
            }
            
            export type sub = {
                readonly 'type': sub.type_
                readonly 'tree': sub.tree
            }
            
        }
        
        export type D = 
            | readonly ['node', D.node]
            | readonly ['sub', D.sub]
        
    }
    
    export type elements = _pi.Dictionary<elements.D>
    
}

export type Tree_ = {
    readonly 'attributes': Tree_.attributes
    readonly 'elements': Tree_.elements
}

export namespace End_Point_Specification_ {
    
    export type start = string
    
    export namespace tail {
        
        export type L = string
        
    }
    
    export type tail = _pi.List<tail.L>
    
    export namespace port_data {
        
        export namespace O {
            
            export type port = string
            
            export namespace compass_direction {
                
                export type O = string
                
            }
            
            export type compass_direction = _pi.Optional_Value<compass_direction.O>
            
        }
        
        export type O = {
            readonly 'port': O.port
            readonly 'compass direction': O.compass_direction
        }
        
    }
    
    export type port_data = _pi.Optional_Value<port_data.O>
    
}

export type End_Point_Specification_ = {
    readonly 'start': End_Point_Specification_.start
    readonly 'tail': End_Point_Specification_.tail
    readonly 'port data': End_Point_Specification_.port_data
}

export { 
    Graph_ as Graph, 
    Tree_ as Tree, 
    End_Point_Specification_ as End_Point_Specification, 
}
