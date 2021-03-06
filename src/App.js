import React, { useState, useEffect, Suspense } from 'react';
import './styles/main.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import firebase from './firebase.config';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Signup from './containers/Signup/Signup';
import Home from './containers/Home/Home';
import AboutUs from './containers/About-us/About-us-page';
import AddProduct from './containers/Add-product/AddProduct';
import ProductDetials from './containers/ProductDetials/ProductDetials';
import Shop from './containers/Shop/Shop';
import ContactUs from './containers/Contact-us/Contact-us';
import NotFound from './containers/NotFound/NotFound';

function App() {
  const [location, setLocation] = useState('/');
  // console.log(location);

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
        })
        .catch(function (error) {
          alert('User may have cancelled or Connection Error!');
        });
    } catch (exception) {
      alert('An error occured,  try again please');
    }
  };

  return (
    <Router>
      <Suspense fallback="Loading...">
        <div>
          {location === '/' ? (
            ''
          ) : (
            <Navbar
              handleSignInClick={signIn}
              handleSignout={signOut}
              userData={user}
              bg
              setPath={setLocation}
            />
          )}
          {/* <Navbar
        handleSignInClick={signIn}
        handleSignout={signOut}
        userData={user}
        bg={false}
        setPath={setLocation}
      /> */}
          <Switch>
            {/* Later you will replace the words I placed with your components */}
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/add-product">
              <AddProduct
                userData={user}
                loggedIn={user.loggedIn}
                firstLogin={user.firstLogin}
                uid={user.uid}
              />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/sign-up">
              <Signup
                userData={user}
                loggedIn={user.loggedIn}
                firstLogin={user.firstLogin}
                uid={user.uid}
              />
            </Route>
            <Route
              path="/shop/:id/"
              render={(props) => (
                <ProductDetials
                  {...props}
                  loggedIn={user.loggedIn}
                  uid={user.uid}
                  userData={user}
                />
              )}
            />
            <Route path="/shop">
              <Shop />
            </Route>

            <Route exact path="/">
              <Home
                signIn={signIn}
                navbar={
                  <Navbar
                    handleSignInClick={signIn}
                    handleSignout={signOut}
                    userData={user}
                    bg={false}
                    setPath={setLocation}
                  />
                }
              />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer setPath={setLocation} />
        </div>
      </Suspense>
    </Router>
  );

  //       <Home navbar={navbar} Footer={<Footer />} />
}

export default App;
