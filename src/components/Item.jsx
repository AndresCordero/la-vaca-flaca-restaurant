import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <div className='card text-center p-2 ms-5' style={{ width: '14rem', marginTop: 25, marginBottom: 35 }}>
            <img 
                className='mb-3 p-1' 
                src={product.img} 
                alt={product.name}
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'contain',
                    borderRadius: '0.5rem'
                }} 
            />
            <div>
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">₡{product.price}</p>
                <Link className="btn btn-dark" to={`/item/${product.id}`}>Ver más</Link>
            </div>
        </div>
    );
};

export default Item
