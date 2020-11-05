import React from 'react';
import SignupForm from './SignupForm';
import newUserBackground from '../../images/newUserPage.svg';
import firebase from '../../firebase.config';
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
  let history = useHistory();
  if (props.loggedIn && !props.firstLogin) {
    history.push('/');
  } else if (props.uid === '') {
    history.push('/');
  }
  const signUpFormSubmit = (data) => {
    try {
      firebase.database().ref().child('users').child(data.uid).set(data);
      alert('Signed-up successfully!');
      history.goBack();
    } catch (exception) {
      alert('An Error occurred');
    }
  };
  return (
    <div
      className="w-full lg:h-screen m-auto py-24 bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url(' + newUserBackground + ')' }}
    >
      <SignupForm userData={props.userData} handleSubmit={signUpFormSubmit} />
    </div>
  );
};

export default Signup;
