let itemsArr = ['rock', 'paper', 'scissors'];
let userItem = prompt('Choose between: rock, paper, scissors', '');
 
function getComputerChoice()
{
  return itemsArr[Math.floor(Math.random()*itemsArr.length)];
}


function getPlayerChoice()
{
    userItem = userItem.toLowerCase();

    console.log(userItem);
    
    // if (userItem !== 'rock' && userItem !== 'paper' && userItem !== 'scissors')
    // {
    //     console.log("invalid item. item should be: 'rock', 'paper', 'scissors'")
    //     return;
    // }

    let result = userItem === 'rock' ? 'rock' :
        userItem === 'paper' ? 'paper' :
        userItem === 'scissors' ? 'scissors' : "invalid item. item should be: 'rock', 'paper', 'scissors'";

    console.log(result);

    return result;
}

getPlayerChoice();

