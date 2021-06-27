const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "1) Who was the first American woman in space? ",
  "2) True or false: 5 kilometer == 5000 meters? ",
  "3) (5 + 3)/2 * 10 = ? ",
  "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "5) What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function getCandidateName() {
  // TODO 1.1b: Ask for candidate's name //
  return input.question("What is the candidate's (your) name? ");
  
  // console.log("Name: " + candidateName);
}

function getQuestion(index) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  return questions[index];
  
}

function getCandidateAnswer() {
  return input.question("Your answer: ");
}

function getCorrectAnswer(index) {
  return correctAnswers[index];
}


function runQuiz() {

  for (let i = 0; i < questions.length; i++) {
    question = getQuestion(i);
    console.log(question); 

    candidateAnswer = getCandidateAnswer();
    candidateAnswers.push(candidateAnswer);
    
    correctAnswer = getCorrectAnswer(i);
    console.log(`Correct Answer: ${correctAnswer}\n`);
  }
  console.log(candidateAnswers);
}

function gradeQuiz(candidateAnswers) {
  let grade = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      grade += 1;
      // console.log("GOT IT");
    }
  }
  // console.log

  console.log(grade);

  let percent = (grade / candidateAnswers.length) * 100;
  console.log(percent);
  let passOrFail = "";
  if (percent > 70) {
    passOrFail = "PASSED";
  } else {
    passOrFail = "FAILED";
  }

  console.log(`>>> Overall Grade: ${percent}% (${grade} of 5 responses correct) <<<`);
  console.log(`>>> STATUS: ${passOrFail}`);
  // Number of Correct Answers) / (Number of Quiz Questions) * 100

  return grade;
}

function runProgram() {
  candidateName = getCandidateName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello, ${candidateName}!`);
  runQuiz();
  grade = gradeQuiz(this.candidateAnswers);
  console.log(grade);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};


/*
UNUSED FUNCTIONS

function capitalizeString(name) {
  fullName = name.split(" ");
  for (i = 0; i < fullName.length; i++) {
    fullName[i] = capitalizeWord(fullName[i]);
  }
  // console.log(fullName)
  return fullName.join(" ")
}
function capitalizeWord(word, index) {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}


// FEEDBACK FUNCTION
console.log(`Your answer: ${candidateAnswer}`);
  if (candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log("You got it!");
  } else {
    console.log("Oh no, incorrect. Try again next time.");
  }

*/