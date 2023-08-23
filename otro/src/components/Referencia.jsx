import React, { useRef } from "react";

const Referencia=()=>{

    const inputRef= useRef();
    console.log(inputRef);

    return (
        <div>
            <h1>Entendí la referencia</h1>
            <input type="text" ref={(inputRef)}/>
            <button onClick={()=>inputRef.current.focus()}>Focus</button>
        </div>
    )
    
}

export default Referencia