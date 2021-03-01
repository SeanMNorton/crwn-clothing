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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// trigger google account popup
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;