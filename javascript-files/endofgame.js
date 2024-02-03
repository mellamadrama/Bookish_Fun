import { db } from "./firebase.js";
import { doc, increment, updateDoc } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js'

const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');

document.getElementById("score").innerText = score;
document.getElementById("scores").innerText = score;
document.getElementById("points").innerText = score;

document.getElementById('exit').addEventListener('click', async function (e) {
    e.preventDefault()

    const acc = localStorage.getItem("accounts");
    const points = doc(db, "accounts", acc);

    await updateDoc(points, {
    score: increment(score)
    });
    window.location.href = 'index.html';

});