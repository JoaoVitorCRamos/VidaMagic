const player1Life = document.getElementById('player1-life');
const player2Life = document.getElementById('player2-life');

document.getElementById('player1-decrease').addEventListener('click', () => decreaseLife(player1Life));
document.getElementById('player1-increase').addEventListener('click', () => increaseLife(player1Life));
document.getElementById('player2-decrease').addEventListener('click', () => decreaseLife(player2Life));
document.getElementById('player2-increase').addEventListener('click', () => increaseLife(player2Life));

function decreaseLife(element) {
    let currentLife = parseInt(element.textContent);
    if (currentLife > 0) {
        element.textContent = currentLife - 1;
    }
}

function increaseLife(element) {
    let currentLife = parseInt(element.textContent);
    element.textContent = currentLife + 1;
}
