import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAikldPyLb9DjaEliSux2lC268MkwpWKx0",
  authDomain: "challenge-9415e.firebaseapp.com",
  projectId: "challenge-9415e",
  storageBucket: "challenge-9415e.appspot.com",
  messagingSenderId: "769215661584",
  appId: "1:769215661584:web:1e34a71d0efad49fa6ec95",
  measurementId: "G-K1W2YS4KZ5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };