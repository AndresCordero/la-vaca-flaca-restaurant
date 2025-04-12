import './styles/CartWidget.css';
import { BsCart2 } from "react-icons/bs";
import React from 'react';
import { useContext } from "react";
import { CartContext, useCart } from "./context/CartContext";
import { Link } from 'react-router-dom';

const CartWidget = () => {

    //lógica:

    const { cart } = useCart()
    console.log(cart, 'carrito')

    return (
        <Link to={'/cart'}>
            <div className="cart-widget my-4">
                <BsCart2 color='white' size='2rem' />
                <div className = "qty-display">
                    {cart.length}
                </div>
            </div>
        </Link>
    );
};

export default CartWidget;
