import { BsCart2 } from "react-icons/bs";
import React from 'react';
import './styles/CartWidget.css';

const CartWidget = () => {
    //lógica 
    return (
        <div className="cart-widget me-3">
            <BsCart2 color='white' size='2rem'/>
            <div className="qty-display">7</div>  {/* Hacer dinamico */}
        </div>
    );
};

export default CartWidget;
