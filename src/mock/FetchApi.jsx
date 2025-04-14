import React, {useState} from 'react'
import { useEffect } from 'react'
import ListApi from '../components/ListApi'

const FetchApi = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)  //para encender el loader
        fetch('https://rickandmortyapi.com/api/character') //pide los datos --> devuelve una promesa
            .then((res) => res.json())  //Se deba pasar a metodo Json para organizar el contenido de la api. TRRADUCIR (No se sabe como crearon la api)
            .then((respuesta) => setCharacters(respuesta.results))  //se obtione info de la api (no todas estan estructuradas igual) para ver contenido y se selecciona lo que se busca (characters --> results en la Api)
            .catch((error) => setError(error)) //atrapar el error
            .finally(() => setLoading(false)) //apagar el loader
    }, [])
    console.log(characters)

    if(error) {
        return <h1>Hubo un error</h1>
    }

    
    return (
        <div>
            {loading ? <p>Cargando...</p> : <ListApi characters={characters}/> }
        </div>
    )

}

export default FetchApi
