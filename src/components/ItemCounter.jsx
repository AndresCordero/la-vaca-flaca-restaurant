import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ItemCounter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const add = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const substrack = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const addToCart = () => {
        onAdd(count);
        toast.success(`${count} producto(s) agregado(s) al carrito`, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            pauseOnHover: true,
            theme: "dark",
        });
    }
    

        return (
            <div>
                <div className='mt-5 mb-3'>
                    <h5>Cantidad:</h5>
                    <button className='btn btn-sm btn-outline-danger mx-2' onClick={substrack}> - </button>
                    <span>{count}</span>
                    <button className='btn btn-sm btn-outline-success mx-2' onClick={add}>+</button>
                </div>
                <button className='btn btn-dark btn-lg' disabled={stock === 0 || count === 0} onClick={addToCart}> Agregar al carrito</button>

            </div>
        )
    }

    export default ItemCounter
