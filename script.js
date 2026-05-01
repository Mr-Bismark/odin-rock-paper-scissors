/*
Functions
    getComputerChoice
        generates a number and returns computer choice
    
    getHumanChoice
        inputs and returns the human's choice
    
    playRound
        Has computerChoice and humanChoice as arguments
        Determines the winner from logic
        Displays round winner
        Increments winner's score

    playGame
        Calls the playRound Function 5x
        displays the final score and overall winner
    
Variables
    rand - stores the random number
    choice - stores user's choice [returned by getHumanChoice]
    option - stores the random number
    comChoice - stores computer choice [returned by getComputerChoice]
    humanScore - stores human's score [increases each time human wins]
    computerScore - stores computer's score [increases each time computer wins]
*/


function getComputerChoice(){
    //Generate random number
    let rand = Math.floor(Math.random() * 3) + 1;

    //Determine computer choice from random number
    let comChoice;
    if(rand == 1){
        comChoice = "rock";
    } else if (rand == 2){
        comChoice = "paper";
    } else{
        comChoice = "scissors";
    }

    return comChoice;
}

function getHumanChoice(){
    let choice = prompt("Rock, paper, scissors?");
    choice = choice.toLowerCase();
    return choice
}

function playRound(){}

function playGame(){}

