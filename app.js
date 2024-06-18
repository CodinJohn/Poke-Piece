/*-------------- Constants -------------*/
const pokequizQuestions = [
    {
        question: 'Which of these is not a Pokemon?',
        options: ['Pikachu', 'Gardevoir', 'Agumon', 'Dratini'],
        answer: 'Agumon'
    },
    {
        question: 'What town does Ash start his first journey from?',
        options:['Pallet Town', 'Viridian City', 'Cerulean City', 'New Bark Town'],
        answer: 'Pallet Town'
    },
    {
        question: 'What is the first Pokemon that Ash ever caught?',
        options:['Charmander', 'Pikachu', 'Caterpie', 'Bulbasaur'],
        answer: 'Caterpie'
    },
    {
        question: 'Who was the first Pokemon ever designed?',
        options:['Charizard', 'Pikachu', 'Squirtle', 'Rhydon'],
        answer: 'Rhydon'
    },
    {
        question:'How many evolutions does Eevee have?',
        options: ['Six', 'Eight', 'Nine', 'Four'],
        answer: 'Eight'
    },
];

const onepieceQuestions = [
    {
        question: 'Who did Luffy recruit first to his Pirate Crew?',
        options: ['Nami', 'Sanji', 'Zoro', 'Brooks'],
        answer: 'Zoro'
    },
    {
        question: 'How did Luffy get the the scar under his eye?',
        options: ['Fight with bandit', 'Himself', 'Fight with pirate', 'Fight with crew'],
        answer: 'Himself'
    },
    {
        question: 'What is the money in Skypia called?',
        options: ['Extol', 'Berry', 'Skydollar', 'Rubys'],
        answer: 'Extol'
    },
    {
        question: 'Who was the first villain to defeat Luffy?',
        options: ['Arlong', 'Don Krieg', 'Buggy', 'Crocodile'],
        answer: 'Crocodile'
    },
    {
        question: 'Who was the first marine Admiral to be shown in the series?',
        options: ['Aokiji', 'Sengoku', 'Kizaru', 'Akainu'],
        answer: 'Aokiji'
    },
]

/*---------- Variables (state) ---------*/
let currentQuestionIndex = 0;
let score = 0;
let currentQuiz = [];

/*----- Cached Element References  -----*/
const pokemonBtn = document.getElementById('btn-pokemon');
const onepieceBtn = document.getElementById('btn-onepiece');
const tryAgainBtn = document.getElementById('btn-try-again');
const messageEl = document.getElementById('message');
const quizQuestionEl = document.getElementById('quiz-question');
const optionsContainerEl = document.getElementById('options-container');

pokemonBtn.onclick = () => startQuiz(pokequizQuestions);
onepieceBtn.onclick = () => startQuiz(onepieceQuestions);
tryAgainBtn.onclick = resetQuiz;

function startQuiz(quizQuestions) {
    currentQuiz = quizQuestions;
    currentQuestionIndex = 0;
    score = 0;
    pokemonBtn.style.display = 'none';
    onepieceBtn.style.display = 'none';
    render();
};

function render() {
    if (currentQuestionIndex < currentQuiz.length) {
        const questionData = currentQuiz[currentQuestionIndex];
        quizQuestionEl.textContent = questionData.question;
        optionsContainerEl.innerHTML = questionData.options.map(option => 
            `<button class="btn" onclick="handleClick('${option}', '${questionData.answer}')">${option}</button>`).join('');
    } else {
        endQuiz();
    }
}

function handleClick(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) score++;
    currentQuestionIndex++;
    render();
};

function endQuiz() {
    if(score >= 4){
        messageEl.textContent = 'Congrats! You have won! Your knwoledge on Anime is amazing!'
    } else {
        messageEl.textContent = 'You lost! Try again to test your knowledge once more!'
    }
    tryAgainBtn.style.display = 'block';
};

function resetQuiz() {
    tryAgainBtn.style.display = 'none';
    messageEl.textContent = 'Test your knowledge!';
    quizQuestionEl.textContent = '';
    optionsContainerEl.innerHTML = '';
    pokemonBtn.style.display = 'block';
    onepieceBtn.style.display = 'block';
};