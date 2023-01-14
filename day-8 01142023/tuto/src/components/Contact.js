export default function Contact(props){

    return(
        <div>
            <h3>{ props.fullname }</h3>
            <p>{ props.phone }</p>

            {
                props.email != null ?
                <p>  { props.email }</p>
                :

                <p>email non dispo</p>
            }

            <button className="btn btn-primary" >contact</button>

        </div>
    );
}