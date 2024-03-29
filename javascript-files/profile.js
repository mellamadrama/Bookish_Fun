import { db } from "./firebase.js";
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js';

const x = document.getElementById("profile");
x.addEventListener("click", function(e){
  e.preventDefault();
});

let score = 0;
let user = '';
const acc = localStorage.getItem("accounts");
if (acc)
{
    document.getElementById("out").style.display = "display";
    document.getElementById("in").style.display = "none";
}
else
{
  document.getElementById("out").style.display = "none";
  document.getElementById("in").style.display = "display";
}
const pointsSystem = doc(db, "accounts", acc);
getDoc(pointsSystem).then(function (data) {
  score = data.data().score;
  document.getElementById("score").innerText = score;
  document.getElementById("point").innerText = score;

  user = data.data().username;
  document.getElementById("user").innerText = user;
});

document.getElementById("out").addEventListener("click", async function(){
    localStorage.removeItem("accounts");
});

