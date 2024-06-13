/*-------------- Constants -------------*/
const pokequizQuestions = [
    {
        question: 'Which of these is not a Pokemon?',
        options: ['Pikachu', 'Gardevoir', 'Agumon', 'Dratini'],
        answer: 'Agumon',
    },
    {
        question: 'What town does Ash start his first journey from?',
        options:['Pallet Town', 'Viridian City', 'Cerulean City', 'New Bark Town'],
        answer: 'Pallet Town',
    },
    {
        question: 'What is the first Pokemon that Ash ever caught?',
        options:['Charmander', 'Pikachu', 'Caterpie', 'Bulbasaur'],
        answer: 'Caterpie',
    },
    {
        question: 'Who was the first Pokemon ever designed?',
        options:['Charizard', 'Pikachu', 'Squirtle', 'Rhydon'],
        answer:'',
    },
    {
        question:'How many evolutions does Eevee have?',
        options: ['Six', 'Eight', 'Nine', 'Four'],
        answer: 'Eight',
    },
];

const onepieceQuestions = [
    {
        question: 'Who did Luffy recruit first to his Pirate Crew?',
        options: ['Nami', 'Sanji', 'Zoro', 'Brooks'],
        answer: 'Zoro',
    },
    {
        question: 'How did Luffy get the the scar under his eye?',
        options: ['Fight with bandit', 'Himself', 'Fight with pirate', 'Fight with crew'],
        answer: 'Himself',
    },
    {
        question: 'What is the money in Skypia called?',
        options: ['Extol', 'Berry', 'Skydollar', 'Rubys'],
        answer: 'Extol',
    },
    {
        question: 'Who was the first villain to defeat Luffy?',
        options: ['Arlong', 'Don Krieg', 'Buggy', 'Crocodile'],
        answer: 'Crocodile',
    },
    {
        question: 'Who was the first marine Admiral to be shown in the series?',
        options: ['Aokiji', 'Sengoku', 'Kizaru', 'Akainu'],
        answer: 'Aokiji',
    },
]

/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/
const pokemonBtnEl = document.querySelector('.btn1');
const onepieceBtnEl = document.querySelector('.btn2');
const answerBtnEls = document.querySelectorAll('.answer');
const tryAgainBtnEl = document.querySelector('.display');

/*-------------- Functions -------------*/
// Function for Category Selection 
// Function for answer choice
// Function for try again 
// Function for Winner
// Function for Loser!

function  showpmQuestions () {
    pokemonBtnEl.style.display = 'none';
    onepieceBtnEl.style.display = 'none';
    
};



// const updatetoPMquestions = 

// const updatequestions = 

/*----------- Event Listeners ----------*/
pokemonBtnEl.addEventListener('click', showpmQuestions);

// onepieceBtnEl.addEventListener('click' showopquestions);

// const answerBtnEls.forEach((answerBtnEl) => {
//     answerBtnEl.addEventListener('click', updatequestions)
// });

// Event listener for Category choice at Landing page.
// Event listener for answer choice for each question. 
// Event Listener for try again at the end of quiz. 

// console.log('Wussup!')