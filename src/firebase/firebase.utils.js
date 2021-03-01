import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBOEIf6BPWaA64p5Xtlznupc9_MTouJFsw",
  authDomain: "crwn-db-2f4b8.firebaseapp.com",
  projectId: "crwn-db-2f4b8",
  storageBucket: "crwn-db-2f4b8.appspot.com",
  messagingSenderId: "1067151866565",
  appId: "1:1067151866565:web:a44755d0f6b83e30630eac",
  measurementId: "G-D7W93NTS3J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// trigger google account popup
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;