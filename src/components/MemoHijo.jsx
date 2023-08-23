import {memo} from 'react'  


//impide que se vuelva a renderizar el componente hijo, queda en cache
const MemoHijo = ({contador}) =>{

    console.log('Renderizando Hijo');
    return (
        <div>
            <h1>Memo Hijo</h1>
            <h3>{contador}</h3>
        </div>        
    )

}

export default memo(MemoHijo)