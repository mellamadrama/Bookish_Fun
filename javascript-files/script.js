import { db } from "./firebase.js";
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js'

// this is the java for the slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides fade");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

let score = 0;
const acc = localStorage.getItem("accounts");
const pointsSystem = doc(db, "accounts", acc);

getDoc(pointsSystem).then(function (data){
  console.log(data.data().score);
  score = data.data().score;
  document.getElementById("score").innerText = score
});