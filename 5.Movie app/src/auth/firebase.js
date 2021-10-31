import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBqfoX4HOwfA00TS18gO7ZbrM1ucV-Y8mU",
  authDomain: "movie-app-ae911.firebaseapp.com",
  projectId: "movie-app-ae911",
  storageBucket: "movie-app-ae911.appspot.com",
  messagingSenderId: "1019223826841",
  appId: "1:1019223826841:web:172fb46f98d2851e177308",
});

export const createUser = async (email, password) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("REGISTER user", user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};

export const SignIn = async (email, password) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("SIGNIN user ", user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};

export const userObserver = async (setCurrentUser) => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("OBSERVER: ", user);
      setCurrentUser(user);
    } else {
      // User is signed out
      // ...
    }
  });
};

export default firebaseApp;
