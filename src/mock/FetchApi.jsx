import React from 'react'
import { useEffect } from 'react'

const FetchApi = () => {

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character') //pide los datos
            .then((res) => { res.json() })  //Se deba pasar a metodo Json para organizar el contenido de la api. TRRADUCIR
            .then((respuesta) => console.log(respuesta))
    }, [])
    return (
        <div>

    </div>
)

}

export default FetchApi
