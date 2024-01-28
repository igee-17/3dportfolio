// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDv34j9PAN0Jvtdyu-9p70IkWR4LM08C4A",
    authDomain: "portfolio-bdd68.firebaseapp.com",
    projectId: "portfolio-bdd68",
    storageBucket: "portfolio-bdd68.appspot.com",
    messagingSenderId: "1095669920208",
    appId: "1:1095669920208:web:b676a1ec5d34a4bc5349d5",
    measurementId: "G-LKGHZ34XN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);