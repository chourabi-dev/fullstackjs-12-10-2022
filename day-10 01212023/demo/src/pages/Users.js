import React from "react";

export default class UsersPages extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users:[]
        }
    }



    getUsersFromServer(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())
            .then(result =>{
                console.log(result);

                this.setState({ users: result })
            })
            .catch(error => console.log('error', error));
    }

    componentDidMount(){
        this.getUsersFromServer();
    }


    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    {
                        this.state.users.map((u)=>{
                            return(
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>{u.name}</h3>
                                            <p className="text-muted">{u.email}</p>
                                            <p className="text-muted">{u.phone}</p>
                                            
                                                
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}