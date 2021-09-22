
// Questions and answers pulled for www.w3schools.com
var quizQuestions = [
  {
    question: "What does CSS stand for?",
    choices: [
      {text: 'Creative Style Sheet', correct: false},
      {text: 'Colorful Style Sheet', correct: false},
      {text: 'Computer Style Sheet', correct: false},
      {text: 'Cascading Style Sheet', correct: true}
    ],
  }, 
  {
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    choices: [
      {text: 'In the <head> section', correct: true},
      {text: 'In the <body> section', correct: false},
      {text: 'At the end of the document', correct: false}
    ],
  }, 
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    choices: [
      {text: '<style>', correct: true},
      {text: '<script>', correct: false},
      {text: '<css>', correct: false}
    ],
  }, 
  {
    question: "What does HTML stand for?",
    choices: [
      {text: 'Home Tool Markup Language', correct: false},
      {text: 'Hyperlinks and Text Markup Language', correct: false},
      {text: 'Hyper Text Markup Language', correct: true}
    ],
  }, 
  {
    question: "Which character is used to indicate an end tag?",
    choices: [
      {text: '^', correct: false},
      {text: '/', correct: true},
      {text: '*', correct: false},
      {text: '<', correct: false}
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: [
      {text: '<javascript>', correct: false},
      {text: '<js>', correct: false},
      {text: '<script>', correct: true},
      {text: '<scripting>', correct: false}
    ],
  }, 
  {
    question: "How to write an IF statement in JavaScript?",
    choices: [
      {text: 'if i =5 then', correct: false},
      {text: 'if (i == 5)', correct: true},
      {text: 'if i = 5', correct: false},
      {text: 'if i ==5 then', correct: false}
    ],
  }
];

    
var startBtn = document.getElementById('startBtn');
var submitBtn = document.getElementById('submitBtn');
var goBackBtn = document.getElementById('goBackBtn');
var clearBtn = document.getElementById('clearBtn');
var textBox = document.getElementById('textBox');
var questionBox = document.getElementById('questionBox');
var ansBtn = document.getElementById('ansBtn');
var ansCorrect = document.getElementById('correct');
var ansWrong = document.getElementById('wrong');
var currentQuestion;

startBtn.addEventListener("click", startQuiz)

//Start the quiz function
function startQuiz() {
  console.log('start')
  startBtn.classList.add('hide');
  textBox.classList.add('hide');
  questionBox.classList.remove('hide');
  ansBtn.classList.remove('hide');
  currentQuestion = 0;
  nextQuestion();
}


//Calls for next question
function nextQuestion() {

  showQues(quizQuestions[currentQuestion]);
}

function showQues(quiz){
  questionBox.innerHTML = quiz.question;
  for(var i = 0; i < quiz.choices.length; i++) {
    var button = document.createElement('button');
    button.innerText = quiz.choices[i].text;
    button.classList.add('button');
    if(quiz.choices[i].correct) {
      button.dataset.correct = quiz.choices[i].correct;
      console.log(button.dataset.correct);
    }
    button.addEventListener('click', userChoice)
    ansBtn.appendChild(button);
  };
}

function userChoice(event){
  var selectBtn = event.target;
  ansCorrect.classList.add('hide');
  ansWrong.classList.add('hide');
  var selectAns = selectBtn.dataset.correct;
  if (selectAns) {
    ansCorrect.classList.remove('hide');
    while (ansBtn.firstChild) {
      ansBtn.removeChild(ansBtn.firstChild);
    }
  } else {
    ansWrong.classList.remove('hide');
    while (ansBtn.firstChild) {
      ansBtn.removeChild(ansBtn.firstChild);
    }
  }
  currentQuestion++;
  if (quizQuestions.length > currentQuestion + 1){
    nextQuestion();
  } else {
    submitForm();
  }
}

function submitForm() {
  

}

