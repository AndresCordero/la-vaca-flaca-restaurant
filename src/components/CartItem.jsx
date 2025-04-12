import React from 'react'
import { useCart } from './context/CartContext'
import { Link } from 'react-router-dom'



const CartItem = () => {
    const { cart, removeItem, clear } = useCart()
    return (
        <div>
            <div className='m-4'>
                <div>
                    {cart.map((compra) => <div key={compra.id}>
                        <p>Producto: {compra.name}</p>
                        <p>Cantidad: {compra.quantity}</p>
                        <p>Precio: {compra.price}</p>
                        <button className='btn btn-outline-danger' onClick={() => removeItem(compra.id)}>Eliminar</button>
                        <hr className="w-75 mx-auto" />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default CartItem
