let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;
let roundResult = "";

const scissorChoice = document.querySelector("#scissor-choice");
const rockChoice = document.querySelector("#rock-choice");
const paperChoice = document.querySelector("#paper-choice");
const resetButton = document.querySelector(".resetBtn");
const endgameMsg = document.querySelector(".endgame");

let getComputerChoice = function () {
  let hand = ["rock", "paper", "scissor"];
  let random = hand[(Math.random() * hand.length) | 0];
  console.log(random);
  return random;
};

let playRound = function (playerHand, computerHand) {
  if (playerHand === computerHand) {
    document.querySelector(".roundAnnouncement").innerText = "It's a draw!";
    roundResult = "draw";
  } else if (
    (playerHand === "rock" && computerHand === "scissor") ||
    (playerHand === "scissor" && computerHand === "paper") ||
    (playerHand === "paper" && computerHand === "rock")
  ) {
    playerWins++;
    document.querySelector(".roundAnnouncement").innerText =
      "Player wins this round!";
    document.querySelector(".playerWinCount").innerText = playerWins;
    roundResult = "win";
  } else {
    computerWins++;
    document.querySelector(".computerWinCount").innerText = computerWins;
    document.querySelector(".roundAnnouncement").innerText =
      "Computer wins this round";
    roundResult = "lose";
  }
  roundsPlayed++;
  document.querySelector(".roundsCount").innerText = roundsPlayed;
  document.querySelector(
    ".gameplay"
  ).innerText = `Player chooses ${playerHand} against ${computerHand}`;
};

function setFinalMessage() {
  return playerWins > computerWins
    ? (endgameMsg.innerText = "You won!")
    : (endgameMsg.innerText = "You lost...");
}

function isGameOver() {
  return playerWins === 5 || computerWins === 5;
}

function handleClick(playerHand) {
  if (isGameOver()) {
    return;
  }
  const computerHand = getComputerChoice();
  playRound(playerHand, computerHand);

  if (isGameOver()) {
    setFinalMessage();
  }
}

// function playGame(playerHand) {
//   game = playRound(playerHand, getComputerChoice());

//   switch (game) {
//     case "win":
//       playerWins++;
//       document.querySelector(".roundAnnouncement").innerText =
//         "Player wins this round!";
//       document.querySelector(".playerWinCount").innerText = playerWins;
//       break;
//     case "lose":
//       computerWins++;
//       document.querySelector(".roundAnnouncement").innerText =
//         "Computer wins this round";
//       document.querySelector(".computerWinCount").innerText = computerWins;
//     default:
//       document.querySelector(".roundAnnouncement").innerText = "It's a draw!";
//   }
//   roundsPlayed++;
//   document.querySelector(".roundsCount").innerText = roundsPlayed;

// }

function resetGame() {
  playerWins = 0;
  computerWins = 0;
  roundsPlayed = 0;
  document.querySelector(".playerWinCount").innerText = playerWins;
  document.querySelector(".computerWinCount").innerText = computerWins;
  document.querySelector(".roundsCount").innerText = roundsPlayed;
  document.querySelector(".gameplay").innerText = ``;
  document.querySelector(".roundAnnouncement").innerText = "";
  document.querySelector(".roundAnnouncement").innerText = "";
  endgameMsg.innerText = "";
}

scissorChoice.addEventListener("click", () => {
  handleClick("scissor");
});
rockChoice.addEventListener("click", () => {
  handleClick("rock");
});
paperChoice.addEventListener("click", () => {
  handleClick("paper");
});
resetButton.addEventListener("click", resetGame);
