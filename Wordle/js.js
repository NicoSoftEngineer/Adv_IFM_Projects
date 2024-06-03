const correctWord = "APPLE"; // Tady můžeš změnit na slovo dle svého výběru
const maxGuesses = 6;
let currentGuess = "";
let guesses = [];

document.getElementById("guess-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submitGuess();
    }
});

function submitGuess() {
    const input = document.getElementById("guess-input");
    currentGuess = input.value.toUpperCase();
    
    if (currentGuess.length !== 5) {
        displayMessage("Slovo musí mít 5 písmen.");
        return;
    }

    if (guesses.length >= maxGuesses) {
        displayMessage("Konec hry! Správné slovo bylo: " + correctWord);
        return;
    }

    guesses.push(currentGuess);
    updateBoard();

    if (currentGuess === correctWord) {
        displayMessage("Gratulace! Uhodli jste správné slovo!");
    } else if (guesses.length === maxGuesses) {
        displayMessage("Konec hry! Správné slovo bylo: " + correctWord);
    }

    input.value = "";
}

function updateBoard() {
    const board = document.getElementById("game-board");
    board.innerHTML = "";

    guesses.forEach(guess => {
        for (let i = 0; i < guess.length; i++) {
            const letterBox = document.createElement("div");
            letterBox.classList.add("letter-box");
            letterBox.textContent = guess[i];

            if (correctWord[i] === guess[i]) {
                letterBox.classList.add("correct");
            } else if (correctWord.includes(guess[i])) {
                letterBox.classList.add("present");
            } else {
                letterBox.classList.add("absent");
            }

            board.appendChild(letterBox);
        }
    });
}

function displayMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
}
