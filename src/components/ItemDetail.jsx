import React, { useContext, useState } from 'react';
import ItemCounter from './ItemCounter';
import { CartContext } from './context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [purchase, setPurchase] = useState(false);
    const navigate = useNavigate();

    const onAdd = (quantity) => {
        addToCart(product, quantity);
        setPurchase(true);
    };

    return (
        <div className='container text-center'>
            <h1 className='mt-5'>Detalle de producto: {product.name}</h1>
            <div className='container d-flex justify-content-center flex-wrap mt-5'>
                <img className='rounded img-fluid' src={product.img} alt={product.name} style={{ maxWidth: '35rem', width: '100%', height: 'auto' }} />
            </div>
            <p className='mt-5'>{product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Precio:₡ {product.price}</p>
            <div>
                {purchase ? (
                    <Link className='btn btn-outline-dark' to={'/cart'}>Ir al carrito</Link>
                ) : (
                    <ItemCounter stock={product.stock} onAdd={onAdd} />
                )}
            </div>
            <button className='btn btn-outline-dark my-4' onClick={() => navigate(-1)}>
                Atrás
            </button>
        </div>
    );
};

export default ItemDetail;
