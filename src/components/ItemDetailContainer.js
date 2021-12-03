import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { CartContext } from '../context/CartContext'
import {ItemDetail} from "./ItemDetail"
import {pedirDatos} from "../helpers/pedirDatos"


export const ItemDetailContainer = () => {
    const usuario = "jorge"
    const {usuario: user, admin} = useContext(CartContext)

    const context = useContext(CartContext);
    

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(()=>{

        setLoading(true)

        pedirDatos()
            .then( resp => {
                setItem( resp.find( prod => prod.id === Number(itemId)) )
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [])

    return (
        <div >
            {
                loading
                 ? <h2>Cargando...</h2>
                 : <ItemDetail {...item}/>
            }


        </div>
    )
}