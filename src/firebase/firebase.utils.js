import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBjYW_pYYBz1f13JIgWmBEz0SCXfNGwTlo',
  authDomain: 'syc-db.firebaseapp.com',
  databaseURL: 'https://syc-db.firebaseio.com',
  projectId: 'syc-db',
  storageBucket: 'syc-db.appspot.com',
  messagingSenderId: '259036991985',
  appId: '1:259036991985:web:c9f54b8efb4aa31583b450',
  measurementId: 'G-RM99YS1F22',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
