import React from 'react'
import CartApi from './CartApi'

const ListApi = ({characters}) => {
    return (
        <div>
            {characters.map((personaje) => <CartApi key={personaje.id} personaje={personaje}/>)}
        </div>
    )
}

export default ListApi
