var highScore = document.querySelector("highScore")
var timer = document.getElementById('timer')
var title = document.querySelector("title")
var questions = document.querySelector("lead")
var button = document.querySelector("button")
var progress = document.querySelector("progress-bar")

 /// setting timer 
var secondsLeft = 30

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.innerHTML = "Timer : " + secondsLeft 
  
      if(secondsLeft === 0)
      {
        clearInterval(timerInterval);//so it wont count down 
        // once it reaches 0 it would call sendmessage functon
      }
  
    }, 1000);
  }

/// button push then quiz starts

function startQuiz() {
    setTime()
}

button.addEventListener("click", startQuiz)