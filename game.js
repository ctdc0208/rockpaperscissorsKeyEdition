let humanScore = 0;
let computerScore = 0;
let gameRounds = 0;


const victor = document.getElementById("victor");
const state = document.getElementById("state");
const compScore = document.getElementById("compScore");
const playerScore = document.getElementById("playerScore");
const rounds = document.getElementById("rounds");
const results = document.getElementById("results");
const again = document.getElementById("postGame");

function computerPlay() {

    let choice = Math.floor(Math.random()*3);


    return choice === 0 ? "rock"
            : choice === 1 ? "paper"
            : choice === 2 ? "scissors"
            : "ERROR";
    }

function playRound(val) {

    if(gameRounds  <= 4) {
        gameRounds++;
        rounds.innerHTML = `Round ${gameRounds} of 5`;

        let playerChoice = val.toUpperCase();
        let computerChoice = computerPlay().toUpperCase();


        if(playerChoice === computerChoice) {
            results.innerHTML = "It's a tie!"
        }


        switch (playerChoice) {
            case "ROCK":
                if(computerChoice === "SCISSORS"){
                    humanScore++;
                    playerScore.innerHTML = `${humanScore}`;
                    results.innerHTML = `You won! ${playerChoice} beats ${computerChoice}!`;
                    break;
                } else if(computerChoice === "PAPER") {
                    computerScore++;
                    compScore.innerHTML = `${computerScore}`;
                    results.innerHTML = `You lose! ${playerChoice} loses to ${computerChoice}!`;
                    break;
                }
                break;

            case "PAPER":
                if(computerChoice === "ROCK"){
                    humanScore++;
                    playerScore.innerHTML = `${humanScore}`;
                    results.innerHTML = `You won! ${playerChoice} beats ${computerChoice}!`;
                    break;
                } else if(computerChoice === "SCISSORS") {
                    computerScore++;
                    compScore.innerHTML = `${computerScore}`;
                    results.innerHTML = `You lose! ${playerChoice} loses to ${computerChoice}!`;
                    break;
                }
                break;

            case "SCISSORS":
                if(computerChoice === "PAPER"){
                    humanScore++;
                    playerScore.innerHTML = `${humanScore}`;
                    results.innerHTML = `You won! ${playerChoice} beats ${computerChoice}!`;
                    break;
                } else if(computerChoice === "ROCK") {
                    computerScore++;
                    compScore.innerHTML = `${computerScore}`;
                    results.innerHTML = `You lose! ${playerChoice} loses to ${computerChoice}!`;
                    break;
                }
                break;
        }
    }


    if(gameRounds == 5) {
        state.innerHTML = "Game over!";
        again.style.display = "block";
        if(humanScore == computerScore){
            victor.innerHTML = "It's a draw";
        }
        else if(humanScore > computerScore) {
            victor.innerHTML = "You Won!"
            victor.style.color = "aqua";
        }
        else if(humanScore < computerScore) {
            victor.innerHTML = "You Lost!"
            victor.style.color = "yellow";
        }
    }
}


function restart() {

    gameRounds = 0;
    humanScore = 0;
    computerScore = 0;


    compScore.innerHTML = `${computerScore}`;
    playerScore.innerHTML = `${humanScore}`;
    rounds.innerHTML = "Round 0 of 5";
    results.innerHTML = "Begin!";
    state.innerHTML = "";
    victor.innerHTML = "";
    again.style.display = "none";
}
