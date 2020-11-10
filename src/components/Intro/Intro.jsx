import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Title from '../Title/Title';
import Description from '../Description/Description';
import Butten from '../Button/Button';
import './Intro.css'

const Intro = ({nav}) => {
    return ( <div className="intro h-screen">
      <div>{nav}</div>
    <div className="intro-content p-12 py-24">
        <Title classes=" text-green-200 my-4" text="Recycling Marketplace"/>
        <Description classes=" text-lg my-4" text="Connect and trade directly with suppliers & buyers of recyclable plastics" />
        <Butten btnClasses=" bg-green-200 text-white my-4" btnClickHandler='' btnText="Sign up" />
    </div> </div>);
}
 
export default Intro;