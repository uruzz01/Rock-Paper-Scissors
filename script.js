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