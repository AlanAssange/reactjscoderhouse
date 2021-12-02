import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartItem = ({name, price, cantidad ,id}) => {

    const {removerDelCarrito} = useContext(CartContext);
    return (
            <div>
                <h3>{prod.nombre}</h3>
                <p>Precio: ${prod.precio}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <button onClick={()=> {removerDelCarrito(prod.id)}}></button>
            </div>
    )
}
