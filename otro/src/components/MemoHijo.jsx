import {memo} from 'react'  


//impide que se vuelva a renderizar el componente hijo, queda en cache
const MemoHijo = ({contador, sumar, restar}) =>{

//let maxnumero = 0

//for(let i=0;i<  100000000; i++){
//    maxnumero++;
//}

const maxnumero = useMemo(()=> {
    let maxnumero = 0

    for(let i=0;i<  100000000; i++){
        maxnumero++;
    }
    return maxnumero
}, [])

//useMemo permite guardar un valor retornado por una funcion y no va a ser ejecutado a menos que el arreglo de dependencias lo pida
// en el ejemplo solo lo hace la primera vez que carga por ser procesos pesados o valores que no van a cambiar muy seguido

    console.log('Renderizando Hijo');
    return (
        <div>
            <h1>Memo Hijo</h1>
            <h3>{contador}</h3>
            <button onClick={sumar}> + </button>
            <button onClick={restar}> - </button>

            <h3>{maxnumero}</h3>
        </div>        
    )

}

export default memo(MemoHijo)