import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateProductPage(){

    const id = useParams().id;


    const [product,updateProduct] = useState("");
    const [price,updatePrice] = useState("");
    const [quantity,updateQuantity] = useState("");
    
    const [successMessage,updateSuccMessage] = useState("");
    

    function saveProduct(){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", localStorage.getItem("app-token"));

var raw = JSON.stringify({"id": id ,  "product":product,"price":price,"quantity":quantity});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/api/product/update", requestOptions)
  .then(response => response.json())
  .then(result =>{
    if(result.success === true){
        updateSuccMessage(result.message)
    }
  })
  .catch(error => console.log('error', error));
    }


    function initForm(){
        
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem("app-token") );

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/product/list", requestOptions)
        .then(response => response.json())
        .then(result =>{
            console.log(result)

            result.map((p)=>{
                if (p._id === id) {
                    updateProduct(p.product);
                    updatePrice(p.price);
                    updateQuantity(p.quantity);
                    
                }
            })
        })
    }

    useEffect(()=>{
        initForm();



    })


    return(
        <div className="container mt-5">
            <h1>Update product</h1>
 
            <form onSubmit={ (e)=>{
                 e.preventDefault();
                 saveProduct();
            } } >



                <div className="mb-3">
                    <label>Product</label>
                    <input type="text" className="form-control" value={ product } onChange={ (e)=>{ updateProduct(e.target.value) } } />
                </div>
                
                <div className="mb-3">
                    <label>Price</label>
                    <input type="number" className="form-control" value={ price } onChange={ (e)=>{ updatePrice(e.target.value) } } />
                </div>
                
                <div className="mb-3">
                    <label>Quantity</label>
                    <input type="number" className="form-control" value={ quantity } onChange={ (e)=>{ updateQuantity(e.target.value) } } />
                </div>


                <button type="submit" className="btn btn-success">Save product</button>
                
                {
                    successMessage !== '' ? 
                    <div className="alert alert-success">
                        { successMessage }
                    </div>

                    : null
                }

            </form>
        </div>
    );
}