let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerWins++;
            return "You lose! Paper beats rock.";
        } else {
            playerWins++;
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerWins++;
            return "You win! Paper beats rock.";
        } else {
            computerWins++;
            return "You lose! Scissors beats paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerWins++;
            return "You lose! Rock beats scissors.";
        } else {
            playerWins++;
            return "You win! Scissors beats paper.";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter your choice: ").toLowerCase();

        console.log("Player Selection:", playerSelection);
        console.log("Computer Selection:", computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);

    if (playerWins > computerWins) {
        return "You win!";
    } else if (playerWins < computerWins) {
        return "You lose!";
    } else {
        return "It's a tie!";
    }
}

console.log(game());