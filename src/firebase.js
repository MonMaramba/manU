import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "man-u-c9fc2.firebaseapp.com",
  databaseURL: "https://man-u-c9fc2.firebaseio.com",
  projectId: "man-u-c9fc2",
  storageBucket: "",
  messagingSenderId: "313246602462",
  appId: "1:313246602462:web:05c1598212716d54"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

// const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");

export { firebase, firebaseMatches };
