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

    // rock - rock, rock - paper, rock - scissors
    // paper - paper, paper - rock, paper - scissors
    // scissors - scissors, scissors - paper, scissors - rock
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! Paper beats Rock!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lose! Scissors beats paper!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Scissors beats paper!");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lose! Rock beats scissors!");
    } else {
        console.log("Tie!");
    }

}


function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    humanScore > computerScore ?
        console.log(`Congratulations, you are the victor with ${humanScore} out of 5 rounds won and ${5 - humanScore - computerScore} tie(s).`) :
        console.log(`Unfortunately, you have lost to computer. computer wins with ${computerScore} out of 5 rounds won and ${5 - humanScore - computerScore} tie(s).`);
}

playGame();


