let itemsArr = ['rock', 'paper', 'scissors'];

 
function getComputerChoice()
{
  return itemsArr[Math.floor(Math.random()*itemsArr.length)];
}


function getPlayerChoice(item)
{
    item = item.toLowerCase();

    let result = item === 'rock' ? 'rock' :
        item === 'paper' ? 'paper' :
        item === 'scissors' ? 'scissors' : "invalid item. item should be: 'rock', 'paper', 'scissors'";

    return result;
}

function playRound(playerSelection, computerSelection) 
{

    // console.log(`Player: ${playerSelection}`);
    // console.log(`Computer: ${computerSelection}`);

    // playerSelection = getPlayerChoice();
    // computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) 
    {
        console.log("It's a tie!");
        return
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 'win';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 'win';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock')
    {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 'win';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock')
    {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
        return 'lose';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
        return 'lose';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
        return 'lose';
    } 
    else 
    {
        console.log("invalid item. item should be: 'rock', 'paper', 'scissors'");
        return 
    }
}

function game()
{
    let gamesRound = 0;
    let playerWins = 0;
    let computerWins = 0;
    let roundResult;
  

    for (;;)
    {

        // console.log(roundResult);

        if (playerWins === 5)
        {
            console.log('Player won!');
            break;
        }

        if(computerWins === 5)
        {
            console.log('Computer won!');
            break;
        }

        let userItem = prompt('Choose between: rock, paper, scissors', '');

        roundResult = playRound(getPlayerChoice(userItem), getComputerChoice());

        if (roundResult === 'win') 
        {
            playerWins += 1;
            gamesRound += 1;
            console.log(`Player wins: ${playerWins}`);
        } 
        else if (roundResult === 'lose')
        {
            computerWins += 1;
            gamesRound += 1;
            console.log(`Computer wins: ${computerWins}`);
        } 
        else
        {
            gamesRound += 1;
        }
    } 

    console.log(`Total rounds: ${gamesRound}`);

}

game();

// console.log(playRound(getPlayerChoice(), getComputerChoice()));