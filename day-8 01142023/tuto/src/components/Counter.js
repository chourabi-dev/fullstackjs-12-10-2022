import { useState } from "react";

export default function Counter(){

    // declare state !!

    const [ count, updateCount ] = useState(0); // REACT HOOK

    return(
        <div>
            <h1> { count }  clicks</h1>

            <button   onClick={ ()=>{
                    updateCount(  (count + 1 ) )
                } }   >
                    
                click me !
                
            </button>
        </div>
    );
}