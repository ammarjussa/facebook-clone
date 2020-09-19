import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgmEMkHTm65zDbm9f4nNNTW_uAkQc11_I",
  authDomain: "facebook-clone-26265.firebaseapp.com",
  databaseURL: "https://facebook-clone-26265.firebaseio.com",
  projectId: "facebook-clone-26265",
  storageBucket: "facebook-clone-26265.appspot.com",
  messagingSenderId: "911800967997",
  appId: "1:911800967997:web:ef87a3b8194316da035b54",
  measurementId: "G-GH46C02FPD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
