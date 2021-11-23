import React, {useEffect, useState} from 'react'
import { Item } from './Item'

export const ItemList = ({productos}) => {
    const [hp, setHp] = useState(false);

    useEffect((async) => {
      fetch('http://hp-api.herokuapp.com/api/characters')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setHp(data);
        });
    }, []);
  
    useEffect(() => {
      console.log(hp);
    }, [hp]);

    return ( <div>{hp !== false ? 
    
            hp.map((producto, i)=>(
              <Item 
                nombre={producto.name} 
                imagen={producto.image}
                genero={producto.gender} 
                descripcion={producto.yearOfBirth}/>
            ))
              
            : 
            
            'no hay'}
            </div>
    )}
