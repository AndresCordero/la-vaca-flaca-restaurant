import React, { useContext } from 'react'
import ItemCounter from './ItemCounter'
import { CartContext } from './context/CartContext'


const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext)
    const onAdd = (quantity) => {
        addToCart(product, quantity)
    }


    return (
        <div className='container text-center'>
            <h1 className='mt-5'>Detalle de producto: {product.name}</h1>
            <div className='container d-flex justify-content-center flex-wrap mt-5'>
                <img className='rounded img-fluid' src={product.img} alt="{product.name}" style={{ maxWidth: '35rem', width: '100%', height: 'auto' }} />
            </div>
            <p className='mt-5'> {product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Precio:₡ {product.price}</p>
            <ItemCounter stock={product.stock} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail
