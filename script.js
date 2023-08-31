let playertext = document.querySelector('#plays-selection')
let computerText = document.querySelector('#computer-selection')
let resultText = document.querySelector('#result')
const buttons = document.querySelectorAll('button')
const computercounter = document.querySelector('#computer-count')
const playercounter = document.querySelector('#player-count')
let result 
let playerscore = 0;
let computerscore = 0;


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  const ai = Math.floor(Math.random() * choices.length);
  return choices[ai]

}



function playround (playerSelection,computerSelection) {

  if (!computerSelection) {
    computerSelection = getComputerChoice();
  }
  if(playerSelection === computerSelection){
    result = "its a draw"
  }else if(playerSelection === "paper" && computerSelection === "rock"){
    playerscore++;
    result = "you win"
  } else if(playerSelection === "rock" && computerSelection === "scissors"){
    playerscore++;
    result = "you win"
}else if(playerSelection === "scissors" && computerSelection === "paper"){
    playerscore++;
    result = "you win"
  }else if(playerSelection === "rock" && computerSelection === "paper"){
    computerscore++
    result = "you lose"
} else if(playerSelection === "paper" && computerSelection === "scissors"){
    computerscore++
    result = "you lose"
  } else if(playerSelection === "scissors" && computerSelection === "rock"){
    computerscore++
    result = "you lose"

  }
  resultText.innerHTML = `result: ${result}`
} 




buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.textContent;
    const computerSelection = getComputerChoice();
    playertext.textContent = `player: ${playerSelection}`;
    computerText.textContent = `computer: ${computerSelection}`;
    playround(playerSelection, computerSelection);
    console.log("Player Score:", playerscore);
    console.log("Computer Score:", computerscore);
    checkwinner(playerscore,computerscore)
    computercounter.innerHTML = `computer score: ${computerscore}`
    playercounter.innerHTML =`player score: ${playerscore}`

    
  });
});


const checkwinner = (playerscore,computerscore) => {

  if (playerscore === 5) {
    resultText.textContent = "result: you have beaten computer :D" 
    document.getElementById("ROCK").disabled = true;
    document.getElementById("PAPER").disabled = true;
    document.getElementById("SCISSORS").disabled = true;
    playerscore = 0
    computerscore = 0
  }
   if (computerscore === 5){
    resultText.textContent = "result: you have lost computer wins game"
    document.getElementById("ROCK").disabled = true;
    document.getElementById("PAPER").disabled = true;
    document.getElementById("SCISSORS").disabled = true;
    playerscore = 0
    computerscore = 0
  }


  }

  

