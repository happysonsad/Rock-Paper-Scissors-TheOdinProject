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
console.log(getComputerChoice())

//Write the logic to get the human choice
//

//Declare the players score variables


//Write the logic to play a single round


//Write the logic to play the entire game


