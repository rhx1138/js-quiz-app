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

// hard coded for testing, users can still see data, will add questions.js later
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

//CONSTANTS
// set interval
const INCORRECT_DEDUCTION = 10; 
const MAX_QUESTIONS = 5;

startGame = () => {
    // questionCounter = 0;
    score = 0;
    // availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    // if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //     //go to the end page
    //     return window.location.assign('/end.html');
    // }
    // questionIndex++;
    // const questionIndex = Math.floor(Math.random() * availableQuesions.length);
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

      acceptingAnswers = true;
};
selectAnswer = (answer) => {
// console.log(answer);
if(answer === questions[questionIndex].answer) {
    // questions[0].answer;
    console.log('correct');
    rightWrongEl.textContent = 'correct';
} else {
    console.log('not correct');
    rightWrongEl.textContent = 'not correct';

}

questionIndex++;

// check if we have run out of questions

if(questionIndex === questions.length) {
    console.log('you finished all of the questions');
    window.location.href = 'end.html';
} else {
    getNewQuestion();
}


}  
// choices.forEach((choice) => {
//     choice.addEventListener('click', (e) => {
//         if (!acceptingAnswers) return;

//         acceptingAnswers = false;
//         const selectedChoice = e.target;
//         console.log(selectedChoice);
//         const selectedAnswer = selectedChoice.dataset['number'];
//         const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
//         // selectedChoice.parentElement.classList.add(classToApply);
//         getNewQuestion();
//     });
// });

getNewQuestion();

// startGame();