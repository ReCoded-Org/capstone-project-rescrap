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

    let [sellerHeader,setSellerHeader]=useState(" text-green-200 inline-block m-4 underline");
    let [buyerHeader,setBuyerHeader]=useState(" text-green-200 inline-block m-4");

    let [sellerClasses,setSellerClasses]=useState("sellers grid grid-cols-3 col-gap-32 mx-32 my-20");
    let [buyerClasses,setBuyerClasses]=useState("buyers grid grid-cols-3 col-gap-32 mx-32 my-20 hidden");

    const sellerHandeler=()=>{
        setSellerClasses("sellers grid grid-cols-3 col-gap-32 mx-32 my-20 visible");
        setBuyerClasses("buyers grid grid-cols-3 col-gap-32 mx-32 my-20 hidden");
        setSellerHeader(" text-green-200 inline-block m-4 underline");
        setBuyerHeader(" text-green-200 inline-block m-4")
        console.log("hello");
    }
    const buyerHandeler=()=>{
        setBuyerClasses("buyers grid grid-cols-3 col-gap-32 mx-32 my-20 visible");
        setSellerClasses("sellers grid grid-cols-3 col-gap-32 mx-32 my-20 hidden");
        setSellerHeader(" text-green-200 inline-block m-4");
        setBuyerHeader(" text-green-200 inline-block m-4 underline");
        console.log("buyer");
    }

    return ( <div className="sellersBuyers">
        <div className="text-center pt-24">
        <Title classes=" text-green-200" text="HOW IT WORKS"/>
        <a href="#" onClick={sellerHandeler} className="cursor-pointer"><SubTitle classes={sellerHeader} text="Sellers"/></a>
        <a href='#' onClick={buyerHandeler} className="cursor-pointer"><SubTitle classes={buyerHeader} text="Buyers"/></a>
        </div>
        <div className={sellerClasses}>
            <FeatureCard imgPath={seller1} imgDesc="seller3" featHeader="Post your offer" featDesc="Join the marketplace and post products you want to sell in less than a minute."/>
            <FeatureCard imgPath={seller2} imgDesc="seller3" featHeader="Get the best price" featDesc="Negotiate with buyers in real-time and get the best price for your products."/>
            <FeatureCard imgPath={seller3} imgDesc="seller3" featHeader="Sell to customers" featDesc="Sell products directly to customers in your country and around the world."/>
        </div>
        <div className={buyerClasses}>
            <FeatureCard imgPath={buyer1} imgDesc="buyer1" featHeader="Find what you’re looking for" featDesc="Browse through thousands of offers posted in the marketplace and find what you’re looking for."/>
            <FeatureCard imgPath={buyer2} imgDesc="buyer2" featHeader="Negotiate the best deal" featDesc="Negotiate with multiple sellers in real-time and make the best deal."/>
            <FeatureCard imgPath={buyer3} imgDesc="buyer3" featHeader="Buy directly from suppliers" featDesc="Buy directly from suppliers of quality material in your country or internationally."/>
        </div>
        </div> );
}
 
export default SellersAndBuyers;