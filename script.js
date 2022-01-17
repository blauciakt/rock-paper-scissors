//Computer behaviour
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomMove = Math.floor(Math.random() * options.length);
    return options[randomMove];
}

// console.log(computerPlay());

//Single round of RPS

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What's your move?");
    computerSelection = computerPlay();

    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "rock") {
            return "That's a tie!";
        }
        else if (computerSelection.toLowerCase() == "paper") {
            return "You lose! Paper beats rock";
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            return "You win! Rock beats scissors";
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            return "You win! Paper beats rock";
        }
        else if (computerSelection.toLowerCase() == "paper") {
            return "That's a tie!";
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            return "You lose! Scissors beat paper";
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") {
            return "You lose! Rock beats scissors";
        }
        else if (computerSelection.toLowerCase() == "paper") {
            return "You win! Scissors beat paper";
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            return "That's a tie!";
        }
    }
    else {
        return "Your move is unavailable!"
        }
    

};


