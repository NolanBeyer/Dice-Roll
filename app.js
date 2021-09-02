const buttonTriggerEl = document.querySelector('.dice__trigger')
const diceImageEl = document.querySelector('.dice__image')

console.log(buttonTriggerEl)
console.log(diceImageEl)

function getRandomNumber() {
  return 1 + Math.floor(Math.random() * 6)
}

function rollDice() {
  buttonTriggerEl.addEventListener('click', function () {
    let myRandomNumber = getRandomNumber()
    diceImageEl.src = `/images/dice${myRandomNumber}.png`
  })
}

function animateDice() {
  buttonEl.addEventListener('click', function () {
    diceImageEl.classList.add('dice__effect')
  })
}

rollDice()
