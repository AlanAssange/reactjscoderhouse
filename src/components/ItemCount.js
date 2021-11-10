import React, {useState} from 'react'

export const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1)
    
    const incrementar = () => {
        if(stock>counter){
        setCounter(counter+1)
        }else {
            alert("Fuera de stock")
        }
    }

    const decrementar = () => {
        if(counter>1){
        setCounter(counter-1);
        }else {
            alert("No se puede disminuir mas")
        }
    }
    return (
        <div>
            <h2>{counter}</h2>
            <fragment>
                <button onClick={decrementar}>-</button>
                <button onClick={incrementar}>+</button>
            </fragment>
        </div>
    )
}

export default ItemCount;
