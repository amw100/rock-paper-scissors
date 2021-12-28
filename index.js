const buttons = document.querySelectorAll('button');
const playerDiv = document.querySelector('#player-score')
const computerDiv = document.querySelector('#computer-score')
const resultDiv = document.querySelector('#result')
const winnerDiv = document.querySelector('#winner')
const playerImg = document.querySelector('#player-img')
const computerImg = document.querySelector('#computer-img')

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
            computerImg.src = "./imgs/rock.svg";
            return "Rock";
        case 1:
            computerImg.src = "./imgs/paper.svg";
            return "Paper";
        case 2:
            computerImg.src = "./imgs/scissors.svg";
            return "Scissors";
    }
}


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    playerImg.src = `./imgs/${playerSelection}.svg`;
    //equalize string syntax
    playerSelection = capitalize(playerSelection);
    let result = winner(playerSelection,computerSelection);
    if (result == 'Tie'){
        resultDiv.textContent = `It's a Tie! We both chose ${computerSelection}`;
        resultDiv.style.color = 'hsl(210, 10%, 50%)';
    }
    //if computer wins -> return "You Lose! Paper beats Rock"
    else if (result == 'Computer'){
        computerScore++;
        computerDiv.textContent = `Computer: ${computerScore}`
        resultDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        resultDiv.style.color = 'hsl(360, 75%, 50%)';
        if(computerScore == 5)
            finishGame("Computer");
    }
    //else-> player wins -> return "You Win! Paper beats Rock"
    else{
        playerScore++;
        playerDiv.textContent = `Player: ${playerScore}`;
        resultDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        resultDiv.style.color = 'hsl(150, 75%, 50%)';
        if(playerScore == 5)
            finishGame("Player");
    }
}

function finishGame(winner){
    winnerDiv.textContent = `Game Over. ${winner} Wins!`;
    if (winner == 'Computer')
        winnerDiv.style.color = 'hsl(360, 50%, 50%)';
    else
        winnerDiv.style.color = 'hsl(150, 50%, 50%)';
    if (confirm(`Game Over. ${winner} Wins!\n Play Again?`)){
        playerScore = 0;
        computerScore = 0;
        winnerDiv.textContent = "";
        resultDiv.textContent = "";
        computerDiv.textContent = `Computer: ${computerScore}`
        playerDiv.textContent = `Player: ${playerScore}`;
        playerImg.src = "./imgs/question-mark.svg";
        computerImg.src = "./imgs/question-mark.svg";
    }
    else
        buttons.forEach((button) => button.disabled = true);
}

function winner(playerSelection, computerSelection){
    if (computerSelection == playerSelection)
        return 'Tie';
    else if ((computerSelection == "Rock" && playerSelection == "Scissors") ||
        (computerSelection == "Paper" && playerSelection == "Rock") ||
         (computerSelection == "Scissors" && playerSelection == "Paper"))
        return 'Computer';
    else
        return 'Player';
}