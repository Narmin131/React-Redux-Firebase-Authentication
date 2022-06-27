import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQriOOz2EB0df6lJCdj9NOpgQbu2XjusY",
    authDomain: "react-firebase-auth-8eb75.firebaseapp.com",
    projectId: "react-firebase-auth-8eb75",
    storageBucket: "react-firebase-auth-8eb75.appspot.com",
    messagingSenderId: "334688290659",
    appId: "1:334688290659:web:a0a7bc857b09024de7b556"
  };

// const firebaseDB = firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

// const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {auth,googleAuthProvider,facebookAuthProvider};