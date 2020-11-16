import React from 'react';
import Title from '../Title/Title';
import Description from '../Description/Description';
import Button from '../Button/Button';
import './Intro.css'
import { useTranslation } from 'react-i18next';

 

const Intro = ({nav}) => {
  const {t}=useTranslation();
    return ( <div className="intro h-screen">
      <div>{nav}</div>
    <div className="intro-content p-12 py-24">
        <Title classes=" text-green-200 my-4" text={ t('translation:pages.home.title') }/>
        <Description classes=" text-lg my-4" text={ t('translation:pages.home.paragraph') } />
        <Button btnClasses=" bg-green-200 text-white my-4 " btnClickHandler='' btnText={ t('translation:pages.home.sginup-btn') } />
    </div> </div>);
}
 
export default Intro;