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

function playRound(playerSelection, computerSelection) {
    //equalize string syntax
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
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

function game() {
    let computerScore = 0;
    let playerScore = 0;

    //5 rounds of the game
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = "";
        //get a valid selection from the player
        while (!validSelection(playerSelection))
            playerSelection = capitalize(prompt("Please enter Rock, Paper or Scissors"));
        winner = playRound(playerSelection, computerSelection);
        if (winner == "Computer") {
            console.log(`You Lost this round! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        }
        else if (winner == "Player") {
            console.log(`You Won this round! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }
        else
            console.log(`This round is a Tie!`);
    }
    if (computerScore > playerScore)
        console.log("You Lose!");
    else if (playerScore > computerScore)
        console.log("You Win!");
    else
        console.log("It's a Tie");

}

function validSelection(selection) {
    selection = capitalize(selection);
    if ((selection == "Rock") || (selection == "Paper") || (selection == "Scissors"))
        return true;
    return false;
}

game();