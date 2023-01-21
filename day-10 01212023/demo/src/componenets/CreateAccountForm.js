import React from "react";

export default class CreateAccountForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title:"Create account form",

            fullname:"",
            email:"",

            errorMessageFullname:""

        }
    }


    submitForm(){
        console.log("clicked !!!");

        console.log(this.state);

    }



    render(){
        return(
            <div>
                <h1>{ this.state.title }</h1>
                <form   onSubmit={ (event)=>{ 
                    event.preventDefault(); 
                    
                    this.submitForm();
                    
                    
                    } }   >
                    <div className="mb-3">
                        <label>Fullname</label>
                         
                        <input type="text" 
                        
                        onFocus={ ()=>{
                            if ( this.state.fullname === "" ) {
                                this.setState({ errorMessageFullname:"this feild is required" })
                            }else{
                                this.setState({ errorMessageFullname:"" })
                            }
                        } }
                        onChange={ (event)=>{

                            if (event.target.value !== "") {
                                this.setState( { fullname: event.target.value, errorMessageFullname:"" } );
                            }
                        
                            

                        } } 
                        
                        value={ this.state.fullname } 
                        
                        className={ this.state.fullname === "" ? "form-control is-invalid" : "form-control is-valid" } />

                        <p>
                            <small className="text-danger">{ this.state.errorMessageFullname }</small>
                        </p> 
                    </div>

                    <div className="mb-3">
                    <input type="text" 
                        
                        onChange={ (event)=>{
                        
                            this.setState( { email: event.target.value } );

                        } } 
                        
                        value={ this.state.email } 
                        
                        className={ this.state.email === "" ? "form-control is-invalid" : "form-control is-valid" } />


                    </div>
                    <div className="mb-3">
                         <button
                         disabled={  ( this.state.fullname === ""  ) || (this.state.email === "" ) }
                         type="submit" className="btn btn-primary">Create account</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}