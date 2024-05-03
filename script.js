const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");

// storing the answers in the local storage
let contentArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

// calling the function not only in the localStorage but also as soon as we are using our web page... it populates the web page
contentArray.forEach(divMaker);

// it creates a flashcard for each of the flashcard that we had before the page is exited...

function divMaker(text) {
<<<<<<< HEAD
  // Creating a div element for the flashcard
=======
  // creating a div element and storing it in the variable div. same for the h2_qustion, h2_answer
>>>>>>> main
  let div = document.createElement("div");
  let h2_question = document.createElement("h2");
  let h2_answer = document.createElement("h2");
  div.className = "flashcard";
  h2_question.className = "question";
  h2_answer.className = "answer";

<<<<<<< HEAD
  // Allows us to type our question and answer
  h2_question.textContent = text.my_question;
  h2_answer.textContent = text.my_answer;

  // Adding the question and answer elements to the flashcard
  div.appendChild(h2_question);
  div.appendChild(h2_answer);

  // Adding event listener to toggle display of answer on click
  div.addEventListener("click", function () {
    h2_answer.style.display = h2_answer.style.display === "none" ? "block" : "none";
  });

  // Adding the div element to the flashcards container
  flashcards.appendChild(div);

  // Creating a div element for icons
  let iconContainer = document.createElement("div");
  iconContainer.className = "icon-container";
  div.appendChild(iconContainer);

  // Adding favorite icon
  let favoriteIcon = document.createElement("i");
  favoriteIcon.className = "far fa-heart";
  favoriteIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the click event from bubbling up to the flashcard div
    // Implement favorite functionality here
    alert("Added to favorites!");
  });
  iconContainer.appendChild(favoriteIcon);

  // Adding memorized icon
  let memorizedIcon = document.createElement("i");
  memorizedIcon.className = "far fa-check-circle";
  memorizedIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the click event from bubbling up to the flashcard div
    // Implement memorized functionality here
    alert("Marked as memorized!");
  });
  iconContainer.appendChild(memorizedIcon);

  // Adding not memorized icon
  let notMemorizedIcon = document.createElement("i");
  notMemorizedIcon.className = "far fa-times-circle";
  notMemorizedIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the click event from bubbling up to the flashcard div
    // Implement not memorized functionality here
    alert("Marked as not memorized!");
  });
  iconContainer.appendChild(notMemorizedIcon);
=======
  // allows us to tpye our question
  h2_question.textContent = text.my_question;

  // allows us to tpye our answer
  h2_answer.textContent = text.my_answer;

  // adding the two div elements to the div container
  div.appendChild(h2_question);
  div.appendChild(h2_answer);

  div.addEventListener("click", function () {
    //  we have created an if else block code...if the event of a click has happened, then the answer will display, else if we click again, the answer is hidden.
    h2_answer.style.display =
      h2_answer.style.display === "none" ? "block" : "none";
  });

  // adding the div element to the flashcards container
  flashcards.appendChild(div);
>>>>>>> main
}

// a function that adds the flashcards
function addFlashcard() {
  // declaring a variable and giving it the value of an object. it is moreaof a dictionary, which like stores the users input to his/hers local storage, enabling creation of flashcards.

  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();

  if (question === "" || answer === "") {
    alert("Please enter both question and answer.");
    return;
  }
  //  here is how we add it to the local storage...

  const flashcard_info = {
    my_question: question,
    my_answer: answer,
  };

  contentArray.push(flashcard_info);
  localStorage.setItem("items", JSON.stringify(contentArray));

  divMaker(flashcard_info);

  // provide feedback to the user that flashcards have een added successfully
  alert("Flashcard added successfully.");

  // clear input fields
  questionInput.value = "";
  answerInput.value = "";
}

function delFlashcards() {
  if (confirm("Are you sure you want to delete all flashcards?")) {
    localStorage.clear();
    flashcards.textContent = "";
    contentArray = [];

    // return feedback to the user that cards have been deleted
    alert("All flashcards have been deleted");
  }
}

function showCreateCardBox() {
  createBox.style.display = "block";
}

function hideCreateBox() {
  createBox.style.display = "none";
}

// Select all links in the navigation bar
const links = document.querySelectorAll("nav a");

// Add a click event to each link
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});
