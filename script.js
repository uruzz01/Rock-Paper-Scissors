let itemsArr = ['rock', 'paper', "scissors"];
let userItem = prompt('Choose between: rock, paper, scissors', '');
 
function getComputerChoie()
{
  return itemsArr[Math.floor(Math.random()*itemsArr.length)];
}
