// Array of quiz questions
const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "What does HTML stand for?", answer: "hypertext markup language" },
  { question: "What does “www” stand for?", answer: "world wide web" },
  { question: "What planet do we live on?", answer: "earth" },
  { question: "Which gas do plants breathe in?", answer: "carbon dioxide" }
];

// Function to run the quiz
function runQuiz() {
  let score = 0; 

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);
    userAnswer = userAnswer.toLowerCase().trim();

    // Check the answer
    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct!");
      score++; 
    } else {
      alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  
  alert("Quiz complete! Your final score is: " + score + " out of " + quizQuestions.length);
}

runQuiz();
