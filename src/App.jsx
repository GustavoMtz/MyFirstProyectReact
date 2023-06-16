import React from "react";
import Pokemones from "./components/Pokemones";
import "./App.css"


const App = ()=>{
    return <div className="container">
        {
            <Pokemones/>
        }
    </div>  
}

export default App;