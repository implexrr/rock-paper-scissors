let x;
let a = 0;
let b = 0;
let c = 0;

// Randomly have computer choose rock, paper or scissors
function getComputerChoice () {
    choice = Math.floor((Math.random() * 3));
    switch (choice) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

// Ask user for prompt
function getPlayerChoice () {
    let choice = prompt("Choose your weapon!");
    return choice;
}

// Play a round of Rock, Paper, Scissors
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            return ("The computer has won! Paper beats Rock.");
        }
        else if (computerSelection === "SCISSORS") {
            return ("The player has won! Rock beats Scissors.");
        }
        else {
            return ("Tie or invalid results - play again.");
        }
    }
    if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            return ("The computer has won! Scissors beats Paper.");
        }
        else if (computerSelection === "ROCK") {
            return ("The player has won! Paper beats Rock.");
        }
        else {
            return ("Tie or invalid results - play again.");
        }
    }
    else {
        if (computerSelection === "PAPER") {
            return ("The player has won! Scissors beats Paper.");
        }
        else if (computerSelection === "ROCK") {
            return ("The computer has won! Rock beats Scissors.");
        }
        else {
            return ("Tie or invalid results - play again.");
        }
    }
}

// Play n rounds of Rock, Paper, Scissors
function game(n) {
    let playerWins = 0;
    let computerWins = 0;
    let result;
    for (let i = 0; i < n; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        console.log(`Player chose ${playerChoice} and computer chose ${computerChoice}`);
        result = (playRound(playerChoice, computerChoice));
        console.log(result);
        if (result[4].toLowerCase() == "p") {playerWins++;}
        if (result[4].toLowerCase() == "c") {computerWins++;}
    }
     alert(`The player won ${playerWins} games. The computer won ${computerWins} games.`);
}

// Run program
let n = prompt("How many games would you like to play?");
game(n);

