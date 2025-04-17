import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className='d-flex justify-content-center'>

            <div className='text-center my-md-5 d-flex flex-column align-items-center mt-4'>
                <h1>Tu carrito esta vacio</h1>
                <div>
                    <img className='img-fluid' src="../empty1.png" alt="Carrito vacio" style={{maxWidth:'20rem', maxHeight:'auto'}} />
                </div>

                <Link to='/' className='btn btn-outline-dark'>Home</Link>
                <Link to='/category/All' className='btn btn-dark my-4'>Ver productos</Link>
            </div>
        </div>
    )
}

export default EmptyCart
