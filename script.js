


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  const ai = choices[Math.floor(Math.random() * choices.length)]

  
  return ai
}

getComputerChoice();



function playRound(playerSelection =["rock", "paper", "scissors"],computerSelection = getComputerChoice()) {

playerSelection = prompt('welcome to rock paper scissors');

if (playerSelection.toLowerCase() === computerSelection) {

  alert('its a tie');
  
}else if(playerSelection == "rock" && computerSelection == "paper") {

  alert('you lose')

}else if(playerSelection == "paper" && computerSelection == "scissors") {

  alert('you lose')

}else if (playerSelection == "scissors" && computerSelection == "rock"){

  alert('you lose')
}else if (playerSelection == "rock" && computerSelection == "scissors"){

  alert('you win')

}else if (playerSelection == "paper" && computerSelection == "rock"){

  alert('you win')

}else if(playerSelection == "scissors" && computerSelection == "paper"){

  alert('you win')

}

}

playRound();

playerSelection =["rock", "paper", "scissors"],
computerSelection = getComputerChoice()
let playerscore = 0;
let computerscore = 0;


function scoreboard() {
  playRound(playerSelection,computerSelection);
  if (playerscore>computerscore){
  console.log("Player Won");
   }
  if (computerscore>playerscore) {
  console.log("Computer Win");
   }
 }

 //to loop the game 5 times//
 function game() {
  for (let i=0; i<4; i++) {
  scoreboard()
    }
  }

  game();
