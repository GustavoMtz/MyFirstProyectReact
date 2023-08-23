import { useState } from 'react'


const Memorizacion = ()=>{
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h1> Memorizacion</h1>
            <p>
                {contador} Clicks
            </p>

            <button onClick={()=>{setContador(contador+1)}}> + </button>
            <button onClick={()=>{setContador(contador-1)}}> - </button>
        </div>
    )
}