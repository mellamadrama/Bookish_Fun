const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');

document.getElementById("score").innerText = score;