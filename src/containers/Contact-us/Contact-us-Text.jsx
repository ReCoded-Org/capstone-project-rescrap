import React from 'react'
import './Style.css'
import { useTranslation } from 'react-i18next';

const ContactUsText = () => {
     const {t, i18n}=useTranslation();

     return <div id='contact-text' className='flex justify-center pt-10 lg:pt-0 lg:pb-20 lg:justify-start mb-4 items-center sm:h-full lg:h-screen w-full '>
     <div className='text-white w-3/4  '>
               <h1 className='text-4xl'>{ t('translation:pages.contactus.title') }</h1>
               <p className='text-xl'> { t('translation:pages.contactus.paragraph') }</p>
     </div></div>
   };
 
   export default ContactUsText; 