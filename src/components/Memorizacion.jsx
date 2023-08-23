import { useState } from 'react'
import MemoHijo from './Memohijo';


const Memorizacion = ()=>{
    const [contador, setContador] = useState(0);
    const [text, setText] = useState("");
    const sumar = ()=>{setContador(contador+1)}
    const restar = ()=>{setContador(contador-1)}

    const handleChange = (e) => setText(e.target.value)

    return (
        <div>
            <h1> Memorizacion</h1>
            <p>
                {contador} Clicks
            </p>

            <button onClick={sumar}> + </button>
            <button onClick={restar}> - </button>

            <input type="text" onChange={handleChange} value={text}/>

            <MemoHijo contador ={contador}  sumar={sumar}  restar={restar}/>
        </div>
    )
}