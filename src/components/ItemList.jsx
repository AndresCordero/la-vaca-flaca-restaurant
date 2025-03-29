import React from 'react'
import Item from './Item'

const ItemList = ({ data }) => {
    return (
        <div className="d d-flex justify-content-center flex-wrap">
            {data.map((product) => <Item key={product.id} product={product}/>)}
        </div>
    )
}

export default ItemList