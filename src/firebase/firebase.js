// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);