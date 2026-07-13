
import * as p_i from 'pareto-core/interface/__internal/Abort'
import * as p_di from 'pareto-core/interface/schema'

import * as i_imports_high_level from "./high_level.js"

export namespace Directory_ {
    
    export namespace D {
        
        export type file = i_imports_high_level.Graph
        
        export type directory = Directory_
        
    }
    
    export type D = 
        | readonly ['file', D.file]
        | readonly ['directory', D.directory]
    
}

export type Directory_ = p_di.Dictionary<Directory_.D>

export type { 
    Directory_ as Directory, 
}
