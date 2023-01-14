export default function Product(props){
    return(
        <div className="card">
            <img src={ props.photoURL } className="w-100" />
            <div className="card-body">
                <h3>{ props.title }</h3>
                <h3>{ props.price }</h3>
                    
            </div>
        </div>
    );
}