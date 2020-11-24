//// creating Questions 
var questions = [
  {
    ques: "place holder",
    choices: ["1", "2", "3", "4"],
    answer: "1"
  },
  {
    ques: "place holder 2",
    choices: ["1", "2", "3jhlkj", "4"],
    answer: "2"
  },
  {
    ques: "place holder 3",
    choices: ["1", "2hjlb", "3", "4"],
    answer: "3"
  },
  {
    ques: "place holder 4",
    choices: ["1jklh", "2", "3", "4"],
    answer: "4"
  },
 ];

 
//assign attributes
var highScore = document.querySelector(".highScore");
var timer = document.getElementById('timer');
var title = document.querySelector("#title");
var p = document.querySelector(".lead");
var button = document.querySelector(".button");
var progress = document.querySelector(".progress-bar");
var home = document.querySelector(".home")
var questionSpot = document.querySelector("#questionSpot")
var ul = document.createElement("ul");


//  score
var scores = 0;
var showQuestions = 0;

 /// setting timer 
var secondsLeft = 30;
var minusTime = 5;
var timerInterval = 0;

///once you press on the button again it gives you another 30 seecons 
button.addEventListener("click", function() {
    button.setAttribute("style", "display: none")
  if (timerInterval === 0){
     timerInterval = setInterval(function() {
      secondsLeft--;
      timer.innerHTML = "Timer : " + secondsLeft 
      // button.innerHTML = secondsLeft
      if(secondsLeft <= 0){
        clearInterval(timerInterval);//so it wont count down 
        finish(); // calls finish
      }
    }, 1000);
  }
  display(showQuestions);
})
  
  // Give Question to the user 

  function display(showQuestions) {
    // clear content 
    questionSpot.innerHTML = "";
    ul.innerHTML = "";
    // loop trough the array of questions 
    for (var i = 0; i < questions.length; i++){
      var userQuestion = questions[showQuestions].ques;
      var userChoices = questions[showQuestions].choices;
      questionSpot.textContent= userQuestion;
    }
      userChoices.forEach(function(index) {
        var listItem = document.createElement("li");
        listItem.textContent = index;
        questionSpot.appendChild(ul);
        ul.appendChild(listItem);
        listItem.addEventListener("click", (compare));
      })
  }

  // Compare choice with answer
  function compare(event) {
    var element = event.target;
    //matching string to the right answer 
    if(element.matches("li")) {
      // div for telling the user if its right or wrong 
      var createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");
      if (element.textContent == questions[showQuestions].answer ) {
        scores = scores + 5;
        createDiv.textContent = "Correct"
      } else {
        // penalty
        secondsLeft = secondsLeft - minusTime;
        createDiv.textContent = "Wrong"
      }
    }
    showQuestions++;
    
    if (showQuestions >= questions.length) {
      finish();
      createDiv.innerHTML = ""
      var optButton = document.createElement("button");
      optButton.innerHTML = "start again"
      createDiv.appendChild(optButton)
      optButton.addEventListener("click", function() {
        optButton.setAttribute("style", "display: none");
        window.location.replace("index.html");
      })

    } else {
      display(showQuestions);
    }
    questionSpot.appendChild(createDiv);
  }

  /// when user is finish 
  function finish() {
    questionSpot.innerHTML = "";
    timer.innerHTML = "";
    title.setAttribute("id", "done")
    title.textContent = "Finish!"
    questionSpot.appendChild(title)
    questionSpot.appendChild(p)
    /// show score
    if (secondsLeft >= 0) {
      var timeRemaining = secondsLeft;
      clearInterval(timerInterval);
      p.textContent = "Your final score is: " + scores;
     }
  }




