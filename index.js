function computerPlay() {
    //randomly choose rock paper or scissors
    let choice = Math.floor(Math.random()*3)
    //return the random choice
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function playRound(playerSelection, computerSelection) {
    //equalize string syntax
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //if tie->return "It's a Tie, We both chose compuerselection"
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase())
        return "It's a Tie, We both chose ${compuerselection}"
    //if computer wins -> return "You Lose! Paper beats Rock"
    //else-> player wins -> return "You Win! Paper beats Rock"
  }

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));