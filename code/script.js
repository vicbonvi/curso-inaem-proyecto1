// elementos DOM a variables

const btnRoll = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  for (const elemDOM of [current0El, current1El, score0El, score1El])
    elemDOM.textContent = 0;

  // current0El.textContent = 0;
  // current1El.textContent = 0;
  // score0El.textContent = 0;
  // score1El.textContent = 0;

  // diceEl.style.display = 'none';
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  for (const playerEl of [player0El, player1El])
    playerEl.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // lo mismo más corto aprovechando coertion type
  // activePlayer = activePlayer ? 0 : 1

  // uso un bucle for para hacerlo "más sencillo"
  // player0El.classList.toggle('player--active');
  // player1El.classList.toggle('player--active');
  for (const playerEl of [player0El, player1El])
    playerEl.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    /* cambiar imagen  dado */
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    if (dice !== 1) {
      /* add dice to current score */
      // currentScore = currentScore + dice;
      currentScore += dice;
      /* display new score  */
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
// añadir al evento del btnHold el sumar los scores acumulados.
btnHold.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
      diceEl.classList.add('hidden');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
