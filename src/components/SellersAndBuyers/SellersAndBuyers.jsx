import React, { useState } from 'react';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import FeatureCard from './FeatureCard';
import './SellersAndBuyers.css';
import seller1 from '../../images/seller1.jpg';
import seller2 from '../../images/seller2.jpg';
import seller3 from '../../images/seller3.jpg';
import buyer1 from '../../images/buyer1.jpg';
import buyer2 from '../../images/buyer2.jpg';
import buyer3 from '../../images/buyer3.jpg';
import { useTranslation } from 'react-i18next';


const SellersAndBuyers = () => {
    const {t}=useTranslation();


    const sellersAndBuyersClasses= "grid sm:row-gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  col-gap-32 mx-32 my-20"
    const subHeadersClasses=" text-green-200 inline-block m-4";

    let [sellerHeader,setSellerHeader]=useState(subHeadersClasses+" underline");
    let [buyerHeader,setBuyerHeader]=useState(subHeadersClasses);

    let [sellerClasses,setSellerClasses]=useState(sellersAndBuyersClasses);
    let [buyerClasses,setBuyerClasses]=useState(sellersAndBuyersClasses+" hidden");

    const sellerHandeler=()=>{
        setSellerClasses(sellersAndBuyersClasses+" visible");
        setBuyerClasses(sellersAndBuyersClasses+" hidden");
        setSellerHeader(subHeadersClasses+" underline");
        setBuyerHeader(subHeadersClasses);
    }
    const buyerHandeler=()=>{
        setBuyerClasses(sellersAndBuyersClasses+" visible");
        setSellerClasses(sellersAndBuyersClasses+" hidden");
        setSellerHeader(subHeadersClasses);
        setBuyerHeader(subHeadersClasses+" underline");
    }

    return ( <div className="sellersBuyers">
        <div className="text-center pt-24">
        <Title classes=" text-green-200" text={ t('translation:pages.home.how-it-works') }/>
        <a  onClick={sellerHandeler} className="cursor-pointer"><SubTitle classes={sellerHeader} text={ t('translation:pages.home.sellers') }/></a>
        <a  onClick={buyerHandeler} className="cursor-pointer"><SubTitle classes={buyerHeader} text={ t('translation:pages.home.buyers') }/></a>
        </div>
        <div className={sellerClasses}>
            <FeatureCard imgPath={seller1} imgDesc={ t('translation:pages.home.post-your-offer') }
             featHeader={ t('translation:pages.home.post-your-offer') }
              featDesc={ t('translation:pages.home.join-maketplace') }/>
            <FeatureCard imgPath={seller2} imgDesc={ t('translation:pages.home.best-price') } featHeader={ t('translation:pages.home.best-price') }
             featDesc={ t('translation:pages.home.get-best-price') }/>
            <FeatureCard imgPath={seller3} imgDesc={ t('translation:pages.home.sell') } featHeader={ t('translation:pages.home.sell') }
            featDesc={ t('translation:pages.home.sell-product') }/>
        </div>
        <div className={buyerClasses}>
            <FeatureCard imgPath={buyer1} imgDesc={ t('translation:pages.home.buyer.looking-for') }
             featHeader={ t('translation:pages.home.buyer.looking-for') }
              featDesc={ t('translation:pages.home.buyer.browser') }/>
            <FeatureCard imgPath={buyer2} imgDesc={ t('translation:pages.home.buyer.best-deal') }
             featHeader={ t('translation:pages.home.buyer.best-deal') }
             featDesc={ t('translation:pages.home.buyer.best-deal') }/>
            <FeatureCard imgPath={buyer3} imgDesc={ t('translation:pages.home.buyer.buy-from-suppliers') }
             featHeader={ t('translation:pages.home.buyer.buy-from-suppliers') } featDesc={ t('translation:pages.home.buyer.buy-direct') }/>
        </div>
        </div> );
}
 
export default SellersAndBuyers;