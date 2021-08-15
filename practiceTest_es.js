"use strict";

const problemElement = document.querySelector(".problem");
const ourTestForm = document.querySelector(".testForm");
const ourAnswer = document.querySelector(".enterAnswer");
const answerButton = document.querySelector(".answerButton");
const correct = document.querySelector(".correct");
const incorrect = document.querySelector(".incorrect");
const reviewAfter = document.querySelector(".review");
const progressBar = document.querySelector(".progressInner");
const progressBoxes = document.querySelector(".boxes");
const showBar = document.querySelector(".progress");
const totalScore = document.querySelector(".total");


let currentQuestion = 0;

let state = {
    rightAnswers:0,
    wrongAnswers: 0,
    review:[]
}

let test = {
    question:[],
    answer:[],
    answer2:[]
}

let data = chiVoc2;

function escaped(entry) {
    return entry
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#x27;")
         .replace(/a1/g, "ā")
         .replace(/a2/g, "á")
         .replace(/a3/g, "ǎ")
         .replace(/a4/g, "à")
         .replace(/e1/g, "ē")
         .replace(/e2/g, "é")
         .replace(/e3/g, "ě")
         .replace(/e4/g, "è")
         .replace(/i1/g, "ī")
         .replace(/i2/g, "í")
         .replace(/i3/g, "ǐ")
         .replace(/i4/g, "ì")
         .replace(/o1/g, "ō")
         .replace(/o2/g, "ó")
         .replace(/o3/g, "ǒ")
         .replace(/o4/g, "ò")
         .replace(/u1/g, "ū")
         .replace(/u2/g, "ú")
         .replace(/u3/g, "ǔ")
         .replace(/u4/g, "ù")
         .replace(/v1/g, "ǖ")
         .replace(/v2/g, "ǘ")
         .replace(/v3/g, "ǚ")
         .replace(/v4/g, "ǜ")
         .replace(/nv/g, "nü");
 }

function updateTest(){
    if(currentQuestion < test.question.length){
        problemElement.innerHTML = `${test.question[currentQuestion]}`
        ourAnswer.value = "";
        ourAnswer.focus;
        correct.textContent = state.rightAnswers;
        incorrect.textContent = state.wrongAnswers;
    }
    else {
        ourAnswer.style = 'visibility:hidden';
        answerButton.style = 'visibility:hidden';
        correct.textContent = state.rightAnswers;
        incorrect.textContent = state.wrongAnswers;
        ourAnswer.value = "";
        if(state.wrongAnswers == 0){
            problemElement.innerHTML = `Great job!`;
        }
        if(state.wrongAnswers >=1){
            problemElement.innerHTML = `Good job!`;
            reviewAfter.innerText = `Please review the following: ${state.review}`;
        }
    }
}

function testPinyin(ch) {
    let k=0;
    for(let i=0;i<data.length;i++){
        if (data[i].lesson == ch) {
            test.question[k] = data[i].spanishTranslation;
            test.answer[k] = data[i].pinyin2;
            k++;
        }
    }
}

function testTones(ch){
    let k=0;
    for(let i=0;i<data.length;i++){
        if (data[i].lesson == ch) {
            test.question[k] = data[i].spanishTranslation;
            test.answer[k] = data[i].pinyin;
            k++;
        }
    }
}

function testCharacters(ch){
    let k=0;
    for(let i=0;i<data.length;i++){
        if (data[i].lesson == ch) {
            test.question[k] = data[i].spanishTranslation;
            test.answer[k] = data[i].word;
            k++;
        }
    }
}

function testCharPinyin(ch){
    let k=0;
    for(let i=0;i<data.length;i++){
        if (data[i].lesson == ch) {
            test.question[k] = data[i].word;
            test.answer[k] = data[i].pinyin;
            k++;
        }
    }
}

function createTest(){
    showBar.style = 'visibility:visible';
    ourAnswer.style = 'visibility:visible';
    answerButton.style = 'visibility:visible';
    totalScore.style = 'visibility:visible';
    resetTest();
    let a = document.getElementById("difficulty").value;
    let b = document.getElementById("lessonsTested").value;
    if (a==1){
        testPinyin(b);
    } else if (a==2) {
        testTones(b);
    } else if (a==3){
        testCharacters(b);
    } else if (a==4){
        testCharPinyin(b);
    }   
    updateTest();
}

function resetTest(){
    test.question = [];
    test.answer = [];
    test.answer2 = [];
    state.rightAnswers = 0;
    state.wrongAnswers = 0;
    state.review = [];
    ourAnswer.value = "";
    currentQuestion = 0;
    progressBar.style.transform = `scaleX(${state.rightAnswers})`;
    reviewAfter.innerText = "";
}

ourTestForm.addEventListener("submit",checkAnswer);

function checkAnswer(e){
    e.preventDefault();
    let correctAnswer = test.answer[currentQuestion];
    let userEntry = escaped(ourAnswer.value);
    if(userEntry == correctAnswer) {
        state.rightAnswers++;
        currentQuestion++;
        progressBar.style.transform = `scaleX(${state.rightAnswers/test.question.length})`;
        updateTest();  
    } else {
        state.wrongAnswers++;
        state.review.push(`\n* ${test.question[currentQuestion]} : ${test.answer[currentQuestion]}`);
        currentQuestion++;
        updateTest();
    }
}

ourAnswer.addEventListener("keydown",blockspace);

function blockspace(evt){
    if (evt.key == " ") {
        evt.preventDefault();
    }
}