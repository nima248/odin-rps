const CHOICES = ["rock", "paper", "scissors"];

function getRandomChoice() {
    i = Math.floor(Math.random() * 3);
    return CHOICES[i];
}

function beats(one, two) {
    one = one.toLowerCase();
    two = two.toLowerCase();
    if (one == "rock" && two == "scissors" ||
        one == "scissors" && two == "paper" ||
        one == "paper" && two == "rock") {
        return true;
    }
    return false;
}

function playRound(playerChoice, computerChoice) {
    while (true) {
        if (beats(playerChoice, computerChoice)) {
            return `You Win! ${playerChoice} beats ${computerChoice}!`;
        }
        else if (beats(computerChoice, playerChoice)) {
            return `You Lose! ${computerChoice} beats ${playerChoice}!`;
        }
        computerChoice = getRandomChoice();
    }
}

function game() {
    let ROUNDS = 5;
    let playerChoice, computerChoice, result;
    let winCount = 0;
    for (let i=0; i<ROUNDS; i++) {
        while (true) {
            playerChoice = prompt("Enter rock, paper or scissors");
            if (CHOICES.includes(playerChoice.toLowerCase())) {
                break;
            }
            alert(`Bad entry: ${playerChoice}`);
        }
        computerChoice = getRandomChoice();
        result = playRound(playerChoice, computerChoice);
        console.log(result);
        if (result.includes("You Win")) {
            winCount++;
        }
    }
    console.log(`You won ${winCount} of ${ROUNDS}`);
    if (winCount == ROUNDS/2) {
        console.log("Draw!");
    }
    else if (winCount > ROUNDS/2) {
        console.log("You win!");
    }
    else {
        console.log("Computer wins!");
    }
}

game();
