import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='text-center '>
            <div className='text-center d-flex flex-column justify-content-center mt-5 px-auto'>
                <h2>Error Page</h2>
                <img className='mx-auto' src="/ErrorPageImage.jpg" alt="Error Page Image" style={{ width: '80%', marginBotton: 15 }} />
            </div>
            <Link className='btn btn-dark mb-5 text-center' to='/'>Volver a Inicio</Link>
        </div>
    )
}

export default ErrorPage
