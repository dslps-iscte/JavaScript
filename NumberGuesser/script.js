let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (number1,number2) => {
   Math.abs(number1 - number2);
}

function compareGuesses(user, computer, target) {
  return getAbsoluteDistance(target, user) <= getAbsoluteDistance(target, computer);
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;

