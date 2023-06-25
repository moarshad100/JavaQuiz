var startClick = document.querySelector("#start");
var questionsEL = document.querySelector(".questions");
var timerEl = document.querySelector(".timer");
timeLeft = 75;

startClick.addEventListener("click",function(){
	var startScreenEl = document.querySelector('.start-screen');
	startScreenEl.setAttribute('class','hide');
	questionsEL.classList.remove("hide");
	setTime();

});

function setTime(){
	var TimerInterval = setInterval(function(){
		timeLeft--;
		timerEl.textContent = "time :" + timeLeft ;
		if(timeLeft === 0){
			clearInterval();
		}
	}, 1000);
}
