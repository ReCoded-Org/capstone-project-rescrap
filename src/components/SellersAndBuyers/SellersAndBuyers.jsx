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

const SellersAndBuyers = () => {

    const sellersAndBuyersClasses= "grid sm\:row-gap-10 sm\:grid-cols-1 md\:grid-cols-2 lg\:grid-cols-3 xl\:grid-cols-3  col-gap-32 mx-32 my-20"
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
        <Title classes=" text-green-200" text="HOW IT WORKS"/>
        <a  onClick={sellerHandeler} className="cursor-pointer"><SubTitle classes={sellerHeader} text="Sellers"/></a>
        <a  onClick={buyerHandeler} className="cursor-pointer"><SubTitle classes={buyerHeader} text="Buyers"/></a>
        </div>
        <div className={sellerClasses}>
            <FeatureCard imgPath={seller1} imgDesc="Post your offer" featHeader="Post your offer" featDesc="Join the marketplace and post products you want to sell in less than a minute."/>
            <FeatureCard imgPath={seller2} imgDesc="Get the best price" featHeader="Get the best price" featDesc="Negotiate with buyers in real-time and get the best price for your products."/>
            <FeatureCard imgPath={seller3} imgDesc="Sell to customers" featHeader="Sell to customers" featDesc="Sell products directly to customers in your country and around the world."/>
        </div>
        <div className={buyerClasses}>
            <FeatureCard imgPath={buyer1} imgDesc="Find what you’re looking for" featHeader="Find what you’re looking for" featDesc="Browse through thousands of offers posted in the marketplace and find what you’re looking for."/>
            <FeatureCard imgPath={buyer2} imgDesc="Negotiate the best deal" featHeader="Negotiate the best deal" featDesc="Negotiate with multiple sellers in real-time and make the best deal."/>
            <FeatureCard imgPath={buyer3} imgDesc="Buy directly from suppliers" featHeader="Buy directly from suppliers" featDesc="Buy directly from suppliers of quality material in your country or internationally."/>
        </div>
        </div> );
}
 
export default SellersAndBuyers;