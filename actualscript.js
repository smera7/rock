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

// Create buttons for each selection
const rockButton = document.createElement("button");
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

// Add event listeners to the buttons
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    updateScore();
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    updateScore();
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    updateScore();
});

// Append the buttons to a container element
const buttonContainer = document.createElement("div");
buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);

// Append the container element to the document body
document.body.appendChild(buttonContainer);

// Add a div for displaying results and append it to the body
const resultsDiv = document.createElement("div");
document.body.appendChild(resultsDiv);

function updateScore() {
    // Update the text content of playerWinsElement and computerWinsElement
    const playerWinsElement = document.createElement("p");
    playerWinsElement.textContent = "Player Wins: " + playerWins;

    const computerWinsElement = document.createElement("p");
    computerWinsElement.textContent = "Computer Wins: " + computerWins;

    // Remove previous score elements before appending new ones
    resultsDiv.innerHTML = '';
    resultsDiv.appendChild(playerWinsElement);
    resultsDiv.appendChild(computerWinsElement);

    // Check if the game is over
    if (playerWins === 5 || computerWins === 5) {
        const gameResult = document.createElement("p");
        gameResult.textContent = playerWins === 5 ? "You win the game!" : "Computer wins the game!";
        resultsDiv.appendChild(gameResult);

        // Reset scores for a new game
        playerWins = 0;
        computerWins = 0;
    }
}
