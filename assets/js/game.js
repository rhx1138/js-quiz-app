// add timer finished to show correct and wrong answers
// pause between questions 
// timer === score + show final score
// need best scores local storage

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const rightWrongEl = document.getElementById('rightWrong');


// let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionIndex = 0;
// let availableQuesions = [];

// hard coded for testing, users can still see data, will add questions.js at a later time
// make the answer the same text as choices / make choices an array 

let questions = [{
        question: 'Javascript is an _______ language?',
        options: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'],
        answer: 'Object-Oriented',
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        options: ['var', 'let', 'Both are correct', 'None of the above'],
        answer: 'Both are correct',
    },
    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        options: ['getElementbyID()', 'getElementByClassName()', 'Both are correct', 'None of the above'],
        answer: 'Both are correct',
    },
    {
        question: 'Which of the following methods can be used to display data in some form using Javascript?',
        options: ['document.write()', 'console.lot()', 'window.alert', 'All of the above'],
        answer: 'All of the above',
    },
];

// set interval
// const INCORRECT_DEDUCTION = 10;
const MAX_QUESTIONS = 5;

// time display
let timeLeft = 30;
let timerInterval;

startGame = () => {
    
    score = 0;
    getNewQuestion();
};

// timer function to display time left 

let timer = document.getElementById('timer');
timerInterval = setInterval(function() {
    timeLeft -=1;

    timer.innerHTML = "Time: " + timeLeft;
    if (timeLeft == 0)
    clearInterval(timerInterval);
},1000)




getNewQuestion = () => {

    let currentQuestion = questions[questionIndex];
    questionEl.innerText = currentQuestion.question;

    optionsEl.textContent = ''; // clear all of the choices 

    currentQuestion.options.forEach((choice) => {
        let optionNode = document.createElement('button')
        optionNode.setAttribute('class', 'choice-container');
        optionNode.textContent = choice;
        optionsEl.appendChild(optionNode);
        optionNode.addEventListener('click', (e) => {
            selectAnswer(choice);
            setTimeout(getNewQuestion, 3000); 


        })

    });
    
    // document.getElementById('rightWrong').hidden = true;
    acceptingAnswers = true;
};

// need to clear rightWrongEl before next page is shown
selectAnswer = (answer) => {
    // console.log(answer);
    if (answer === questions[questionIndex].answer) {
        console.log('correct');
        rightWrongEl.textContent = 'correct answer';
    } else {
        console.log('not correct');
        rightWrongEl.textContent = 'wrong answer';
    }
    questionIndex++;

    
    // after the question is answered this will generate the next question after a 1 second pause.
 if (questionIndex < questions.length) {
    setTimeout(getNewQuestion, 1000);
    } else {
        window.location.href = 'end.html';
    } 
    
    // check if we have run out of questions

    if (questionIndex === questions.length || timerInterval === 0) {
        console.log('you finished all of the questions');
        window.location.href = 'end.html';
    } else {
        getNewQuestion();
        
    }
    
    if(answer !== questions[questionIndex].answer) {
        timeLeft -= 5;

    } 

    if(answer === questions[questionIndex].answer) {
        score += 10;
    }
    
    // if answer is correct, add 5 seconds to timer 
    // if answer is wrong, subtract 5 seconds from timer
    // if time is 0, end game

  
   }


getNewQuestion();

