"use strict";
//////////////////////////////////////////////////
////----       Project  -- DICE GAME------------------
//////////////////////////////////////////////////
//
//
//
//
//
//
//
//
//
//
//
//

const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");

const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

const diceElement = document.querySelector(".dice");

const btnNewElement = document.querySelector(".btn--new");
const btnRollElement = document.querySelector(".btn--roll");
const btnHoldElement = document.querySelector(".btn--hold");

let finalScores, currentScore, activePlayer, playing;

const init = function () {
  finalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;

  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.remove("hidden");

  player0Element.classList.remove("player--winner");
  player1Element.classList.remove("player--winner");

  player0Element.classList.add("player--active");
  player1Element.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
};

btnRollElement.addEventListener("click", function () {
  if (playing) {
    const diceValue = Math.trunc(Math.random() * 6) + 1;
    console.log(diceValue);

    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${diceValue}.png`;

    if (diceValue !== 1) {
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHoldElement.addEventListener("click", function () {
  if (playing) {
    finalScores[activePlayer] += currentScore;
    console.log(finalScores[activePlayer]);

    document.getElementById(`score--${activePlayer}`).textContent =
      finalScores[activePlayer];

    if (finalScores[activePlayer] >= 100) {
      playing = false;

      diceElement.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNewElement.addEventListener("click", init);

console.log("This is Test Console Log for BetterBugs");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////////////////////////////////////////////////////////////////////////////////////////
