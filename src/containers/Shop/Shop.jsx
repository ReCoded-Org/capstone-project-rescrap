import React, { useState, useEffect } from 'react';
import Card from '../../components/card/Card';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import ShopSearch from './ShopSearch';
const cards = [];
for (let i = 0; i < 16; i++) {
  cards.push(
    <Card
      cardImageSrc="https://source.unsplash.com/random"
      cardImageAlt="Rescrap Product"
      productDetailsLink="#"
      cardTitle="Plastic Bottels"
      typeOfProduct="Plastic"
      cardLocation="Sana'a"
      cardPrice="777YER"
    />
  );
}

const Shop = () => {
  const [start, setStart] = useState(0);
  useEffect(() => {
    setStart(0);
  }, []);
  return (
    <div className="container mx-auto">
      <Title
        classes="uppercase font-semibold leading-5  tracking-widest text-green-500 text-center p-2 my-2 "
        text="SHOP PRODUCTS"
      />
      <ShopSearch />

      <div className="mb-4">
        <div className=" flex flex-wrap justify-between">
          {(() => {
            let disp = [];
            for (let i = start; i < cards.length + start; i++) {
              disp.push(cards[i]);
            }
            return disp;
          })()}
        </div>
      </div>
      <Button
        btnClasses="container block capitaliz mx-auto shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white text-lg py-3 px-10 rounded my-2"
        btnText="See More"
        btnClickHandler=""
      />
    </div>
  );
};

export default Shop;
