import React from 'react';
import SubTitle from '../../components/SubTitle/SubTitle';
import { useTranslation } from 'react-i18next';



const AboutUsInfo = () => {
    const {t}=useTranslation();
    return <div>
        <SubTitle
        text= { t('translation:pages.aboutus.subtitle') }
        classes='text-5xl text-center text-green-100 m-4 ' />
        <div className='text-base flex mx-8 mb-16'>
            <p>
                { t('translation:pages.aboutus.paragraph1') }
                   </p>
                    <p>{ t('translation:pages.aboutus.paragraph2') }

                   </p>
            </div>
    </div> ;
  };

  export default AboutUsInfo; 