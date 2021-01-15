import React from 'react';
import './Checkout.css';
import ShoppingBasket from './ShoppingBasket';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket} , dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <h2 className="checkout__title">
                    Your Bucket items
                </h2>
                    {basket.map(item =>(
                        <ShoppingBasket
                            id ={item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating ={item.rating}
                        />
                    ))}
                



                

            </div>
            <div className="checkout__right">
                <h2 className="checkout__total">
                   <Subtotal />
                </h2>

            </div>
        </div>
    )
}

export default Checkout
