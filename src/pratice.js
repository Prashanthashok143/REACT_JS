import React from "react";

class pratice extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      password:"",
      errorMsg:"",
      myCar:"",
      carValue:["","Range Rover","Audi","Bmw"]
    };
  }
  //  const [myCar, setMyCar] = useState("Volvo");
 handleChange = (event) => {
    this.setState({myCar:event.target.value})
  }
  ChangeValues = (event) => {
    this.setState({ fname: event.target.value });
  };
  ChangePass=(event)=>{
    this.setState({password:event.target.value})
  }
  submitData=(event)=>{
    event.preventDefault();
    this.setState({fname:""})
    this.setState({password:""})
    const {fname,password,myCar}=this.state;
  // this.setState({errorMsg:`${fname} ${password}`})
    let regWeak=/[a-z]/;
  let regMedium=/\d+/;
  let regStrong=/.[!,@,#,$,%,^,&,*,~,(,)]/;
if(fname==="" || password==="")
{
  this.setState({errorMsg:"Please Provide details"})
}
else if(password.match(regWeak)){
 this.setState({errorMsg:`${fname} ${myCar}`})

}
else if(password.match(regMedium)){
  this.setState({errorMsg:"0-9"})
}
else if(password.match(regStrong)){
  this.setState({errorMsg:`${fname} ${myCar}`})
}
}
  render() {
    return (
      <div>
        <label>FirstName</label>
        <input
          type="text"
          value={this.state.fname}
          onChange={this.ChangeValues}
        />
         <label>password</label>
        <input
          type="password"
          value={this.state.password}
          onChange={this.ChangePass}
        />
      <button onClick={this.submitData}>Submit</button> 
      {this.state.errorMsg} 
       <select value={this.state.myCar} onChange={this.handleChange}>
 { this.state.carValue.map((values,index)=>(
  <option value={values} key={index}>{values}</option>
 ))}
      </select>
      </div>
    );
  }
}

export default pratice;

// import React, { Component } from 'react';

// class DropdownExample extends Component {
//   constructor(props) {
//     super(props);

//     // Define initial state with dropdown values
//     this.state = {
//       selectedValue: '-', // Initialize with an empty value
//       dropdownValues: ["please select",'Volvo', 'Range Over', 'Bugati'],
//     };
//   }

//   // Handle dropdown value change
//   handleDropdownChange = (event) => {
//     this.setState({ selectedValue: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <label>Select an option:</label>
//         <select value={this.state.selectedValue} onChange={this.handleDropdownChange}>
//           {/* Map through dropdown values and create options */}
//           {this.state.dropdownValues.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>

//         {/* Display selected value */}
//         <p>You selected: {this.state.selectedValue}</p>
//       </div>
//     );
//   }
// }

// export default DropdownExample;

