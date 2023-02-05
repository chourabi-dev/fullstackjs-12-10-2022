import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default class Dashboard extends React.Component{

    constructor(props){
        super(props);
       
       
        this.state = {
            products : []
        }
    }
    


    getDataFromSever(){
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

            this.setState({ products: result })
        })
        .catch(error => console.log('error', error));
        
    }


    componentDidMount(){
        this.getDataFromSever();
    }



   
    render(){
        return(
            <div className="container mt-5">
            <h1>
                Product list
            </h1>
            <p>
                <Link to={ "/dashboard/add-product" }>add new product</Link>
            </p>

            <hr/>



            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.products.map((p)=>{
                            return(
                            <tr>
                                <td>{ p._id }</td>
                                <td>{ p.product }</td>
                                <td>{ p.price } TND</td>
                                <td>{ p.quantity }</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={ ()=>{

                                        var myHeaders = new Headers();
                                        myHeaders.append("Content-Type", "application/json");
                                        myHeaders.append("Authorization",  localStorage.getItem("app-token") );

                                        var raw = JSON.stringify({"id": p._id  });

                                        var requestOptions = {
                                        method: 'POST',
                                        headers: myHeaders,
                                        body: raw,
                                        redirect: 'follow'
                                        };

                                        fetch("http://localhost:8080/api/product/delete", requestOptions)
                                        .then(response => response.json())
                                        .then(result =>{

                                            if (result.success === true) {
                                                this.getDataFromSever();
                                            }
                                        })
                                        .catch(error => console.log('error', error));
                                        

                                    } }>delete</button>



                                    <Link to={ '/dashboard/update-product/'+p._id } className="btn btn-primary" >update</Link>
                                </td>
                                
                                
                            </tr>)
                        })
                    }
                </tbody>
            </table>

        </div>
        );
    }






    
}