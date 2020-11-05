import React, { useState, useEffect } from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Signup from './containers/Signup/Signup';
import firebase from './firebase.config';

function App() {
  const initialUserData = {
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
  };
  const [user, setUser] = useState(initialUserData);

  useEffect(() => {
    if (user.loggedIn && !user.firstLogin) {
      alert(`Welcome ${user.name.split(' ')[0]}`);
    }
  }, [user]);

  const signOut = () => {
    if (user.loggedIn)
      firebase
        .auth()
        .signOut()
        .then(function () {
          alert('Sign-out Successful');
          setUser(initialUserData);
        })
        .catch(function (error) {
          alert('Could not sign-out Try again :C');
        });
  };

  const signIn = () => {
    if (user.loggedIn) return;

    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          const data = result.user;
          const userID = result.user.uid;
          if (result.additionalUserInfo.isNewUser) {
            setUser({
              ...user,
              name: data.displayName,
              email: data.email,
              photoUrl: data.photoURL,
              uid: data.uid,
              emailVerified: data.emailVerified,
              loggedIn: true,
              firstLogin: true,
            });

            firebase
              .database()
              .ref()
              .child('users')
              .child(userID)
              .set({
                ...user,
                name: data.displayName,
                email: data.email,
                photoUrl: data.photoURL,
                uid: data.uid,
                emailVerified: data.emailVerified,
                loggedIn: true,
                firstLogin: true,
              });
          } else {
            firebase
              .database()
              .ref()
              .child('users')
              .child(userID)
              .once('value')
              .then(function (dataSnapshot) {
                const userData = dataSnapshot.toJSON();
                setUser(userData);
              });
          }

          // ...
        })
        .catch(function (error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const { email } = error;
          // The firebase.auth.AuthCredential type that was used.
          const { credential } = error;
          // console.log(error);
          // ...
          alert('User may have cancelled or Connection Error!');
        });
    } catch (exception) {
      alert('An error occured,  try again please');
    }
  };

  // end of signin

  return (
    <Router>
      <Navbar handleSignInClick={signIn} handleSignout={signOut} userData={user} />
      <Switch>
        {/* Later you will replace the words I placed with your components */}
        <Route path="/about-us">About Us</Route>
        <Route path="/shop">Shop</Route>
        <Route path="/add-product">Add Product</Route>
        <Route path="/contact-us">Contact Us</Route>
        <Route path="/sign-up">
          <Signup
            userData={user}
            loggedIn={user.loggedIn}
            firstLogin={user.firstLogin}
            uid={user.uid}
          />
        </Route>
        <Route path="/">Home</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
