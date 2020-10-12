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

const StyleH1 = styled.h1`
    border-bottom: black;
    font-weight: lighter;
    padding-top: 80px;
`;

const StyleNav = styled.div`
  height: 60px;
  padding-top: 30px;
  background-color: cadetblue;
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding-left: 30px;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
`;

const StyleFooter = styled.div`
  text-align: center;
  background-color: lightblue;
  color: white;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const StyleNavLink = styled.a`
  color: white;
  font-size: larger;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
`;

const KAMER_DETAILS = [
    {soort: "eenpersoons kamer", aantalPersonen: 1, prijs: 50},
    {soort: "tweepersoons kamer", aantalPersonen: 2, prijs: 80},
    {soort: "vierpersoons kamer", aantalPersonen: 4, prijs: 150},
    {soort: "vijfpersoons kamer", aantalPersonen: 5, prijs: 200},
    {soort: "tienpersoons kamer", aantalPersonen: 10, prijs: 300}
];

const LANDEN = [
    {land: "Belgie", aantalHotels: 6},
    {land: "Nederland", aantalHotels: 3},
    {land: "Frankrijk", aantalHotels: 4},
];

function App() {
    return (
        <div id="root">
            <StyleNav><StyleNavLink href="/">ez bookings</StyleNavLink></StyleNav>
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
            <StyleFooter><p>ez bookings copyright 2020</p></StyleFooter>
        </div>
    );
}

export default App;