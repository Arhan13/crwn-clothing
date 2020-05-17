import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-evDggU2B38ryzgnpeHhodBZCWazkrvg",
    authDomain: "crown-db-20fc2.firebaseapp.com",
    databaseURL: "https://crown-db-20fc2.firebaseio.com",
    projectId: "crown-db-20fc2",
    storageBucket: "crown-db-20fc2.appspot.com",
    messagingSenderId: "170801551897",
    appId: "1:170801551897:web:c5db10b29295f906aca888",
    measurementId: "G-STSWC9HS95"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;