//initial
 winStates = ["Rock", "Paper", "Scissors"];

//scores
 playerScore = document.querySelector('.playerScore');
 computerScore = document.querySelector('.computerScore');

 info = document.querySelector('.infoText');

//buttons
 rockButton = document.querySelector('.rockBtn');
 paperButton = document.querySelector('.paperBtn');
 scissorsButton = document.querySelector('.scissorsBtn');




rockButton.addEventListener('click', e => {
    playRound(winStates[0], winStates[Math.floor(Math.random() * 3)]);
});

paperButton.addEventListener('click', e => {
    playRound(winStates[1], winStates[Math.floor(Math.random() * 3)]);
});

scissorsButton.addEventListener('click', e => {
    playRound(winStates[2], winStates[Math.floor(Math.random() * 3)]);
});

//Single round of RPS

function playRound(playerSelection, computerSelection) {
     

    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            info.innerText = "That's a tie!"
        }
        else if (computerSelection == "Paper") {
            info.innerText = "You lose! Paper beats rock";
            computerScore.innerText++;
            
        }
        else if (computerSelection == "Scissors") {
           info.innerText = "You win! Rock beats scissors";
            playerScore.innerText++;
            
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            info.InnerText = "You win! Paper beats rock";
            playerScore.innerText++;
            
        }
        else if (computerSelection == "Paper") {
            info.innerText = "That's a tie!";
        }
        else if (computerSelection == "Scissors") {
            info.innerText = "You lose! Scissors beat paper";
            computerScore.innerText++;
            
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            info.innerText = "You lose! Rock beats scissors";
            computerScore.innerText++;
            
        }
        else if (computerSelection == "Paper") {
            info.innerText = "You win! Scissors beat paper";
            playerScore.innerText++;
        }
        else if (computerSelection == "Scissors") {
            info.innerText = "That's a tie!";
        }
    }
    else {
        return "Your move is unavailable!"
        }
    
}