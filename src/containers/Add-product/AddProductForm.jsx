import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import firebase from '../../firebase.config';
import { useTranslation } from 'react-i18next';


let postRef = null,
  newPostKey = null;

const AddProductForm = (props) => {
  const {t, i18n}=useTranslation();

  const history = useHistory();
  if(props.uid==""){
    history.replace("/not-found")
  }
  const fileType = ['image/jpeg', 'image/jpg', 'image/png'];
  const initialProduct = {
    productName: '',
    category: '',
    quantity: '',
    price: '',
    description: '',
    ownerID: props.uid,
    productImageKey: '',
    phoneNumber: '',
    addressDetails: '',
    datePosted: '',
  };
const initialImageStatus={
  imageUploaded: false,
  imageKey: '',
}
  const [imageStatus, setImageStatus] = useState(initialImageStatus);
  const [product, setProduct] = useState(initialProduct);

  useEffect(() => {
    try {
      postRef = firebase.database().ref().child('posts');
      newPostKey = postRef.push().key;
      // console.log(newPostKey);
      if (postRef == null) {
        alert('Connection Error!!!');
        history.replace('/not-found');
      }
    } catch (exception) {}
  }, []);

  useEffect(() => {
    console.log(imageStatus);
    if (imageStatus.imageUploaded) {
      setProduct({ ...product, productImageKey: imageStatus.imageKey,datePosted:getDate() });
    }
  }, [imageStatus]);

  const getDate = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    let time =
      (today.getHours() > 12 ? today.getHours() - 12 : today.getHours()) +
      ':' +
      today.getMinutes() +
      ':' +
      today.getSeconds() +
      (today.getHours() > 12 ? ' PM' : ' AM');
    let dateTime = date + ' ' + time;
    return dateTime;
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    const fileSize = Math.round(file.size / 1024);
    // console.log(fileSize);
    if (fileSize <= 2048) {
      if (fileType.includes(file.type)) {
        const storageRef = firebase.storage().ref();
        const imageName = newPostKey + '-' + file.name;
        const fileRef = storageRef.child('posts-images').child(imageName);
        fileRef.put(file).then(() => {
          setImageStatus({ imageUploaded: true, imageKey: imageName });
          //   alert("File uploaded successfully :");
        });
      } else {
        alert('Please select images only!!');
        setImageStatus(initialImageStatus);
      }
    } else {
      alert("Image size is over 2MB!! can't upload file");
      setImageStatus(initialImageStatus);
    }
  };

  const inputHandler = (event) => {
    if(event.target.value!=""){
      event.target.classList.remove("border-red-700");
    }
    switch (event.target.name) {
      case 'Product Name':
        setProduct({ ...product, productName: event.target.value });
        break;
      case 'Category':
        setProduct({ ...product, category: event.target.value });
        break;
      case 'Quantity':
        setProduct({ ...product, quantity: event.target.value });
        break;
      case 'Price':
        setProduct({ ...product, price: event.target.value });
        break;
      case 'Description':
        setProduct({ ...product, description: event.target.value });
        break;
      case 'Phone Number':
        setProduct({ ...product, phoneNumber: event.target.value });
        break;
      case 'Address Details':
        setProduct({ ...product, addressDetails: event.target.value });
        break;

      default:
        break;
    }
    
  };

  const submitHandler = (event) => {
    event.preventDefault();
   
    if(!imageStatus.imageUploaded){
      alert("You should upload an image for this product!");
      return;
    }else{
     
    

    const inputs=document.querySelectorAll("input");
    const errorRequired = document.getElementById("errorRequired");
    // console.log(inputs);
    let errorMessage="";
    inputs.forEach(element => {
      if(element.value==""&&element.type!="file"){
       element.classList.add("border-red-700");
       element.classList.remove("foucs:border-green-200")
        errorMessage +=element.name+" Can not be empty! \n";
      }
    });
    if(errorMessage!=""){
      errorRequired.classList.remove("hidden");
      alert(errorMessage);
     return;
    }else{
      errorRequired.classList.add("hidden");
     
     try {
    
      firebase.database().ref().child("posts").child(newPostKey).update(product).then(()=>{
        alert("Posted Successfully :D");
      setProduct(initialProduct);
      });
     } catch (error) {
       
     }
    }
  }
  };
  return (
    <div>
      <form
        className="flex justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        method="POST"
        onSubmit={submitHandler}
      >
        <div className="w-full md:w-4/5 lg:w4/5 lg:shadow-lg py-8 px-8 rounded-lg">
          <div className="mb-4 text-center">
            <Title text={ t('translation:pages.Add Product.Add Product') } classes=" text-green-100 " />
          </div>
          <div id="errorRequired" className="mb-4 hidden">
            <p className="text-red-700">{ t('translation:pages.Add Product.fill') }</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="Upload-Image"
            >
              { t('translation:pages.Add Product.Upload Product Image') }
            </label>
            <input
              className=""
              type="file"
              name="Upload-Image"
              onChange={onFileChange}
              accept="image/png, image/jpeg"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="Product Name"
            >
              { t('translation:pages.Add Product.Product Name') }
            </label>
            <Input
              inputType="text"
              inputClasses=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-200"
              inputName="Product Name"
              handleChange={inputHandler}
              inputValue={product.productName}
              inputPlaceholder={ t('translation:pages.Add Product.placeholders.Enter Product Name') }
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="Product Name"
            >
              { t('translation:pages.Add Product.Category') }
            </label>
            <Input
              inputType="text"
              inputClasses=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-200"
              inputName="Category"
              handleChange={inputHandler}
              inputValue={product.category}
              inputPlaceholder={ t('translation:pages.Add Product.placeholders.Enter Category') }
            />
          </div>

          <div className="mb-4 flex flex-wrap justify-between">
            <div className="w-full lg:w-5/12">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="Product Name"
              >
                { t('translation:pages.Add Product.Quantity') }
              </label>
              <Input
                inputType="text"
                inputClasses=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-200"
                inputName="Quantity"
                handleChange={inputHandler}
                inputValue={product.quantity}
                inputPlaceholder={ t('translation:pages.Add Product.placeholders.Enter Quantity') }

              />
            </div>
            <div className="w-full lg:w-6/12">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="Product Name"
              >
                { t('translation:pages.Add Product.Price') }
              </label>
              <Input
                inputType="text"
                inputClasses=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-200"
                inputName="Price"
                handleChange={inputHandler}
                inputValue={product.price}
                inputPlaceholder={ t('translation:pages.Add Product.placeholders.enter price') }
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="Product Name"
            >
              { t('translation:pages.Add Product.Description') }
            </label>
            <textarea
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-200"
              name="Description"
              onChange={inputHandler}
              value={product.description}
              placeholder={ t('translation:pages.Add Product.placeholders.Enter Description') }
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="Product Name"
            >
              { t('translation:pages.Add Product.Phone Number') }
            </label>
            <Input
              inputType="text"
              inputClasses=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-200"
              inputName="Phone Number"
              handleChange={inputHandler}
              inputValue={product.phoneNumber}
              inputPlaceholder={ t('translation:pages.Add Product.placeholders.Enter your phone number') }
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="Product Name"
            >
             { t('translation:pages.Add Product.Address Details') }
            </label>
            <textarea
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-200"
              name="Address Details"
              onChange={inputHandler}
              value={product.addressDetails}
              placeholder={ t('translation:pages.Add Product.placeholders.Enter your address') }
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className=" py-2 px-4 bg-green-200 hover:bg-green-100 text-white font-bold rounded focus:outline-none"
            >
              { t('translation:pages.Add Product.Add Product') }
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
