"use strict";

const quize_data = [{
        question: "What is the most popular music in the world?",
        a: "Counting Stars",
        b: "Shape of You",
        c: "Despacito",
        d: "See You Again",
        correct: "c",
    },
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
        question: "What is the most popular language in the world?",
        a: "Chinese",
        b: "Spanish",
        c: "English",
        d: "Hindi",
        correct: "a",
    },
    {
        question: "What is the most popular job in the world?",
        a: "Public School Teacher",
        b: "Engineering",
        c: "Nurse Practitioner",
        d: "Physical Therapist",
        correct: "d",
    }
];

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const question_elem = document.getElementById('question');
const submit_button_elem = document.getElementById('submit');
const answer_elems = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let current_question = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    let current_quiz_data = quize_data[current_question];
    question_elem.innerHTML = current_quiz_data.question;

    a_text.innerHTML = current_quiz_data.a;
    b_text.innerHTML = current_quiz_data.b;
    c_text.innerHTML = current_quiz_data.c;
    d_text.innerHTML = current_quiz_data.d;

}


function getSelected() {
    let answer = undefined;

    answer_elems.forEach((answer_elems) => {
        if (answer_elems.checked) {
            answer = answer_elems.id;
        }
    });

    return answer;
}


function deselectAnswers() {
    answer_elems.forEach((answer_elems) => {
        answer_elems.checked = false;
    });
}


submit_button_elem.addEventListener('click', () => {

    const answer = getSelected();
    console.log(answer);


    if (answer) {
        if (answer === quize_data[current_question].correct) {
            score++;
        }

        current_question++;
        if (current_question < quize_data.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2 id="score">You answered correctly at ${score}/${quize_data.length} questions </h2> <button onclick="location.reload()">Reload</button>`
        }
    }

    deselectAnswers();
});