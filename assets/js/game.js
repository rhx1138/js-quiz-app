// add timer 
// timer === score
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
        question: 'Question number one',
        options: ['choice1', 'choice2', 'choice3', 'choice4'],
        answer: 'choice1',
    },
    {
        question: 'Question number two',
        options: ['choice1', 'choice2', 'choice3', 'choice4'],
        answer: 'choice2',
    },
    {
        question: 'Question number three',
        options: ['choice1', 'choice2', 'choice3', 'choice4'],
        answer: 'choice3',
    },
];

// set interval
const INCORRECT_DEDUCTION = 10;
const MAX_QUESTIONS = 5;

// time display
let timeLeft = 30;
let timerInterval;

startGame = () => {
    
    score = 0;
    getNewQuestion();
};

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


    // check if we have run out of questions

    if (questionIndex === questions.length) {
        console.log('you finished all of the questions');
        window.location.href = 'end.html';
    } else {
        getNewQuestion();
        
    }

    // if(answer === questions[questionIndex].answer) {
    //     timer = timer + 10;
    //     timeLeft.innerHTML = timer;
    // }

    // if(answer !== questions[questionIndex].answer) {
    //     timer = timer - 10;
    //     timeLeft.innerHTML = timer;
    // }

// set timeout pause
    // setTimeout( () => {
    //     selectAnswer.remove(answer);
    //     getNewQuestion();
    // }, 1000);


}



getNewQuestion();