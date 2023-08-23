import {React,  useState } from "react";
import "./App.css";
import Pokemones from "./components/Pokemones";


const App = ()=>{
 
    const [theme, setTheme] = useState['light']
    const handleTheme =(e)=>{
        setTheme(e.target.value)
    }


    return (
    
    <>
    <div className={`text-center py-1 my-1 ${theme}`}>
        <input type="radio" name="theme" id="light" value="light" onClick={handleTheme}/>
        <label htmlFor="light" className="mx-1">Claro</label>
        <input type="radio" name="theme" id="dark" value="dark" onClick={handleTheme}/>
        <label htmlFor="dark" className="mx-1">Oscuro</label>
    </div>
     <div className={`container-fluid p-3 d-flex flex-row  ${theme}`}>
           
           
           <Pokemones/>
          
           
   </div>  
    
    </>
   
    )
}

export default App;


