import React from 'react';
import Intro from './../../components/Intro/Intro';
import SellersAndBuyers from './../../components/SellersAndBuyers/SellersAndBuyers';
import NewOffer from './../../components/NewOffer/NewOffer';
import Statistics from './../../components/Statistics/Statistics';

const Home= ({navbar, footer}) => {
    return (<>
    <Intro nav={navbar}/>
    <SellersAndBuyers/>
    <NewOffer/>
    <Statistics footer={footer}/>
    </>  );
}
 
export default Home;