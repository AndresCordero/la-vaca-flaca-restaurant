import React from 'react'
import Item from './Item'

const ItemList = ({ data }) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {data.map(product => (
                <div key={product.id} className="m-2" style={{ width: '250px' }}>
                    <Item product={product} />
                </div>
            ))}
        </div>

    )
}

export default ItemList