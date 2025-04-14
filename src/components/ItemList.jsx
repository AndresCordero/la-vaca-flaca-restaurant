import React from 'react'
import Item from './Item'
import '../components/styles/Animaciones.css'

const ItemList = ({ data }) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
        {data.map((product, index) => (
            <div
                key={product.id}
                className="m-2 card-fade-in"
                style={{
                    width: '250px',
                    animationDelay: `${index * 0.2}s`,  // Retraso progresivo
                }}
            >
                <Item product={product} />
            </div>
        ))}
    </div>
    )
}

export default ItemList