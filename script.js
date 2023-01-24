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
    playerChoice=prompt("What is your choice?").toLowerCase();
    let validation = validateInput(playerChoice);
    while (validation==false) {
        playerChoice=prompt(playerChoice + " is not valid. Please try again").toLowerCase(); 
        validation= validateInput(playerChoice)  
    }
    return "your choice is " + playerChoice;  
}
 
function validateInput (playerInput) {  // check whether the input entered by the user is valid
    return choices.includes(playerInput);
    }


function playRound(computerChoice, playerChoice) {     // playing a round of rock paper scissors
   
    if (computerChoice===playerChoice) {
        console.log ("Draw");
    }   else if (
        (computerChoice==="rock" && playerChoice==="paper") ||
        (computerChoice==="paper" && playerChoice==="scissors") ||
        (computerChoice==="scissors" && playerChoice==="rock")
        ) {
        playerScore++;
        console.log("Player Wins");
    }    else {
        computerScore++
        console.log ("Computer Wins");
        }
    
        if (playerScore ===5) {
            document.getElementById("winner").innerHTML="Player won the game";
            playerScore=0;
            computerScore=0;
            return;
        }
        if (computerScore ===5) {
            document.getElementById("winner").innerHTML="Computer won the game";
            playerScore=0;
            computerScore=0;
            return;
        }

document.getElementById("playerScore").innerHTML="Player score is " + playerScore;
document.getElementById("computerScore").innerHTML="Computer score is " + computerScore;


    }




document.getElementById("rock").addEventListener("click",function (){
    computerChoice=getComputerChoice();
    playerChoice= "rock";
    playRound(computerChoice,playerChoice);
});

document.getElementById("paper").addEventListener("click", function(){
    computerChoice=getComputerChoice();
    playerChoice="paper";
    playRound(computerChoice,playerChoice);
});

document.getElementById("scissors").addEventListener("click",function(){
    computerChoice=getComputerChoice()
    playerChoice="scissors";
    playRound(computerChoice,playerChoice);
});

//     function game () {  // running a game composed of 5 playRounds
//         for (let i=0; i<5; i++) {    
//             getPlayerChoice()
//             getComputerChoice()
//             playRound(computerChoice, playerChoice)
//             console.log ("player picks " + playerChoice + 
//             " and computer picks " + computerChoice )
//             console.log ("Player score is " + playerScore + 
//             " and computer score is " + computerScore)
//         }
//         if (computerScore>playerScore) {
//             return "Computer wins the game!";
//         }   else if (computerScore<playerScore) {
//             return "Player wins the game!"; 
//         }
//             else {
//             return "It's a tie, play again?"
//         }
// }