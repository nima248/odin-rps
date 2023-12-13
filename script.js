const CHOICES = ["rock", "paper", "scissors"];

const N_GAMES = 5;

let gamesLostCount = 0;
let gamesWonCount = 0;


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

function playRound(playerChoice) {
    let computerChoice = getRandomChoice();
    let result = false;
    while (!result) {
        if (beats(playerChoice, computerChoice)) {
            gamesWonCount++;
            result = true;
        }
        else if (beats(computerChoice, playerChoice)) {
            gamesLostCount++;
            result = true;
        }
        else {
            // draw - play again
            computerChoice = getRandomChoice();
        }
    }
}

playButtons = document.querySelector("#play-buttons");
playButtons.addEventListener("click", (e) => {
    let result;
    switch (e.target.id) {
        case "btn-rock":
            playRound("rock");
            break;
        case "btn-paper":
            playRound("paper");
            break;
        case "btn-scissors":
            playRound("scissors");
            break;
        default:
            alert(`Unexpected button press: ${e.target}`);
            break;
    }
    displayResults();
    checkForWin();
});


function displayResults() {
    results = document.querySelector("#results");
    while (results.hasChildNodes()) {
        results.removeChild(results.firstChild);
    }
    let paragraphs = [
        `Your score: ${gamesWonCount}`,
        `Computer's score: ${gamesLostCount}`,
    ];
    for (let paragraph of paragraphs) {
        let p = document.createElement("p");
        p.textContent = paragraph;
        results.appendChild(p);
    }
}

function checkForWin() {
    if (    gamesWonCount == N_GAMES ||
            gamesLostCount == N_GAMES) {
        let paragraphs = [
            (gamesWonCount > gamesLostCount) ?
                "You win!" :
                "Computer wins!",
            "Refresh page to play another round."
        ]
        for (let paragraph of paragraphs) {
            let p = document.createElement("p");
            p.textContent = paragraph;
            results.appendChild(p);
        }
        disablePlayButtons();
    }
}

function disablePlayButtons() {
    btns = document.querySelectorAll(".play-btn");
    for (let btn of btns) {
        btn.disabled = true;
    }
}
