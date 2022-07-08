let playerScore = 0;
let computerScore = 0;

function randomRPS() {
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

function playRound(playerSelectionIn, computerSelectionIn) {
    switch (true) {
        case (playerSelectionIn == 'rock' && computerSelectionIn == 'scissors'):
        case (playerSelectionIn == 'paper' && computerSelectionIn == 'rock'):
        case (playerSelectionIn == 'scissors' && computerSelectionIn == 'paper'):
            return 'player';
        case (playerSelectionIn == 'scissors' && computerSelectionIn == 'rock'):
        case (playerSelectionIn == 'rock' && computerSelectionIn == 'paper'):
        case (playerSelectionIn == 'paper' && computerSelectionIn == 'scissors'):
            return 'computer';
        case (playerSelectionIn == computerSelectionIn):
            return 'even';
    }
}

function game(playerSelectionIn) {
    let playerSelection = playerSelectionIn
    let computerSelection = randomRPS();
    if (playerScore < 5 && computerScore < 5) {
        switch (playRound(playerSelection, computerSelection)) {
            case 'player':
                playerScore += 1;
                playerScoreOut.textContent = `Player: ${playerScore}`;
                playerSelectionOut.textContent = `Player: ${playerSelection}`;
                computerSelectionOut.textContent = `Computer: ${computerSelection}`;
                break;
            case 'computer':
                computerScore += 1;
                computerScoreOut.textContent = `Computer: ${computerScore}`;
                playerSelectionOut.textContent = `Player: ${playerSelection}`;
                computerSelectionOut.textContent = `Computer: ${computerSelection}`;
                break;
            case 'even':
                playerSelectionOut.textContent = `Player: ${playerSelection}`;
                computerSelectionOut.textContent = `Computer: ${computerSelection}`;
                break;
        }
    }
    if (playerScore == 5) {
        winnerOut.textContent = 'The winner is player. Click on reset to play another game!';
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    if (computerScore == 5) {
        winnerOut.textContent = 'The winner is computer. Click on reset to play another game!';
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    winnerOut.textContent = 'The winner is ???';
    playerScoreOut.textContent = 'Player: 0';
    computerScoreOut.textContent = 'Player: 0';
    playerSelectionOut.textContent = 'Player: ?';
    computerSelectionOut.textContent = 'Computer: ?';
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

const playerScoreOut = document.querySelector('#playerScoreOut');
const computerScoreOut = document.querySelector('#computerScoreOut');
const playerSelectionOut = document.querySelector('#playerSelectionOut');
const computerSelectionOut = document.querySelector('#computerSelectionOut');
const winnerOut = document.querySelector('#winnerOut');

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const resetButton = document.querySelector('#resetButton');

rockButton.addEventListener('click', () => game('rock'));
paperButton.addEventListener('click', () => game('paper'));
scissorsButton.addEventListener('click', () => game('scissors'));
resetButton.addEventListener('click',reset);