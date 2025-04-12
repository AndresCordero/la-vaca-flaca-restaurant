import React from 'react'
import { useCart } from './context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'



const CartView = () => {
    const { clear } = useCart()

    return (
        <div className='d-flex justify-content-center flex-column'>
            <h2 className='text-center mt-5'>Tu carrito</h2>
            <div className='text-center m-5 card border-2 border-dark shadow-lg'>
                <CartItem />
            </div>
            <button className='btn btn-danger mx-auto mb-4' onClick={clear}>Borrar carrito</button>
            <Link to={'/productos'} className='btn btn-outline-dark mx-auto mb-4'>Agregar mas</Link>
            <button className='btn btn-dark mx-auto mb-4'>Finalizar compra</button>
        </div>
    )
}

export default CartView

