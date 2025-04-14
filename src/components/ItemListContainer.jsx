import { useEffect, useState } from 'react'
import '../components/styles/Animaciones.css'
import CategorySelector from './CategorySelector'
import menu_image from "/image_standing.png"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, getDocs, where, query, addDoc } from 'firebase/firestore'
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
            ? query(collection(db, "productos"), where("category", "==", categoryId))
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

    /*         const subirData = () => {
                console.log("Hisiste click pa")
                const collectionToAdd = collection(db, "productos")
                productos.map((item) => addDoc(collectionToAdd, item))
            } */
    return (
        <main>

            <div className="container my-5 position-relative fade-in-up">
                <img
                    src={menu_image}
                    alt="Vaca Flaca logo"
                    style={{
                        position: 'absolute',
                        top: '-30px',
                        right: '0',
                        width: '170px',
                        height: 'auto',
                        zIndex: 1,
                    }}
                />

                <h1 className='text-center badge-lg rounded text-bg-dark'  style={{ marginTop: '5rem', marginBottom: '3rem' }}>
                    Menu
                </h1>


                <h2 className="text-center my-5">{greeting}{categoryId && <span>{categoryId}</span>}</h2>
                <div className="container d-flex justfy-content-center flex-column">
                    <div className="mb-5">
                        <CategorySelector />
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        {loading ? <LoaderComponent /> : <ItemList data={data} />}
                        {!loading && (
                            <p className="text-center my-5">**Los precios no incluyen el 10% de servicio a la mesa</p>
                        )}
                    </div>
                </div>
            </div>

            {/* {data.map((item)=> <p key={item.id}>{item.name}</p>)} */}
            {/* <button onClick={subirData}>Firebase una sola vez</button> */}

        </main>
    )
}
export default ItemListContainer

