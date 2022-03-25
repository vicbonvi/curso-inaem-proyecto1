'use strict';
// declaro las variables que voy a utilizar y las leo del DOM
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('.score--0');
const score1 = document.querySelector('score--1');
const currentScore0 = document.querySelector('current--0');
const currentScore1 = document.querySelector('current--1');
const dice = document.querySelector('.dice');
const buttonNew = document.querySelector('btn--new');
const buttonRoll = document.querySelector('btn--roll');
const buttonhold = document.querySelector('btn--hold');

// una función que genere el número aleatorio del 1 al 6 (guardando el valor en una variable), con la variable que retorna cambiamos el nombre de la imagen en el source del DOM (la imagen de la cara del dado correspondiente)

buttonRoll.addEventListener('click', function () {
  let e = Math.floor(Math.random() * 6) + 1,
  dice.classList.remove("hidden"),
  (dice.src = `dice-${e}.png`),
  1 !== e ? ((currentScore += e),(document.getElementById("current--" + activePlayer).textContent = currentScore)) : switchPlayer()); 
});
