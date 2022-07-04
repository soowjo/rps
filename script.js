function computerPlay {
    let ranNum3 = Math.floor(Math.random()*3)
    if (ranNum3 == 0) {
        return 'rock';
    }
    else if (ranNum3 == 1) {
        return 'paper';
    }
    else if (ranNum3 == 2) {
        return 'scissors';
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection == 'rock' && computerSelection == 'scissors'):
        case (playerSelection == 'paper' && computerSelection == 'rock'):
        case (playerSelection == 'scissors' && computerSelection == 'paper'):
            return 'player'

        case (playerSelection == 'scissors' && computerSelection == 'rock'):
        case (playerSelection == 'rock' && computerSelection == 'paper'):
        case (playerSelection == 'paper' && computerSelection == 'scissors'):
            return 'computer'
        case (playerSelection == computerSelection):
            return 'even'

    }
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            return 'player'
        }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            return 'player'
        }
}   