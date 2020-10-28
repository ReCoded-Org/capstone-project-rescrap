import React, { useState, useEffect } from 'react';
import RescrapLogo from './RescrapLogo';
import NavbarItems from './NavbarItems';
import './Navbar.css';
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [signin, setSignin] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <section className={navbar ? 'navbar active' : 'navbar'}>
      <div className="container mx-auto px-4 py-2 pt-4 flex justify-between flex-wrap ">
        <div>
          <RescrapLogo />
        </div>
        <label
          for="menu-toggle"
          className="block md:hidden cursor-pointer self-center mr-2 menuIcon"
        >
          <svg
            className="fill-current text-green-200 "
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />
        <nav className="hidden w-full text-center md:flex md:w-auto" id="menu">
          <ul className="pt-5 mb-5 md:mb-0 md:pt-0 md:flex">
            {NavbarItems.map((item, index) => {
              return (
                <li
                  className="py-2 mx-4 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
                  key={index}
                >
                  <a href={item.url}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          <button onClick={() => setSignin(true)}>
            {signin ? (
              <i className="text-green-100 fas fa-user-circle fa-2x"></i>
            ) : (
              'Sign In'
            )}
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
