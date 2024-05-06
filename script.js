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
        choice = prompt("Enter your choice, ('rock', 'paper', or 'scissors'): ").toLowerCase();
        validChoice = (choice === "rock" || choice === 'paper' || choice === 'scissors') ? true : console.log("invalid choice!\nChoose Again!");
    }
    return choice;
}

console.log(getHumanChoice());