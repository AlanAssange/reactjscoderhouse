import React from 'react'

export const Item = ({prod}) => {
    return (
    <article key={prod.id} className="card-stylized">
        <img src={prod.img} alt={prod.name}/>
        <h3>{prod.name}</h3>
        <p>Precio: ${prod.price}</p>
    </article>
    )
}
