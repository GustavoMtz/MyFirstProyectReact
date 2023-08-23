
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
    const {pokemones} = usePokemones();
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