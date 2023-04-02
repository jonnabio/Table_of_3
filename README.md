# Table_of_3
App to learn the table of 3
This is an HTML file containing JavaScript code to create a simple multiplication game. The game presents the user with a multiplication problem of 3 multiplied by a random number between 0 and 10. The user inputs their answer and the game checks if the answer is correct or not.

The code initializes variables to keep track of the number of attempts, the number of correct answers, and the number of incorrect answers. The generateProblem() function generates a new multiplication problem with a random number each time it is called.

The checkAnswer() function is called when the user clicks on the "Check Answer" button. It checks if the user's answer is correct, and if it is, increments the correct count and displays a congratulatory message. If the answer is incorrect, it increments the wrong count and provides feedback to the user on their answer. If the user enters an incorrect answer for the first time, the correct answer is shown. If the user enters an incorrect answer again, they are prompted to try again.

The restartGame() function is called when the user clicks on the "Next Question" button after completing a round of the game. It resets the game by enabling the input field and the "Check Answer" button, and generates a new multiplication problem.

Finally, the endGame() function is called when the user has reached a total of five attempts. It disables the input field and the "Check Answer" button, displays the number of correct and incorrect answers, and resets the counters for the next game.

Overall, this code creates a simple multiplication game with basic functionality that allows the user to test their multiplication skills.
