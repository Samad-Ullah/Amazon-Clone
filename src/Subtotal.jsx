import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
     const [{basket} , dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>  
                        <h5>
                Subtotal ({basket.length} items): <strong>{value}</strong>
                        </h5> 
                        <small className="subtotal__gift">
                            <input type="checkbox" /> 
                           <h5>This order contain a gift</h5>  
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={"true"}
                prefix={'$ '}
            />
            <button className="proceed__Button"> Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
