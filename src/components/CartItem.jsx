import React from 'react'
import { useCart } from './context/CartContext'




const CartItem = () => {
    const { cart, removeItem } = useCart()
    return (
        <div>
            <div className='m-4'>
                <div>
                    {cart.map((compra) => <div key={compra.id}>
                        <p><strong>Producto:</strong> {compra.name}</p>
                        <p><strong>Cantidad:</strong> {compra.quantity}</p>
                        <p><strong>Precio:</strong> ₡{compra.price}</p>
                        <button className='btn btn-outline-danger' onClick={() => removeItem(compra.id)}>Eliminar</button>
                        <hr className="w-75 mx-auto" />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default CartItem
