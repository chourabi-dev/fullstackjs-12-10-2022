import { useState } from "react";

export default function CreateProductPage(){

    const [product,updateProduct] = useState("");
    const [price,updatePrice] = useState("");
    const [quantity,updateQuantity] = useState("");
    
    const [successMessage,updateSuccMessage] = useState("");
    

    function saveProduct(){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", localStorage.getItem("app-token"));

var raw = JSON.stringify({"product":product,"price":price,"quantity":quantity});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/api/product/create-product", requestOptions)
  .then(response => response.json())
  .then(result =>{
    if(result.success === true){
        updateSuccMessage(result.message)
    }
  })
  .catch(error => console.log('error', error));
    }


    return(
        <div className="container mt-5">
            <h1>Create new product</h1>



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