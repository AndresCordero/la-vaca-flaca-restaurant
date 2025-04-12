import React from 'react'
import { useCart } from './context/CartContext'
import EmptyCart from './EmptyCart'
import CartView from './CartView'

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
