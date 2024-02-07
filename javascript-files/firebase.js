import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyDWKqS5pAsH_ni-GAyBNQ6t2tyUH2jfpG4",
    authDomain: "bookish-fun.firebaseapp.com",
    projectId: "bookish-fun",
    storageBucket: "bookish-fun.appspot.com",
    messagingSenderId: "962425823624",
    appId: "1:962425823624:web:ab35e1ab49c50922381a3d",
    measurementId: "G-6SBNKLV97R"
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
