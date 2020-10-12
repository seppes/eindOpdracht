import React from 'react';
import './App.css';

function Kamers (props){
    const {kamers} = props;
    return <div>{kamers}</div>
}


function App() {
    return (
        <div id="root">
            <div>
                <h1>Hotel</h1>
                <Kamers kamers= "eenpersoonskamer"/>
                <Kamers kamers= "tweepersoonskamer"/>
                <Kamers kamers= "vierpersoonskamer"/>
                <Kamers kamers= "vijfpersoonskamer"/>
                <Kamers kamers= "tienpersoonskamer"/>
            </div>
        </div>
    );
}

export default App;
