import { db } from "./firebase.js";
import { doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js'


// Add a new document in collection
document.getElementById('submit-btn').addEventListener('click', async function (e) {
    e.preventDefault()
    const docRef = doc(db, "accounts", document.getElementById('username').value);
    const docSnap = await getDoc(docRef);
    console.log(docSnap);

    if (docSnap.exists()) {
        alert("Username already taken!");
    } else {
        console.log('etrgewrgeroigreoig')
        const username = document.getElementById('username').value
        const response = await setDoc(doc(db, "accounts", username), {
            username: username,
            score: 0,
            password: document.getElementById('password').value
        })
        window.location.href = 'profile.html';
    }
})

