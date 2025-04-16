import React from 'react'
import EmptyCart from './EmptyCart'
import CartView from './CartView'
import { useCart } from './context/CartContext'
import BackgroundComponent from './BackgroundComponent'

const CartContainer = () => {
    const { cart } = useCart()
    window.scrollTo(0, 200)
    return (
        <BackgroundComponent>
            <div>
                {
                    cart.length ? <CartView /> : <EmptyCart />
                }

            </div>
        </BackgroundComponent>
    )
}

export default CartContainer
