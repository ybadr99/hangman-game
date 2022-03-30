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

// getPuzzle("1")
//   .then((result) => {
//     console.log(result.puzzle);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// getLocation()
//   .then((result) => {
//     return getCountry(result.country);
//   })
//   .then((country) => console.log(country.name))
//   .catch((err) => console.log(err));

// getCurrentCountry()
//   .then((country) => {
//     console.log(country);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
