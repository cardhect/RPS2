//Computer choice
function computerPlay() {
  let answer = Math.floor(Math.random() * 3);
  if (answer == 0) {
    return "rock";
  } else if (answer == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Player Choice
function playerChoice() {
  let playerChoice = prompt("RPS?");

  while (
    playerChoice != "rock" ||
    playerChoice != "paper" ||
    playerChoice != "scissors"
  ) {
    if (
      playerChoice == "rock" ||
      playerChoice == "paper" ||
      playerChoice == "scissors"
    ) {
      break;
    } else {
      playerChoice = prompt("That was not a correct input.");
    }
  }

  return playerChoice.toLocaleLowerCase();
}

//Score keeper
let playerScore = 0;
let computerScore = 0;

// Plays one round.
function rpsPlay(playerSelection, computerAnswer) {
  if (playerSelection == "rock" && computerAnswer == "rock") {
    return "Tie!";
  } else if (playerSelection == "rock" && computerAnswer == "paper") {
    computerScore += 1;
    return "You lose! Paper beats rock.";
  } else if (playerSelection == "rock" && computerAnswer == "scissors") {
    playerScore += 1;
    return "You win! Rock beats scissors.";
  } else if (playerSelection == "paper" && computerAnswer == "scissors") {
    computerScore += 1;
    return "You lose! Scissors cuts paper.";
  } else if (playerSelection == "paper" && computerAnswer == "rock") {
    playerScore += 1;
    return "You win!, Paper beats rock.";
  } else if (playerSelection == "paper" && computerAnswer == "paper") {
    return "Tie!";
  } else if (playerSelection == "scissors" && computerAnswer == "paper") {
    playerScore += 1;
    return "You win! Scissors cuts paper.";
  } else if (playerSelection == "scissors" && computerAnswer == "rock") {
    computerScore += 1;
    return "You lose! Rock breaks scissors.";
  } else if (playerSelection == "scissors" && computerAnswer == "scissors") {
    return "Tie!";
  }
}

//Plays 5 rounds and shows score.
function game() {
  // for (let i = 0; i < 5; i++) {
    let computerChoice = computerPlay();
    let playerPick = playerChoice();
    console.log(rpsPlay(playerPick, computerChoice));
    console.log("Player Score is " + playerScore);
    console.log("Computer Score is " + computerScore);
 // }

  if (playerScore > computerScore) {
    console.log("You Win!");
  } else if (playerScore == computerScore) {
    console.log("Its a Tie!");
  } else {
    console.log("Computer Wins!");
  }
}

const results = document.querySelector('#results')
const score = document.querySelector('#score')

const rockBtn = document.querySelector('#rock');

rockBtn.addEventListener('click', () => {
  results.textContent =(rpsPlay('rock', computerPlay()));
  score.textContent = ('Player: ' + playerScore + ' Computer: ' + computerScore)
  if (playerScore == 5) {
    results.textContent = 'YOU WIN!';
  } else if (computerScore == 5) {
    results.textContent = 'Computer has won 01111001 01101111 01110101 01110011 01110101 01100011 01101011';
  }
});

const paperBtn = document.querySelector('#paper');
 
paperBtn.addEventListener('click', () => {
  results.textContent =(rpsPlay('paper', computerPlay()));
  score.textContent = ('Player: ' + playerScore + ' Computer: ' + computerScore)
  if (playerScore == 5) {
    results.textContent = 'YOU WIN!';
  } else if (computerScore == 5) {
    results.textContent = 'Computer has won 01111001 01101111 01110101 01110011 01110101 01100011 01101011';
  }
});

const scissorBtn = document.querySelector('#scissors');
 
scissorBtn.addEventListener('click', () => {
  results.textContent = (rpsPlay('scissors', computerPlay()));
  score.textContent = ('Player: ' + playerScore + ' Computer: ' + computerScore)
  if (playerScore == 5) {
    results.textContent = 'YOU WIN!';
  } else if (computerScore == 5) {
    results.textContent = 'Computer has won 01111001 01101111 01110101 01110011 01110101 01100011 01101011';
  }
});


