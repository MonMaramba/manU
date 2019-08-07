import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC_W7z6nci2MZZr0THpEa-uTbKK0Otzxnw",
  authDomain: "man-u-c9fc2.firebaseapp.com",
  databaseURL: "https://man-u-c9fc2.firebaseio.com",
  projectId: "man-u-c9fc2",
  storageBucket: "",
  messagingSenderId: "313246602462",
  appId: "1:313246602462:web:05c1598212716d54"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

firebaseDB
  .ref("matches")
  .once("value")
  .then(snapshot => {
    console.log(snapshot.val());
  });
