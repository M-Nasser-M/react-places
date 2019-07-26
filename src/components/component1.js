import React from 'react';
// export class Comp1 extends React.Component{

//     constructor(props){
//         super(props);
//     }

//     render(){
//         const JSX = 
//         <div className="border">
//         <p className = "mx-2 my-2">this is my first Component</p> 
//         </div>;

//         return JSX;

//     }
// }

export class Comp1 extends React.Component{
constructor(props){
super (props);
this.state= {counter:0};

}

    render(){
    return(<p>i go to school by luck {this.props.name}</p>);
}
}