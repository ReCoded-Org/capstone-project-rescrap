import React from 'react';
import { useLocation , Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer(props) {
  const {t}=useTranslation();
  const location = useLocation();
  props.setPath(location.pathname);

  //   {/* Column3 */}
  //   <div className="flex-1 mb-4">
  //   <h4 className="font-semibold">{ t('translation:pages.footer.Engage') }</h4>
  //   <ul className="list-none">
  //     <li className="text-gray-700 py-2 text-xs">
  //       <a herf="#">{ t('translation:pages.footer.ReScarp?') }</a>
  //     </li>
  //     <li className="text-gray-700 py-2 text-xs"><Link to="/faq">{ t('translation:pages.footer.FAQ') }</Link></li>
  //     <li className="text-gray-700 py-2 text-xs"><Link to="/about-us">{ t('translation:pages.footer.About Us') }</Link></li>
  //   </ul>
  // </div>
  // {/* Column4 */}
  // <div className="flex-1 mb-4">
  //   <ul className="list-none ">
  //     <h4 className="font-semibold">{ t('translation:pages.footer.Earn Money') }</h4>
  //     <li className="  text-gray-700 py-2 text-xs">
  //       <a herf="#">{ t('translation:pages.footer.Sell?') }</a>
  //     </li>
  //     <li className=" text-gray-700 py-2 text-xs">{ t('translation:pages.footer.Become a partner') }</li>
  //   </ul>
  // </div>

  return (
    <div className="main-footer font-body  bg-gradient-to-t from-green-100 via-transparent  to-transparent my-2 py-2">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row mx-5 my-5">
          {/* Column1 */}
          <div className="flex-1 pr-10 mb-4 justify-center">
            <img className="w-24 mb-3" src="..\images\logo.png" alt=""/>
            <p className="text-sm text-gray-700">
              <span className="text-black font-semibold"> { t('translation:pages.footer.logo') }
               </span> { t('translation:pages.footer.text') }
            </p>
          </div>
          {/* Column2 */}
          <div className="flex-1 mb-4">
            <h4 className="font-semibold">{ t('translation:pages.footer.product') }</h4>
            <ul className="list-none">
              <li className="text-gray-700 py-2 text-xs"><Link to="/">{ t('translation:navigation.Home') }</Link></li>
              <li className="text-gray-700 py-2 text-xs"><Link to="shop">{ t('translation:navigation.Shop') }</Link></li>
              <li className="text-gray-700 py-2 text-xs"><Link to="about-us">{ t('translation:navigation.About Us') }</Link> </li>
              <li className="text-gray-700 py-2 text-xs"><Link to="contact-us">{ t('translation:navigation.Contact Us') }</Link></li>
            </ul>
          </div>
        
        </div>
        <div className="row">
          <p className="my-4 text-sm text-gray-700 mx-5 my-5">
            &copy;{new Date().getFullYear()} { t('translation:pages.footer.right') }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
