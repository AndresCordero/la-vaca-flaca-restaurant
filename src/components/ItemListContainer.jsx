import { useEffect, useState } from 'react'
import '../components/styles/Animaciones.css'
import CategorySelector from './CategorySelector'
import menu_image from "/image_standing.png"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../service/firebase/'

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const prodCollection = collection(db, "productos")

        const q = categoryId && categoryId !== "all"
            ? query(prodCollection, where("category", "==", categoryId))
            : prodCollection

        getDocs(q)
            .then((res) => {
                const list = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setData(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <main className='bg-body-secondary'>
            <div className="container pt-3 pt-md-5 position-relative">
                <img
                    src={menu_image}
                    alt="Vaca Flaca logo"
                    className="d-none d-md-block"
                    style={{
                        position: 'absolute',
                        top: '-30px',
                        right: '0',
                        width: '180px',
                        height: 'auto',
                        zIndex: 1,
                    }}
                />
                <h1 className="text-center badge-lg rounded text-bg-dark mb-3 ">
                    Menu
                </h1>
                {/* Mobile Image*/}
                <div className="text-center mb-4 d-block d-md-none">
                    <img
                        src={menu_image}
                        alt="Vaca Flaca logo"
                        style={{ width: '180px', height: 'auto' }}
                    />
                </div>

                <h2 className="text-center my-2 my-md-5">
                    {greeting}
                    {categoryId && categoryId !== 'all' && <span>{categoryId}</span>}
                </h2>

                <div className="container d-flex justify-content-center flex-column">
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
        </main>

    )

}

export default ItemListContainer
