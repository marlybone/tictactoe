const displayStatus = document.querySelector('.game--status') 

let gameActive = true;

let currentPlayer = 'X';

let gameState = ["","","","","","","","",""];

const winningMessage = () => `Player ${currentPlayer} has Won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

displayStatus.innerHTML = currentPlayerTurn();

function handleCellPlayed() {

  
}

function handleResults() {

  
}

function handleCellClick() {
  const clickedCell = clickedCellEvent.target
  
}

function handleRestartGame() {

  
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleClickCell));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
const clickedCellIndex = parseInt(
  clickedCell.getAttribute('data-cell-index')
);

if (gameState[clickedCellIndex] !== "" || !gameActive) {
  return;
}

