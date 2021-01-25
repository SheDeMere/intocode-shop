import React from 'react';
import checkoutSvg from './shopping-cart-solid.svg'
function Checkout(props) {
    return (
        <div className={'checkout'}>
            <img src={checkoutSvg} alt="shop"/>
            <span className={'counter'}>0</span>
        </div>
    );
}

export default Checkout;