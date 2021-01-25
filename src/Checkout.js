import React from 'react';
import checkoutSvg from './shopping-cart-solid.svg'
function Checkout(props) {
    const date = props.database.filter(item => item.bought).length
    return (
        <div className={'checkout'}>
            <div>
                <img src={checkoutSvg} alt="shop"/>
                <span className={'counter'}>{date}</span>
            </div>
            <div className={'exit'}>
                выход
            </div>
        </div>

    );
}

export default Checkout;