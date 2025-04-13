import { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncData'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, getDocs, where,  query } from 'firebase/firestore'
import { db } from '../service/firebase/'


const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()



    //Firebase

    useEffect(() => {
        setLoading(true)

        //conexion con nuestra collection y filtro de productos aplicado por categoria
        const prodCollection = categoryId 
        ? query(collection(db, "productos"), where("category", "===", categoryId)) 
        : collection(db, "productos")

        //perdir los documentos (se trata como una promesa)
        getDocs(prodCollection)
            .then((res) => {

                //Limpiar datos
                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()  //data es propio de firebase
                    }
                })
                setData(list)
            })



            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])




    /* --Promesa de productos-- */

    /*     useEffect(() => {
            setLoading(true)
            getProducts()
                .then((res) => {
                    if (categoryId) { */

    /*-------- filtrar ----------*/

    /*                     setData(res.filter((item) => item.category === categoryId))
                    } else {
                        setData(res)
                    }
                })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        }, [categoryId])
    
        console.log(data) */

    return (
        <main>
            <h1 className="mt-5 text-center">{greeting}{categoryId && <span>{categoryId}</span>}</h1>
            {/* {data.map((item)=> <p key={item.id}>{item.name}</p>)} */}
            <div className="container d-flex justify-content-center flex-wrap">
                {loading ? <LoaderComponent /> : <ItemList data={data} />}
            </div>
        </main>
    )
}
export default ItemListContainer

