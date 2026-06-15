
import * as p_i from 'pareto-core/dist/__internals/Abort'
import * as p_di from 'pareto-core/dist/data/interface'

import * as i_imports_high_level from "../high_level/data"

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

export { 
    Directory_ as Directory, 
}
