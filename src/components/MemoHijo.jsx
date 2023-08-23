import {memo} from 'react'  


//impide que se vuelva a renderizar el componente hijo, queda en cache
const MemoHijo = () =>{


    console.log('Renderizando Hijo');
    return (

        
        <h1>Memo Hijo</h1>


    )

}

export default memo(MemoHijo)