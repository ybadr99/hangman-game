const puzzleEl = document.querySelector("#puzzle");
const gussesEl = document.querySelector("#gusses");

let game1;

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  gussesEl.textContent = game1.showStatus;

  const word = game1.Puzzle.split("");

  word.forEach((letter) => {
    const span = document.createElement("span");
    span.textContent = letter;
    puzzleEl.appendChild(span);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);
startGame();
