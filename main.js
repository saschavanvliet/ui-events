/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt



//Nummer 1!
// Stap 1: querySelector
// let bibberLink = document.querySelector...
let frontend = document.querySelector('a:nth-of-type(1)')

// Stap 2: addEventListener
// bibberLink.addEventListener...
frontend.addEventListener('click', rotate)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...
function rotate () {
  frontend.classList.toggle('rotate')
}

// button 2
let design = document.querySelector('a:nth-of-type(2)')
design.addEventListener('click', scale)
function scale(){
  design.classList.toggle('scale')
}

// // button 3
// let and = document.querySelector('a:nth-of-type(3)')
// and.addEventListener('click', scale)
// function scale(){
//   and.classList.toggle('scale')
// }

// button 4
let development = document.querySelector('a:nth-of-type(4)')
development.addEventListener('mousemove', omdraaienouleh)
function omdraaienouleh(){
  development.classList.toggle('turnaround')
}

// button 5
let sprint5 = document.querySelector('a:nth-of-type(5)')
sprint5.addEventListener('mousemove', weg)
function weg(){
  sprint5.classList.toggle('gone')
  console.log(sprint5)
}

// button 6
let fix = document.querySelector('a:nth-of-type(6)')
fix.addEventListener('mousemove', colorchange)
function colorchange(){
  fix.classList.toggle('clown')
}