var myScore = localStorage.getItem("score");
var myScorediv = document.querySelector("#HighScores h3");

myScorediv.innerHTML = myScore;

