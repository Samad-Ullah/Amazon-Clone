import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';


function Product({id ,title, image, price, rating}) {

    const [{basket} , dispatch ] = useStateValue();

   

    const addtobasket = ()  => {
        dispatch({
            type:"Add__to__Basket",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
        

    };
    return (
        <div className="product">
            <div className="product__Info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_ , i) =>(
                            <p>⭐</p>
                        ))}
                </div>
               
            </div>
            <img src={image} alt=""/>
            <button onClick={addtobasket} className="basket__Button">Add to basket</button>
        </div>
    )
}

export default Product
