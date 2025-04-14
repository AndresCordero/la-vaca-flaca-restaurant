import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
    return (
        <div
            className='d-flex justify-content-center align-items-center text-white'
            style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/back.png')",
                backgroundSize: 'cover',
                height: '150vh',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
                backgroundColor: '#000'
            }}
        >
            <h1 style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '10px 20px', borderRadius: '10px' }}>
                Bienvenidos a la Vaca Flaca
            </h1>
        </div>
    )
}

export default Home
