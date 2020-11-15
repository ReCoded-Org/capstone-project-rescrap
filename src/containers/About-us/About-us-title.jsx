import React from 'react';
import './About-us-style.css';
import { useTranslation } from 'react-i18next';


const AboutUsTitle = () => {
    const {t, i18n}=useTranslation();
    return <div data-testid='AboutUsTitle' className='bg-green-200 aboutUsTitle bg-no-repeat bg-auto'>
        <h1 className='text-5xl text-center text-white py-20'>{ t('translation:pages.aboutus.title') }</h1>        
    </div> ;
  };

  export default AboutUsTitle; 