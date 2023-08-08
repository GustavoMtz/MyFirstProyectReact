import React, {useState, useEffect} from "react";
import usePokemon from "../hooks/usePokemon";

const Pokemones = ()=>{

    const   [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    const   [pokemones, loading, anterior, siguiente] = usePokemon(actual);
    


    
    return (  
        loading ? 
        <p>Cargando...</p>
        :
       <div>
            <ul>
                {pokemones.map((pokemon, index)=>{
                    return <li key={index}> {pokemon.name} </li>                                    
                })}
            </ul>
              <button onClick={() =>  anterior !== null && setActual(anterior)   }>anterior</button>
              <button onClick={() =>  siguiente !== null && setActual(siguiente)  }>siguiente</button>  
        </div>       
    )
    
    /*
   return (
   <p> pokemon aqui</p>
   
   
   )
*/
}

export default Pokemones;