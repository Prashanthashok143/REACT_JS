import React from "react";


class LifeCycle extends React.Component{
    constructor()
    {
        super()
    this.state={
        bgcolor:"red",
        color:"white"
    }
    }
    // static getDerivedStateFromProps(props,state)
    // {
    //     return{name:props.name}
    // }
    componentDidMount() {
        setTimeout(() => {
          this.setState({bgcolor: "Blue",show: true})
        }, 2000)
      }
    // shouldComponentUpdate()
    // {
    //     return false; // By default it is true
    // }  
    componentDidUpdate() {
        setTimeout(() => {
          this.setState({bgcolor: "green"})
        }, 2000)
      }
     
    render()
    {
       
        return(
        <div>
        <h1 style={{backgroundColor:this.state.bgcolor,color:this.state.color}}>  backgroundColor </h1>
        
       
        </div>)
    }
}
export default LifeCycle;


  