import React from "react"

export class Card_body extends React.Component{

    render(){
     var JSX =<div className="card-body"> 
        <h4 className = "card-title">{this.props.title} </h4>
        <p className = "card-text">{this.props.text}</p>
        </div>;

        return JSX;

    }
}

Card_body.defaultProps ={
    text:"this ia a placeholder text because text was not passed",
    title:"placeholder title"
};