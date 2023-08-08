import React from "react";
import "./App.css";
import Pokemones from "./components/Pokemones";
import Contador from "./components/Contador";
import Texto from "./components/Texto";
import Referencia from "./components/Referencia";


const App = ()=>{
    return <div className="container">
           
            <hr/>
            <Texto name="Juan" apellido="Contreras"/>
            <hr/>
            <Contador/>
            <hr/>
            <Pokemones/>
            <hr/>
            <Referencia/>
            
    </div>  
}

export default App;