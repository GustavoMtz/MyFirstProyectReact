import { useEffect, useState } from 'react'
const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'

function usePokemones() {
  const [pokemones, setPokemones] = useState([])
  const [siguienteUrl, setSiguienteUrl] = useState('')
  const [verMas, setVerMas] = useState(true)

  const getPokemones = async (url = URL_DEFAULT) => {
    // Recuperamos el listado de los pokemones
    const response = await fetch(url)
    const listaPokemones = await response.json()
    const { next, results } = listaPokemones // Guardamos el result
    
    // Ahora por cada result (pokemon), necesitamos obtener la información
    // necesitamos esperar a que se resuelvan todas
    // por eso recurrimos a Primise.all
    const newPokemones = await Promise.all(
      results.map( async (pokemon) => {
        const response = await fetch(pokemon.url)
        const poke = await response.json()

        const abilities = poke.abilities.map(a => a.ability.name)
        const stats = poke.stats.map(s => { return { name: s.stat.name, base: s.base_stat }})
        const types = poke.types.map(t => t.type.name )

        return {
          id: poke.id,
          nombre: poke.name,
          imagen: poke.sprites.other.dream_world.front_default || poke.sprites.front_default,
          abilities,
          stats,
          types
        }
      })
    )

    return { next, newPokemones }
  }

  const obtenerPokemones = async () => {
    const { next, newPokemones } = await getPokemones()
    setPokemones(newPokemones)
    setSiguienteUrl(next)
  }

  const masPokemones = async () => { 
    const { next, newPokemones } = await getPokemones(siguienteUrl)
    setPokemones(prev => [...prev, ...newPokemones])
    next === null && setVerMas(false)
    setSiguienteUrl(next)
  }

  useEffect(() => { obtenerPokemones() }, [])

  return { pokemones, masPokemones, verMas }
}

export default usePokemones