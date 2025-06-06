import React from 'react'
import { useCart } from './context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import Swal from 'sweetalert2'



const CartView = () => {
    const { clear, cartTotal, cartImpuesto } = useCart()
    
        const preConfirmation = () => {
            Swal.fire({
                title: '¿Está seguro que desea borrar todos los productos del carrito?',
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, borrar!"
            }).then((result) => {
                if (result.isConfirmed) {
                    clear()
                    Swal.fire({
                        title: "¡Borrado!",
                        text: "Los productos se han borrado del carrito",
                        icon: "success",
                        confirmButtonColor: "#198754"
                    });
                }
            })
        }

    return (
        <div className='d-flex justify-content-center flex-column'>
            <h1 className='text-center my-5'>Tu carrito</h1>
            <div className='text-center mx-4 card border-2 border-dark mx-md-auto p-md-5 shadow-lg ' style={{maxWidth:'30rem', minWidth:'10rem'}}>
                <CartItem />
            </div>
            <h5 className='my-4 text-center'>Total de productos sin impuesto: ₡{cartTotal()}</h5>
            <h2 className='mt-2 mb-4 text-center'>Total a pagar: ₡{cartImpuesto() + cartTotal()}</h2>
            <hr className="w-50 mx-auto pb-4" />
            <Link to={'/checkout'} className='btn btn-lg btn-warning mx-auto mb-4'>Finalizar Compra</Link>
            <Link to={'/category/all'} className='btn btn-outline-dark mx-auto mb-4'>Agregar mas productos</Link>
            <button className='btn btn-danger mx-auto mb-5' onClick={preConfirmation}>Borrar carrito</button>
        </div>
    )
}

export default CartView

