import React from 'react'
import EmptyCart from './EmptyCart'
import CartView from './CartView'
import { useCart } from './context/CartContext'

const CartContainer = () => {    
    const {cart} = useCart()
    
    return (
        <div>
            {
                cart.length ? <CartView/> : <EmptyCart/>
            }

        </div>
    )
}

export default CartContainer
