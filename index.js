let sum = 0
let hasBlackJack = false
let stillAlive = false
let cards = []




let messageEl = document.getElementById("message-el") 
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#Cards-el")

function startGame() {
    stillAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard() 
    sum = firstCard + secondCard
    cards = [firstCard , secondCard]
    
    renderGame()
} 
function renderGame() { 
    
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " "
    } 
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
    message = "Do you want to draw a new card or you wanna get out?"
    stillAlive = true
    hasBlackJack = false
    }
    else if (sum === 21) {
        message = "Congratulations! You won the game because you have black jack"
        hasBlackJack = true
        stillAlive = false
    }
    else {
        message = "You are out of the GAME!"
        stillAlive = false
        hasBlackJack = false
    }
    messageEl.textContent = message
    
    
}
function getRandomCard() {
    
    let randomCard = Math.floor(Math.random()*13) + 1
    if (randomCard === 1) {
        return 11
        
    }else if (randomCard > 10) {
        return 10
    }
    return randomCard
}
function newCard() {
    
    if (stillAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
    
}
let player = {
    name: "Hamid",
    cash: 1000
}
let playerEl = document.getElementById("Player")
playerEl.textContent = player.name + " bidding $" + player.cash
