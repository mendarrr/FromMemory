






// JAVASCRIPT CODE FOR THE SECOND PAGE...



const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");

// 
let contentArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

// calling the function not only in the localStorage but also as soon as we are using our web page... it populates the web page
contentArray.forEach(divMaker);


// it creates a flashcard for each of the flashcard that we had before the page is exited...

function divMaker(text) {
    // creating a div element and storing it in the variable div. same for the h2_qustion, h2_answer
    let div = document.createElement("div");
    let h2_question = document.createElement("h2");
    let h2_answer = document.createElement("h2");
    div.className = "flashcard";


    // styling it more...
    h2_question.setAttribute("style", "border-top: 1px solid red; padding: 15px; margin-top: 30px");

    // allows us to tpye our question
    h2_question.textContent = text.my_question;

    h2_answer.setAttribute("style", "text-align: center; display: none; color: blue");


    // allows us to tpye our answer
    h2_answer.textContent = text.my_answer;


    // adding the two div elements to the div container
    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function () {
        //  we have created an if else block code...if the event of a click has happened, then the answer will display, else if we click again, the answer is hidden.
        h2_answer.style.display = h2_answer.style.display === "none" ? "block" : "none";
    });

    // adding the div element to the flashcards container
    flashcards.appendChild(div);
}


// a function that adds the flashcards
function addFlashcard() {

    // declaring a variable and giving it the value of an object. it is moreaof a dictionary, which like stores the users input to his/hers local storage, enabling creation of flashcards.

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if (question === '' || answer === '') {
        alert("Please enter both question and answer.");
        return;
    }
    //  here is how we add it to the local storage...

    const flashcard_info = {
        "my_question": question,
        "my_answer": answer
    };

    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));

    divMaker(flashcard_info);

    // provide feedback to the user that flashcards have een added successfully
    alert("Flashcard added successfully.");

    // clear input fields 
    questionInput.value = '';
    answerInput.value = '';
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




// FETCHING THE API AFRICAN COUNTRIES


