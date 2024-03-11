import React from "react";
import { Funcomp } from './funComp';
import {Extra} from './funComp';

class Funclass extends React.Component{
render()
{
    return (
       <div>
         <h1 className="container ">Hello class</h1>
         <h2 className="container">My name is{this.props.name} and age is {this.props.age}</h2>
        <Funcomp name="Prashanth" age ="22" village="Samudrala"/>
        <Extra name="hiandi" age="dontknow" village="thelidhu"/>
       </div>
    )
}

}
export default Funclass;