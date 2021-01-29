import React from 'react';
import checkoutSvg from './shopping-cart-solid.svg'
function Checkout(props) {
    const counter = props.database.filter(item => {
        return item.bought === true
    })
    return (
        <div className={'checkout'}>
            <div>
                <img src={checkoutSvg} alt="shop"/>
                <span className={'counter'}>{counter.length}</span>
            </div>
            <div className={'exit'}>
                выход
            </div>
        </div>

    );
}

export default Checkout;