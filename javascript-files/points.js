import { db } from "./firebase.js";
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js'

let score = 0;
const acc = localStorage.getItem("accounts");
const pointsSystem = doc(db, "accounts", acc);

getDoc(pointsSystem).then(function (data){
  console.log(data.data().score);
  score = data.data().score;
  document.getElementById("score").innerText = score
  document.getElementById("point").innerText = score
});
