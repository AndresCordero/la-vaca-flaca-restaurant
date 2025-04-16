import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <div className='card text-center pt-2 mx-3 shadow-lg' style={{ maxWidth: '15rem', minHeight: '350px', width: '100%', marginTop: 15, marginBottom: 35 }}>

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
            <div className='d-flex flex-column justify-content-between flex-grow-1'>
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text"><strong>Precio:</strong> ₡{product.price}</p>
                <Link className="btn btn-dark mt-auto m-3" to={`/item/${product.id}`}>Ver más</Link>
            </div>
        </div>
    );
};

export default Item
