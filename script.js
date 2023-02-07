function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  const ai = choices[Math.floor(Math.random() * choices.length)]

  
  return ai
}

getComputerChoice();



function playRound(playerSelection =["rock", "paper", "scissors"],computerSelection = getComputerChoice()) {

playerSelection = prompt('welcome to rock paper scissors');

if (playerSelection.toLowerCase() === computerSelection) {

  roundResult = ('its a tie');
  
}else if(playerSelection == "rock" && computerSelection == "paper") {

  roundResult = ('you lose this round')

}else if(playerSelection == "paper" && computerSelection == "scissors") {

  roundResult = ('you lose this round')

}else if (playerSelection == "scissors" && computerSelection == "rock"){

  roundResult = ('you lose this round')
}else if (playerSelection == "rock" && computerSelection == "scissors"){

  roundResult = ('you win this round')

}else if (playerSelection == "paper" && computerSelection == "rock"){

  roundResult = ('you win this round')

}else if(playerSelection == "scissors" && computerSelection == "paper"){

  roundResult = ('you win this round')

}

return roundResult
 
}

playRound();

playerSelection =["rock", "paper", "scissors"],
computerSelection = getComputerChoice()
let playerscore = 0;
let computerscore = 0;


function game() {
  for (let i = 0; i < 4; i++) {
       computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      console.log(roundResult);
  }
  
}

console.log(roundResult)

game();