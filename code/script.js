<<<<<<< HEAD
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
=======
"use strict";
// defino variables que tomo del DOM, cojo por id los que comparten nombre y el resto por querySelector
const player0 = document.querySelector(".player--0"),
    player1 = document.querySelector(".player--1"),
    score0 = document.getElementById("score--0"),
    score1 = document.getElementById("score--1"),
    current0 = document.getElementById("current--0"),
    current1 = document.getElementById("current--1"),
    dice = document.querySelector(".dice"),
    btnNew = document.querySelector(".btn--new"),
    btnRoll = document.querySelector(".btn--roll"),
    btnHold = document.querySelector(".btn--hold");
let scores, currentScore, activePlayer, playing;
// inicializo la APP incicializo las variables a 0 o escondo las que o se deberían de ver.
const init = function () {
        (scores = [0, 0]),
            (currentScore = 0),
            (activePlayer = 0),
            (playing = !0),
            (score0.textContent = 0),
            (score1.textContent = 0),
            (current0.textContent = 0),
            (current1.textContent = 0),
            dice.classList.add("hidden"),
            player0.classList.remove("player--winner"),
            player1.classList.remove("player--winner"),
            player0.classList.add("player--active"),
            player1.classList.remove("player--active");
    },
    //La función switchPlayer llama a la función init, inicializando de nuevo a 0 los contadores, de modo que al cambiar de jugador durante una partida, no se lleven puntos
    switchPlayer =
        (init(),
        function () {
            (document.getElementById("current--" + activePlayer).textContent = 0), (currentScore = 0), ((activePlayer = 0) === activePlayer ? 1 : 0), player0.classList.toggle("player--active"), player1.classList.toggle("player--active");
        });
    //escucho evento click en el botónRoll    
btnRoll.addEventListener("click", function () {
    var e;
    playing &&
        ((e = Math.trunc(6 * Math.random()) + 1),
        dice.classList.remove("hidden"),
        (dice.src = `dice-${e}.png`),
        // si el dado sale de 2 a 6, suma el contador de puntuación, si sale 1, cambia de jugador.
        1 !== e ? ((currentScore += e), (document.getElementById("current--" + activePlayer).textContent = currentScore)) : switchPlayer());
}),
    btnHold.addEventListener("click", function () {
        playing &&
            ((scores[activePlayer] += currentScore),
            (document.getElementById("score--" + activePlayer).textContent = scores[activePlayer]),
            100 <= scores[activePlayer]
                ? ((playing = !1), dice.classList.add("hidden"), document.querySelector(".player--" + activePlayer).classList.add("player--winner"), document.querySelector(".player--" + activePlayer).classList.remove("player--active"))
                : switchPlayer());
    }),
    btnNew.addEventListener("click", init);
>>>>>>> 6d4415288fa3feecca808f661368a2b132aac11b
