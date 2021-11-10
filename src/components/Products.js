import React from 'react'
import ItemCount from './ItemCount'

export const Products = () => {
    return (
        
        <div className="wrapper">
            <img className="appleWatch" src="https://images.fravega.com/f1000/d7b8cc24450ab2523ab59cf5e78421d0.jpg" alt=""/>
            <fragment class="content">
                <span>Apple Watch</span>
                <p>Premium Watch</p>
            </fragment>
            <fragment className="row">
                <p>$50</p>
                <fragment className="buttons">
                    <button>Buy Now</button>
                    <button>Add to Cart</button>
                    <ItemCount stock="5"></ItemCount>
                </fragment>
            </fragment>
        </div>
        
    )
}


export default Products