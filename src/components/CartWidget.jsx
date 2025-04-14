import './styles/CartWidget.css';
import { BsCart2 } from "react-icons/bs";
import React from 'react';
import { useContext } from "react";
import { CartContext, useCart } from "./context/CartContext";
import { NavLink } from 'react-router-dom';

const CartWidget = () => {

    //lógica:

    const { cartQuantity } = useCart()

    return (
        <NavLink to={'/cart'}>
            <div className="cart-widget my-4">
                <BsCart2 color='white' size='2rem' />
                {cartQuantity() > 0 && <div className="qty-display"> {cartQuantity()}</div>}
            </div>
        </NavLink>
    );
};

export default CartWidget;
