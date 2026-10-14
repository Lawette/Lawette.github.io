const questions = [
    {
        text: "Inside is dark, regardless of how bright outside can be",
        yesScore: 0,
        noScore: 1
    },
    {
        text: "There's a guy drinking on his own at the bar",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "The barman/barmaid is likely to get drunk?",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "There is less than 15 tables in the room",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "The cheapest beer on the menu is less than 9$",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "There is a non-operational TV",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "The floor is sticky",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "Having food is taking a risk",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "The bar sells small bags of chips",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "The menu is sticky",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "There are more people at the bar rather than on tables",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "At any time could you start a healthy debate about how Trudeau fucked up Canada",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "The place is actually quiet",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "Cash only",
        yesScore: 1,
        noScore: 0
    },
    {
        text: "Dodgy ATM",
        yesScore: 1,
        noScore: 0
    }

];


let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");
const questionTotal = document.getElementById("question-total");

const scoreElement = document.getElementById("score");
const scoreTotal = document.getElementById("score-total");
const resultMessage = document.getElementById("result-message");

const startButton = document.getElementById("start-button");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const restartButton = document.getElementById("restart-button");


questionTotal.textContent = questions.length;
scoreTotal.textContent = questions.length;


function startQuiz() {
    currentQuestion = 0;
    score = 0;

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}


function showQuestion() {
    const question = questions[currentQuestion];

    questionText.textContent = question.text;
    questionNumber.textContent = currentQuestion + 1;
}


function answerQuestion(answer) {
    const question = questions[currentQuestion];

    if (answer === "yes") {
        score += question.yesScore;
    } else {
        score += question.noScore;
    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        showResults();
    } else {
        showQuestion();
    }
}


function showResults() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    scoreElement.textContent = score;

    if (score >= questions.length * 0.8) {
        resultMessage.textContent = "You're in a proper dive bar. Enjoy your time";
    } else if (score >= questions.length * 0.5) {
        resultMessage.textContent = "A few divish features but we're not quite there yet. Careful not to get stabbed though";
    } else {
        resultMessage.textContent = "Not a dive bar. While it's a safer choice, def time for you to find fun elsewhere";
    }
}


startButton.addEventListener("click", startQuiz);

yesButton.addEventListener("click", () => {
    answerQuestion("yes");
});

noButton.addEventListener("click", () => {
    answerQuestion("no");
});

restartButton.addEventListener("click", startQuiz);
