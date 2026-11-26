let randomChoice = Math.floor(Math.random() * 3) + 1;

//  take input
let playercChoice;
// 1 beats 2
// 2 beats 3
// 3 beats 1

if(randomChoice === 1) {
    if(playercChoice === 1)
    console.log("tie")
} else if(playercChoice === 3) {
    console.log("player wins")
} else {
    console.log("player loses")
} 

if(randomChoice === 2) {
    if(playercChoice === 2)
    console.log("tie")
} else if(playercChoice === 1) {
    console.log("player wins")
} else {
    console.log("player loses")
} 

if(randomChoice === 3) {
    if(playercChoice === 3)
    console.log("tie")
} else if(playercChoice === 2) {
    console.log("player wins")
} else {
    console.log("player loses")
} 