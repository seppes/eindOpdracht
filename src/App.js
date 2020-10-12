import React from 'react';
import './App.css';
import styled from "@emotion/styled";

function Kamers(props) {
    const {kamer} = props;
    return <div className="productLine">
        <div>{kamer.soort}</div>
        <div>{kamer.aantalPersonen}</div>
        <div>{kamer.prijs}&euro;</div>
    </div>;
}

function Landen(props) {
    const {landen} = props;
    return <div className="productLine">
        <div>{landen.land}</div>
        <div>{landen.aantalHotels}</div>
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

const StyleH1 = styled.h1`
    border-bottom: black;
    font-weight: lighter;
`;

const StyleKamers = styled.div`
    display: inline-block;
    padding-bottomt: 40px;
`;


const KAMER_DETAILS = [
    {soort: "eenpersoonskamer", aantalPersonen: 1, prijs: 50},
    {soort: "tweepersoonskamer", aantalPersonen: 2, prijs: 80},
    {soort: "vierpersoonskamer", aantalPersonen: 4, prijs: 150},
    {soort: "vijfpersoonskamer", aantalPersonen: 5, prijs: 200},
    {soort: "tienpersoonskamer", aantalPersonen: 10, prijs: 300}
];
const LANDEN = [
    {land: "Belgie", aantalHotels: 6},
    {land: "Nederland", aantalHotels: 3},
    {land: "Frankrijk", aantalHotels: 4},
];
function App() {
    return (
        <div id="root">
            <Navigatie/>
            <div>
                <StyleH1>Hotel</StyleH1>
                {KAMER_DETAILS.map((k) =>
                    <Kamers key={k.soort} kamer={k}/>)}
            </div>
            <div>
                <StyleH1>Landen</StyleH1>
                {LANDEN.map((l) =>
                    <Landen key={l.land} landen={l}/>)}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
