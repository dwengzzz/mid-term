/* =========================================
   ANSWERS
========================================= */

// ALL TEXT ANSWERS ARE AUTOMATICALLY
// CONVERTED TO CAPITAL LETTERS.

const CORRECT_NAME = "ERICKA";

const CORRECT_MANLILIGAW = "DWYANE";

// February 26, 2026
const CORRECT_DATE = "2026-02-26";

// Accept BOTH singular and plural
const CORRECT_FLOWERS = [
  "CARNATION",
  "CARNATIONS"
];


/* =========================================
   QUESTION SWITCHER
========================================= */

function showQuestion(number) {

  // Hide all questions
  const questions = document.querySelectorAll(".question");

  questions.forEach(function(question) {
    question.classList.remove("active");
  });

  // Show the requested question
  const nextQuestion =
    document.getElementById("question" + number);

  if (nextQuestion) {
    nextQuestion.classList.add("active");
  }
}


/* =========================================
   QUESTION 1
   FIRST NAME
========================================= */

function checkName() {

  const input = document
    .getElementById("name")
    .value
    .trim()
    .toUpperCase();

  const error =
    document.getElementById("error1");

  if (input === CORRECT_NAME) {

    error.textContent = "";

    showQuestion(2);

  } else {

    error.textContent =
      "Hmm... that's not the answer. Try again. 💗";

  }
}


/* =========================================
   QUESTION 2
   MANLILIGAW'S NAME
========================================= */

function checkManliligaw() {

  const input = document
    .getElementById("manliligaw")
    .value
    .trim()
    .toUpperCase();

  const error =
    document.getElementById("error2");

  if (input === CORRECT_MANLILIGAW) {

    error.textContent = "";

    showQuestion(3);

  } else {

    error.textContent =
      "Are you sure? Try again. 👀💗";

  }
}


/* =========================================
   QUESTION 3
   CONFESSION DATE
========================================= */

function checkDate() {

  const input =
    document.getElementById("confess").value;

  const error =
    document.getElementById("error3");

  if (input === CORRECT_DATE) {

    error.textContent = "";

    showQuestion(4);

  } else {

    error.textContent =
      "That's not the date I'm looking for. 💗";

  }
}


/* =========================================
   QUESTION 4
   FAVORITE FLOWER
========================================= */

function checkFlower() {

  const input = document
    .getElementById("flower")
    .value
    .trim()
    .toUpperCase();

  const error =
    document.getElementById("error4");


  // Accept:
  // CARNATION
  // CARNATIONS

  if (CORRECT_FLOWERS.includes(input)) {

    error.textContent = "";

    showFinalScreen();

  } else {

    error.textContent =
      "Hmm... think of a flower. 🌸";

  }
}


/* =========================================
   FINISH
   REDIRECT TO FLOWER PAGE
========================================= */

function showFinalScreen() {

  /*
    When she gets the final answer correct
    and clicks "Finish 🌷",

    she will automatically be redirected
    to flowers.html
  */

  window.location.href = "flowers.html";

}


/* =========================================
   FORCE UPPERCASE WHILE TYPING
========================================= */

// FIRST NAME

const nameInput =
  document.getElementById("name");

if (nameInput) {

  nameInput.addEventListener(
    "input",
    function() {

      this.value =
        this.value.toUpperCase();

    }
  );

}


// MANLILIGAW'S NAME

const manliligawInput =
  document.getElementById("manliligaw");

if (manliligawInput) {

  manliligawInput.addEventListener(
    "input",
    function() {

      this.value =
        this.value.toUpperCase();

    }
  );

}


// FAVORITE FLOWER

const flowerInput =
  document.getElementById("flower");

if (flowerInput) {

  flowerInput.addEventListener(
    "input",
    function() {

      this.value =
        this.value.toUpperCase();

    }
  );

}


/* =========================================
   ENTER KEY SUPPORT
========================================= */

// If she presses ENTER instead of clicking
// the button, the question will also proceed.

if (nameInput) {

  nameInput.addEventListener(
    "keydown",
    function(event) {

      if (event.key === "Enter") {
        checkName();
      }

    }
  );

}


if (manliligawInput) {

  manliligawInput.addEventListener(
    "keydown",
    function(event) {

      if (event.key === "Enter") {
        checkManliligaw();
      }

    }
  );

}


if (flowerInput) {

  flowerInput.addEventListener(
    "keydown",
    function(event) {

      if (event.key === "Enter") {
        checkFlower();
      }

    }
  );

}
