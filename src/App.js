import React from 'react';
import Header from "./Header";
import Content from "./Content";
import Card from "./Card";

function App(props) {



    return (
        <div className={'app'}>
            <Header />
            <Content />
        </div>
    );
}

export default App;