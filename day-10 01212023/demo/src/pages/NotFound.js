import {Link} from 'react-router-dom';

export default function NotFoundPage(){
    return(
        <div>
            <h1>404 not found</h1>
            <p>
             {
                /** NEVER USE A HREF
                 *    <a href="/">back to home page</a>
                 */
             }

             <Link to={ '/' }>back to home page</Link>
            </p>
        </div>
    );
}