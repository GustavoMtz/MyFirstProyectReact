import React, {useState, useEffect} from "react";

const Pokemones = ()=>{

    const   [pokemones, setPokemones] = useState([]);
    const   [anterior, setAnterior] = useState(null);
    const   [siguiente, setSiguiente] = useState(null);
    const   [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');


    useEffect(()=>{
        async function obtenerPokemones(){
            const respons =  await fetch(actual);
            const data = await respons.json();
            setPokemones(data.results);
            setAnterior(data.previous);
            setSiguiente(data.next);
            console.log(data.results);
            console.log(data.previous);
            console.log(data.next);
        }
        obtenerPokemones();
        
    }, [actual])
    

    return (  
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