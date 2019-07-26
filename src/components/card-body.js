import React from "react"

export class CardBody extends React.Component{

    render(){
     var JSX =<div className="card-body"> 
        <h4 className = "card-title">{this.props.title} </h4>
        <p className = "card-text">{this.props.text}</p>
        </div>;

        return JSX;

    }
}

CardBody.defaultProps ={
    text:"this ia a placeholder text because text was not passed",
    title:"placeholder title"
};