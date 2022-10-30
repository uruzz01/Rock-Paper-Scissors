let itemsArr = ['rock', 'paper', 'scissors'];
let userItem = prompt('Choose between: rock, paper, scissors', '');
 
function getComputerChoice()
{
  return itemsArr[Math.floor(Math.random()*itemsArr.length)];
}

function getPlayerChoice()
{
    userItem.toLowerCase();
    
    if (userItem !== 'rock' && userItem !== 'paper' && userItem !== 'scissors')
    {
        console.log("invalid item. item should be: 'rock', 'paper', 'scissors'")
        return;
    }
}

