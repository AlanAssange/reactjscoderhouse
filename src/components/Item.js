import React from 'react'


export const Item = ({ nombre, genero, descripcion,imagen }) => {
    return (
      <div
        className="item"
        style={{
          paddingLeft: '5vw',
          textAlign: 'left',
        }}
      >
        <h6>{nombre}</h6>
        <li>Género {genero}</li>
        <p>{descripcion}</p>
        <img src={imagen}/>
        <hr></hr>
      </div>
    );
  };
  