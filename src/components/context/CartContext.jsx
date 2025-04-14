import { createContext, useContext, useState } from "react";

//se crea contexto
export const CartContext = createContext()

//provider 
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])





    //---------------funciones de carrito

    //agregar elementos al carrito
    const addToCart = (item, quantity) => {
        setCart([...cart, { ...item, quantity }])

        //existe o no
        if (isInCart(item.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity }
                } else { return prod }
            })
            setCart(updatedCart)
        } else {
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
        return cart.some((prod) => prod.id === id)  //*****
    }


    
    //Total a pagar (se llama en cart)
    const cartTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity),0)
        
    }

    //Agregar 10% de impuesto
    const cartImpuesto = () => {
        return cartTotal() * 0.10
    }

    //Total de Items (se llama en cart widget)
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0 )
    }





    return (
        <CartContext.Provider value={{ cart, addToCart, clear, removeItem, cartTotal, cartQuantity, cartImpuesto }}>
            {children}
        </CartContext.Provider>
    )
}

//mini custom hook

export const useCart = () => useContext(CartContext)

