import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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




  return (
    <>
      <div className='App'>
        <h1>Pokedex</h1>

        {
            pokemones.map(pokemon => {
              return (
                <div>
                  <img src={pokemon.img} alt={pokemon.name}></img>
                  <p>{pokemon.name}</p>
                  <span>{pokemon.id}</span>
                </div>


              )
              
              }
              )
        }
      </div>
     
    </>
  )
}

export default App
