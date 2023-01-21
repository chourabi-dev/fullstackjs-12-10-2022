import { useState } from "react"

export default function SwitchBtn(){

    const [ active, updateActive ] = useState(false);

    return(
        <div  onClick={ ()=>{ updateActive( ! active ) } }  
            className= { active === false? "swicth-btn":"swicth-btn active" } >

            <div></div>
        </div>
    )
} 