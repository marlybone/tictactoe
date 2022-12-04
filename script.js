const displayStatus = document.querySelector('.game--status') 
const displayWinCounter = document.querySelector('.game--score')
const displayClock = document.querySelector('.game--clock')

var gameActive = true;

var currentPlayer = "X";
var xWin = 0;
var oWin = 0;
var seconds = 30;

var gameState = ["","","","","","","","",""];

const winningMessage = () => `Player ${currentPlayer} has Won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const winCounter = () => `Player X won ${xWin} times and Player O won ${oWin} times`;
const timer = () => `Timer: ${seconds}`;

displayStatus.innerHTML = currentPlayerTurn();
displayWinCounter.innerHTML = winCounter();
displayClock.innerHTML = timer();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function setTimer() {
  const secondTimer = setInterval(() => {
    seconds--;
    displayClock.innerHTML = timer();
  }, 1000)
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer = (currentPlayer === "X" ? "O" : "X");
  displayStatus.innerHTML = currentPlayerTurn();
}

function handleResults() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        displayStatus.innerHTML = winningMessage();
        gameActive = false;
      for (i = 0; i < 1; i++) {
        if (currentPlayer === "X") {
          xWin++;
        } else if (currentPlayer === "O") {
          oWin++;
            }
        displayWinCounter.innerHTML = winCounter();
      }
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        displayStatus.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(
  clickedCell.getAttribute('data-cell-index')
);

if (gameState[clickedCellIndex] !== "" || !gameActive) {
  return;
}

handleCellPlayed(clickedCell, clickedCellIndex);
handleResults();
}


function handleRestartGame() {
  gameActive = true;
  currentPlayer = 'X';
  gameState = ["","","","","","","","",""];
displayStatus.innerHTML = currentPlayerTurn();
document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
