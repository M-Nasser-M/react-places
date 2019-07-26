import React from "react"
import place2 from "../images/place2.jpg"
export class CardImg extends React.Component{

    render(){
        var JSX = <img className="card-img-top img-fluid h-250" src={this.props.photo}/>

        return JSX;
    }

}
CardImg.defaultProps = {
    photo: place2
  };

