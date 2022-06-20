const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

// hard coded for testing, users can still see data, will add questions.js later

let questions = [
    {
        question: 'Question number one',
        choice1: 'choice1',
        choice2: 'choice2',
        choice3: 'choice3',
        choice4: 'choice4',
        answer: 1,
    },
    {
        question:
            'Question number two',
        choice1: 'choice1',
        choice2: 'choice2',
        choice3: 'choice3',
        choice4: 'choice4',
        answer: 3,
    },
    {
        question: 'Question number three',
        choice1: 'choice1',
        choice2: 'choice2',
        choice3: 'choice3',
        choice4: 'choice4',
        answer: 4,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();
