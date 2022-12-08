
function computerplay() {
    const choices = ["rock", "paper", "scissors"]
    const ai = choices[Math.floor(Math.random() * choices.length)]

    console.log(ai);
}

computerplay();



function playRound(playerSelection, computerSelection) {
 
let playerSelection =  prompt('welcome to rock paper scissors')

if(playerSelection == computerSelection){

  return("its a tie");
}

else if(playerSelection === 'rock') {
  if (computerSelection === 'paper') {
      return 'Computer won'
      
  } else {
      return 'Player won'
      
  }
}

else if(playerSelection === 'paper') {
  if (computerSelection === 'scissors') {
      return 'Computer won'
      
  } else {
      return 'Player won'
      
  }
}





else if(playerSelection === 'scissors') {
  if (computerSelection === 'rock') {
      return ('Computer won')
      
  } else {
      return ('Player won')
      
  }
}

}


let playerSelection = ["rock","paper","scissors"]
let computerSelection = computerplay();
console.log(playRound(playerSelection, computerSelection));