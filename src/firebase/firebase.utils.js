import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7eBh4tjxXQNFpfgyOC91vD2UvNso_Bv4",
  authDomain: "react-commerce-practice.firebaseapp.com",
  projectId: "react-commerce-practice",
  storageBucket: "react-commerce-practice.appspot.com",
  messagingSenderId: "334265758217",
  appId: "1:334265758217:web:aa332f3cac9040bae3fed8",
  measurementId: "G-8DZGNTXRM3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;