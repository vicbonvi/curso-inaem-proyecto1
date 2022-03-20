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
    //La función switchPlayer llama a la función init
    switchPlayer =
        (init(),
        function () {
            (document.getElementById("current--" + activePlayer).textContent = 0), (currentScore = 0), ((activePlayer = 0) === activePlayer ? 1 : 0), player0.classList.toggle("player--active"), player1.classList.toggle("player--active");
        });
btnRoll.addEventListener("click", function () {
    var e;
    playing &&
        ((e = Math.trunc(6 * Math.random()) + 1),
        dice.classList.remove("hidden"),
        (dice.src = `dice-${e}.png`),
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
