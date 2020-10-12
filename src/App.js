import React from 'react';
import './App.css';

function Kamers (props){
    const {kamer} = props;
    return <div className="productLine">
        <div>{kamer.soort}</div>
        <div>{kamer.aantalersonen}</div>
        <div>{kamer.prijs}&euro;</div>
    </div>;
}

function Navigatie() {
    return <div>
        <h2>ez bookings copyright 2020</h2>
    </div>;
}

function Footer() {
    return <div>
        <a href="/">ez bookings</a>
    </div>;
}

const KAMER_DETAILS = [
    {soort : "eenpersoonskamer", aantalersonen : 1, prijs : 50},
    {soort : "tweepersoonskamer", aantalersonen : 2, prijs : 80},
    {soort : "vierpersoonskamer", aantalersonen : 4, prijs : 150},
    {soort : "vijfpersoonskamer", aantalersonen : 5, prijs : 200},
    {soort : "tienpersoonskamer", aantalersonen : 10, prijs : 300},
];

function App() {
    return (
        <div id="root">
            <Navigatie/>
            <div>
                <h1>Hotel</h1>
                {KAMER_DETAILS.map((p) =>
                    <Kamers key ={p.soort} kamer={p}/>)}
                    </div>
            <Footer/>
        </div>
    );
}

export default App;
