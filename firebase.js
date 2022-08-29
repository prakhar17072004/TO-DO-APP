const firebaseConfig = {
    apiKey: "AIzaSyCcaF-m7L579h2A7sYW4MD3p48LzkN6kuk",
    authDomain: "to-do-live-7ea21.firebaseapp.com",
    projectId: "to-do-live-7ea21",
    storageBucket: "to-do-live-7ea21.appspot.com",
    messagingSenderId: "32209825193",
    appId: "1:32209825193:web:69ba0f7bab3cd8c6ffa8b8",
    measurementId: "G-RR1K7NZ6E3"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();