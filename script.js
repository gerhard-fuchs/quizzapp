

let questions = [
    {
        "question": 'Wer schrieb das Buch "Der kleine Prinz"?',
        "answer_1": 'Antoine de Saint-Exupéry',
        "answer_2": 'J.K. Rowling',
        "answer_3": 'Mark Twain',
        "answer_4": 'Charles Dickens',
        "right_answer": 3,
    },
    {
        "question": 'Welches Ereignis markierte den Beginn der Renaissance in Europa?',
        "answer_1": 'Die Entdeckung Amerikas',
        "answer_2": 'Die Erfindung des Buchdrucks mit beweglichen Lettern',
        "answer_3": 'Der Fall von Konstantinopel',
        "answer_4": 'Die Entstehung des Humanismus',
        "right_answer": 4,
    },
    {
        "question": 'Wer schrieb das Buch "Der kleine Prinz"?',
        "answer_1": 'Antoine de Saint-Exupéry',
        "answer_2": 'J.K. Rowling',
        "answer_3": 'Mark Twain',
        "answer_4": 'Charles Dickens',
        "right_answer": 3,
    },
    {
        "question": 'Wer schrieb das Buch "Der kleine Prinz"?',
        "answer_1": 'Antoine de Saint-Exupéry',
        "answer_2": 'J.K. Rowling',
        "answer_3": 'Mark Twain',
        "answer_4": 'Charles Dickens',
        "right_answer": 3,
    },
    {
        "question": 'Wer schrieb das Buch "Der kleine Prinz"?',
        "answer_1": 'Antoine de Saint-Exupéry',
        "answer_2": 'J.K. Rowling',
        "answer_3": 'Mark Twain',
        "answer_4": 'Charles Dickens',
        "right_answer": 3,
    },
];

let currentQuestion = 0;
let rightAnswers = 0;
let wrong = new Audio('sounds/false.mp3.mp3');
let right = new Audio('sounds/true.mp3.mp3');


function init() {
    document.getElementById('questionsLength').innerHTML = `${questions.length}`;
    showCard();
}

function showCard() {
    let question = questions[currentQuestion];
    if (currentQuestion >= questions.length) {
        updateProgressbar();
        document.getElementById('endScreen').style = '';
        document.getElementById('questionContainer').style = "display: none";
        document.getElementById('header-image').src = 'img/tropy.png';
        document.getElementById('header-image').style = "height:200px";
        document.getElementById('header-image').style = "width:200px";
    } else {

        document.getElementById('questionText').innerHTML = `${question['question']}`;
        renderAnswers(question)
        updateProgressbar();
    }
}


function updateProgressbar() {
    let percent = (currentQuestion) / questions.length;
    percent = percent * 100;
    percent = Math.round(percent);

    document.getElementById('progressBar').innerHTML = `${percent}%`;
    document.getElementById('progressBar').style.width = `${percent}%`;
}

function renderAnswers(question) {
    document.getElementById('currentCard').innerHTML = `${currentQuestion + 1}`;
    document.getElementById(`answer_1`).innerHTML = `${question['answer_1']}`;
    document.getElementById(`answer_2`).innerHTML = `${question['answer_2']}`;
    document.getElementById(`answer_3`).innerHTML = `${question['answer_3']}`;
    document.getElementById(`answer_4`).innerHTML = `${question['answer_4']}`;
}

function answer(param) {
    let question = questions[currentQuestion];
    let idOfRightAnswer = `answer_${question['right_answer']}`

    let SelectedQuestionNumber = param.slice(-1);
    if (SelectedQuestionNumber == question['right_answer']) {
        document.getElementById(param).classList.add('bg-success');
        rightAnswers++;
        document.getElementById('rightAnswers').innerHTML = rightAnswers;
        right.play();
    } else {
        document.getElementById(param).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
        wrong.play();
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    showCard();
    resetAnswerButtons();
}

function resetAnswerButtons() {
    document.getElementById(`answer_1`).classList.remove('bg-danger');
    document.getElementById(`answer_2`).classList.remove('bg-danger');
    document.getElementById(`answer_3`).classList.remove('bg-danger');
    document.getElementById(`answer_4`).classList.remove('bg-danger');
    document.getElementById(`answer_1`).classList.remove('bg-success');
    document.getElementById(`answer_2`).classList.remove('bg-success');
    document.getElementById(`answer_3`).classList.remove('bg-success');
    document.getElementById(`answer_4`).classList.remove('bg-success');
}

function restartGame() {
    currentQuestion = 0;
    rightAnswers = 0;
    init();
    document.getElementById('questionContainer').style = '';
    document.getElementById('questionContainer').style = 'card-img-top';
    document.getElementById('header-image').style.width = '';
    document.getElementById('endScreen').style = "display: none";
    document.getElementById('header-image').src = 'img/brainbg.jpg';

}