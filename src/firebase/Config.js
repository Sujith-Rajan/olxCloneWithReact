import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import "firebase/compat/firestore";
import "firebase/compat/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh945-LOtRCZL8VKEuJ4DislfAPHuvk7U",
  authDomain: "olx-clone-f778b.firebaseapp.com",
  projectId: "olx-clone-f778b",
  storageBucket: "olx-clone-f778b.appspot.com",
  messagingSenderId: "624671269976",
  appId: "1:624671269976:web:c44c18359faf2a2451962d",
  measurementId: "G-E2V0KSJ2JV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;