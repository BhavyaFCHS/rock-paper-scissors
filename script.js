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
    return `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
}

function showWinner() {
    let display;
    if(humanScore === computerScore) {
        display = "Game Over: TIE";
    } else if(humanScore > computerScore) {
        display = "Winner: HUMAN";
    } else {
        display = "Winner: COMPUTER";
    }
    winner.textContent = display;
    winner.style.backgroundColor = "rgb(3, 38, 134)";
    winner.style.color = "whitesmoke";
    winner.style.fontWeight = "bold";
    winner.style.fontSize = "24px";
    winner.style.padding = "12px";
    winner.style.borderRadius = "15px";
}

// Declaring variables to keep track of the game score
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
const possibleChoices = ["rock", "paper", "scissors"];
const NUM_ROUNDS = 5;
let currentRound = 1;


const begin = document.querySelector("#begin");
const game = document.querySelector(".game");
const choice = document.querySelector(".choice");
const output = document.querySelector(".output");
const winner = document.querySelector(".winner");
const playAgain = document.querySelector("#play-again");
const gameOverMessage = document.createElement("div");
game.insertBefore(gameOverMessage, game.firstChild);

playAgain.addEventListener("click", e => {
    currentRound = 1;
    humanScore = 0;
    computerScore = 0;

    playAgain.classList.remove("hvr");
    playAgain.classList.remove("pastyles");    
    playAgain.textContent = "";

    winner.textContent = "";
})

game.addEventListener("click", e => {
    humanChoice = e.target.id;
    choice.textContent = humanChoice;
    choice.style.backgroundColor = "rgb(3, 38, 134)";
    choice.style.color = "whitesmoke";
    choice.style.fontWeight = "bold";
    choice.style.fontSize = "24px";
    choice.style.padding = "12px";
    choice.style.borderRadius = "15px";
});

begin.addEventListener("click", function(e) {
    if(possibleChoices.includes(humanChoice) && currentRound <= NUM_ROUNDS) {
        gameOverMessage.textContent = "";

        let computerChoice = getComputerChoice();
        outcome = playRound(humanChoice, computerChoice);

        const round = document.createElement("div");
        round.textContent = `Scores: ${outcome}`;
        round.style.marginLeft = "12px";
        round.style.padding = "8px";
        round.style.borderBottom = "1px solid black";

        const compChoice = document.createElement("div");
        compChoice.textContent = `Computer Choice: ${computerChoice}`;
        compChoice.style.marginLeft = "12px";
        compChoice.style.padding = "8px";
        compChoice.style.borderTop = "1px solid black";

        const outputMessage = document.createElement("div");
        const numRound = document.createElement("div");
        numRound.textContent = `Current Round: ${currentRound}`;
        numRound.style.fontSize = "16px";

        outputMessage.append(numRound, compChoice, round);
        output.insertBefore(outputMessage, output.firstChild);
        humanChoice = "";

        if(currentRound === NUM_ROUNDS) showWinner();
        currentRound++;
    } else if(!possibleChoices.includes(humanChoice)){
        output.textContent = "NOT A VALID SELECTION";
    } else if(currentRound > NUM_ROUNDS){
        gameOverMessage.textContent = "GAME OVER! Press Play Again Button!";
        gameOverMessage.style.fontSize = "18px";
        playAgain.textContent = "Play Again!";
        playAgain.classList.add("hvr");
        playAgain.classList.add("pastyles");
    }
})


