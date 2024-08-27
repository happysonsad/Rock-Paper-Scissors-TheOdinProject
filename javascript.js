function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3);
    //assign different numbers to the values of “rock”, “paper” or “scissors” respectively

   switch (ComputerChoice) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
   }
}

function getHumanChoice() {
    let HumanChoice = prompt("Choose now! Rock, paper or scissors?","Rock");
    if (HumanChoice.toLowerCase() === "rock") {
        return "rock";
    } else if (HumanChoice.toLowerCase() === "paper") {
        return "paper";
    } else if (HumanChoice.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        return alert("You should enter paper, rock or scissors! Refresh and try again!")
    }

}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    
    let result = "";
    
    
    if (humanChoice === "rock" && computerChoice === "paper") {
        result = "You lose! Paper beats Rock!";
        console.log("You lose! Paper beats Rock!");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        result = "You win! Rock beats scissors!";
        humanScore++;
        console.log("You win! Rock beats scissors!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result = "You win! Paper beats Rock!";
        humanScore++;
        console.log("You win! Paper beats Rock!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result = "You lose! Scissors beats paper!";
        computerScore++;
        console.log("You lose! Scissors beats paper!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result = "You win! Scissors beats paper!";
        humanScore++;
        console.log("You win! Scissors beats paper!");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result = "You lose! Rock beats scissors!";
        computerScore++;
        console.log("You lose! Rock beats scissors!");
    } else {
        result = "Tie!";
        console.log("Tie!");
    }

    document.querySelector('#result').textContent = result;
    document.querySelector('#humanScore').textContent = `Human Score: ${humanScore}`;
    document.querySelector('#computerScore').textContent = `Computer Score: ${computerScore}`;

    // end which someone reaches 5 pts
    checkWinner();

}

function checkWinner() {
    if (humanScore === 5 || computerScore ===5) {
        const winner = humanScore === 5 ? "Human" : "Computer";
        alert(`${winner} won!`);
        //resetGame();
    };
}



const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});


// git push origin rps-ui