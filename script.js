// let randomChoice = Math.floor(Math.random() * 3) + 1;

//  take input
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
// let playercChoice;
let round = 0
let playerScore = 0
let computerScore = 0


rock.addEventListener("click",playerRock)
paper.addEventListener("click",playerPaper)
scissors.addEventListener("click",playerScissors)


// 1 beats 2
// 2 beats 3
// 3 beats 1

function playerRock() {
    if (round < 5) {
    playercChoice = 1
    runGame()
    } //else {
    //finishGame(computerScore, playerScore)
    //}
}

function playerPaper() {
    if (round < 5) {
    playercChoice = 2
    runGame()
    } 
}

function playerScissors() {
    if (round < 5) {
    playercChoice = 3
    runGame()
    } 
}

// game logic
function runGame() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if(randomChoice === 1) {
        if(playercChoice === 1) {
        console.log("tie")
        tie()
        } else if(playercChoice === 3) {
        console.log("player wins")
        win()
        } else if(playercChoice === 2){
        console.log("player loses")
        loss()
        } 
    }
    if(randomChoice === 2) {
        if(playercChoice === 2) {
        console.log("tie")
        tie()
        } else if(playercChoice === 1) {
        console.log("player wins")
        win()
        } else if(playercChoice === 3){
        console.log("player loses")
        loss()
        } 
    }
    if(randomChoice === 3) {
        if(playercChoice === 3) {
        console.log("tie")
        tie()
        } else if(playercChoice === 2) {
        console.log("player wins")
        win()
        } else if(playercChoice === 1){
        console.log("player loses")
        loss()
        } 
    }
    // console.log(randomChoice)
    
    
}

function win() {
    round = round + 1
    console.log("round", round)
    playerScore = playerScore + 1
    checkRound()
}
function tie() {
    console.log("retry")
    checkRound()
}

function loss() {
    round = round + 1
    console.log("round", round)
    computerScore = computerScore + 1
    checkRound()
}

function checkRound() {
    if (round === 5)
    finishGame(computerScore, playerScore)
}

function finishGame(computer, player) {
    if(computer > player) {
        console.log("You Lose")
    } else {
        console.log("You Win")
    }
}