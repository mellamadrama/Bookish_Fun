import { db } from "./firebase.js";
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js'

document.getElementById('submit').addEventListener('click', async function (e) {
    e.preventDefault()
    const docRef = doc(db, "accounts", document.getElementById('username').value);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        if (document.getElementById('password').value == docSnap.data().password)
        {
            const username = document.getElementById('username').value
            localStorage.setItem("accounts", username);
            window.location.href = 'profile.html';
        }
        else
        {
            alert("Wrong password!");
        }
    }
    else {
        alert("Username does not exist!");
    }
})

