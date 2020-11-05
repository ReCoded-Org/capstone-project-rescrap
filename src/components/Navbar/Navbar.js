import React, { useState, useEffect } from 'react';
import {Link, useHistory,useLocation} from 'react-router-dom';
import RescrapLogo from './RescrapLogo';
import NavbarItems from './NavbarItems';
import './Navbar.css';


const Navbar = (props) => {

  let history=useHistory();
  const [navbar, setNavbar] = useState(props.bg);
  const [user,setUser]=useState(props.userData);
  
  useEffect(() => {
   setUser(props.userData);
   if(props.userData.loggedIn&&props.userData.firstLogin)
   history.push("/sign-up");
  }, [props.userData]);

  const changeBackground = () => {
   if(!props.bg){
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
   }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <section className={(navbar ? 'navbar active' : 'navbar' )+ " sm:bg-white md:bg-white"}>
      <div className="container mx-auto px-4 py-2 pt-4 flex justify-between flex-wrap">
        <Link to="/">
          <RescrapLogo />
        </Link>
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
                  <Link to={item.url}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
          <button className="mx-2 " onClick={() => {
            props.handleSignInClick();
          }}>
              
            {user.loggedIn ? (
              <span className="flex align-center justify-between">
              <i className="text-green-100 fas fa-user-circle fa-2x mx-2"></i>  
             {user.name.split(" ")[0]}
              </span>
            
            ) : (
             'Sign In'
            )}
          </button>
          {user.loggedIn?<button className="bg-red-500 text-white hover:bg-red-600" onClick={()=>{
            props.handleSignout()
          }}>Sign out</button>:""}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
