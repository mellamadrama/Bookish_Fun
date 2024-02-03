function showPage() {
  document.getElementById("loader").style.display = "none";

  document.getElementById("mainpage").style.display = "block";
}

setTimeout(showPage, 5000);

import { db } from "./firebase.js";
import { doc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js';

//variables
var quiz = [];
quiz[0] = new Question("“I am so dreadfully sick of spewing wireless code.”", "Codename Verity", "The Girl Who Survived", "Harry Potter", "How Do You Live");
quiz[1] = new Question("“Stay gold, Ponyboy. Stay gold.”", "The Outsiders", "Romeo & Juliet", "Sherlock Holmes", "The Great Gatsby");
quiz[2] = new Question("“It's like being in love, discovering your best friend.”", "Codename Verity", "Sherlock Holmes", "Pride & Prejudice", "To Kill A Mockingbird");
quiz[3] = new Question("“A rose by any other name would smell as sweet.”", "Romeo & Juliet", "Pride & Prejudice", "How Do You Live", "The Little Prince");
quiz[4] = new Question("“KISS ME, HARDY! Kiss me, QUICK!”", "Codename Verity", "The Hardy Boys", "Lord of the Flies", "Fahrenheit 451");
quiz[5] = new Question("“Parting is such sweet sorrow.”", "Romeo & Juliet", "Frankenstein", "Don Quixote", "Wuthering Heights");
quiz[6] = new Question("“A part of me will always be unflyable, stuck in the climb.”", "Codename Verity", "Little Women", "Adventures of Huckleberry Finn", "The Kite Runner");
quiz[7] = new Question("“Get smart and nothing can touch you.”", "The Outsiders", "The Alchemist", "The Picture of Dorian Gray", "The Great Gatsby");
quiz[8] = new Question("“Will all great Neptune's ocean wash this blood/ Clean from my hand?”", "Macbeth", "The Merchant of Venice", "Hamlet", "Julius Caesar");
quiz[9] = new Question("“But a part of me lies buried in lace and roses on a riverbank in France-a part of me is broken off forever.”", "Codename Verity", "Rose Under Fire", "The Paper Girl of Paris", "The Rose Code");
quiz[10] = new Question("“A multitude of people and yet a solitude.”", "A Tale of Two Cities", "Oliver Twist", "Les Misérables", "Pride and Prejudice");
quiz[11] = new Question("“Angry, and half in love with her, and tremendously sorry, I turned away.”", "The Great Gatsby", "Animal Farm", "Fahrenheit 451", "The Sun Also Rises");
quiz[12] = new Question("“These violent delights have violent ends.”", "Romeo & Juliet", "These Violent Delights", "Hamlet", "Bright Smoke, Cold Fire");
quiz[13] = new Question("“But I have told the truth. Isn't that ironic? They sent me because I am so good at telling lies. But I have told the truth.”", "Codename Verity", "Fahrenheit 451", "I Must Betray You", "The Enigma Game");
quiz[14] = new Question("“You can't win. You know that, don't you? It doesn't matter if you whip us, you'll still be where you were before, at the bottom.”", "The Outsiders", "Lord of the Flies", "Of Mice and Men", "The Catcher in the Rye");
quiz[15] = new Question("“You're afraid of making mistakes. Don't be. Mistakes can be profited by.”", "Fahrenheit 451", "Codename Verity", "The Giver", "1984");
quiz[16] = new Question("“A book is a loaded gun.”", "Fahrenheit 451", "The Giver", "2084", "V for Vendetta");
quiz[17] = new Question("“Stuff your eyes with wonder... live as if you’d drop dead in ten seconds.”", "Fahrenheit 451", "Oryx and Crake", "Animals", "The Illustrated Man");
quiz[18] = new Question("“We gained control of many things. But we had to let go of others.”", "The Giver", "Divergent", "Wonder", "The Maze Runner");
quiz[19] = new Question("“I am fortune's fool!”", "Romeo & Juliet", "Macbeth", "A Midsummer Night's Dream", "Othello");
quiz[20] = new Question("“By my soul I swear/ There is no power in the tongue of man/ To alter me.”", "The Merchant of Venice", "Julius Caesar", "Othello", "Henry V");
var randomQuestion;
var answers = [];
let currentScore = 0;

let numofWrongAns = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
    this.wrongAnswer3 = wrongAnswer3;
}

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2, randomQuestion.wrongAnswer3];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
  document.getElementById("answerD").value= answers[3];
  document.getElementById("answerD").innerHTML= answers[3];

}

document.getElementById("answerA").addEventListener("click", async function(){
  var answerA = document.getElementById("answerA").value;
  await checkAnswer(answerA);
});

document.getElementById("answerB").addEventListener("click", async function(){
  var answerB = document.getElementById("answerB").value;
  await checkAnswer(answerB);
});

document.getElementById("answerC").addEventListener("click", async function(){
  var answerC = document.getElementById("answerC").value;
	await checkAnswer(answerC);
});

document.getElementById("answerD").addEventListener("click", async function(){
  var answerD = document.getElementById("answerD").value;
  await checkAnswer(answerD);
});

function adjustScore(isCorrect) {
  if (isCorrect) {
    currentScore++;
  } else {
    if (currentScore > 0) {
      currentScore--;
  	}
  }
  document.getElementById("score").innerHTML = currentScore;
  document.getElementById("scores").innerHTML = currentScore;
}

async function checkAnswer(answer) {  
    if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
    } 
    else { 
    alert("Wrong!");
    adjustScore(false);
    numofWrongAns += 1;
    }	  
    if (numofWrongAns == 3 || currentScore == 20) {
    window.location.href = `endofgame.html?score=${currentScore}`;
    const acc = localStorage.getItem("accounts");
    const pointsSystem = doc(db, "accounts", acc);

    await updateDoc(pointsSystem, {
    score: currentScore
    });
    }
}