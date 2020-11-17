import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import RescrapLogo from './RescrapLogo';
import NavbarItems from './NavbarItems';
import './Navbar.css';
import { useTranslation } from 'react-i18next';


const Navbar = (props) => {
  let history=useHistory();
  let navBar="";
  const [humbergur, setHumbergur]=useState("fill-current text-green-200");
  const [navbar, setNavbar] = useState(props.bg);
  const [user,setUser]=useState(props.userData);
  
  const {t, i18n}=useTranslation();


  useEffect(() => {
      // document.dir=i18n.dir();
     
      if(i18n.language==="ar"){
        navBar=document.getElementById("mainNav");
        navBar.classList.add("active")
      }
  }, [i18n,i18n.language])


  useEffect(() => {
   setUser(props.userData);
   if(props.userData.loggedIn&&props.userData.firstLogin)
   history.push("/sign-up");
  }, [props.userData]);
  
  if(history.path==="/"){
    setHumbergur("fill-current text-white");
  }

  const changeBackground = () => {
   if(!props.bg){
    if (window.scrollY >= 50) {
      setNavbar(true);
      setHumbergur("fill-current text-green-200");
    } else {
   
      // setHumbergur("fill-current text-white");
      if(i18n.language==="ar"){
        navBar=document.getElementById("mainNav");
        navBar.classList.add("active")
      }else{
        setNavbar(false);
      }
    }
     navBar=document.getElementById("mainNav");
      navBar.classList.add("navHomeResize");
      navBar.classList.add("navbar__position-fixed");
      
      // console.log(window.width);
      // if(window.screen.width){
        // setHumbergur("fill-current text-green-200");
      // }
   }else{
     
   
   }
  };
  window.addEventListener('scroll', changeBackground);
  window.addEventListener('resize',changeBackground);
const items=NavbarItems;

// if(!user.loggedIn){
//   items=NavbarItems.filter(item=>item.label!=='Add Product');
// }

  return (

  <section id="mainNav" className={(navbar ? 'navbar active' : 'navbar')+" w-full "}>
      <div className="container mx-auto px-4 py-2 pt-4 flex justify-between flex-wrap">

        <Link to="/">
          <RescrapLogo />
        </Link>
        <label
          for="menu-toggle"
          className="block md:hidden cursor-pointer self-center mr-2 menuIcon"
        >
          <svg
            className={"fill-current sm:text-green-200"+ humbergur}
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
            {items.map((item, index) => {
              if(item.label!=="Add Product"){
                return (
                <li
                  className="py-2 mx-4 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
                  key={index}
                >
                  <Link to={item.url}>{t("navigation."+item.label)}</Link>
                </li>
              );
              }else{
               if(user.loggedIn){
                return (
                <li
                  className="py-2 mx-4 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
                  key={index}
                >
                  <Link to={item.url}>{t("navigation."+item.label)}</Link>
                </li>
              );
               }
              }
                
              
            })}
          </ul>
          <button className="mx-2 " onClick={() => {
            props.handleSignInClick();
          }}>
              
            {user.loggedIn ? (
              <span className="flex align-center justify-between">
              <i className="text-green-100 fas fa-user-circle fa-1x mx-1"></i>  
             {user.name.split(" ")[0]}
              </span>
            
            ) : (
               t('translation:navigation.signin') 
            )}
          </button>
          {user.loggedIn?<button className="bg-red-500 text-white hover:bg-red-600 mx-2" onClick={()=>{
            props.handleSignout()
          }}> {t('translation:navigation.signout')} </button>:""}
          <select className="bg-green-200 text-white rounded-lg py-1 px-1 mx-1" onChange={(event)=>{
              i18n.changeLanguage(event.target.value);
           
            
            }
          }>
            <option value="en">En</option>
            <option value="ar">Ar</option>
          </select>
        </nav>
     
      </div>
    </section>
  );
};

export default Navbar;
