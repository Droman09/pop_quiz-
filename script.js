
//assign attributes
var highScore = document.querySelector(".highScore");
var timer = document.getElementById('timer');
var title = document.querySelector(".title");
var questions = document.querySelector(".lead");
var button = document.querySelector(".button");
var progress = document.querySelector(".progress-bar");
var home = document.querySelector(".home")
var questionSpot = document.querySelector("#questionSpot")
/// creating a button 
var optButton = document.createElement("button");

//making list for quesitons options later append them to the p element 
var ul = document.createElement("ul");
var li = document.createElement("li");


//// creating Questions 
var questions = [
  {
    title: "place holder",
    choices: ["1", "2", "3", "4"],
    answer: "1"
  },
  {
    title: "place holder 2",
    choices: ["1", "2", "3", "4"],
    answer: "2"
  },
  {
    title: "place holder 3",
    choices: ["1", "2", "3", "4"],
    answer: "3"
  },
  {
    title: "place holder 4",
    choices: ["1", "2", "3", "4"],
    answer: "4"
  },
 ]

//var reset 
var resetTitle = title
var resetQuestions = questions

//  score
var showQuestions = 0
var scores = 0

 /// setting timer 
var secondsLeft = 1
var minusTime = 5;


///once you press on the button again it gives you another 30 seecons 
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.innerHTML = "Timer : " + secondsLeft 
      // button.innerHTML = secondsLeft
      if(secondsLeft === 0)
      {
        clearInterval(timerInterval);//so it wont count down 
        finish() // calls finish
      }
    }, 1000);
    display(showQuestions);
  }
  
  // Give Question to the user 

  function display(showQuestions) {
    questionSpot.innerHTML = "";
    ul.innerHTML = ""
    for (var i = 0; i < questions.lenght; i++){
      var userQuestion = questions[showQuestions].title;
      var userChoices = questions[showQuestions].choices;
      questionSpot.textContent = userQuestion;
    }
    userChoices.forEach(function(item){
        li.textContent = item;
        questionSpot.appendChild(ul);
        ul.appendChild(li);
    }
    )
  }


/// button push then quiz starts
function startQuiz() {
  /// reset title and text 
    resetTitle.innerHTML = ""
    resetQuestions.innerHTML = ""
    button.style.display = "none"
    setTime()
}

//events listener
button.addEventListener("click", startQuiz)


