import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBxIx_xzCZAq3PMvF5B6Klhu1cSGzjdKoI",
  authDomain: "medswap-16c4b.firebaseapp.com",
  databaseURL: "https://medswap-16c4b-default-rtdb.firebaseio.com",
  projectId: "medswap-16c4b",
  storageBucket: "medswap-16c4b.appspot.com",
  messagingSenderId: "1089823986332",
  appId: "1:1089823986332:web:9aee073dc6a5fe5285d359",
  measurementId: "G-4ZXJ5FGJ83",
  databaseURL: "https://medswap-16c4b-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

export default app;

