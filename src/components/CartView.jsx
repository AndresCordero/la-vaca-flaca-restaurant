import React from 'react'
import { useCart } from './context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import Checkout from './Checkout'



const CartView = () => {
    const { clear, cartTotal } = useCart()

    return (
        <div className='d-flex justify-content-center flex-column'>
            <h2 className='text-center mt-5'>Tu carrito</h2>
            <div className='text-center m-5 card border-2 border-dark shadow-lg'>
                <CartItem />
            </div>
            <h3 className='my-5 text-center'>Total a pagar: ₡{cartTotal()}</h3>
            <Link to={'/checkout'} className='btn btn-dark mx-auto mb-4'>Finalizar Compra</Link>
            <Link to={'/productos'} className='btn btn-outline-dark mx-auto mb-4'>Agregar mas productos</Link>
            <button className='btn btn-danger mx-auto mb-4' onClick={clear}>Borrar carrito</button>
        </div>
    )
}

export default CartView

