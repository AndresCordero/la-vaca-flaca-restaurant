import React from 'react'
import { useCart } from './context/CartContext'
import { Link } from 'react-router-dom'


const CartView = () => {
    const { cart, removeItem, clear } = useCart()

    return (
        <div className='d-flex justify-content-center flex-column'>
            <h2 className='text-center mt-5'>Tu carrito</h2>
            <div className='text-center m-5 card border-2 border-dark shadow-lg'>
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
            <button className='btn btn-danger mx-auto mb-4' onClick={clear}>Borrar carrito</button>
            <Link to={'/productos'} className='btn btn-outline-dark mx-auto mb-4'>Agregar mas</Link>
            <button className='btn btn-dark mx-auto mb-4'>Finalizar compra</button>
        </div>
    )
}

export default CartView
