import { useState } from "react";

export default function ShoppingList(){


    const [ list, updateList ] = useState([]);
    const [ shopping, updateShopping ] = useState("")

    return(
        <div>
            <ul>
                {
                    list.map((i)=>{
                        return( <li key={i}>{ i }</li> )
                    })
                }
            </ul>



            <input  onChange={ (e)=>{ updateShopping(e.target.value) } }
            
            type="text"  value={ shopping }   />
             
            
            <button   onClick={()=>{  
                const newItem =  shopping ;

                updateList( arr => [ ...arr, newItem ] )
                updateShopping("")

             } }  >Add</button>


        </div>
    );
}