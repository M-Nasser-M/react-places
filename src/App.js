import React from 'react';
import {Card} from "./components/card"
import {images} from "./images/images"
const data = require("./Json/places.json");


function App() {
	
	var arr = [] ;
	for (let i = 0 ; i < data.length  ; i ++){
		arr.push( <Card key = {i} photo = {images[i]} title = {data[i].name} text = {data[i].txt} />)
	}
	
  return (
    <React.Fragment>
			<h2 className="ml-3 my-3">Places</h2>
      <div className = "container mt-5">
        <div className="row">
    
      {arr}
    
    </div>
    </div>
    </React.Fragment>
  );
}

export default App;
