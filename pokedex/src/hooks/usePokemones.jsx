import { useState, useEffect } from 'react'

function usePokemones(){
    const [pokemones, setPokemones]= useState([]);

    useEffect(()=>{
        const getPokemones = async()=>{
          const response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
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
    

      return {pokemones}

}

export default usePokemones