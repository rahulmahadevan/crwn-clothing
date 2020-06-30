import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyAY9qilQ-qsu5Ma3vJiCPDfyQP74euAo0U",
    authDomain: "crwn-db-ca284.firebaseapp.com",
    databaseURL: "https://crwn-db-ca284.firebaseio.com",
    projectId: "crwn-db-ca284",
    storageBucket: "crwn-db-ca284.appspot.com",
    messagingSenderId: "499990676543",
    appId: "1:499990676543:web:14ebf18079f68b7effa48a",
    measurementId: "G-0VM3J85MXE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;