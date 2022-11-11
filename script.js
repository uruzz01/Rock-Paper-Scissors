let itemsArr = ['rock', 'paper', 'scissors'];
let gamesRound = 0;
let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll(".button");
const playerWinsPara = document.querySelector(".playerWins");
const computerWinsPara = document.querySelector(".computerWins");
const winner = document.querySelector(".winner");
const totalRoundsPara = document.querySelector(".totalRounds");
const restart = document.querySelector(".restart");


buttons.forEach(button => button.addEventListener("click",playRound));

restart.addEventListener("click", restartGame);

function restartGame () 
{
    for (let i = 0; i < buttons.length; i++) 
    {
        buttons[i].disabled = false;
    }

    gamesRound = 0;
    playerWins = 0;
    computerWins = 0;
    totalRoundsPara.textContent = '';
    playerWinsPara.textContent = '';
    computerWinsPara.textContent = '';
    winner.textContent = '';

}
 
function getComputerChoice()
{
  return itemsArr[Math.floor(Math.random()*itemsArr.length)];
}

function getPlayerChoice(item)
{
    let value = item.value;

    let result = value === 'rock' ? 'rock' :
        value === 'paper' ? 'paper' :
        value === 'scissors' ? 'scissors' : "invalid item. item should be: 'rock', 'paper', 'scissors'";

    return result;
}

function roundCounter () 
{
    gamesRound += 1;
    totalRoundsPara.textContent = ''; 
    totalRoundsPara.textContent = ` ${gamesRound}`;
}

function playerWinsCounter () 
{
    
    playerWins += 1;
    playerWinsPara.textContent = '';
    playerWinsPara.textContent = ` ${playerWins}`;
}

function computerWinsCounter ()
{
    
    computerWins += 1;
    computerWinsPara.textContent = '';
    computerWinsPara.textContent += ` ${computerWins}`; 
}

function diasbleButtons() 
{
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled =true;
      }
}

function showWinner () 
{
    if (playerWins === 5)
    {
        winner.textContent = 'Player won!';
        diasbleButtons();
        return;
        
    }

    if(computerWins === 5)
    {  
        winner.textContent = 'Computer won!';
        diasbleButtons();
        return;
    } 

}

function playRound() 
{   

    let playerSelection = getPlayerChoice(this); 
    let computerSelection = getComputerChoice();
    
    

    if (playerSelection === computerSelection) 
    {
        roundCounter();
        return showWinner();
       
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
        roundCounter();
        playerWinsCounter();
        return showWinner();
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {
        roundCounter();
        playerWinsCounter();
        return showWinner();;

    }
    else if (playerSelection === 'paper' && computerSelection === 'rock')
    {
        roundCounter();
        playerWinsCounter();
        return showWinner();
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock')
    {
        roundCounter();
        computerWinsCounter();
        return showWinner();
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    {
        roundCounter();
        computerWinsCounter();
        return showWinner();
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    {
        roundCounter();
        computerWinsCounter();
        return showWinner();
    } 
    else 
    {
        console.log("invalid item. item should be: 'rock', 'paper', 'scissors'");
    }

}