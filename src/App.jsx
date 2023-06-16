import React from "react";
import Texto from "./components/Texto"
import Contador from "./components/Contador";



const App = ()=>{
    return 
    
    <div>
        <p> Ola k ase?</p>
       <Texto name= "algo" apellido="perez" edad={36} />
       <Contador/>
    </div>
    
}

export default App;