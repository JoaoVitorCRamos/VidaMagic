const player1Life = document.getElementById("player1-life");
const player2Life = document.getElementById("player2-life");

const resetLife = () => {
    player1Life.textContent = "20";
    player2Life.textContent = "20";
    // Clear any previous winner alerts
    clearWinnerAlert();
};

const clearWinnerAlert = () => {
    // Close the alert if it's still open
    if (document.querySelector(".alert-overlay")) {
        document.body.removeChild(document.querySelector(".alert-overlay"));
    }
};

const checkWinner = () => {
    const life1 = parseInt(player1Life.textContent);
    const life2 = parseInt(player2Life.textContent);

    if (life1 <= 0) {
        alert("Player 2 wins!");
        resetLife();
    } else if (life2 <= 0) {
        alert("Player 1 wins!");
        resetLife();
    }
};

document.getElementById("player1-decrease").addEventListener("click", () => {
    let currentLife = parseInt(player1Life.textContent);
    if (currentLife > 0) {
        player1Life.textContent = currentLife - 1;
        checkWinner();
    }
});

document.getElementById("player1-increase").addEventListener("click", () => {
    player1Life.textContent = parseInt(player1Life.textContent) + 1;
});

document.getElementById("player2-decrease").addEventListener("click", () => {
    let currentLife = parseInt(player2Life.textContent);
    if (currentLife > 0) {
        player2Life.textContent = currentLife - 1;
        checkWinner();
    }
});

document.getElementById("player2-increase").addEventListener("click", () => {
    player2Life.textContent = parseInt(player2Life.textContent) + 1;
});

document.getElementById("reset-button").addEventListener("click", () => {
    resetLife();
});
