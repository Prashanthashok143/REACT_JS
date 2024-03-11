import React from "react";
import PropTypes from "prop-types";
const h2Color = {
  color: "red",
  backgroundColor: "yellow",
  padding: "40px",
  margin: "0 0 30px 0",
};

class NewClass extends React.Component {
  constructor()
  {
    super();
    this.state={color:"white",btncolor:"blue"}
  }
  
 ChangeColor=()=> {
    this.setState({
        color:`#${Math.random().toString().slice(-6)}`,
        btncolor:`#${Math.random().toString().slice(-6)}`
    })
  } 
    
    
  
  render() {
    return (
      <div style={{ padding: "40px",backgroundColor:this.state.color}}>
        <h1 style={h2Color}>Hi Hello Gud Morning</h1>
        <h1
          style={{
            color: "green",
            backgroundColor: "black",
            padding: "30px",
            margin: "30px 0 0 0",
          }}
        >
          {this.props.address} {this.props.name}
        </h1>
        <button style={{backgroundColor:this.state.btncolor}} onClick={this.ChangeColor}>CLick On</button>
      </div>
    );
  }
}
NewClass.defaultProps = {
  name: "Prashu",
};
NewClass.propTypes = {
  name: PropTypes.string.isRequired,
};
export default NewClass;
