import * as _pi from "pareto-core-interface"
    
    import * as _i_core from "../../../core/unconstrained"
    
    // **** TYPES
    
    export type _T_Graph = {
        readonly 'nodes': _i_core._T_Dictionary<null, null>
        readonly 'edges': _i_core._T_List<null, {
            readonly 'from': string
            readonly 'to': string
        }>
    }
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type Graph = _T_Graph
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_Graph {
        
        export namespace nodes {
            export type D = null
        }
        export type nodes = _i_core._T_Dictionary<null, null>
        
        export namespace edges {
            
            export namespace L {
                export type _from = string
                export type to = string
            }
            export type L = {
                readonly 'from': string
                readonly 'to': string
            }
        }
        export type edges = _i_core._T_List<null, {
            readonly 'from': string
            readonly 'to': string
        }>
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Graph {
        
        export namespace nodes {
            export type D = null
        }
        export type nodes = _i_core._T_Dictionary<null, null>
        
        export namespace edges {
            
            export namespace L {
                export type _from = string
                export type to = string
            }
            export type L = {
                readonly 'from': string
                readonly 'to': string
            }
        }
        export type edges = _i_core._T_List<null, {
            readonly 'from': string
            readonly 'to': string
        }>
    }
