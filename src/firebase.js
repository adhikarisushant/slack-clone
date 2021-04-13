import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDGqeRH2hXZ-wnJgSoRv0Warp-Fn2N_nkU",
  authDomain: "slack-clone-s.firebaseapp.com",
  projectId: "slack-clone-s",
  storageBucket: "slack-clone-s.appspot.com",
  messagingSenderId: "28475702014",
  appId: "1:28475702014:web:25e9611dfe8b8b6492c3af"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };