// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import getFirestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe9yttCN0632I_DBLE6LzDE2t8RcyNUXw",
  authDomain: "sammanslaget20024.firebaseapp.com",
  projectId: "sammanslaget20024",
  storageBucket: "sammanslaget20024.appspot.com",
  messagingSenderId: "735855402813",
  appId: "1:735855402813:web:0b0db14efc3d78d47c2f54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get Firestore instance

export default db;
