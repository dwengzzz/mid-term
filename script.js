/* =========================================
   ANSWERS
========================================= */

// ANSWERS MUST BE IN CAPITAL LETTERS

const CORRECT_NAME = "ERICKA";

const CORRECT_MANLILIGAW = "DWYANE";

const CORRECT_DATE = "2026-02-26";

// Both answers are accepted
const CORRECT_FLOWERS = [
  "CARNATION",
  "CARNATIONS"
];


/* =========================================
   QUESTION SWITCHER
========================================= */

function showQuestion(number) {

  // Hide all questions
  document.querySelectorAll(".question").forEach(question => {
    question.classList.remove("active");
  });

  // Show selected question
  document
    .getElementById("question" + number)
    .classList.add("active");
}


/* =========================================
   QUESTION 1
========================================= */

function checkName() {

  const input = document
    .getElementById("name")
    .value
    .trim()
    .toUpperCase();

  const error = document.getElementById("error1");

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
========================================= */

function checkManliligaw() {

  const input = document
    .getElementById("manliligaw")
    .value
    .trim()
    .toUpperCase();

  const error = document.getElementById("error2");

  if (input === CORRECT_MANLILIGAW) {

    error.textContent = "";

    showQuestion(3);

  } else {

    error.textContent =
      "Are you sure? Try again. 👀💗";

  }
}


/* =========================================
   QUESTION 3 — DATE
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
   QUESTION 4 — FLOWER
========================================= */

function checkFlower() {

  const input = document
    .getElementById("flower")
    .value
    .trim()
    .toUpperCase();

  const error =
    document.getElementById("error4");

  // Accept CARNATION or CARNATIONS
  if (CORRECT_FLOWERS.includes(input)) {

    error.textContent = "";

    showFinalScreen();

  } else {

    error.textContent =
      "Hmm... think of a flower. 🌸";

  }
}


/* =========================================
   FINAL SCREEN
========================================= */

function showFinalScreen() {

  // Hide the question
  document
    .getElementById("question4")
    .classList.remove("active");

  // Hide subtitle
  document
    .getElementById("subtitle")
    .style.display = "none";

  // Change title
  document
    .getElementById("title")
    .textContent = "You made it! 💗";

  // Show final screen
  document
    .getElementById("finalScreen")
    .classList.add("show");

}


/* =========================================
   FORCE UPPERCASE WHILE TYPING
========================================= */

document
  .getElementById("name")
  .addEventListener("input", function () {

    this.value = this.value.toUpperCase();

  });


document
  .getElementById("manliligaw")
  .addEventListener("input", function () {

    this.value = this.value.toUpperCase();

  });


document
  .getElementById("flower")
  .addEventListener("input", function () {

    this.value = this.value.toUpperCase();

  });
