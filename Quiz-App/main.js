const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const container = document.querySelector(".container");
const submitButton = document.getElementById("submit");
const question = document.querySelector(".question");
const answers = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let quizIndex = 0;
let score = 0;

loading();

function loading(){
    question.innerHTML = quizData[quizIndex].question;
    a_text.innerHTML = quizData[quizIndex].a;
    b_text.innerHTML = quizData[quizIndex].b;
    c_text.innerHTML = quizData[quizIndex].c;
    d_text.innerHTML = quizData[quizIndex].d;
}

submitButton.addEventListener("click", () => {
    let chosenAnswer = undefined;
    answers.forEach(answer => {
        if(answer.checked){
            chosenAnswer = answer.id;
        }
    })

    if(chosenAnswer == quizData[quizIndex].correct){
        score++; 
    }
    quizIndex++;
    
    if(quizIndex < quizData.length){
        loading();
    } else{
        container.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>
    `;
    }
})