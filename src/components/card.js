import React from "react"
import {Card_body} from "./card-body"
import {CardImg} from "./card-img"
import {Card_footer} from "./card-footer"

export class Card extends React.Component{

    render(){
        var JSX =<div className="card text-center">
            <CardImg/>
            <Card_body/>
            <Card_footer/>
              </div>;

              return JSX;
    }
}