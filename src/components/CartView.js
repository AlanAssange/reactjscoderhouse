import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'

export const CartView = ({}) => {

    const {carrito, vaciarCarrito} = useContext(CartContext)

    return (
        <div>
            <p>Cart View</p>
            <hr></hr>
        <section>
            {
                carrito.map((prod)=> (<CartItem{...prod}/>
                    
                 ))
            }
        </section>
        <hr></hr>
        <div>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <button>Terminar mi compra</button>
        </div>
        </div>
    )
}
