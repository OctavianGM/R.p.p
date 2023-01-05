const choices=["rock","paper","scissors"]
let computerChoice=0;
let playerChoice =0;
let playerScore=0;
let computerScore=0;

function getComputerChoice() {  // randomizing between rock, paper and scissors and storing the value in computerChoice

computerChoice=choices[Math.floor(Math.random()*choices.length)];
return computerChoice;
}

function getPlayerChoice() {    //getting the user's input, formatting and validating it
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


function playRound(computerChoice, playerChoice) {     // playing a round of rock paper scissors

    if (computerChoice===playerChoice) {
    return "Draw";
    } else if (
    (computerChoice==="rock" && playerChoice==="paper") ||
    (computerChoice==="paper" && playerChoice==="scissors") ||
    (computerChoice==="scissors" && playerChoice==="rock")
     ) {
    playerScore++;
    return "Player Wins";
    }
    else {
    computerScore++
    return "Computer Wins"
     }
    
    }

    function game () {  // running a game composed of 5 playRounds
     for (let i=0; i<5; i++) {    
    getPlayerChoice()
    getComputerChoice()
    playRound(computerChoice, playerChoice)
    console.log ("player picks " + playerChoice + " and computer picks " + computerChoice )
    console.log ("Player score is " + playerScore + " and computer score is " + computerScore)
    }
     if (computerScore>playerScore) {
     return "Computer wins the game!";
} else if (computerScore<playerScore) {
    return "Player wins the game!"; 
}
 else {
    return "It's a tie, play again?"
    }
}