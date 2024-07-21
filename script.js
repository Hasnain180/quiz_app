

let questions = [
    {
        question: "which planet is known as the Red Planet?",
        answer: [
            { text: "earth", correct: "false" },
            { text: "jupiter", correct: "false" },
            { text: "mars", correct: "true" },
            { text: "venus", correct: "false" }
        ]
    },
    {
        question: "who wrote the play 'Romeo and Juliet'?",
        answer: [
            { text: "mark twain", correct: "false" },
            { text: "charles dickens", correct: "false" },
            { text: "william shakespeare", correct: "true" },
            { text: "jane austen", correct: "false" }
        ]
    },
    {
        question: "which element has the chemical symbol 'O'?",
        answer: [
            { text: "oxygen", correct: "true" },
            { text: "gold", correct: "false" },
            { text: "silver", correct: "false" },
            { text: "iron", correct: "false" }
        ]
    },
    {
        question: "what is the capital city of Japan?",
        answer: [
            { text: "tokyo", correct: "true" },
            { text: "osaka", correct: "false" },
            { text: "kyoto", correct: "false" },
            { text: "nagoya", correct: "false" }
        ]
    },
    {
        question: "which is the largest ocean on Earth?",
        answer: [
            { text: "atlantic ocean", correct: "false" },
            { text: "indian ocean", correct: "false" },
            { text: "arctic ocean", correct: "false" },
            { text: "pacific ocean", correct: "true" }
        ]
    },
    {
        question: "which country is known as the Land of the Rising Sun?",
        answer: [
            { text: "china", correct: "false" },
            { text: "japan", correct: "true" },
            { text: "south korea", correct: "false" },
            { text: "thailand", correct: "false" }
        ]
    },
    {
        question: "who painted the Mona Lisa?",
        answer: [
            { text: "vincent van gogh", correct: "false" },
            { text: "pablo picasso", correct: "false" },
            { text: "claude monet", correct: "false" },
            { text: "leonardo da vinci", correct: "true" }
        ]
    }
];


let questionelement = document.getElementById("question");
let answerbuttons = document.getElementById("answer-button");
let nextbtn = document.getElementById("next-btn");

let currenquestionindex = 0;
let score = 0;

function startquiz() {
    currenquestionindex = 0;
    score = 0;
    nextbtn.innerHTML = "next";
    showquestion();
}

function showquestion() {
    resetquiz();
    let currentquestion = questions[currenquestionindex];
    let questionNo = currenquestionindex + 1;
    questionelement.innerHTML = questionNo + '.' + currentquestion.question;


    currentquestion.answer.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer);
    })
}

function selectanswer(e) {
    let selectedbtn = e.target;
    let iscorrect = selectedbtn.dataset.correct === "true";
    if (iscorrect) {
        selectedbtn.classList.add("correct");
        score++;
    }
    else {
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "none";
    })
    nextbtn.style.display = "block";
}

function resetquiz() {
    nextbtn.style.display = "none";
    while (answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function showscore(){
    resetquiz();
    questionelement.innerHTML = `you scored ${score} out of ${questions.length}|`;
    nextbtn.innerHTML = "play again";
    nextbtn.style.display = "block"
}



function handlenextbtn(){
    currenquestionindex++;
    if(currenquestionindex < questions.length){
        showquestion();
    }
    else{
        showscore();
    }
}


nextbtn.addEventListener("click", ()=>{
    if(currenquestionindex < questions.length){
        handlenextbtn();
    }
    else{
        startquiz();
    }
})




startquiz();