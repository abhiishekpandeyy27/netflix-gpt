// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxC-QgIXqtbJB1njq6uT5O7p6eMQVn9KA",
  authDomain: "netflixgpt-44631.firebaseapp.com",
  projectId: "netflixgpt-44631",
  storageBucket: "netflixgpt-44631.appspot.com",
  messagingSenderId: "1037456456792",
  appId: "1:1037456456792:web:eca9e7b6cbcbb760aa1e2d",
  measurementId: "G-L9L3EX3YXZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
