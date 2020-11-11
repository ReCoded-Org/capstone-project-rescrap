import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxP8J65mliy3O2ET_tl1vrgthZZ3J6AAc',
  authDomain: 'rescrap2020.firebaseapp.com',
  databaseURL: 'https://rescrap2020.firebaseio.com',
  projectId: 'rescrap2020',
  storageBucket: 'rescrap2020.appspot.com',
  messagingSenderId: '1016675350686',
  appId: '1:1016675350686:web:6c65acaf2eeba9e7d3e38f',
  measurementId: 'G-P4L8JGFJNX',
};

// Initialize firebase

firebase.initializeApp(firebaseConfig);

export default firebase;
