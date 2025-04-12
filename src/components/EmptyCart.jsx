import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className='d-flex justify-content-center'>

            <div className='text-center my-5 d-flex flex-column align-items-center'>
                <h1>Tu carrito esta vacio</h1>
                <Link to='/' className='btn btn-outline-dark my-2'>Home</Link>
                <Link to='/productos' className='btn btn-dark my-2'>Ver productos</Link>
            </div>
        </div>
    )
}

export default EmptyCart
