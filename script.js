
function computerplay() {
    const choices = ["rock", "paper", "scissors"]
    const ai = choices[Math.floor(Math.random() * choices.length)]

    console.log(ai)
}

computerplay();


function playRound(playerSelection, computerSelection) {
 
window.prompt("welcome to a game of rack paper scissors play a round of rock paper sissors")


if(playerSelection === computerSelection)
{
  return  "it's a tie";
} if (playerSelection = "rock", computerSelection = "paper") {

  return "you lose"
  
} else if(playerSelection = "paper", computerSelection = "scissors"){

  return "you lose"


}else {

  return "player won"
}



}

playRound();
   
const computerSelection = computerplay();

  

    