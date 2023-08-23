
import usePokemones from '../hooks/usePokemones'
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
    const {pokemones, masPokemones} = usePokemones();
    return (
        <section className='pokemon-container'>
            {
                pokemones.map(pokemon =>  
                    <Pokemon {...pokemon} key={pokemon.id}/>
                    )

            }
            <button className='btn-buscar' onClick={masPokemones}>Mostrar más</button>
        </section>

    )
}

export default Pokemones