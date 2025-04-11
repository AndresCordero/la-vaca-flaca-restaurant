import { createContext, useContext, useState  } from "react";

//se crea contexto
export const CartContext = createContext()

//provider 
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


//funciones de carrito
const addToCart = (item, quantity) => {

}

    return(
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

//mini custom hook

export const useCart = () => useContext(CartContext)

