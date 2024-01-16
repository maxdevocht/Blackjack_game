let firstCard = 2
let secondCard = 8
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message  ""

if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "Too bad.. You just lost your money! 😭"
    isAlive = false
}

console.log(message)