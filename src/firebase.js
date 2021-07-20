import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzTkRhoccp3Jz1f_ycILExKvVYKXM55P4",
  authDomain: "linkedin-clone-b1c62.firebaseapp.com",
  projectId: "linkedin-clone-b1c62",
  storageBucket: "linkedin-clone-b1c62.appspot.com",
  messagingSenderId: "771095666354",
  appId: "1:771095666354:web:35712350f47c97bffab3ab",
  measurementId: "G-557D8T6QFL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };

export default db;
