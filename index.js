const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        playRound(button.id);
    });
});

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    //randomly choose rock paper or scissors
    let choice = Math.floor(Math.random() * 3);
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
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    //equalize string syntax
    playerSelection = capitalize(playerSelection);
    console.log(playerSelection);
    //if tie->return "It's a Tie, We both chose compuerselection"
    if (playerSelection == computerSelection)
        return `Tie`;
    //if computer wins -> return "You Lose! Paper beats Rock"
    if ((computerSelection == "Rock" && playerSelection == "Scissors") ||
             (computerSelection == "Paper" && playerSelection == "Rock") ||
              (computerSelection == "Scissors" && playerSelection == "Paper"))
        return `Computer`;
    //else-> player wins -> return "You Win! Paper beats Rock"
    else
        return `Player`;
}

function validSelection(selection) {
    selection = capitalize(selection);
    if ((selection == "Rock") || (selection == "Paper") || (selection == "Scissors"))
        return true;
    return false;
}