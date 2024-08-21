//There are two players in the game: (1)human and (2)computer

//Write the logic to get the computer choice
//create a function to get three random numbers
function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3);
    //assign different numbers to the values of “rock”, “paper” or “scissors” respectively
    if(ComputerChoice === 0) {
        return "rock";
    } else if (ComputerChoice === 1) {
        return "paper";
    } else if (ComputerChoice === 2) {
        return "scissors"
    }
}

//Write the logic to get the human choice
//use the "prompt" to get user's input
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


//Declare the players score variables
//create two global variables for score
let humanScore = 0;
let computerScore = 0;


//Write the logic to play a single round
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
        console.log("Draw!");
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//call the function
playRound(humanSelection, computerSelection);
console.log(humanScore); 
console.log(computerScore);


//Write the logic to play the entire game


