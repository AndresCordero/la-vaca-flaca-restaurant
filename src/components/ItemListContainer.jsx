import { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncData'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()


    /* --Promesa de productos-- */
    console.log(categoryId)
    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => {
                if (categoryId) {
                    /*-------- filtrar ----------*/
                    setData(res.filter((item) => item.category === categoryId))
                } else {
                    setData(res)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])

console.log(data)
return (
        <main>
            <h1 className="mt-5 text-center">{greeting}{categoryId && <span>{categoryId}</span>}</h1>
            {/* {data.map((item)=> <p key={item.id}>{item.name}</p>)} */}
            <div className="container d-flex justify-content-center flex-wrap">
            {loading ? <p>Cargando...</p> : <ItemList data={data} />}
            </div>
        </main>
    )
}
export default ItemListContainer

