import React,{ useEffect, useState} from 'react';
import Card from './../Card/Card';
import Title from './../Title/Title';
import Button from './../Button/Button';
import { useTranslation } from 'react-i18next';
import firebase from 'firebase';

const NewOffer = () => {
 const {t, i18n}=useTranslation();
const [cards,setCards]=useState([]);
  const [start, setStart] = useState(0);
  useEffect(() => {
    setStart(0);
  }, []);

  useEffect( () => {
   firebase.database().ref('posts/').limitToLast(8).on('value', async function(snapshot) {
    const fetchImage = (imageID)=>{
      const ref =  firebase.storage().ref('/posts-images/'+imageID);
      const url =  ref.getDownloadURL();
      return url;
    }
    const posts = snapshot.val();
    const keys=Object.keys(snapshot.val());
    
    console.log(keys);
    for(let i =0;i<keys.length;i++){
      const post =posts[keys[i]];
      console.log();
      const img=await fetchImage(posts[keys[i]].productImageKey);
           setCards(
            (previousState) => {
              return [...previousState,<Card
                cardImageSrc={img}
                cardImageAlt={post.description}
                productDetailsLink={"/shop/"}
                cardTitle={post.productName}
                typeOfProduct={post.category}
                cardLocation={post.addressDetails}
                cardPrice={post.price}
                   />];
          }
         );
    }
  }
   )
  }, [])

  return (
    <div className="container mx-auto">
      <Title
        classes="uppercase font-semibold leading-5  tracking-widest text-green-100 text-center p-2 my-2 "
        text={ t('translation:pages.home.new-offer') }
      />
      <div className="flex justify-center">
        <div className=" flex flex-wrap px-4 justify-between">
          {cards}
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