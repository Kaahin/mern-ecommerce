import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs5n5OZKAK57G_KlebJHhby7Phcilk9EQ",
  authDomain: "mern-ecommerce-f2095.firebaseapp.com",
  projectId: "mern-ecommerce-f2095",
  storageBucket: "mern-ecommerce-f2095.appspot.com",
  messagingSenderId: "464214171034",
  appId: "1:464214171034:web:9d1485122c676650f3ee23",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
