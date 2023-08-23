import './buscador.css'
import { Buscar } from './icons';

function Buscador({ busqueda, setBusqueda, buscarPokemon }) {
  
  return (
    <>
      <h3 className='titulo'>Todas las generaciones disponibles</h3>
      <form className='container-buscar' onSubmit={buscarPokemon}>
        <input type="text" placeholder='Busca tu pokemon' className='input-buscar'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} />
        <button className='btn-buscar' type='submit'>
          <Buscar />
          Buscar
        </button>
      </form>
    </>
  )
}

export default Buscador;