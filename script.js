import { questions } from './data/questions.js';

console.log(questions)

const homeBtn = document.querySelector('.home__btn');
console.log(homeBtn);
const userScoreQs = document.querySelector('.user__score');
console.log(userScoreQs);
const currentScoreQs = document.querySelector('.current__score');
console.log(currentScoreQs);
const imgDisplayed = document.querySelector('.question__image');
console.log(imgDisplayed);
const countDownAnswer = document.querySelectorAll('#countdown');
console.log(countDownAnswer);
const nextBtn = document.querySelector('#next-question');
const quiz = document.querySelector('.quiz');
console.log(quiz);
// const questionsDisplayed = document.querySelector('.title__question');
// console.log(questionsDisplayed);
// const answerBtns = document.querySelectorAll('.btn');
// console.log(answerBtns);

let homeGame = "";
let user = 0;
let quizImg = "";
let quizQuesiton = "";
let currentQuestion = 0;


// CODE HERE TO MAKE ANSWER BTNS FUNCTIONAL

const renderFirstQuestion = (initialIndex) => {
    console.log(initialIndex) 
    let html = `<section class="quiz__container">
    <div class="question__image">
         <img src="./images/trulli.jpeg" alt="er-trullo" />
    </div>
    <h2 class="title__question">${questions[initialIndex].question}</h2>
    <div class="answers__btns">
    <button class="btn btn--1" data-correct=${questions[initialIndex].answers[0].isCorrect}>${questions[initialIndex].answers[0].answer}</button>
    <button class="btn btn--2">${questions[initialIndex].answers[1].answer}</button>
    <button class="btn btn--3">${questions[initialIndex].answers[2].answer}</button>
    <button class="btn btn--4">${questions[initialIndex].answers[3].answer}</button>
    </div>
    </section>`;
    
    quiz.innerHTML += html;

}

renderFirstQuestion(0)

const answerBtns = document.querySelectorAll('.btn');

// const renderNextQuestion = (updatedIndex) => {
//     quiz.innerHTML = '';
//     let html = `<section class="quiz__container">
//     <div class="question__image">
//          <img src="./images/trulli.jpeg" alt="er-trullo" />
//     </div>
//     <h2 class="title__question">${questions[updatedIndex].question}</h2>
//     <div class="answers__btns">
//     <button class="btn btn--1">${questions[updatedIndex].answers[0].answer}</button>
//     <button class="btn btn--2">${questions[updatedIndex].answers[1].answer}</button>
//     <button class="btn btn--3">${questions[updatedIndex].answers[2].answer}</button>
//     <button class="btn btn--4">${questions[updatedIndex].answers[3].answer}</button>
//     </div>
//     </section>`;
//     return quiz.innerHTML += html;
// }


answerBtns.forEach((answerBtn) => {
    console.log(answerBtn);
    answerBtn.addEventListener('click', () => {
        console.log('button clicked')
        validateAnswer(answerBtn)
    });
});
//WHY IS ANSWERBTNS FUNCTION PLACED ABOVE VALIDATE ANSWER FUNCITON?
const validateAnswer = (answerClicked) => {
    console.log(answerClicked)
    let answerValidation = answerClicked.getAttribute('data-correct');
    console.log(answerValidation)
    if(answerValidation) {
        console.log('if statement ran')
        answerClicked.classList.add('correct');
        return console.log('Congratulations! That is the correct answer');
    } else {
        return console.log('Sorry that is not correct')
    }

}

// const scoreUp = () => {
//     if (answerClicked === isCorrect) {
//         return  userScoreQs.innerHTML += 1 
//     } else if (answerClicked === false){
//         return currentQuestion.innerHTML += 1
//     }
// }

userScoreQs.forEach (() => {
    if (answerClicked === isCorrect) {
                return  userScoreQs.innerHTML += 1 
            } else if (answerClicked === false){
                return currentQuestion.innerHTML += 1
            } 
})

// currentScoreQs.forEach (() => {
// validateAnswer += 1
// })

// const scoreUpdate = validateAnswer  => {
//     scoreUpdate = currentScoreQs.event.target.value;
//     scoreUpdate = userScoreQs.event.target.value;
//     if (scoreUpdate === validateAnswer) {
//         return userScoreQs += 1; 
//     } else {
//         return currentQuestion += 1
//     }
// }



// userScoreQs.forEach((userScoreQ) => {
//     userScoreQs.addEventListener('change', (event) => {
//         score = event.target.innerText;
//     })    
//     if (answerClicked === true) {
//             return userScoreQs.innerHTML += 1
//         } else {
//             return ;
//         }
// });


// When we click on an answer we want to validate the answer to see  if its correct/incorrect. 
// Then we want to update the Score counter after the answer has been validated.
// If its correct - you want to update both the userScore (left hand side) and the questionNumber (right hand side)
// Else if its incorrect - you only want to update the questionNumber

// Q's validation

// userScoreQs.forEach() => {
// userScoreQs.addEventListener ('change', event) => {
//     userScoreQs.innerHTML = answerBtns
//}
//}

// console.log(`userScoreQs`, userScoreQs);




//MAKE A FUNCTION THAT CHANGE Q'S WHEN NEXT BUTTON IS PRESSED

// MAKE A FUNCTION TO CHANGE THE PICTURE WHEN CHANGED THE Q'S

// nextBtn.addEventListener('click', () => {
//     renderNextQuestion(currentQuestion++)
// })

//MAKE A FUNCTION FOR THE TIME-LIMIT

// const renderHTML = `<section class="quiz__container">
// <div class="question__image">
//     <img src="./images/trulli.jpeg" alt="er-trullo" />
// </div>
// <h2 class="title__question">
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
// sapiente hic minima cumque illum quisquam nisi odio qui deserun
// </h2>
// <div class="answers__btns">
// <button class="btn btn--1">1</button>
// <button class="btn btn--2">2</button>
// <button class="btn btn--3">3</button>
// <button class="btn btn--4">4</button>
// </div>
// </section>`;
// console.log(quiz, renderHTML);
// quiz.innerHTML += renderHTML;
//MAKE A FUNCTION TO SWITCH THE BACKGORUND COLOR. GREEN IF IT IS THE RIGHT ANSWER, RED IF IT'S THE WRONG 


//MAKE A FUNTION TO MAKE THE USER SCORE DYNAMIC. 


// next work on the user score (partly will be inside validation function )
