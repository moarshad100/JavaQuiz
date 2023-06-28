var myScore = localStorage.getItem("score");
var myInitial = localStorage.getItem("initials");
var myScorediv = document.querySelector("#HighScores h3");
var clearEl = document.querySelector("#clearBtn");
var backEl = document.querySelector("#GoBackBtn");
myScorediv.innerHTML = myInitial +"   "+myScore;



clearEl.addEventListener("click",function(){
	localStorage.clear();
})
backEl.addEventListener("click",function(){
	document.location = "index.html"
})