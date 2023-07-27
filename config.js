import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAHk0gHBfTyJigThdUMOPpmqEA5swF5uNg",
  authDomain: "ciclista-eletronico-4.firebaseapp.com",
  projectId: "ciclista-eletronico-4",
  storageBucket: "ciclista-eletronico-4.appspot.com",
  messagingSenderId: "281353467356",
  appId: "1:281353467356:web:86fb02e2012605ab9e8b19"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
