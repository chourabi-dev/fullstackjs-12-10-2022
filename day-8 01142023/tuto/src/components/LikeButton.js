import { useState } from "react";

export default function LikeButton(){ 

    const [ likes, updateLikes ] = useState(0);
    const [ didLike, updateDidLikes ] = useState(false); 
    return(
        <button onClick={ ()=>{

            if ( didLike === false  ) {
                updateLikes( (likes + 1) )
            } else {
                updateLikes( (likes - 1) )
            }
             
            updateDidLikes( ! didLike )
             

        } }  className="btn btn-outline-primary" >{ likes }  { didLike === false ? 'Likes' : 'Dislike' }   </button>
    );
}