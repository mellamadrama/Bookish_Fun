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
quiz[21] = new Question("“God made him, and therefore let him pass for a man.”", "The Merchant of Venice", "Much Ado About Nothing", "As You Like It", "Twelfth Night");
quiz[22] = new Question("“If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge?”", "The Merchant of Venice", "Hamlet", "King Lear", "Macbeth");
quiz[23] = new Question("“All that glisters is not gold.”", "The Merchant of Venice", "Julius Caesar", "Paradise Lost", "To Kill a Mockingbird");
quiz[24] = new Question("“Present fears/ Are less than horrible imaginings.”", "Macbeth", "A Streetcar Named Desire", "Of Mice and Men", "Much Ado About Nothing");
quiz[25] = new Question("“False face must hide what the false heart doth know.”", "Macbeth", "Brave New World", "King Lear", "An Inspector Calls");
quiz[26] = new Question("“If it were done when ’tis done, then ’twere well/ It were done quickly.”", "Macbeth", "Foul is Fair", "Othello", "The Great Gatsby");
quiz[27] = new Question("“Its not a contest about whose days suck the most. The point is we all have to put up with the bad days.”", "Wonder", "Out of My Mind", "Fish in a Tree", "Restart");
quiz[28] = new Question("“Funny how sometimes you worry a lot about something and it turns out to be nothing.”", "Wonder", "Ugly", "Firegirl", "Mockingbird");
quiz[29] = new Question("“I wish every day could be Halloween. We could all wear masks all the time. Then we could walk around and get to know each other before we got to see what we looked like under the masks.”", "Wonder", "Forget Me Not", "Full Cicada Moon", "Lucky Broken Girl");
quiz[30] = new Question("“Greatness lies not in being strong, but in the right using of strength.”", "Wonder", "Rain Reign", "Holes", "Save Me a Seat");
quiz[31] = new Question("“When you feel discontented, think over your blessings, and be grateful.”", "Little Women", "The Makioka Sisters", "Jane Eyre", "Pride and Prejudice");
quiz[32] = new Question("“I don’t like to doze by the fire. I like adventures, and I’m going to find some.”", "Little Women", "The Nightingale", "A Magic Steeped in Poison", "Emma");
quiz[33] = new Question("“You are the gull, Jo, strong and wild, fond of the storm and the wind, flying far out to sea, and happy all alone.”", "Little Women", "The Secret Garden", "Anne of Green Gables", "Wuthering Heights");
quiz[34] = new Question("“You don’t need scores of suitors. You need only one, if he’s the right one.”", "Little Women", "To Kill a Mockingbird", "Anna Karenina", "A Tree Grown in Brooklyn");
quiz[35] = new Question("“We’ve got to have rules and obey them. After all, we’re not savages. We’re English, and the English are best at everything.”", "Lord of the Flies", "The Hunger Games", "Brave New World", "The Handmaid's Tale");
quiz[36] = new Question("“Kill the pig. Cut her throat. Spill her blood.”", "Lord of the Flies", "1984", "Battle Royale", "A Clockwork Orange");
quiz[37] = new Question("“There aren’t any grownups. We shall have to look after ourselves.”", "Lord of the Flies", "Battle Royale", "The Coral Island", "The Picture of Dorian Gray");
quiz[38] = new Question("“It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.”", "Pride and Prejudice", "Sense and Sensibility", "Austenland", "Longbourn");
quiz[39] = new Question("“They walked on, without knowing in what direction. There was too much to be thought, and felt, and said, for attention to any other objects.”", "Pride and Prejudice", "Pride", "The House of Mirth", "Eligible");
quiz[40] = new Question("“Had I been in love, I could not have been more wretchedly blind. But vanity, not love, has been my folly.”", "Pride and Prejudice", "Little Women", "The Convenient Marriage", "Northanger Abby");
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