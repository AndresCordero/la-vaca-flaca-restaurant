import React, { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()


/* Promesa Productos */
    

    useEffect(() => {
        setLoading(true)
        getProducts()
        .then((res) => setProduct(res.find((item) => item.id === id)))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))

    }, [])


    /* crear una funcion que busque un item */
/*     
    useEffect(() => {
        setLoading(true)
        getOneProduct(id)
        .then((res) => setProduct(res))
        .catch((error) => console.log(error))
    }) */


    return (
        <div className='d-flex justify-content-center mt-5'>
            {loading ? <LoaderComponent/> : <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer;
