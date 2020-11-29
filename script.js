//// creating Questions 
var questions = [
  {
    ques: "Which of the following is correct about features of JavaScript?",
    choices: ["JavaScript is is complementary to and integrated with HTML.", "JavaScript is open and cross-platform.", "Both of the above.", "All of the above."],
    answer: "Both of the above."
  },
  {
    ques: "Which of the following is a valid type of function javascript supports?",
    choices: ["getIndex()", "location()", "indexOf()", "None of the above."],
    answer: "indexOf()"
  },
  {
    ques: "Which built-in method returns the characters in a string beginning at the specified location?",
    choices: ["substr()", "getSubstring()", "slice()", "None of the above."],
    answer: "substr()"
  },
  {
    ques: "The change in electrical charge that occurs in a neuron when a nerve impulse is transmitted is known as the: ",
    choices: ["action potential", "synaptic change", "refractory period", "ionic charge"],
    answer: "action potential"
  },
  {
    ques: "Which of the following function of Number object defines how many total digits to display of a number?",
    choices: ["toExponential()", "toFixed()", "toLocaleString()", "toPrecision()"],
    answer: "toPrecision()"
  },
  {
    ques: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
    choices: ["slice()", "split()", "substr()", "substring()"],
    answer: "substring()"
  },
  {
    ques: "Which of the following function of String object returns a string representing the specified object?",
    choices: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "substring()"],
    answer: "toString()"
  },
  {
    ques: "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?",
    choices: ["sup()", "small()", "strike()", "sub()"],
    answer: "strike()"
  },
  {
    ques: "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array??",
    choices: ["push()", "join()", "pop()", "map()"],
    answer: "map()"
  },
  {
    ques: "Which of the following function of Array object sorts the elements of an array?",
    choices: ["toSource()", "sort()", "toString()", "unshift()"],
    answer: "sort()"
  },
 ];

 
//assign attributes
var heading = document.getElementById("h1");
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
var secondsLeft = 90;
var minusTime = 5;
var timerInterval = 0;

///once you press on the button again it gives you another 30 seecons 
button.addEventListener("click", function() {
    button.setAttribute("style", "display: none");
  if (timerInterval === 0){
     timerInterval = setInterval(function() {
      secondsLeft--;
      timer.innerHTML = "Timer : " + secondsLeft 
     
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
      title.textContent= userQuestion;
      questionSpot.appendChild(title)
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
        scores = scores + secondsLeft + 5;
        createDiv.textContent = "Correct"
      } else {
        // penalty
        secondsLeft = secondsLeft - minusTime;
        createDiv.textContent = "Wrong! -5 The answer is : " + questions[showQuestions].answer ;
      }
    }
    showQuestions++;  
    
    if (showQuestions >= questions.length) {
      finish();
      createDiv.innerHTML = ""
      buttonDiv = document.createElement("div");
      questionSpot.appendChild(buttonDiv);
      var optButton = document.createElement("button");
      optButton.setAttribute("type", "button")
      optButton.setAttribute("class", "btn btn-info")
      optButton.innerHTML = "start again"
      buttonDiv.appendChild(optButton)
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
      clearInterval(timerInterval);
      p.textContent = "Your final score is: " + scores;
     }

      // creating label
      var createLabel = document.createElement("label");
      createLabel.setAttribute("id", "createLabel");
      createLabel.textContent = "Enter your name: ";

      questionSpot.appendChild(createLabel);

      // insert input 
      var createInput = document.createElement("input");
      createInput.setAttribute("type", "text");
      createInput.setAttribute("id", "name");
      createInput.textContent = "";

      questionSpot.appendChild(createInput);

      // submit button 
      var createSubmit = document.createElement("button");
      createSubmit.setAttribute("type", "button");
      createSubmit.setAttribute("class", "btn btn-info");
      createSubmit.setAttribute("id", "Submit");
      createSubmit.textContent = "Submit";

      questionSpot.appendChild(createSubmit);
     

      //when click submit
      createSubmit.addEventListener("click", function (){
        createSubmit.setAttribute("style", "display: none")
        questionSpot.textContent = "";
        ul.innerText =""
        var name = createInput.value;
        if(name === null) {
        name.innerHTML = "Please enter name"
        } else {
        var finalScore = {
          name : name,
          scores: scores
        }
        var showScores = localStorage.getItem("showScores");
        if (showScores == null) {
            showScores = [];
            } else {
            showScores = JSON.parse(showScores)
          }
        showScores.push(finalScore); 
        showScores.sort((a, b) => b.scores - a.scores);
        var newScore = JSON.stringify(showScores); 
          localStorage.setItem("showScores", newScore); 
      }

        /// show highscore webpage/
        var heading = document.createElement("h1")
        questionSpot.appendChild(heading);
        heading.textContent = "Highscores: ";
        heading.setAttribute("style", "font-family: revert")
        
        var showScores = localStorage.getItem("showScores");
        showScores = JSON.parse(showScores);  
        if (showScores !== null) { 
          for (var i = 0 ; i < showScores.length; i++) {
              var createLi = document.createElement("li");
              createLi.textContent = showScores[i].name + " : " + showScores[i].scores;
              createLi.setAttribute("style", "font-family: revert")
              document.createElement("ul")
              ul.appendChild(createLi);
              questionSpot.appendChild(ul)
            }}
              
        //home button
        buttonDiv = document.createElement("div");
        questionSpot.appendChild(buttonDiv);
        var optButton = document.createElement("button");
        optButton.setAttribute("type", "button")
        optButton.setAttribute("class", "btn btn-info")
        optButton.innerHTML = "start again"
        buttonDiv.appendChild(optButton)
        optButton.addEventListener("click", function() {
          optButton.setAttribute("style", "display: none");
          window.location.replace("index.html");
        })


      }) 
}
  
highScore.addEventListener("click", function () {
  return finish()
    
  })
