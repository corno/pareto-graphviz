
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_attributes from "../attributes/data"

export namespace Graph_ {
    
    export type strict = boolean
    
    export namespace type_ {
        
        export type graph = null
        
        export type digraph = null
        
    }
    
    export type type_ = 
        | readonly ['graph', type_.graph]
        | readonly ['digraph', type_.digraph]
    
    export namespace name {
        
        export type O = ID_
        
    }
    
    export type name = _pi.Optional_Value<name.O>
    
    export type statements = Statements_
    
}

export type Graph_ = {
    readonly 'strict': Graph_.strict
    readonly 'type': Graph_.type_
    readonly 'name': Graph_.name
    readonly 'statements': Graph_.statements
}

export namespace Statements_ {
    
    export namespace L {
        
        export namespace node {
            
            export type node = Node_ID_
            
            export type attributes = Attributes_
            
        }
        
        export type node = {
            readonly 'node': node.node
            readonly 'attributes': node.attributes
        }
        
        export namespace edge {
            
            export type left = End_Point_
            
            export namespace right {
                
                export type L = End_Point_
                
            }
            
            export type right = _pi.List<right.L>
            
            export type attributes = Attributes_
            
        }
        
        export type edge = {
            readonly 'left': edge.left
            readonly 'right': edge.right
            readonly 'attributes': edge.attributes
        }
        
        export namespace attributes {
            
            export namespace type_ {
                
                export type graph = null
                
                export type node = null
                
                export type edge = null
                
            }
            
            export type type_ = 
                | readonly ['graph', type_.graph]
                | readonly ['node', type_.node]
                | readonly ['edge', type_.edge]
            
            export type attributes = Attributes_
            
        }
        
        export type attributes = {
            readonly 'type': attributes.type_
            readonly 'attributes': attributes.attributes
        }
        
        export namespace attribute_assignment {
            
            export type name = ID_
            
            export type value = ID_
            
        }
        
        export type attribute_assignment = {
            readonly 'name': attribute_assignment.name
            readonly 'value': attribute_assignment.value
        }
        
        export type subgraph = Subgraph_
        
    }
    
    export type L = 
        | readonly ['node', L.node]
        | readonly ['edge', L.edge]
        | readonly ['attributes', L.attributes]
        | readonly ['attribute assignment', L.attribute_assignment]
        | readonly ['subgraph', L.subgraph]
    
}

export type Statements_ = _pi.List<Statements_.L>

export namespace End_Point_ {
    
    export type node = Node_ID_
    
    export type subgraph = Subgraph_
    
}

export type End_Point_ = 
    | readonly ['node', End_Point_.node]
    | readonly ['subgraph', End_Point_.subgraph]

export namespace Attributes_ {
    
    export namespace L {
        
        export type name = ID_
        
        export type value = ID_
        
    }
    
    export type L = {
        readonly 'name': L.name
        readonly 'value': L.value
    }
    
}

export type Attributes_ = _pi.List<Attributes_.L>

export namespace Node_ID_ {
    
    export type id = ID_
    
    export namespace port {
        
        export namespace O {
            
            export type port = ID_
            
            export namespace compass_point {
                
                export type O = ID_
                
            }
            
            export type compass_point = _pi.Optional_Value<compass_point.O>
            
        }
        
        export type O = {
            readonly 'port': O.port
            readonly 'compass point': O.compass_point
        }
        
    }
    
    export type port = _pi.Optional_Value<port.O>
    
}

export type Node_ID_ = {
    readonly 'id': Node_ID_.id
    readonly 'port': Node_ID_.port
}

export namespace ID_ {
    
    export type id = string
    
    export type string_ = string
    
    export type html = string
    
    export type number_ = number
    
}

export type ID_ = 
    | readonly ['id', ID_.id]
    | readonly ['string', ID_.string_]
    | readonly ['html', ID_.html]
    | readonly ['number', ID_.number_]

export namespace Subgraph_ {
    
    export namespace subgraph {
        
        export namespace O {
            
            export type O = ID_
            
        }
        
        export type O = _pi.Optional_Value<O.O>
        
    }
    
    export type subgraph = _pi.Optional_Value<subgraph.O>
    
    export type statements = Statements_
    
}

export type Subgraph_ = {
    readonly 'subgraph': Subgraph_.subgraph
    readonly 'statements': Subgraph_.statements
}

export { 
    Graph_ as Graph, 
    Statements_ as Statements, 
    End_Point_ as End_Point, 
    Attributes_ as Attributes, 
    Node_ID_ as Node_ID, 
    ID_ as ID, 
    Subgraph_ as Subgraph, 
}
