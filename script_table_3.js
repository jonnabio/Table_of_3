var correctCount = 0;
var wrongCount = 0;

function checkAnswer() {
  var userAnswer = parseInt(document.getElementById("answer-input").value);
  var correctAnswer = 3 * parseInt(document.getElementById("problem").innerHTML.split(" ")[2]);
  if (userAnswer === correctAnswer) {
    document.getElementById("answer-feedback").innerHTML = "Congratulations! You got it!";
    document.getElementById("answer-feedback").style.color = "#0303fc";
    document.getElementById("restart-button").style.display = "block";
    document.getElementById("answer-button").disabled = true;
    correctCount++;
    document.getElementById("correct-count").innerHTML = "Correct: " + correctCount;
  } else {
    answerAttempts++;
    if (answerAttempts === 3) {
      document.getElementById("answer-feedback").innerHTML = "Sorry, the correct answer is " + correctAnswer + ".";
      document.getElementById("answer-feedback").style.color = "#E74C3C";
      document.getElementById("answer-button").disabled = true;
      document.getElementById("restart-button").style.display = "block";
      wrongCount++;
      document.getElementById("wrong-count").innerHTML = "Wrong: " + wrongCount;
    } else {
      document.getElementById("answer-feedback").innerHTML = "Sorry, try again.";
      document.getElementById("answer-feedback").style.color = "#E74C3C";
      wrongCount++;
      document.getElementById("wrong-count").innerHTML = "Wrong: " + wrongCount;
    }
  }
}