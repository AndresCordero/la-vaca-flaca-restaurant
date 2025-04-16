import React, { useState, useEffect } from 'react';
import imageCompraExistosa from "/image_riding2.png"
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useCart } from './context/CartContext';
import { doc, getDoc, addDoc, collection, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link, useNavigate  } from 'react-router-dom';

const Checkout = () => {
    const [buyer, setBuyer] = useState({});
    const [orderId, setOrderId] = useState('');
    const [validated, setValidated] = useState(false);
    const [emailError, setEmailError] = useState('');
    const { cart, cartTotal, clear } = useCart();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();

    const buyerData = (event) => {
        setBuyer({
            ...buyer,
            [event.target.name]: event.target.value
        });
    };

    const validateEmail = () => {
        if (buyer.email !== buyer.confirmEmail) {
            setEmailError('Los correos electrónicos no coinciden.');
            return false;
        }
        setEmailError('');
        return true;
    };

    const finalizarCompra = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false || !validateEmail()) {
            event.stopPropagation();
        } else {
            let order = {
                comprador: buyer,
                compras: cart,
                total: cartTotal(),
                date: serverTimestamp()
            };
            const ventas = collection(db, "orders");

            addDoc(ventas, order)
                .then((res) => {
                    cart.forEach((item) => {
                        const docRef = doc(db, "productos", item.id)
                        getDoc(docRef)
                            .then((dbDoc) => {
                                updateDoc(docRef, { stock: dbDoc.data().stock - item.quantity })
                            })
                            .catch((error) => console.log(error))
                    })
                    setOrderId(res.id);
                    clear();
                })
                .catch((error) => {
                    console.error("Error al enviar la orden:", error);
                });
        }
        setValidated(true);
    };


    useEffect(() => {
        if (orderId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "¡Compra realizada con éxito!",
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                setShowConfirmation(true);
            });
        }
    }, [orderId]);


    const cancelOrder = () => {

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
                navigate('/');}
            });
        }



    window.scrollTo(0, 110)

    return (
        <>
            {orderId && showConfirmation ? (
                <div className="d-flex justify-content-center flex-column text-center mt-5 p-5 align-items-center">
                    <div className='card p-5 border-dark border-1 shadow'>
                        <h2 >Compra realizada ✅</h2>
                        <h4>Su ID de orden es: <strong>{orderId}</strong></h4>
                    </div>
                    <h2 className='mt-5'>¡Gracias por preferirnos!</h2>
                    <img src={imageCompraExistosa} alt="Vaca montando motocicleta" style={{ width: "25rem", marginTop: '3rem' }} />
                </div>
            ) : (
                <div className="container mt-5">
                    <div className="alert alert-info text-center mb-4">
                        <h2>¡Casi listo para completar tu orden!</h2>
                        <p>Revisa que los productos en tu carrito sean los correctos antes de proceder con la orden.</p>
                    </div>

                    {/* Form */}
                    <div className="card shadow-lg border-2 p-4 p-md-5 mx-auto mb-4 w-100" style={{ maxWidth: "800px" }} >
                        <Form noValidate validated={validated} onSubmit={finalizarCompra}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6">
                                    <Form.Label><strong>Nombre</strong></Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Nombre"
                                        name="nombre"
                                        onChange={buyerData}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label><strong>Apellido</strong></Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Apellido"
                                        name="apellido"
                                        onChange={buyerData}
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6">
                                    <Form.Label><strong>Dirección</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Dirección"
                                        required
                                        name="direccion"
                                        onChange={buyerData}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label><strong>Número de Teléfono</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Número"
                                        required
                                        name="telefono"
                                        onChange={buyerData}
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6">
                                    <Form.Label><strong>Correo electrónico</strong></Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Correo"
                                        required
                                        name="email"
                                        onChange={buyerData}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label><strong>Confirmar correo electrónico</strong></Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Confirma tu correo"
                                        required
                                        name="confirmEmail"
                                        onChange={buyerData}
                                    />
                                    {emailError && <div className="text-danger mt-2">{emailError}</div>}
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Acepto los términos y condiciones"
                                    feedback="Debes aceptar los términos antes de enviar"
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <Button className="btn btn-warning btn text-center  mt-4" type="submit" disabled={!cart.length} >Completar Compra</Button>
                            <Link className="btn btn-outline-dark text-center mt-4" onClick={cancelOrder} >Cancelar orden</Link>
                        </Form>
                    </div>
                </div>
            )}
        </>
    );
};


export default Checkout;
