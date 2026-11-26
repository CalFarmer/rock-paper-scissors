// let randomChoice = Math.floor(Math.random() * 3) + 1;

//  take input
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let playercChoice;

rock.addEventListener("click",playerRock)
paper.addEventListener("click",playerPaper)
scissors.addEventListener("click",playerScissors)


// 1 beats 2
// 2 beats 3
// 3 beats 1

function playerRock() {
    playercChoice = 1
    runGame()
    
}

function playerPaper() {
    playercChoice = 2
    runGame()
    
}

function playerScissors() {
    playercChoice = 2
    runGame()
    
}

// game logic
function runGame() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if(randomChoice === 1) {
        if(playercChoice === 1) {
        console.log("tie")
        } else if(playercChoice === 3) {
        console.log("player wins")
        } else if(playercChoice === 2){
        console.log("player loses")
        } 
    }
    if(randomChoice === 2) {
        if(playercChoice === 2) {
        console.log("tie")
        } else if(playercChoice === 1) {
        console.log("player wins")
        } else if(playercChoice === 3){
        console.log("player loses")
        } 
    }
    if(randomChoice === 3) {
        if(playercChoice === 3) {
        console.log("tie")
        } else if(playercChoice === 2) {
        console.log("player wins")
        } else if(playercChoice === 1){
        console.log("player loses")
        } 
    }
    console.log(randomChoice)
    
    
}
