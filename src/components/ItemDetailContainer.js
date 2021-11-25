import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { pedirDatos } from '../helpers/pedirDatos'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const [item,setItem] = useState()
    const [loading,setLoading] = useState()

    return (
        <div>
            {
                loading
                ?<h2>Cargando...</h2>
                : <ItemDetail {...item}/>


            }
            <h3>Item Detail Container</h3>
        </div>
    )
}
