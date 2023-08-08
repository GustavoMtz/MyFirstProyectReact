import React, {useState, useEffect} from 'react';

//import usePokemon from '../hooks/usePokemon';

const Pokemones = ()=>{

    const   [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
   // const   [pokemones, loading, anterior, siguiente] = usePokemon(actual);
   const   [anterior, setAnterior] = useState(null);
   const   [siguiente, setSiguiente] = useState(null);
   const   [pokemones, setPokemones] = useState([]);
   const   [loading, setLoading] = useState(true);

    
   useEffect(()=>{
    fetch(actual).then((response) => response.json())
    .then((data) => {
        console.log(data);
        setPokemones(data.results);
        setAnterior(data.previous);
        setSiguiente(data.next);
        setLoading(false);
    })  
}, [actual])
    //se regresa a su forma original para estabilizar el código
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
   

}
export default Pokemones;
