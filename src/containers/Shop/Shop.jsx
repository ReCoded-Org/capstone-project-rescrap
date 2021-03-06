import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import ShopSearch from './ShopSearch';
import { useTranslation } from 'react-i18next';
import firebase from '../../firebase.config';


const Shop = () => {
    const {t}=useTranslation();
  const [cards, setCards] = useState([]);
  // const [search, setSearch] = useState('');
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
//    const [start, setStart] = useState(0);
//   useEffect(() => {
//     setStart(0);
//   }, []);

  const [term, setTerm] = useState("");

  useEffect(() => {
    // console.log(term);
  }, [term])

  useEffect( () => {
    firebase
      .database()
      .ref('posts/')
      .on('value', async function (snapshot) {
        const fetchImage = async (imageID) => {
          const ref = firebase.storage().ref('/posts-images/' + imageID);
          const url = await ref.getDownloadURL();
          return url;
        };
        let posts = snapshot.val();
        const keys = Object.keys(snapshot.val());
        
        // console.log(keys);
        for (let i = 0; i < keys.length; i++) {
          const post = posts[keys[i]];
          // if(term!==""){
          //   if(!(post.productName.toLowerCase().includes(term)||
          //   post.description.toLowerCase().includes(term)||
          //   post.productName.toLowerCase().includes(term)||
          //   post.productName.toLowerCase().includes(term))){
          //       continue;
          //   }
          // }
          // console.log();
          const img = await fetchImage(posts[keys[i]].productImageKey);
         
          setCards((previousState) => {
            return [
              ...previousState,
              <Card
                cardImageSrc={img}
                cardImageAlt={post.cardImageAlt}
                productDetailsLink={'/shop/'+keys[i]}
                cardTitle={post.productName}
                typeOfProduct={post.category}
                cardLocation={post.addressDetails}
                cardPrice={post.price}
                
              />,
            ];
          });
        }
      });
  }, []);

  // Filter's code I found some problem in it
  // useEffect(() => {
  //   setFilteredProducts(
  //     cards.filter((card) =>
  //       card.cardTitle.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }, [search, cards]);
  // {filteredProducts.map((card, idx) => (
  //   <Card key={idx} {...card} />
  // ))}
  return (
    <div className="container mx-auto">
      <Title
        classes="uppercase font-semibold leading-5  tracking-widest text-green-500 text-center p-2 my-2 "
        text={ t('translation:pages.shop.title') }
      />
      <ShopSearch searchText={setTerm} text={term} />
      <div className="mb-4">
        <div className=" flex flex-wrap justify-evenly">{cards.filter(obj=>{
          if(term!==""){
            return(obj.props.cardTitle.toLowerCase().includes(term)||
            obj.props.cardLocation.toLowerCase().includes(term)||
            obj.props.cardPrice.toLowerCase().includes(term)||
            obj.props.typeOfProduct.toLowerCase().includes(term))
          }else{
            return obj;
          }
        })}</div>
      </div>
      {/* <Button
        btnClasses="container block capitaliz mx-auto shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white text-lg py-3 px-10 rounded my-2"
        btnText={ t('translation:pages.shop.btn-see-more') }
        btnClickHandler=""
      /> */}
    </div>
  );
};

export default Shop;
