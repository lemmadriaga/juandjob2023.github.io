 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCfVe2Ac-X6vmDaPROKcuqXD-6YAocnDbQ",
   authDomain: "juandjobs-bad1c.firebaseapp.com",
   projectId: "juandjobs-bad1c",
   storageBucket: "juandjobs-bad1c.appspot.com",
   messagingSenderId: "1082758387585",
   appId: "1:1082758387585:web:b853d9581f3f03e22a3a80",
   measurementId: "G-JE560EPG4S"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);