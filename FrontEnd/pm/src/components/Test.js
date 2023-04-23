import React, {Component} from "react";

//Function syntax [to create a component]

//function Test(props){
//    return(
//        <h1>Hello {props.name}</h1>
//    )
//}

//Second syntax: ES6 class based component
class Test extends React.Component{
    render(){
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }
}
export default Test