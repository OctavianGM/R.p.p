const choices=["rock","paper","scissors"]
let computerChoice=0;
let playerChoice =0;
let playerScore=0;
let computerScore=0;

function getComputerChoice() {

computerChoice=choices[Math.floor(Math.random()*choices.length)];
return computerChoice;
}

function getPlayerChoice() {
playerChoice=prompt("What is your choice?").toLowerCase()
let validation = validateInput(playerChoice)
if (validation==true) {
    return "your choice is " + playerChoice;
}else {
playerChoice=prompt(playerChoice + " is not valid. Please try again").toLowerCase()
 return "your choice is " + playerChoice;   
}
}



function validateInput (playerInput) {  // check whether the input entered by the user is valid
    if (choices.includes(playerInput)) {
        return true;
    } else {
        return false;
    }
    
}


function playRound(computerChoice, playerChoice) {
    if (computerChoice===playerChoice)
    return "Draw"
    if (computerChoice==="rock" && playerChoice==="paper" ||computerChoice==="paper" && playerChoice==="scissors" ||computerChoice==="scissors" && playerChoice==="rock" )
    return "Player Wins"
    playerScore++

    if (computerChoice==="rock" && playerChoice==="scissors" || computerChoice==="paper" && playerChoice==="rock"|| computerChoice==="scissors" && playerChoice==="paper")
    return "Computer Wins"
    computerScore++
}

function game() {
    for (let i=0; i <5; i++) {
        playRound()
        if (playerScore>computerScore) 
    return "Player wins the game"
    else
    return "Computer wins the game"
    }
    
}