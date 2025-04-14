import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const LoaderComponent = () => {
    return (
        <div className='f-flex justify-content-center mt-5'>
            <Spinner animation="border" />
        </div>
    )
}

export default LoaderComponent

