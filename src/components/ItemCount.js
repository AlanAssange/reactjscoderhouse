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
        <div className="counter-flex">
            <button onClick={decrementar}>-</button>
             <h2>{counter}</h2>
             <button onClick={incrementar}>+</button>
             <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
