// add timer finished to show correct and wrong answers
// pause between questions 
// timer === score + show final score
// need best scores local storage

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const rightWrongEl = document.getElementById('rightWrong');
const endGameEl = document.getElementById('endGame');
const startGameEl = document.getElementById('startGame');
const timerEl = document.getElementById('timer');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const usernameEl = document.getElementById('username');

let score = 0;
let questionIndex = 0;

// let availableQuesions = [];

// hard coded for testing, users can still see data, will add questions.js at a later time
// make the answer the same text as choices / make choices an array 

let questions = [{
        question: 'Javascript is a/an _______ language?',
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


// timer function to display time left 
let timeOff = () => {
    timeLeft -= 1;

    timerEl.innerHTML = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        endGame();
    }

    // we need this to go to visible 
}

timerInterval = setInterval(timeOff, 1000);


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
            // setTimeout(getNewQuestion, 3000);


        })

    });

};

// need to clear rightWrongEl before next page is shown
selectAnswer = (answer) => {
    // console.log(answer);
    if (answer === questions[questionIndex].answer) {
        console.log('correct');
        rightWrongEl.textContent = 'correct answer';
        // if the answer is correct add 10 seconds to the timer
        timeLeft += 10;
    } else {
        console.log('not correct');
        rightWrongEl.textContent = 'wrong answer';
        // if answer is wrong deduct 5 seconds from the timer
        timeLeft -= 5;
    }

    // check if we have run out of questions
    questionIndex++;

    if (questionIndex === questions.length) {
        console.log('you finished all of the questions');
        endGame();
        // window.location.href = 'end.html';
    } else {
        getNewQuestion();

    }

}

const endGame = () => {
    clearInterval(timerInterval);
    // window.location.href = 'end.html';
    endGameEl.setAttribute('class', 'container');
    startGameEl.setAttribute('class', 'hide');
    timerEl.textContent = 'Your score: ' + timeLeft;
}


// saveScoreBtn.addEventListener('click', (e) => {
//    saveScore();

// })


const saveScore = () => {
    console.log('save score');
    let username = usernameEl.value;
    console.log(username);
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    let newScore = {
        name: username, 
        score: timeLeft
    };
    highScores.push(newScore);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.href = 'highscores.html';
} 
saveScoreBtn.onclick = saveScore;
getNewQuestion();