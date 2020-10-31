import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Title from '../Title/Title';
import Description from '../Description/Description';
import Butten from '../Button/Button';
import './Intro.css'

const Intro = () => {
    return ( <div className="intro h-screen">
        <Router>
      <Navbar />
      <Switch>
        <Route path="/about-us">About Us</Route>
        <Route path="/shop">Shop</Route>
        <Route path="/add-product">Add Product</Route>
        <Route path="/contact-us">Contact Us</Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
    <div className="intro-content p-12 py-24">
        <Title classes=" text-green-500 my-4" text="Plastic Recycling Marketplace"/>
        <Description classes=" text-lg my-4" text="Connect and trade directly with suppliers & buyers of recyclable plastics" />
        <Butten btnClasses=" bg-green-500 text-white my-4" btnClickHandler='' btnText="Sign up" />
    </div> </div>);
}
 
export default Intro;