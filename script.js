let itemsArr = ['rock', 'paper', 'scissors'];
let userItem = prompt('Choose between: rock, paper, scissors', '');
 
function getComputerChoice()
{
  return itemsArr[Math.floor(Math.random()*itemsArr.length)];
}


function getPlayerChoice()
{
    userItem = userItem.toLowerCase();

    let result = userItem === 'rock' ? 'rock' :
        userItem === 'paper' ? 'paper' :
        userItem === 'scissors' ? 'scissors' : "invalid item. item should be: 'rock', 'paper', 'scissors'";

    return result;
}

function playRound(playerSelection, computerSelection) 
{
    // playerSelection = getPlayerChoice();
    // computerSelection = getComputerChoice();

    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    if (playerSelection === computerSelection) 
    {
        return "It's a tie!";
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock')
    {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock')
    {
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    {
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    {
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    } 
    else 
    {
        return "invalid item. item should be: 'rock', 'paper', 'scissors'";
    }
}

// console.log(playRound(getPlayerChoice(), getComputerChoice()));