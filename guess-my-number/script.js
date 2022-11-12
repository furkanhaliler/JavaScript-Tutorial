"use strict";

// document.querySelector(".message").textContent = "Merhaba";
// document.querySelector(".score").textContent = 111;
// document.querySelector(".guess").value = 14;
// document.querySelector("#number1").textContent = 12;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let start = true;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  if (score > 0 && start) {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
      displayMessage("Please enter a number between 1 and 20.");
      return;
    }
    if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      displayMessage("Congratulations!");
      start = false;
      if (score > highscore) {
        document.querySelector(".highscore").textContent = score;
        highscore = score;
      }
    } else {
      const message = guess > secretNumber ? "Too high!" : "Too low!";
      displayMessage(message);
      score--;
      document.querySelector(".score").textContent = score;
    }
    if (score <= 0) {
      displayMessage("You lost the game! Press Again! to play again.");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  start = true;
  document.querySelector(".guess").value = null;
  displayMessage("Start guessing...");
});

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
