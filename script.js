
let getComputerChoice = function () {
    let hand = ['rock', 'paper', 'scissor'];
    let random = hand[(Math.random() * hand.length) | 0];
    console.log(random)
    return random;
}

let playerChoice = function () {
    let choice = prompt('Pick your hand!');
    hand = choice.toLowerCase();
    switch (hand) {
        case 'rock':
            console.log('you picked rock');
            break;
        case 'paper':
            console.log('you picked paper');
            break;
        case 'scissor':
            console.log('you picked scissor');
            break;
        default:
            console.error('not a legal choice please pick again');
            break;
    }
    return hand;
}


let playRound = function (playerHand, computerHand) {
    console.log(`The player picked: ${playerHand}`);
    console.log(`The computer picked: ${computerHand}`);
    let result;

    if (playerHand === computerHand ) {
         console.log("it's a draw");
         result = 'draw';
    } else if (
        (playerHand === "rock" && computerHand === "scissor") ||
        (playerHand === "scissor" && computerHand === "paper") ||
        (playerHand === "paper" && computerHand === "rock")
    ) {
         console.log(`you win`);
         result = 'win';
    } else {
        console.log(`you lose`);
        result = 'lose';
    }
    return result;
}


function playGame() {
    let roundsPlayed = 0;
    let playerWins = 0;
    let computerWins = 0;

    while (roundsPlayed < 5) {
        game = playRound(playerChoice(), getComputerChoice())

        switch (game) {
            case 'win':
                console.log('player wins this round!')
                playerWins++
                break
            case 'lose':
                console.log('computer wins this round')
                computerWins++
            default:
                console.log('draw')
        }
        console.log("")
        roundsPlayed++;
    }

    if (playerWins > computerWins) {
        console.log("Player won this game!")
    } else if (computerWins > playerWins) {
        console.log("Computer won this game")
    } else {
        console.log("it's a tie")
    }

}

playGame()