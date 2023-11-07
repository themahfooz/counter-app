import React,{ useState } from "react";
import './App.css';


function Counter(){

    const [data, setdata]=useState(0);

    function updateState(){
        setdata(data+1);
        console.log(data);
    }


    return(
        <div>
            <h1>Count : {data}</h1>
            <button className="App" onClick={updateState}>Add</button>
        </div>
    )
}

export default Counter