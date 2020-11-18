import React, {useState,useEffect} from 'react';
import Title from '../Title/Title';
import Description from '../Description/Description';
import Button from '../Button/Button';
import './Intro.css'
import { useTranslation } from 'react-i18next';

 

const Intro = ({nav,signIn}) => {

  const {t,i18n}=useTranslation();
  const [color,setColor]=useState("green-200");
  const [btnTextColor,setBtnTextColor]=useState("white")
  useEffect(() => {
   if(i18n.language==="ar"){
     setColor("white");
     setBtnTextColor("green-200");
   }else{
     setColor("green-200");
     setBtnTextColor("white")
   }
  }, [t,i18n.language])
    return ( <div className="intro h-screen">
      <div>{nav}</div>
    <div className="intro-content p-12 py-24">
        <Title classes={" text-"+color+ " my-4"} text={ t('translation:pages.home.title') }/>
        <Description classes=" text-lg my-4" text={ t('translation:pages.home.paragraph') } />
        <Button btnClasses={" bg-"+color+" text-"+btnTextColor+" my-4 "} btnClickHandler={signIn} btnText={ t('translation:pages.home.sginup-btn') } />
    </div> </div>);
}
 
export default Intro;