setTimeout(() => {
  document.getElementById("loader").style.display = "none";

  document.getElementById("mainpage").style.display = "block";
}, 5000);

import { db } from "./firebase.js";
import { doc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js';

//variables
var quiz = [];
quiz[0] = new Question("“All I ever wanted was to reach out and touch another human being not just with my hands but with my heart.”", "Shatter Me", "This Woven Kingdom", "Divergent", "Skyhunter");
quiz[1] = new Question("“Raindrops are my only reminder that clouds have a heartbeat. That I have one, too.”", "Shatter Me", "The Hunger Games", "Delirium", "Scythe");
quiz[2] = new Question("“I've been screaming for years and no one has ever heard me.”", "Shatter Me", "A Psalm of Storms and Silence", "We Hunt the Flame", "Serpent & Dove");
quiz[3] = new Question("“I threw myself into that fire, threw myself into it, into him, and let myself burn.”", "A Court of Thorns and Roses", "From Blood and Ash", "A Shadow in the Ember", "House of Earth and Blood");
quiz[4] = new Question("“And I wondered if love was too weak a word for what he felt, what he’d done for me. For what I felt for him.”", "A Court of Thorns and Roses", "Throne of Glass", "Realm Breaker", "A Curse So Dark and Lonely");
quiz[5] = new Question("“To the stars who listen––and the dreams that are answered.”", "A Court of Thorns and Roses", "Nocturne", "The Witch Collector", "Witches Steeped in Gold");
quiz[6] = new Question("“Libraries were full of ideas ― perhaps the most dangerous and powerful of all weapons.”", "Throne of Glass", "Shadow and Bone", "Red Queen", "The Cruel Prince");
quiz[7] = new Question("“Sometimes, the wicked will tell us things just to confuse us–to haunt our thoughts long after we’ve faced them.”", "Throne of Glass", "Six of Crows", "Children of Blood and Bone", "Cinder");
quiz[8] = new Question("“You’re afraid. Of yourself more than anyone else in the world.”", "Kingdom of Ash", "Daughter of the Forest", "Kingdom of the Wicked", "The Rose and The Dagger");
quiz[9] = new Question("“And there's nothing wrong with being a lizard either. Unless you were born to be a hawk.”", "Shadow and Bone", "LegendBorn", "The Gilded Ones", "Wicked Saints");
quiz[10] = new Question("“They are orphans again, with no true home but each other and whatever life they can make together on the other side of the sea.”", "Shadow and Bone", "We Hunt the Flame", "Ninth House", "Crooked Kingdom");
quiz[11] = new Question("“The thought filled me with grief, grief for the dreams we'd shared, for the love I'd felt, for the hopeful girl I would never be again.”", "Shadow and Bone", "King of Scars", "A Darker Shade of Magic", "The City of Brass");
quiz[12] = new Question("“‘A guy who thinks he knows everything,’ I muttered. ‘That’s new.‘”", "The Inheritance Games", "Defy Me", "One of Us Is Lying", "Caraval");
quiz[13] = new Question("“It wasn’t my best look, but I’d gone to school with the same kids my whole life. I was wallpaper. No one was looking.”", "The Inheritance Games", "Truly Devious", "We Were Liars", "The Rosewood Hunt");
quiz[14] = new Question("“If yes is no and once is never, then how many sides does a triangle have?”", "The Inheritance Games", "Everyone's Thinking It", "Nine Liars", "Their Vicious Games");
quiz[15] = new Question("“Where’s the glory in repeating what others have done?”", "The Lightning Thief", "Circe", "Harry Potter", "Fablehaven");
quiz[16] = new Question("“I’d stay here, happy forever, playing games forever, and soon I’d forget my mom, and my quest, and maybe even my own name.”", "The Lightning Thief", "Storm Runner", "Wings of Fire", "Keeper of the Lost Cities");
quiz[17] = new Question("“She’d also called me brave...unless she was talking to the catfish.”", "The Lightning Thief", "Aru Shah", "39 Clues", "Five Kingdoms");
quiz[18] = new Question("“Sometimes, son, […] you need to help the heroes along.”", "Steelheart", "Skyward", "Renegades", "Hench");
quiz[19] = new Question("“She can shoot like a dream and she carries tiny grenades in her top, a bit of my addled mind thought. I think I might be in love.”", "Steelheart", "Forging Hephaestus", "Elantris", "Warbreaker");
quiz[20] = new Question("“He was right. I was letting myself get distracted, like a rabbit doing math problems instead of looking for foxes.”", "Steelheart", "Worm", "Vicious", "Ex-Heroes");
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
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

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