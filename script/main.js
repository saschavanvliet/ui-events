// Niet door mij geschreven
let interaction = document.querySelector('a:nth-of-type(12)')
function jumpHandler() {
  interaction.classList.toggle('jump')
}
interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

// Mijn code - button 1
let frontend = document.querySelector('a:nth-of-type(1)')
frontend.addEventListener('click', colorclick)
function colorclick(){
  frontend.classList.toggle('color')
  console.log
}
// button 2
let design = document.querySelector('a:nth-of-type(2)')
design.addEventListener('click', groterclick)
function groterclick(){
  design.classList.toggle('groter')
}

// button 3
let and = document.querySelector('a:nth-of-type(3)')
and.addEventListener('mousemove', omdraaienouleh)
function omdraaienouleh(){
  and.classList.toggle('turnaround')
}

// button 4
let development = document.querySelector('a:nth-of-type(4)')
let popupding = document.querySelector('div.popupding')
development.addEventListener('click', popupouleh)
function popupouleh(){
  popupding.classList.toggle('showpopupding')
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

// button 7
let the = document.querySelector('a:nth-of-type(7)')
the.addEventListener('dblclick', vorm)
function vorm(){
  the.classList.toggle('square')
}

// button 8
let flow = document.querySelector('a:nth-of-type(8)')
let nobigmama = document.querySelector('div.nobigmama')
flow.addEventListener('click', groteryuh)
function groteryuh(){
  nobigmama.classList.toggle('bigmama')
}

// button 9
let user = document.querySelector('a:nth-of-type(9)')
let smeagol = document.querySelector('.smeagol')
user.addEventListener('mousemove', kiekeboe)
function kiekeboe(){
  smeagol.classList.toggle('smeagolshow')
}

// button 10
let interface = document.querySelector('a:nth-of-type(10)')
let kaas1 = document.querySelector('.kaas1')
interface.addEventListener('mouseover', breincelweg)
function breincelweg(){
  kaas1.classList.toggle('kaas1')
}