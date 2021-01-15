import React from 'react'
import './ShoppingBasket.css'
import { useStateValue } from './StateProvider';

function ShoppingBasket({id, image, title, price , rating}) {

    const [{basket} , dispatch ] = useStateValue();

    const RemovefromBasket =() =>{
        dispatch({
            type:"Remove__From__Basket",
            id: id,
        })

    }
    return (
        <div className="shoppingBasket">
            <div className="shopping_items">
            <img  className="shoppingBasket__img" src={image} />
            
            <div className="shoppingBasket__info">
                 <p className="shoppingBasket__title">{title}</p>
                 <p className="shoppingBasket__price">
                     <small>$</small>
                     <strong>{price}</strong>
                 </p>
                 <p className="shoppingBasket__rating">{rating}</p>
                 <div className="shoppingBasket__rating">
                     {Array(rating).fill().map((_, i) => (
                         <p>⭐</p>
                     ))}
                 </div>
                 <button onClick={RemovefromBasket}>Remove</button>
            </div>
            </div>

        </div>
    )
}

export default ShoppingBasket
