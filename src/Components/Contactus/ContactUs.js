import React, { Component } from "react";

//converting functional component to class component

class ContactUs extends Component {

  state = {
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    firstNameErr:"",
    lastNameErr:"",
    emailErr:"",
    passwordErr:""
  }

  handleChange = (e) => {
    // console.log(e)
    const {name,value} = e.target;
    this.setState({[name]:value});
    console.log(this.state)
  };

  //validations
  // Firstname > 4
  // lastname > 1
  // email '@' exit or not
  // password > 5
  

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateForm();
  };

  // if(isValid){
  //   console.log(this.state)
  // }

  validateForm = () =>{
    let firstNameErr = "";
    let lastNameErr = "";
    let emailErr = "";
    let passwordErr = "";

    if(this.state.firstName.length<4){
      firstNameErr = "First Name should be atleast 4 characters";
    }
    if(this.state.lastName.length<1){
      lastNameErr = "Last  Name should be atleast 1 characters";
    }
    if(!this.state.email.includes("@")){
      emailErr = "please Enter a valid email";
    }
    if(this.state.password.length<5){
      passwordErr = "password should have at least 5 char";
    }
//falsy values in javascript
  //0
  //null
  //undefined
  //""
  //false
  //NaN

  if(firstNameErr || lastNameErr || emailErr || passwordErr){
    this.setState({firstNameErr,lastNameErr,emailErr,passwordErr})
  }else{
    this.setState({firstNameErr,lastNameErr,emailErr,passwordErr})
  }
    
  }

  

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="firstName"
                  class="form-control mb-3"
                  onChange={this.handleChange}
                  // value={this.state.firstName}
                />
                <p className="text-danger">{this.state.firstNameErr}</p>
                <input
                  type="text"
                  name="lastName"
                  placeholder="lastName"
                  class="form-control mb-3"
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.lastNameErr}</p>

                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  class="form-control mb-3"
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.emailErr}</p>

                <input
                  type="password"
                  name="password"
                  class="form-control mb-3"
                  placeholder="password"
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.passwordErr}</p>


                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
