let message = document.getElementById('message');
let cards = document.getElementById('card');
let cardSum = document.getElementById('sum');
let playerChips = document.getElementById('player-chips');
let cardsArr =[];
let sum = 0;
let printMessage = ''
let hasBlackjack = false; //has no blackjack ie 21 before the start of the game
let isAlive = false; //is not alive before the game starts
let player = {
    name: 'Enter your name',
    chips: 250
}

playerChips.textContent = player.name + ': $' + player.chips



//renders cards, card-sum and updates the message when the start game or new card button is clicked
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
    sum = parseInt(firstCard) + parseInt(secondCard) //converts the prompt string to number

    renderCards()

    if (player.name == 'Enter your name') {
        let userName = prompt('What is your name?')
        player.name = userName;
        playerChips.textContent = player.name + ': $' + player.chips
    } 

    if(isAlive === true && sum === 21) {
        player.chips += 7; 
        playerChips.textContent = player.name + ': $' + player.chips
    }
} 

//gets random numbers when the start and new card buttons are clicked
function getRandomCard() {
    let getRamdomCard = Math.floor(Math.random() * 13) + 1;
    if(getRamdomCard > 10) {
        return 10
    } else if(getRamdomCard === 1) {
       let aceValue = prompt('Do you want 11 or 1') //Ace is either 1 or 11 as chosen by the player
        if (aceValue === '' || aceValue > 1 || aceValue < 11) {
            alert('You must enter either 1 or 11')
            return 0;
        } else {
            return aceValue;
        }
    } else {
        return getRamdomCard
    }
}

function newCard() {
    if(isAlive === true && sum !== 21) {
        let card = getRandomCard()
        cardsArr.push(card)
        sum += parseInt(card)
        renderCards()

        if(isAlive === false && sum > 21) {
            player.chips -= 10; 
            playerChips.textContent = player.name + ': $' + player.chips
        } else if(isAlive === true && sum === 21) {
            player.chips += 7; 
            playerChips.textContent = player.name + ': $' + player.chips
        }
    }
    
}

function newGame() {
    cardsArr =[];
    sum = 0;
    printMessage = 'Want to play a round?'
    hasBlackjack = false; //has no blackjack ie 21 before the start of the game
    isAlive = false; //is not alive before the game starts
    player = {
        name: 'Enter your name',
        chips: 250
    }

    let name = prompt('What is your name?');
    player.name = name;
    if (name == '') {
        return alert('You must enter a name to start a new game!');
    }

    cardSum.textContent = 'Sum: '
    cards.textContent = 'Cards: '
    message.textContent = printMessage;
    playerChips.textContent = player.name + ': $' + player.chips
}