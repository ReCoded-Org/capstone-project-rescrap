import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import ShopSearch from './ShopSearch';
import firebase from '../../firebase.config';


// for (let i = 0; i < 16; i++) {
//   cards.push(
//     <Card
//       cardImageSrc="https://source.unsplash.com/random"
//       cardImageAlt="Rescrap Product"
//       productDetailsLink="#"
//       cardTitle="Plastic Bottels"
//       typeOfProduct="Plastic"
//       cardLocation="Sana'a"
//       cardPrice="777YER"
//     />
//   );
// }

const Shop = () => {
  // const cards = [];
  const [cards,setCards]=useState([]);
  const [start, setStart] = useState(0);
  useEffect(() => {
    setStart(0);
  }, []);

  useEffect(() => {
    console.log(cards);
  }, [cards])

  useEffect(async () => {

   firebase.database().ref('posts/').on('value', async function(snapshot) {


    const fetchImage =async (imageID)=>{
      const ref =  firebase.storage().ref('/posts-images/'+imageID);
      const url = await ref.getDownloadURL();
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
                productDetailsLink={"/shop/"+keys[i]}
                cardTitle="Plastic Bottels"
                typeOfProduct="Plastic"
                cardLocation="Sana'a"
                cardPrice="777YER"
                   />];
          }
         );
    }
    // snapshot.forEach( (element,key)=>{
    //   // const post = element.toJSON();
    //   // console.log(post);
    //   // console.log(key)
 

    //   // setCards([...cards,(<Card
    //   //   cardImageSrc={url}
    //   //   cardImageAlt={post.description}
    //   //   productDetailsLink={"/shop/"}
    //   //   cardTitle="Plastic Bottels"
    //   //   typeOfProduct="Plastic"
    //   //   cardLocation="Sana'a"
    //   //   cardPrice="777YER"
    //   // />)]);
    
    // })

  
  }
   )
  }, [])

  return (
    <div className="container mx-auto">
      <Title
        classes="uppercase font-semibold leading-5  tracking-widest text-green-500 text-center p-2 my-2 "
        text="SHOP PRODUCTS"
      />
      <ShopSearch />

      <div className="mb-4">
        <div className=" flex flex-wrap justify-between">
          {
            cards
          }
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
