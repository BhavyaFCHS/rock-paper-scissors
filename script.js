function getComputerChoice() {
    // generate a random number, 0, 1, or 2
    let num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let validChoice = false;
    let choice;
    while(!validChoice) {
        choice = prompt("Enter your choice, (rock, paper, or scissors): ").toLowerCase();
        validChoice = (choice === "rock" || choice === "paper" || choice === "scissors") ? 
            true : 
            console.log("invalid choice!\nChoose Again!");
    }
    return choice;
}

// Declaring variables to keep track of the game score
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Tie!\nHuman Score: ${humanScore}, Computer Score: ${computerScore}`;
    }
    else if(humanChoice === "rock") { 
        // rock beats scissors
        (computerChoice === "scissors") ? humanScore++ : computerScore++;
    } else if(humanChoice === "scissors") { 
        // scissors beat paper
        (computerChoice === "paper") ? humanScore++ : computerScore++;
    } else if(humanChoice === "paper") { 
        // paper beats rock
        (computerChoice === "rock") ? humanScore++ : computerScore++;
    }
    return `Human Choice: ${humanChoice}, Computer Choice: ${computerChoice} |
            Human Score: ${humanScore}, Computer Score: ${computerScore}`;
}

// Function defining the game loop
function playGame(getHumanChoice, getComputerChoice) {
    const numRounds = 5;
    let currentRound = 0;
    while(currentRound < numRounds) {
        console.log(`Round ${currentRound + 1}`);
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        currentRound++;
    }

}

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";

rock.setAttribute("id", "rock");
paper.setAttribute("id", "paper");
scissors.setAttribute("id", "scissors")

const output = document.createElement("div");

document.querySelector("body").append(rock, paper, scissors, output);

document.querySelector("body").addEventListener("click", e => {
    const target = e.target;
    let gameOutcome = "";
    switch(target.id) {
        case "rock":
            gameOutcome = playRound("rock", getComputerChoice());
            break;
        case "paper":
            gameOutcome = playRound("paper", getComputerChoice());
            break;
        case "scissors":
            gameOutcome = playRound("scissors", getComputerChoice());
            break;
    }
    output.textContent = gameOutcome;
});

