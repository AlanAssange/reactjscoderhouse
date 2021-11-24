import React from 'react'
import ItemCount from './ItemCount';


export const Item = ({ nombre, precio, descripcion,imagen }) => {
    return (
      <div className="item">
        <article className="item-flex">
        <img className="card-img" alt="merch" src={imagen}/>
        <h3>{nombre}</h3>
        <p>Precio {precio}</p>
        <p>{descripcion}</p>
        <ItemCount/>
        </article>
      </div>
    );
  };
  