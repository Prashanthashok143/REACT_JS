import React from "react";
class FormClass extends React.Component {
  constructor() {
    super();
    this.state = {
      emailid: "",
      password: "",
      errormsg: "",
    };
    this.manageEmail = this.manageEmail.bind(this); //insted of using bind simply use arrow function.
  }
  manageEmail(event) {
    this.setState({ emailid: event.target.value });
  }
  managePassword=(event)=>{
    this.setState({password:event.target.value}) // no need to bind if we use arrow fun

  }
  submitForm=(event)=>{
    event.preventDefault();
    const {emailid,password}=this.state;
    if(emailid ==="" || password==="")
    {
        this.setState({
            errormsg:"Please Provide the Email and password"
        })
    }
    else if(emailid !=="Admin@gmail.com" || password!=="Admin")
    {
        this.setState({
            errormsg:"please provide correct email and password"
        })
    }
    else {
        this.setState({
            errormsg:`email: ${emailid}
                    password: ${password}`
        })
    }

  }
  render() {
    return (
      <div className="border w-25 m-auto p-3 mt-5">
        <form onSubmit={this.submitForm}>
          <h2 className="text-primary text-center ">Login Form</h2>
          <div>
            <label htmlFor="emailid">Email</label>
            <input
              type="email"
              id="emailid"
              name="email"
              className="form-control mb-1"
              placeholder="Enter email.."
              value={this.state.emailid}
              onChange={this.manageEmail}
            />
            <label htmlFor="password" className="mt-3">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control mb-1"
              placeholder="Enter password.."
              value={this.state.password}
              onChange={this.managePassword}
              
            />
            
            <button type="submit" className="btn btn-primary mt-4 ">
              Login
            </button>
          </div>
        </form>
        {this.state.errormsg && <span>{this.state.errormsg}</span> // conditional rendering
        } 
      </div>
    );
  }
}
export default FormClass;
