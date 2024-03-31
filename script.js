// Define the array to store user's answers
const userAnswers = [];

// Add event listener to handle user's selection
document.addEventListener("change", function(event) {
  const selectedOption = event.target.value;
  const questionIndex = event.target.getAttribute("name").split("-")[1];
  userAnswers[questionIndex] = selectedOption;
});

// Display the quiz questions and choices
function renderQuestions() {
  const questionsElement = document.getElementById("questions");
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}

// Call the renderQuestions function
renderQuestions();
