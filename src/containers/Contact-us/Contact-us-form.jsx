import React from 'react'
import { useTranslation } from 'react-i18next';

 
const ContactUsForm = () => {
  const {t}=useTranslation();

     return <div className='sm:h-full lg:h-screen px-20 xLarge'>
                 <form  className='bg-white px-4 pb-16 pt-5 '>
                 <h1 className='text-3xl normal text-green-100 pb-1'>{ t('translation:pages.contactus.form.title') } </h1>
          <div className="py-1">
      <label className='text-sm'>{ t('translation:pages.contactus.form.name') }</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username'
        placeholder={ t('translation:pages.contactus.form.name') }
        
      />
      </div>
      <div className="py-1">
      <label className='text-sm'>{ t('translation:pages.contactus.form.subject') }</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username'
        placeholder={ t('translation:pages.contactus.form.subject') }
        
      />
      </div>
      
      <div className="py-1">
      <label className='text-sm'>{ t('translation:pages.contactus.form.email') }</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username'
        placeholder={ t('translation:pages.contactus.form.email') }
        
      />
      </div>

      <div className="py-1">
      <label className='text-sm'>{ t('translation:pages.contactus.form.message') }</label>
      <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username'
        placeholder={ t('translation:pages.contactus.form.message') }
        
      ></textarea>
      </div>
     <div className=" text-center py-1">
       <button className='bg-green-100 py-4 w-4/5 border rounded text-white '
        type="submit"
        
      >
        { t('translation:pages.contactus.form.submit') }
      </button>
      </div>

    </form>
     </div> ;
   };
 
   export default ContactUsForm; 