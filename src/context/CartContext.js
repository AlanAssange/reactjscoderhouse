import React from 'react'

export const CartContext = createContext()

//custom provider

export const CartProvider = ({children}) => {

    const [carrito,setCarrito] = useState ([])

    const agregarAlCarrito = (item) => {
      setCarrito([...carrito, item])
    }
  
    const removerDelCarrito = (id) => {
      setCarrito(carrito.filter(prod => prod.id !== id))
    
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }
  
    const isInCart = (id) => {
      return carrito.some (prod => prod.id === id)
    }

    const totalCompra= () => {
        return carrito.reduce((acc,prod) => acc + prod.precio * prod.cantidad,0)
    }
  

    return(
        
        <CartContext.Provider value={{carrito, agregarAlCarrito, removerDelCarrito,
        vaciarCarrito,totalCantidad,isInCart,totalCompra}}>
            {children}
        </CartContext.Provider>

    )
}