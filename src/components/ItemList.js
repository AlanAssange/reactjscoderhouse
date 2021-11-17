import React from 'react'
import { Item } from './Item'

export const ItemList = ({productos}) => {
    return (
        <div>
        <h2>Productos</h2>
        <hr></hr>
        {productos.map((prod) => <Item prod={prod}/> )}
       
       </div>
    )
}
