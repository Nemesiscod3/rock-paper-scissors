


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  const ai = choices[Math.floor(Math.random() * choices.length)]

  
  return ai
}

getComputerChoice();



function playRound(playerSelection,computerSelection) {

playerSelection = prompt('welcome to rock paper scissors');

if (playerSelection.toLowerCase() === computerSelection) {

  alert('its a tie');
  
}



}

 

const playerSelection =  "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));