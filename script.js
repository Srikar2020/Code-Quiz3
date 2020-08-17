var timerEl = document.getElementById('time-left');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-quiz');
var pages = document.querySelector(".page");


//For page user is current 
var currentPage = 0;

// For var page question curent 

var currentQuestion = 0;


//an array for users 

var users = [];


//index for which user 

var userNum;

//If there isnt a user than set userNum to 1

if (JSON.parse(localStorage.getItem("users"))=== null) {
    userNum = 1;
} // If there are users.

else {
    userNum = JSON.parse(localStorage.getItem("users")).length + 1;
}




// Timer that counts down from 5
function countdown() {
  var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {

    if (timeLeft > 0) {
    timerEl.textContent = "" + timeLeft;
    timeLeft--;
    }
    else {
    clearInterval(timeInterval);
    displayMessage();
    }

  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;
// Elements from the DOM
var body = document.body;
var container = document.querySelector(".container");
  
  
var submitBtn = document.querySelector("#submit");  



var highscores = document.querySelector("#highscores");
  
  
  
  

//User page variable

var currentPage = 0;

// Which ever question user is currently on 

var currentQuestion = 0;
  
  
// functions 

function loadPage(n) {
    pages[currentPage].classList.remove("active");
    pages[n].classList.add("active");
    currentPage = n;
}
function loadNextPage() {
    loadPage(currentPage + 1);
    timerEl.textContent = secondsLeft;

    if (currentPage === 1) {
        setTimeout();
    }

    //End of the Quiz
    if (currentPage === 6) {
        ScopedCredential.textContent = secondsLeft;

        clearInterval(timer);
    }
}
  
  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);



// Checking if answer is right or wrong







//User Initials 

var users = []


var ucerNum;

if (JSON.parse(localStorage.getItem("users")) === null) {
    userNum = 1;
}
else {
    userNum = JSON.parse(localStorage.getItem("users")).length + 1;
}






// Questions Arrays 

var questions = [
    { 
        title : "Which out of these data types in JavaScript does not belong here?",
        choices: ["Boolean", "Number", "String", "Lists"],
        answer: "Lists",
    },
    {
        title : "What is not a built-in method in JavaScript?",
        choices: ["Anchor", "Link", "Concat", "Boolean"],
        answer: "Boolean",
    },
    {
        title: "What is not an error type in JavaScript?",
        choices: ["Syntax Error", "Type Error", "Reference Error", "Null Error"],
        answer: "Null Error",
    },
    {
        title: "Which of these is not a built-in methods in JavaScript?",
        choices: ["date", "exec", "pop", "spread"],
        answer: "spread",
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<a>", "<js>", "<div>", "<script>"],
        answer: "<script>",

    },

];

startBtn.onclick = countdown;


function loadPage(n) {
    pages[currentPage].classList.remove("active");
    pages[n].classList.add("active");
    currentPage = n;
}

function loadNextPage() {
    loadPage(currentPage + 1);
    timerEl.textContent = secondsLeft;

    if (currentPage === 1) {
        setTimeout();
    }
}

}

