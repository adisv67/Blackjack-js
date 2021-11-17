let player = {
    name : "per",
    chips : 200
}

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false 
let message = ""
let msgEl = document.getElementById("msg-el")
let sumEl = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")
let playerEl =document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNum = Math.floor(Math.random() * 13 ) + 1
    if(randomNum > 10) {
        return 10
    } else if(randomNum === 1){
        return 11
    }else {
        return randomNum
    }
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()

}



function renderGame(){
    cardsEL.textContent ="Cards : "
    for(let i= 0; i< cards.length; i++){
        cardsEL.textContent += cards[i] + " " 
    } 
    sumEl.textContent = "sum : " + sum
       
        if(sum <= 20){
            message = "Do you want to Draw a new card?"
        }
        else if(sum === 21){
            message = "You have the Blackjack"
            hasBlackjack = true
        }
        else{
            message = "You're out of the Game"
            isAlive = false
        }
        msgEl.textContent = message

      
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){ 
    let card =  getRandomCard()
    sum +=  card
    cards.push(card)
    renderGame()
    }

}


function play(){
     startGame()
    
}
 
