import { useState, useEffect } from "react"
const Contador = () => {
    const [count, setCount] = useState(1)
    const [mostrar, setMostrar] = useState(false);
    const sumar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
    }

    /* -------- Ejemplos de los 3 tipos de useEffect aqui abajo --------- */

    /* Primer caso */

    useEffect(() => {
        console.log("Soy el use effect y me ejecuto siempre que se actualice el componente")
    })


    /* Segundo caso */
    useEffect(() => {
        console.log('Soy el useEffect y me ejecuto una sola vez')
    }, [])



    /* Tercer caso API (Escichando un cambio)*/
    useEffect(() => {
        console.log('Se ejecuta cuando se monta el componente y siempre que cambie mostrar')
    }, [mostrar])

    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
            <button onClick={() => setMostrar(!mostrar)}>Mostrar contenido</button>

        </div>
    )

}
export default Contador


