function getComputerChoice () {
    var hand = ['Rock', 'Paper', 'Scissor']
    var random = hand[(Math.random() * hand.length) | 0]
    console.log(random)
    return random
}

function playerChoice() {
    let choice = prompt('Pick your hand!')
    hand = choice.toLowerCase()
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
            playerChoice();
    }
    console.log(hand)
    return hand
}
