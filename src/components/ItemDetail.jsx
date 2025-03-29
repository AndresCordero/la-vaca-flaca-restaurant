import React from 'react'
import ItemCounter from './ItemCounter'

const ItemDetail = ({ product }) => {
    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} unidades de ${product.name} al carrito`)
    }
    return (
        <div className='container text-center '>
            <h1 className= 'mt-5'>Detalle de producto: {product.name}</h1>
            <div className='container d-flex justify-content-center flex-wrap mt-5'>
                <img className='rounded' src={product.img} alt="{product.name}" style={{width: '50rem'}} />
            </div>
            <p className='mt-5'> {product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Precio:₡ {product.price}</p>
            <ItemCounter stock={product.stock} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail
