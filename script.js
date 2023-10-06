
let getComputerChoice = function () {
    var hand = ['rock', 'paper', 'scissor'];
    var random = hand[(Math.random() * hand.length) | 0];
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
    console.log(playerHand);
    console.log(computerHand);

    if (playerHand === computerHand ) {
         console.log("it's a draw");
    } else if (
        (playerHand === "rock" && computerHand === "scissor") ||
        (playerHand === "scissor" && computerHand === "paper") ||
        (playerHand === "paper" && computerHand === "rock")
    ) {
         console.log(`you win`);
    } else {
        console.log(`you lose`);
    }
}

playRound(playerChoice(), getComputerChoice());
