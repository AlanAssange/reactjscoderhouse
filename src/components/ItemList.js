import React, {useEffect, useState} from 'react'
import { Item } from './Item'

export const ItemList = () => {
  const [hp, setHp] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setHp(data);
      });
  }, []);

    return ( <div className="item-list">{hp !== false ? 
    
            hp.map((producto, i)=>(
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
