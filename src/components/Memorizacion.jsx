import { useState } from 'react'
import MemoHijo from './Memohijo';


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


            <MemoHijo/>
        </div>
    )
}