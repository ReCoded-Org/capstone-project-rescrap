import React from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';

// Our imports

function App() {
  const navbar = (
    <Router>
      <Navbar />
      <Switch>
        {/* Later you will replace the words I placed with your components */}
        <Route path="/about-us">About Us</Route>
        <Route path="/shop">Shop</Route>
        <Route path="/add-product">Add Product</Route>
        <Route path="/contact-us">Contact Us</Route>
        <Route path="/">Home</Route>
      </Switch>
    </Router>
  );
  return (
    <>
      <Home navbar={navbar} Footer={<Footer />} />
    </>
    // <Router>
    //   <Navbar />
    //   <Switch>
    //     {/* Later you will replace the words I placed with your components */}
    //     <Route path="/about-us">About Us</Route>
    //     <Route path="/shop">Shop</Route>
    //     <Route path="/add-product">Add Product</Route>
    //     <Route path="/contact-us">Contact Us</Route>
    //     <Route path="/">Home</Route>
    //   </Switch>
    //  <Footer />
    // </Router>
  );
}

export default App;
