import React from 'react';


function Button(props) {
    return (
        <div className={'card-button'}>
            <button className="btn" onClick={() =>  props.setBought(props.id)} disabled={props.bought}>
            {props.bought ? 'Добавлено в корзину' : 'Добавить в коризну'}
        </button>
        </div>
    );

}

export default Button;