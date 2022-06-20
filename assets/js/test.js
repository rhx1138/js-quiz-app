
// testing different way to structure game logic

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