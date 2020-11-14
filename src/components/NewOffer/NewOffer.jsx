import React from 'react';
import Card from './../Card/Card';
import Title from './../Title/Title';
import Button from './../Button/Button';
import { useTranslation } from 'react-i18next';

const NewOffer = () => {
  const {t, i18n}=useTranslation();
  return (
    <div className="container mx-auto">
      <Title
        classes="uppercase font-semibold leading-5  tracking-widest text-green-100 text-center p-2 my-2 "
        text={ t('translation:pages.home.new-offer') }
      />
      <div className="flex justify-center">
        <div className=" flex flex-wrap px-4 justify-between">
          <Card
            cardImageSrc="https://source.unsplash.com/random"
            cardImageAlt="Rescrap Product"
            productDetailsLink="#"
            cardTitle="Plastic Bottels"
            typeOfProduct="Plastic"
            cardLocation="Sana'a"
            cardPrice="777YER"
          />
          <Card
            cardImageSrc="https://source.unsplash.com/random"
            cardImageAlt="Rescrap Product"
            productDetailsLink="#"
            cardTitle="Plastic Bottels"
            typeOfProduct="Plastic"
            cardLocation="Sana'a"
            cardPrice="777YER"
          />
          <Card
            cardImageSrc="https://source.unsplash.com/random"
            cardImageAlt="Rescrap Product"
            productDetailsLink="#"
            cardTitle="Plastic Bottels"
            typeOfProduct="Plastic"
            cardLocation="Sana'a"
            cardPrice="777YER"
          />
          <Card
            cardImageSrc="https://source.unsplash.com/random"
            cardImageAlt="Rescrap Product"
            productDetailsLink="#"
            cardTitle="Plastic Bottels"
            typeOfProduct="Plastic"
            cardLocation="Sana'a"
            cardPrice="777YER"
          />
          <Card
            cardImageSrc="https://source.unsplash.com/random"
            cardImageAlt="Rescrap Product"
            productDetailsLink="#"
            cardTitle="Plastic Bottels"
            typeOfProduct="Plastic"
            cardLocation="Sana'a"
            cardPrice="777YER"
          />
          <Card
            cardImageSrc="https://source.unsplash.com/random"
            cardImageAlt="Rescrap Product"
            productDetailsLink="#"
            cardTitle="Plastic Bottels"
            typeOfProduct="Plastic"
            cardLocation="Sana'a"
            cardPrice="777YER"
          />
          <Card
            cardImageSrc="https://source.unsplash.com/random"
            cardImageAlt="Rescrap Product"
            productDetailsLink="#"
            cardTitle="Plastic Bottels"
            typeOfProduct="Plastic"
            cardLocation="Sana'a"
            cardPrice="777YER"
          />
          <Card
            cardImageSrc="https://source.unsplash.com/random"
            cardImageAlt="Rescrap Product"
            productDetailsLink="#"
            cardTitle="Plastic Bottels"
            typeOfProduct="Plastic"
            cardLocation="Sana'a"
            cardPrice="777YER"
          />
        </div>
      </div>
      <Button
        btnClasses="container block capitaliz mx-auto shadow bg-green-200 hover:bg-green-100 focus:shadow-outline focus:outline-none text-white text-lg py-3 px-10 rounded my-2"
        btnText={ t('translation:pages.shop.btn-see-more') }
        btnClickHandler=""
      />
    </div>
  );
};

export default NewOffer;
