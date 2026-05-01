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
    //Input user choice
    let choice = prompt("Rock, paper, scissors?");

    //Convert to lowercase
    choice = choice.toLowerCase();

    return choice
}

humanScore = 0;
computerScore = 0;

function playGame(){
    function playRound(humanChoice, computerChoice){
  
        //Determine winner
        if(computerChoice == humanChoice){
            console.log(`User chose ${humanChoice}, computer chose ${computerChoice}`)
            console.log("It's a draw");
            humanScore++;
            computerScore++;
        }else if(humanChoice == "rock" && computerChoice == "scissors"){
            console.log(`User chose ${humanChoice}, computer chose ${computerChoice}`)
            console.log("Rock crashes scissors. Player wins");
            humanScore++;
        }
        else if(humanChoice == "paper" && computerChoice == "rock"){
            console.log(`User chose ${humanChoice}, computer chose ${computerChoice}`)
            console.log("Paper covers rock. Player wins!");
            humanScore++;
        }
        else if(humanChoice == "scissors" && computerChoice == "paper"){
            console.log(`User chose ${humanChoice}, computer chose ${computerChoice}`)
            console.log("Scissors cut paper. Player wins!");
            humanScore++;
        }
        else if(computerChoice == "rock" && humanChoice == "scissors"){
            console.log(`User chose ${humanChoice}, computer chose ${computerChoice}`)
            console.log("Rock crashes scissors. Computer wins");
            computerScore++;
        }
        else if(computerChoice == "paper" && humanChoice == "rock"){
            console.log(`User chose ${humanChoice}, computer chose ${computerChoice}`)
            console.log("Paper covers rock. Computer wins!");
            computerScore++;
        }
        else if(computerChoice == "scissors" && humanChoice == "paper"){
            console.log(`User chose ${humanChoice}, computer chose ${computerChoice}`)
            console.log("Scissors cut paper. Coputer wins!");
            computerScore++;
        }
        else {
            console.log(`${humanChoice} is invalid`);
        }
    }

    for(i = 1; i <= 5; i++){
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    

    console.log("Human scored: " + humanScore + " | Computer scored: " + computerScore);
    if(humanScore > computerScore){
        console.log("Player wins!!!");
    } else if (computerScore > humanScore){
        console.log("Computer wins!!!");
    }
}

playGame();