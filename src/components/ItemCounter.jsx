import React, { useState } from 'react'

const ItemCounter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const add = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const substrack = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }

    const addToCart = () => {
        onAdd(count)
    }
    return (
        <div>
            <div className='mb-4'>
                <h5>Cantidad:</h5>
                <button className='btn btn-outline-danger mx-2' onClick={substrack}>-</button>
                <span>{count}</span>
                <button className='btn btn-outline-success mx-2' onClick={add}>+</button>
            </div>
            <button className='btn btn-dark' disabled={stock === 0 || count === 0} onClick={addToCart}> Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter
