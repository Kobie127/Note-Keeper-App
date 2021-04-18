import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC3fmib7r8ajFYzjzIi87rnwgihP2dvRGU",
    authDomain: "note-keeper-d5d5c.firebaseapp.com",
    projectId: "note-keeper-d5d5c",
    storageBucket: "note-keeper-d5d5c.appspot.com",
    messagingSenderId: "672794819624",
    appId: "1:672794819624:web:e96540f8987b9c538dc91d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;