function computerPlay() {
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
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection == 'rock' && computerSelection == 'scissors'):
        case (playerSelection == 'paper' && computerSelection == 'rock'):
        case (playerSelection == 'scissors' && computerSelection == 'paper'):
            console.log("You Win!")
            return 'player';
        case (playerSelection == 'scissors' && computerSelection == 'rock'):
        case (playerSelection == 'rock' && computerSelection == 'paper'):
        case (playerSelection == 'paper' && computerSelection == 'scissors'):
            console.log("You Lose!")
            return 'computer';
        case (playerSelection == computerSelection):
            console.log("Tie"!)
            return 'even';
    }
}

function game() {
    for (let i=0; i<5; i++) {
        let playerScore = 0;
        let computerScore = 0;
        let player;
        do {
            player = prompt('Enter either rock, paper, or scissors').toLowerCase();
        } while (!(player == 'rock' || player == 'paper' || player == 'scissors'));
        let computer = computerPlay();
        switch (playRound(player, computer)) {
            case 'player':
                playerScore += 1;
                break;
            case 'computer':
                computerScore += 1;
                break;
            case 'even':
                break;
        }
        console.log(i)
    }
}