import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAu-bWutxXnxVwvtlp-4Gg-lbYYokxFJX0",
    authDomain: "reactec-db.firebaseapp.com",
    databaseURL: "https://reactec-db.firebaseio.com",
    projectId: "reactec-db",
    storageBucket: "reactec-db.appspot.com",
    messagingSenderId: "756061713534",
    appId: "1:756061713534:web:0c0d69a6a661154efd142f",
    measurementId: "G-1NLYBRG3V8"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  