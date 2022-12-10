let computerSelection;
let computerWins=0;
let playerWins=0;

function getComputerChoice() {
    const choices=["rock","paper","scissors"];
computerSelection=choices[Math.floor(Math.random()*choices.length)];
return computerSelection
}

const playerChoice=prompt("Pick rock paper or scissors");


function playRound(playerSelection,computerSelection) {
computerSelection=getComputerChoice();
playerSelection=playerChoice.toLowerCase();
    if (computerSelection===playerSelection) {
    return "This game is a tie!";
}
    if (playerSelection==="rock") {
        if (computerSelection==="scissors") {
            return "player wins";
        }   else { 
            return "computer wins";
        
        }

    }
    if (playerSelection==="paper") {
        if (computerSelection==="scissors") {
            return "computer wins";
        }   else { 
            return "player wins";
        }

    }
    if (playerSelection==="scissors") {
        if (computerSelection==="paper") {
            return "player wins";
        }   else { 
            return "computer wins";
        }

    }
}

