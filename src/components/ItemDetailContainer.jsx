import React, { useEffect, useState } from 'react'
import '../components/styles/Animaciones.css'
import BackgroundComponent from './BackgroundComponent'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [invalid, setInvalid] = useState(null)
    const { id } = useParams()



    /* Firebase Usa doc en vez de docs*/

    useEffect(() => {

        window.scrollTo(0, 250);
        setLoading(true)

        //conexion con nuestra collection
        const prodCollection = collection(db, "productos")
        //se crea referencia
        const docRef = doc(prodCollection, id)
        //traer documento con GetDoc
        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setProduct({
                        id: res.id, ...res.data()
                    })
                } else {
                    setInvalid(true)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])



    if (invalid) {
        return
        <div>El producto no existe</div>
    }

    return (
        <BackgroundComponent>
            <div className=' d-flex justify-content-center m-5'>
                {loading ? <LoaderComponent /> : <ItemDetail product={product} />}
            </div>
        </BackgroundComponent>
    )
}

export default ItemDetailContainer;
