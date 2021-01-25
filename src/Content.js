import React from 'react';
import Card from "./Card";

function Content(props) {


    const newData = props.database.map(item => {
        return  <Card product={item} database={props.database}/>
    })

    return (
        <div className={'content'}>
            {newData}
        </div>

    );
    }


export default Content;