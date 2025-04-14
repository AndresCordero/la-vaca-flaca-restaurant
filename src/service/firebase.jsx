// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpL_sfq4L6oTGcqQjOev994fUe8HmLrAQ",
    authDomain: "vaca-flaca-restaurant.firebaseapp.com",
    projectId: "vaca-flaca-restaurant",
    storageBucket: "vaca-flaca-restaurant.firebasestorage.app",
    messagingSenderId: "836972216788",
    appId: "1:836972216788:web:fab11e7f3ee765552c5641"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)