import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../context/CartContext'

export const CartView = () => {

    const {carrito} = useContext(CartContext)

    return (
        <div>
            <p>Cart View</p>
            <hr></hr>
        <section>
            {
                carrito.map((prod)=> (
                    <div>
                        <h3>{prod.nombre}</h3>
                        <p>Precio: ${prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                    </div>
                 ))
            }
        </section>
        </div>
    )
}
