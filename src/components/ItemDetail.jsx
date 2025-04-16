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

    const handleAddToCart = () => {
        onAdd();
        setPurchase(true);
    }
    return (
        <div className='container text-center'>
            <div className='card border-dark shadow-lg p-4 container d-flex justify-content-center align-items-center flex-wrap my-5'>
                <h1 className='mb-5'>Detalle de producto: {product.name}</h1>
                <img className='rounded img-fluid ' src={product.img} alt={product.name} style={{ maxWidth: '18rem', width: '100%', height: 'auto' }} />
                <hr className="w-25 mt-5" />
                <p className='mt-3 lead'>{product.description}</p>
                <p>Stock: {product.stock}</p>
                <p><strong>Precio: </strong>₡{product.price}</p>
            </div>
            <div>
                {purchase ? (
                    <Link className='btn btn-warning btn-lg shadow' to={'/cart'}>Ir al carrito</Link>
                ) : (
                    <ItemCounter stock={product.stock} onAdd={onAdd} />
                )}
            </div>
            <button className='shadow btn btn-outline-dark mt-4 mb-5' onClick={() => navigate(-1)}>
                {purchase ? 'Seguir comprando' : 'Atrás'}
            </button>
        </div>
    );
};

export default ItemDetail;
