import { useState } from "react";

export default function AuthPage(){

    const [username,updateUsername]= useState("");
    const [password,updatePassword]= useState("");

    function connect(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"username":username,"password":password});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/users/auth", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }


    return(
        <div className="container mt-5">
            <form onSubmit={ (e)=>{ 
                e.preventDefault(); 
                
                connect();
                
                }}>
                <div className="mb-3">
                    <label htmlFor="">Username</label>
                    <input type="text" value={username} onChange={ (e)=>{ updateUsername(e.target.value) } }  placeholder="username" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="">password</label>
                    <input type="text" placeholder="password" value={password} onChange={ (e)=>{ updatePassword(e.target.value) } } className="form-control" />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">CONNECT</button>
                </div>
                
                
            </form>
        </div>
    );
}