// Randomly generates computers choice
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

// Asks user to input choice -- Does not return until a valid choice is given
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
    // if both choices are same, the scores are unchanged
    // Output scores after the round
    return `Human Choice: ${humanChoice}, Computer Choice: ${computerChoice}
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

playGame(getHumanChoice, getComputerChoice);