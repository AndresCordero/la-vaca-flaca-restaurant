import { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncData'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    console.log({ greeting })


    /* --Promesa de productos-- */

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => setData(res))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    console.log(data)
    return (
        <div>
            <h1 className="mt-5 text-center">{greeting}</h1>
            {/* {data.map((item)=> <p key={item.id}>{item.name}</p>)} */}
            <div className="container d-flex justify-content-center flex-wrap">
            </div>
            {loading ? <p>Cargando...</p> : <ItemList data={data} />}
        </div>
    )
}
export default ItemListContainer

