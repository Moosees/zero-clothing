import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAGxUQL-lVTeyKwIXJ-ozp6CyjIcr59aGc',
  authDomain: 'ztc-db.firebaseapp.com',
  databaseURL: 'https://ztc-db.firebaseio.com',
  projectId: 'ztc-db',
  storageBucket: '',
  messagingSenderId: '511189235020',
  appId: '1:511189235020:web:769af495f1025d48'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
