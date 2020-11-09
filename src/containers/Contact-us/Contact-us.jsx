import React from 'react'
import ContactUsForm from './Contact-us-form';
import ContactUsText from './Contact-us-Text';
import './Style.css';

const ContactUs = () => {
    return <div id='contact' className='flex flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row '>
        <ContactUsForm className='flex flex-col'/>
        <ContactUsText className='flex flex-col'/>
    </div> ;
  };

  export default ContactUs; 
