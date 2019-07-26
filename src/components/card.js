import React from "react"
import {CardBody} from "./card-body"
import {CardImg} from "./card-img"
import {CardFooter} from "./card-footer"

export class Card extends React.Component{

    render(){
        var JSX =
        <div className="col-md-3 col-12 my-3">
        <div className="card text-center">
            <CardImg photo = {this.props.photo}/>
            <CardBody title ={this.props.title} text = {this.props.text}/>
            <CardFooter/>
              </div>
              </div>;

              return JSX;
    }
}