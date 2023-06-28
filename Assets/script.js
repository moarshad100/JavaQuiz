var startClick = document.querySelector("#start");
var questionsEL = document.querySelector(".questions");
var timerEl = document.querySelector(".timer");
var questionText = document.querySelector(".questions h1");
var q1El = document.querySelector("#Q1");
var q2El = document.querySelector("#Q2");
var q3El = document.querySelector("#Q3");
var q4El = document.querySelector("#Q4");
var resultEl = document.querySelector(".result");
var endScreenEl = document.querySelector(".end-screen");
var endscreenText = document.querySelector(".end-screen h1");
var endscreenScoreText = document.querySelector(".end-screen h3");
var submitButton = document.querySelector(".submitBtn");
var i = 0;
var timeLeft = 75;








//Create a variable for the questions

const allQuestions = [
  {
    question: "Commonly used data types DO Not Include:",
    answers: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers"
    },
    correctAnswer: "strings"
  },
  {
    question: "condition in an if/else statement is enclosed with______",
    answers: {
      a: "quotes",
      b: "curly brackets",
      c: "paranthesis",
      d: "square brackets"
    },
    correctAnswer: "curly brackets"
  },
  {
    question: "Arrays in JavaScript can be used to store_______",
    answers: {
      a: "number and strings",
      b: "other arrays",
      c: "booleans",
      d: "all of the above"
    },
    correctAnswer: "all of the above"
  },
  {
    question: "String Values must be enclosed within _____ when being assigned to variables.",
    answers: {
      a: "commas",
      b: "curly brackets",
      c: "quotes",
      d: "paranthesis"
    },
    correctAnswer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      a: "JavaScript",
      b: "terminal/bash",
      c: "for loops",
      d: "console.log"
    },
    correctAnswer: "console.log"
  }];

//Start Quiz
startClick.addEventListener("click", function () {
  const myInterval = setInterval(myTimer, 1000);
  var startScreenEl = document.querySelector('.start-screen');
  startScreenEl.setAttribute('class', 'hide');
  questionsEL.classList.remove("hide");
  displayQuestions();
});

//Questions are displayed
function displayQuestions() {

  var question1 = allQuestions[i];
  questionText.textContent = question1.question;
  q1El.textContent = question1.answers.a;
  q2El.textContent = question1.answers.b;
  q3El.textContent = question1.answers.c;
  q4El.textContent = question1.answers.d;

}


//Check if the answers are right
function checkAnswer() {
  console.log(event.target.textContent);
  var choice = event.target.textContent;
  console.log(allQuestions[i].correctAnswer);
  var selectedAnswer = allQuestions[i].correctAnswer;
  if (choice === selectedAnswer) {
    console.log("correct");
    resultEl.textContent = "Correct Answer";
  }
  else {
    console.log("incorrect");
    resultEl.textContent = "Incorrect Answer";
    timeLeft -= 15;
  }
  i++;
  if (i > 4) {
    questionsEL.setAttribute('class', 'hide');
    endScreenEl.classList.remove("hide");
    var score = timeLeft;
    displayLastPage();
    clearInterval(myInterval);
    return 0;
  }
  displayQuestions();

}

//Once all the questions are answered go to the last Page
function displayLastPage() {
  timerEl.setAttribute("class", "hide");

  endscreenText.textContent = "All Done!";
  const textArea = document.querySelector(".nameText");
  var finalscore;

  if (timeLeft > 0) {
    finalscore = timeLeft;
  }
  else {
    finalscore = 0;
  }
  endscreenScoreText.textContent = "your final score is: " + finalscore;
  console.log(finalscore);

  // Local Storage
  submitButton.addEventListener("click", function () {
    localStorage.setItem("score", JSON.stringify(finalscore));
    localStorage.setItem("initials", JSON.stringify(textArea.value));
    document.location = "index.html";


  })
}

function addScore(score) {
  testHighScore.push(score);
  localStorage.setItem("highScores", JSON.stringify(testHighScore));
}

q1El.addEventListener("click", function (event) {
  checkAnswer();

})
q2El.addEventListener("click", function (event) {
  checkAnswer();

})
q3El.addEventListener("click", function (event) {
  checkAnswer();

})
q4El.addEventListener("click", function (event) {
  checkAnswer();

})



//create a timer function so the timer can start running once the game starts

function myTimer() {
  timeLeft--;
  timerEl.textContent = "time :" + timeLeft;
  checkIfTimeOut();
}

//check if the time is still left
function checkIfTimeOut() {
  console.log("stop function");
  if (timeLeft === 0) {
    console.log("no time Left");
    clearInterval(myInterval);
  }
}

