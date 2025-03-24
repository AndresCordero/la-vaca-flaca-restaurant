import React, { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => setProduct(res.find((item) => item.id === '02')))
            .catch((error)=> console.log(error))
            .finally(() => setLoading(false))

    }, [])
    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail product={product}/>}        
            </div>
    )
}

export default ItemDetailContainer;
