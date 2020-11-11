import React, { useEffect, useState } from 'react';
import Input from '../../components/Input/Input.jsx';
import Title from '../../components/Title/Title';
import Description from '../../components/Description/Description';
import Button from '../../components/Button/Button';

// { inputType="text", handleChange
// inputValue="",inputClasses="",inputName="",inputId="",inputPlaceholder="" }

const SignupForm = (props) => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [countryCity, setCountryCity] = useState('');
  const [address, setAddress] = useState('');
  const [phoneState, setphoneState] = useState(
    'text-green-100  border-green-200'
  );
  const [countryState, setCountryState] = useState(
    'text-green-100  border-green-200'
  );
  const [addressState, setaddressState] = useState(
    'text-green-100  border-green-200'
  );
  const [user, setUser] = useState({
    name: '',
    email: '',
    photoUrl: '',
    uid: '',
    emailVerified: false,
    phoneNumber: '',
    address: '',
    countryCity: '',
    loggedIn: false,
    firstLogin: true,
  });

  useEffect(() => {
    setUser(props.userData);
  }, [props.userData]);

  useEffect(() => {
    if (!user.firstLogin) {
      props.handleSubmit(user);
    }
  }, [user]);

  const inputHandler = (event) => {
    switch (event.target.name) {
      case 'Phone Number':
        setphoneNumber(event.target.value);
        break;
      case 'Country/City':
        setCountryCity(event.target.value);
        break;
      case 'Address':
        setAddress(event.target.value);
        break;
      default:
        break;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let noError = true;
    if (phoneNumber == '') {
      setphoneState('border-red-700 text-red-700');
      noError = false;
    } else {
      setphoneState('text-green-100 border-green-200');
    }
    if (countryCity == '') {
      setCountryState('border-red-700 text-red-700');
      noError = false;
    } else {
      setCountryState('text-green-100 border-green-200');
    }
    if (address == '') {
      noError = false;
      setaddressState('border-red-700 text-red-700');
    } else {
      setaddressState('text-green-100 border-green-200');
    }
    if (noError) {
      setUser({
        ...user,
        phoneNumber: phoneNumber,
        countryCity: countryCity,
        address: address,
        firstLogin: false,
      });
    }
  };

  return (
    <form
      method="post"
      className="text-center bg-white shadow-2xl py-3 px-4 rounded-xl w-6/12 m-auto"
      onSubmit={submitHandler}
    >
      <Title text={'Welcome ' + user.name + '!'} classes=" text-green-100" />
      <Description
        text="Fill out these important information to help people reach you better :D"
        classes=" text-gray-700"
      />
      <br />
      <Input
        inputType="number"
        inputId="phoneNumber"
        inputName="Phone Number"
        inputPlaceholder="Enter your Phone Number"
        inputClasses={'w-4/5 focus:outline-none ' + phoneState}
        handleChange={inputHandler}
        inputValue={phoneNumber}
      />

      {phoneState == 'border-red-700 text-red-700' ? <br /> : ''}
      {phoneState == 'border-red-700 text-red-700' ? (
        <span class="text-red-700">(Phone Number is required*)</span>
      ) : (
        ''
      )}

      <br />
      <br />

      <Input
        inputType="text"
        inputId="countryCity"
        inputName="Country/City"
        inputPlaceholder="City/Country"
        inputClasses={'w-4/5 focus:outline-none ' + countryState}
        handleChange={inputHandler}
        inputValue={countryCity}
      />

      {countryState == 'border-red-700 text-red-700' ? <br /> : ''}
      {countryState == 'border-red-700 text-red-700' ? (
        <span class="text-red-700">(Country name and city are required*)</span>
      ) : (
        ''
      )}

      <br />
      <br />
      <textarea
        placeholder="Enter your Address"
        name="Address"
        value={address}
        onChange={inputHandler}
        className={
          'shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-4/5 focus:outline-none ' +
          addressState
        }
      ></textarea>
      {addressState == 'border-red-700 text-red-700' ? <br /> : ''}
      {addressState == 'border-red-700 text-red-700' ? (
        <span class="text-red-700">(Address Required*)</span>
      ) : (
        ''
      )}

      <br />
      <br />
      <Button
        btnText="Submit"
        btnClasses=" text-white bg-green-100 hover:bg-green-200 focus:outline-none"
      />
    </form>
  );
};

export default SignupForm;
