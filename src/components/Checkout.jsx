import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useCart } from './context/CartContext';
import { doc, getDoc, addDoc, collection, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../service/firebase';

const Checkout = () => {
    const [buyer, setBuyer] = useState({});
    const [orderId, setOrderId] = useState('');
    const [validated, setValidated] = useState(false);
    const [emailError, setEmailError] = useState('');
    const { cart, cartTotal, clear } = useCart();

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


    return (
        <>
            {orderId ? (
                <div className="text-center mt-5">
                    <h2>Compra realizada ✅</h2>
                    <h4>Su ID de orden es: <strong>{orderId}</strong></h4>
                </div>
            ) : (
                <div className="container mt-5">
                    <div className="card shadow-lg border-2 p-4 p-md-5 mx-auto w-100" style={{ maxWidth: "800px" }} >
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
                                    {/* Display error message if emails don't match */}
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
                            <Button className="btn btn-dark mt-4" type="submit">Completar Compra</Button>
                        </Form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Checkout;
