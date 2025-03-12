import React from 'react'

const Item = ({product}) => {
    return (
        <div className='card text-center p-2 ms-5' style={{width: '14rem', marginTop:15}} >
            <img className='card-img mb-3 p-1 rounded' src={product.img}/>
            <div>
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">₡{product.price}</p>
                <a className="btn btn-dark">Ver mas</a>
            </div>
        </div>
    )
}

export default Item
