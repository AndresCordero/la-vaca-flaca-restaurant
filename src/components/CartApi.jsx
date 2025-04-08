import React from 'react'

const CartApi = ({ personaje }) => {
    return (

        <div className='card text-center p-2 ms-5' style={{ width: '14rem', marginTop: 25, marginBottom: 35 }}>
            <img
                className='mb-3 p-1'
                src={personaje.image}
                alt={personaje.name}
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'contain',
                    borderRadius: '0.5rem'
                }}
            />
            <div>
                <h4 className="card-title">{personaje.name}</h4>
                <p className="card-text">₡{personaje.price}</p>
                <buttom className="btn btn-dark" >Ver más</buttom>
            </div>
        </div>
    )
}

export default CartApi
