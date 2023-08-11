let playerSelection ;
computerSelection = getComputerChoice()
let playertext = document.querySelector('#plays-selection')
let computerText = document.querySelector('#computer-selection')
let resultText = document.querySelector('#result')
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  const ai = choices[Math.floor(Math.random() * choices.length)]

  
  return ai
}

getComputerChoice();


const buttons = document.querySelectorAll('button')

buttons.forEach((button) =>{

  button.addEventListener('click', () => {

    button.textContent
    playertext.textContent = `player ${button.textContent}`
    computerText.textContent = `computer: ${computerSelection}`
    resultText.textContent = `result: ${playRound}`
    
    
  });
});



function playRound(playerSelection,computerSelection = getComputerChoice()) {

  if (playerSelection === computerSelection) {
  
    roundResult = ('its a tie');
    return roundResult
    
  }else if(playerSelection == "rock" && computerSelection == "paper") {
  
    roundResult = ('you lose this round')
    return roundResult
  
  }else if(playerSelection == "paper" && computerSelection == "scissors") {
  
    roundResult = ('you lose this round')
    return roundResult
  
  }else if (playerSelection == "scissors" && computerSelection == "rock"){
  
    roundResult = ('you lose this round')
    return roundResult
  }else if (playerSelection == "rock" && computerSelection == "scissors"){
  
    roundResult = ('you win this round')
    return roundResult
  
  }else if (playerSelection == "paper" && computerSelection == "rock"){
  
    roundResult = ('you win this round')
    return roundResult
  
  }else if(playerSelection == "scissors" && computerSelection == "paper"){
  
    roundResult = ('you win this round')
    return roundResult
  
  }
  

   
  }

playRound();
