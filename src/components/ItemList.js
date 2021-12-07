import React, {useEffect, useState} from 'react'
import { Item } from './Item'

export const ItemList = ({items}) => {
  

    return ( <div className="item-list">{items !== false ? 
    
            items.map((producto, i)=>(
              <Item key={i}
                imagen={producto.image}
                nombre={producto.title} 
                precio={producto.price} 
                descripcion={producto.category}/>
            ))
              
            : 
            
            'no hay'}
            </div>
    )}
