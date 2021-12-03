import React, {useState} from 'react'

export const ItemCount = ({max}) => {
    const [counter, setCounter] = useState(15)
    
    const incrementar = () => {
       counter < max && setCounter(counter + 1)
    }

    const decrementar = () => {
        counter > 0 && setCounter(counter - 1)
    }
    return (
        <section>
        <div className="counter-flex">
            <button onClick={decrementar}>-</button>
             <h2>{counter}</h2>
             <button onClick={incrementar}>+</button>
        </div>
        <button className="buy-1">Agregar al carrito</button>
        </section>
    )
}

export default ItemCount;
