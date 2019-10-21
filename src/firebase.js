import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

require("dotenv").config();

// passwords and locations
const firebaseConfig = {
  //process.env.API_KEY not working
  apiKey: "process.env.API_KEY",
  authDomain: "man-u-c9fc2.firebaseapp.com",
  databaseURL: "https://man-u-c9fc2.firebaseio.com",
  projectId: "man-u-c9fc2",
  storageBucket: "gs://man-u-c9fc2.appspot.com",
  messagingSenderId: "313246602462",
  appId: "1:313246602462:web:05c1598212716d54"
};

// starts application/connection to firebase
firebase.initializeApp(firebaseConfig);

// network requests
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseDB,
  firebaseTeams,
  firebasePlayers
};
