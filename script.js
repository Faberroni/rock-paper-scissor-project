let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;

const scissorChoice = document.querySelector("#scissor-choice");
const rockChoice = document.querySelector("#rock-choice");
const paperChoice = document.querySelector("#paper-choice");
const resetButton = document.querySelector(".resetBtn");

let getComputerChoice = function () {
  let hand = ["rock", "paper", "scissor"];
  let random = hand[(Math.random() * hand.length) | 0];
  console.log(random);
  return random;
};

let playRound = function (playerHand, computerHand) {
  console.log(`The player picked: ${playerHand}`);
  console.log(`The computer picked: ${computerHand}`);
  let result;

  if (playerHand === computerHand) {
    console.log("it's a draw");
    result = "draw";
  } else if (
    (playerHand === "rock" && computerHand === "scissor") ||
    (playerHand === "scissor" && computerHand === "paper") ||
    (playerHand === "paper" && computerHand === "rock")
  ) {
    console.log(`you win`);
    result = "win";
  } else {
    console.log(`you lose`);
    result = "lose";
  }
  return result;
};

function playGame(playerHand) {
  game = playRound(playerHand, getComputerChoice());

  switch (game) {
    case "win":
      playerWins++;
      document.querySelector(".roundAnnouncement").innerText =
        "Player wins this round!";
      document.querySelector(".playerWinCount").innerText = playerWins;
      break;
    case "lose":
      computerWins++;
      document.querySelector(".roundAnnouncement").innerText =
        "Computer wins this round";
      document.querySelector(".computerWinCount").innerText = computerWins;
    default:
      document.querySelector(".roundAnnouncement").innerText = "It's a draw!";
  }
  roundsPlayed++;
  document.querySelector(".roundsCount").innerText = roundsPlayed;
  
}

function resetGame() {
  location.reload();
}

scissorChoice.addEventListener("click", () => {
  playGame("scissor");
});
rockChoice.addEventListener("click", () => {
  playGame("rock");
});
paperChoice.addEventListener("click", () => {
  playGame("paper");
});
resetButton.addEventListener("click", () => {
  resetGame();
});


// let playerChoice = function () {
//     let choice = prompt('Pick your hand!');
//     hand = choice.toLowerCase();
//     switch (hand) {
//         case 'rock':
//             console.log('you picked rock');
//             break;
//         case 'paper':
//             console.log('you picked paper');
//             break;
//         case 'scissor':
//             console.log('you picked scissor');
//             break;
//         default:
//             console.error('not a legal choice please pick again');
//             break;
//     }
//     return hand;
// }
