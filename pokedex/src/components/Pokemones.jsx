import { useState, useEffect } from 'react'
import './pokemones.css'

function Pokemon ({id, name, img}){
    return (
        <div className='pokemon-card'>
            <img src={img} alt={name} className='pokemon-imagen'></img>
                  <p className='pokemon-titulo'>
                  
                  <span>#{id}</span>
                  <span>{name}</span>
                  </p>
        </div>

    )

}

function Pokemones (){
    const [pokemones, setPokemones]= useState([]);

    useEffect(()=>{
        const getPokemones = async()=>{
          const response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
          const listapokemones = await response.json()
          const {results} = listapokemones
          const newPokemones = results.map(async(pokemon)=>{
            
            const response = await fetch(pokemon.url)
            const poke = await response.json()
    
            return {
              id : poke.id,
              name : poke.name,
              img: poke.sprites.other.dream_world.front_default
              
            }
          })
    
          setPokemones(await Promise.all(newPokemones))
        }
      
        getPokemones();
        
      }, [])
    

    return (
        <section className='pokemon-container'>
            {
                pokemones.map(pokemon =>  
                    <Pokemon {...pokemon} />
                    )

            }

        </section>

    )
}

export default Pokemones