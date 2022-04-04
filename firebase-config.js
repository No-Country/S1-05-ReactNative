import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyApLBvNadtYHSvwt5-Unknta2b0GvuKPCw",
    authDomain: "react-native-nc.firebaseapp.com",
    projectId: "react-native-nc",
    storageBucket: "react-native-nc.appspot.com",
    messagingSenderId: "700011416699",
    appId: "1:700011416699:web:d0b78daf575b512c2466de",
    measurementId: "G-Y64VL904W6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    auth,
    signInWithPopup
}
