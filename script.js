
function computerplay() {
    const choices = ["rock", "paper", "scissors"]
    const ai = choices[Math.floor(Math.random() * choices.length)]

    console.log(ai)
}

computerplay();


function playRound(playerSelection, computerSelection) {
 
window.prompt("welcome to a game of rock paper scissors play a round of rock paper sissors")


if(playerSelection == computerSelection){

  return("its a tie");
}

else if(player === 'rock') {
  if (computerChoice === 'paper') {
      return 'Computer won'
      
  } else {
      return 'Player won'
      
  }
}

else if(player === 'paper') {
  if (computerChoice === 'scissors') {
      return 'Computer won'
      
  } else {
      return 'Player won'
      
  }
}





else if(player === 'scissors') {
  if (computerChoice === 'rock') {
      return 'Computer won'
      
  } else {
      return 'Player won'
      
  }
}

}

playRound();
const playerSelection = ["rock","paper","scissors"]
const computerSelection = computerplay();
console.log(playRound(playerSelection, computerSelection));