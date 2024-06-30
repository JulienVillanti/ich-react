import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyAltLeN4YY3QMhfz8BJ8furp_KMDMKbXBw",

    authDomain: "ich-project-cd04e.firebaseapp.com",

    projectId: "ich-project-cd04e",

    storageBucket: "ich-project-cd04e.appspot.com",

    messagingSenderId: "185100603652",

    appId: "1:185100603652:web:45e63bc2506f2390c7c051",

    measurementId: "G-NGGSSB1K6S"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, app } ;