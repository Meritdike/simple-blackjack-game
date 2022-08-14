let message = document.getElementById('message');
let cards = document.getElementById('card');
let cardSum = document.getElementById('sum');
let playerChips = document.getElementById('player-chips');
let cardsArr =[];
let sum = 0;
let printMessage = ''
let hasBlackjack = false; 
let isAlive = false;


function renderCards() {
    cards.textContent = 'Cards: '
    for (let i = 0; i < cardsArr.length; i++) {
        cards.textContent += cardsArr[i] + '-';  
    }

    cardSum.textContent = 'Sum: ' + sum
    if (sum < 21) {
        printMessage = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        printMessage = "You've got Blackjack!"
        hasBlackjack = true;
    } else {
        printMessage = 'You lose!'
        isAlive = false;
    }

    message.textContent = printMessage;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cardsArr = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderCards()
} 

function getRandomCard() {
    let getRamdomCard = Math.floor(Math.random() * 13) + 1;
    if(getRamdomCard > 10) {
        return 10
    } else if(getRamdomCard === 1) {
        return 11
    } else {
        return getRamdomCard
    }
}

function newCard() {
    if(isAlive === true && sum !== 21) {
        let card = getRandomCard()
        cardsArr.push(card)
        sum += card
        renderCards()
    }
}