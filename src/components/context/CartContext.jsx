import { createContext, useContext, useState } from "react";

//se crea contexto
export const CartContext = createContext()

//provider 
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    //---------------funciones de carrito

    //agregar elementos al carrito
    const addToCart = (item, quantity) => {
        // Verificar si el stock disponible es suficiente
        if (item.stock < quantity) {
            alert(`Solo tenemos ${item.stock} unidades de este producto en stock.`)
            return
        }

        // Si ya está en el carrito, actualizar la cantidad
        if (isInCart(item.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    // Si la cantidad del producto es mayor al stock disponible, ajustar
                    const newQuantity = prod.quantity + quantity <= item.stock ? prod.quantity + quantity : item.stock
                    return { ...prod, quantity: newQuantity }
                } else {
                    return prod
                }
            })
            setCart(updatedCart)
        } else {
            // Si no está en el carrito, agregarlo con la cantidad
            setCart([...cart, { ...item, quantity }])
        }
    }

    //--Borrar carrito
    const clear = () => {
        setCart([])
    }

    //borrar un item
    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    //si esta o no en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    //Total a pagar (se llama en cart)
    const cartTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0)
    }

    //Agregar 10% de impuesto
    const cartImpuesto = () => {
        return cartTotal() * 0.10
    }

    //Total de Items (se llama en cart widget)
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    // Función para reducir el stock de los productos al momento de agregar
    const updateStock = (itemId, quantity) => {
        setCart(cart.map((prod) => {
            if (prod.id === itemId) {
                const newStock = prod.stock - quantity
                return { ...prod, stock: newStock }
            } else {
                return prod
            }
        }))
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clear, removeItem, cartTotal, cartQuantity, cartImpuesto, updateStock }}>
            {children}
        </CartContext.Provider>
    )
}

//mini custom hook
export const useCart = () => useContext(CartContext)
