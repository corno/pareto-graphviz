
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_high_level from "../high_level/data"

export namespace Directory_ {
    
    export namespace D {
        
        export type file = i__imports_high_level.Graph
        
        export type directory = Directory_
        
    }
    
    export type D = 
        | readonly ['file', D.file]
        | readonly ['directory', D.directory]
    
}

export type Directory_ = _pi.Dictionary<Directory_.D>

export { 
    Directory_ as Directory, 
}
