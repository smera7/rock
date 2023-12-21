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
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock.";
        } else {
            return "You lose! Scissors beats paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors.";
        } else {
            return "You win! Scissors beats paper.";
        }
    }
}

console.log(getComputerChoice());
const computerSelection = getComputerChoice();
const playerSelection = prompt("Enter your choice: ").toLowerCase();

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        console.log("Player Selection:", playerSelection);
        console.log("Computer Selection:", computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());