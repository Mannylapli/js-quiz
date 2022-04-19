import { questions } from "./data/questions.js";

console.log(questions);

const homeBtn = document.querySelector(".home__btn");
console.log(homeBtn);
const userScoreQs = document.querySelector(".user__score");
console.log(userScoreQs);
const currentScoreQs = document.querySelector(".current__score");
console.log(currentScoreQs);
const imgDisplayed = document.querySelector(".question__image");
console.log(imgDisplayed);
const nextBtn = document.querySelector("#next-question");
const countdown = document.querySelector("#count-down");
const quiz = document.querySelector(".quiz");
console.log(quiz);
// const questionsDisplayed = document.querySelector('.title__question');
// console.log(questionsDisplayed);
// const answerBtns = document.querySelectorAll('.btn');
// console.log(answerBtns);

let userScore = 0;
let quizQuesiton = "";
let currentQuestion = 1;
let currentQuestionIndex = 0;

// CODE HERE TO MAKE ANSWER BTNS FUNCTIONAL

const renderQuestion = (initialIndex) => {
  console.log(`The current question is question:${initialIndex}`);
  let html = `<section class="quiz__container">
    
    </div>
    <h2 class="title__question">${questions[initialIndex].question}</h2>
    <div class="answers__btns">
    <button class="btn btn--1" data-correct=${questions[initialIndex].answers[0].isCorrect}>${questions[initialIndex].answers[0].answer}</button>
    <button class="btn btn--2" data-correct=${questions[initialIndex].answers[1].isCorrect}>${questions[initialIndex].answers[1].answer}</button>
    <button class="btn btn--3" data-correct=${questions[initialIndex].answers[2].isCorrect}>${questions[initialIndex].answers[2].answer}</button>
    <button class="btn btn--4" data-correct=${questions[initialIndex].answers[3].isCorrect}>${questions[initialIndex].answers[3].answer}</button>
    </div>
    </section>`;
  quiz.innerHTML = "";
  quiz.innerHTML += html;

  const answerBtns = document.querySelectorAll(".btn");
  answerBtns.forEach((answerBtn) => {
    answerBtn.addEventListener("click", () => {
      console.log("button clicked");
      validateAnswer(answerBtn);
    });
  });
  //WHY IS ANSWERBTNS FUNCTION PLACED ABOVE VALIDATE ANSWER FUNCITON?
  const validateAnswer = (answerClicked) => {
    let answerValidation = answerClicked.getAttribute("data-correct");
    console.log(typeof answerValidation);
    if (answerValidation === "true") {
      userScore++;
      updateUserScore(userScore);
      answerClicked.classList.add("correct");
      answerBtns.forEach(btn => {
          btn.disabled = true;
      })
      return console.log("Congratulations! That is the correct answer");
    } else {
      answerClicked.classList.add("wrong");
      answerBtns.forEach(btn => {
          btn.disabled = true;
      });
      return console.log("Sorry that is not correct");
    }
  };
  const updateUserScore = (currentUserScore) => {
    console.log(currentUserScore);
    userScoreQs.innerHTML = "";
    console.log(`The user score is : ${currentUserScore}`);
    userScoreQs.innerHTML = currentUserScore;
  };
};

renderQuestion(0);

const updateQuestionNumber = (currentQuestionNumber) => {
  console.log(currentQuestionNumber);
  currentScoreQs.innerHTML = "";
  currentQuestionNumber++;
  console.log(currentQuestionNumber);
  currentScoreQs.innerHTML = currentQuestionNumber;
};

// WE GOING TO USE AN EVENT LISTENER WHEN CLICK ON "NEXT" BUTTON WHICH WILL LOAD THE NEXT QUESTION;
//WILL ALSO UPDATE THE COUNTER OF THE QUESTION NUMBER

// When we click on an answer we want to validate the answer to see  if its correct/incorrect.
// Then we want to update the Score counter after the answer has been validated.
// If its correct - you want to update both the userScore (left hand side) and the questionNumber (right hand side)
// Else if its incorrect - you only want to update the questionNumber

let remainingSeconds = countdown.innerHTML;
console.log(remainingSeconds);

const initiateCountdown = () => {
  remainingSeconds--;
  countdown.innerHTML = remainingSeconds;
  if (remainingSeconds <= 3) {
    countdown.style.color = "#EF233C";
  }
  if (remainingSeconds <= 0) {
    clearInterval(runCountdown);
    // disableAnswers();
    countdown.innerHTML = "Time's up...";
    countdown.style.color = "#fff";
    document.body.style.backgroundImage = "#red";
    updateUserScore();
  }
};

let runCountdown = setInterval(initiateCountdown, 1000);
runCountdown;

const resetGame = () => {
    renderQuestion(0);
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  updateQuestionNumber(currentQuestion++);
  // if the currentQuestionIndex is less than the questions array length then run the renderQuestion function / else return console.log('questions finished');
  if (currentQuestionIndex < questions.length) {
    renderQuestion(currentQuestionIndex);
  } else {
    console.log("Questions finished");
    resetGame();
  }
  remainingSeconds = 30;
  runCountdown;
});
//make red class for the wrong ans (class)
// make sure it gives back the righ "true" or " false" line 85/93
// makefunctional the countdown.
