function getComputerChoice () {
    var hand = ['Rock', 'Paper', 'Scissor']
    var random = hand[(Math.random() * hand.length) | 0]
    console.log(random)
}

console.log(getComputerChoice())