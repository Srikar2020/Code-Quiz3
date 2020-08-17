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

]



startBtn.onclick = countdown;
