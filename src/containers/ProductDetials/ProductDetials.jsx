import React, { useState, useEffect } from 'react';
import Intro from './Intro';
import Info from './Info';
import SuggestedProducts from './SuggestedProducts';
// import { useHistory } from 'react-router-dom';
import firebase from '../../firebase.config';

const ProductsDetials = (props) => {
  const [product, setProduct] = useState({
    addressDetails: '',
    category: '',
    datePosted: '',
    description: '',
    ownerID: '',
    phoneNumber: '',
    price: '',
    productImageKey: '',
    productName: '',
    quantity: '',
  });

  const [ownerInfo, setOwnerInfo] = useState({});
  const [productImg, setProductImg] = useState('');
  // const history = useHistory();

  // if (!props.loggedIn) {
    // alert("Login first to display details")
    // history.replace("/shop");
  // }

  useEffect( () => {
    setProduct({
      addressDetails: '',
      category: '',
      datePosted: '',
      description: '',
      ownerID: '',
      phoneNumber: '',
      price: '',
      productImageKey: '',
      productName: '',
      quantity: '',
    });
    try {
      const fetchImage = async (imageID) => {
        const ref = firebase.storage().ref('/posts-images/' + imageID);
        const url = await ref.getDownloadURL();
        return url;
      };

      const fetchOwner = (userID) => {
        firebase
          .database()
          .ref()
          .child('users')
          .child(userID)
          .once('value')
          .then(function (dataSnapshot) {
            const userData = dataSnapshot.toJSON();
            setOwnerInfo(userData);
          });
      };

      firebase
        .database()
        .ref()
        .child('posts')
        .child(props.match.params.id)
        .once('value')
        .then(async function (dataSnapshot) {
          const product = dataSnapshot.toJSON();
          // console.log(product);
          const img = await fetchImage(product.productImageKey);
          setProductImg(img);
          setProduct(product);
          fetchOwner(product.ownerID);
        });
    } catch (exception) {}
  }, []);

  // console.log(props);
  // console.log(props.match.params.id);
  return (
    <div>
      <Intro imgSrc={productImg} description={product.description} 
        productName={product.productName}
        description={product.description}
        price={product.price}
      />
      <Info loggedIn={props.loggedIn} owner={ownerInfo}
        category={product.category}
        quantity={product.quantity}
        addressDetails={product.addressDetails}
       />
      <SuggestedProducts />
    </div>
  );
};

export default ProductsDetials;
