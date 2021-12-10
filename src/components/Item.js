import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ id, nombre, precio, descripcion, imagen }) => {
  return (
    <div className="item">
      <article className="item-flex">
        <img className="card-img" alt="merch" src={imagen} />
        <h3 className="card-title">{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>{descripcion}</p>
        <Link to={`/detail/${id}`}>
          <button className="buy-1">Ver Más</button>
        </Link>
      </article>
    </div>
  );
};
