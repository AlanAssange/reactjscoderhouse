import React, { useState } from "react";

export const ItemCount = ({ max, onAdd }) => {
  const [counter, setCounter] = useState(15);

  const incrementar = () => {
    setCounter(counter + 1);
  };

  //agregar condición con el max//

  const decrementar = () => {
    counter > 0 && setCounter(counter - 1);
  };
  return (
    <section>
      <div className="counter-flex">
        <button onClick={decrementar}>-</button>
        <h2>{counter}</h2>
        <button onClick={incrementar}>+</button>
      </div>
      <button className="buy-1" onClick={onAdd} disabled={counter === 0}>
        Agregar al carrito
      </button>
    </section>
  );
};

export default ItemCount;
