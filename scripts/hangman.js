class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  calcStatus() {
    const finished = this.word.every((letter) =>
      this.guessedLetters.includes(letter)
    );

    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  get showStatus() {
    if (this.status === "playing") {
      return `Gusses left: ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try! the word was "${this.word.join("")}"`;
    } else {
      return `Great Work! you guessed the word`;
    }
  }
  makeGuess(char) {
    char.toLowerCase();
    // if unique
    const isUnique = !this.guessedLetters.includes(char);
    const wongGuess = !this.word.includes(char);
    if (isUnique) {
      this.guessedLetters.push(char);
    }
    if (isUnique && wongGuess) {
      this.remainingGuesses--;
    }
    if (this.status === "playing") {
      this.calcStatus();
    }
  }
  get Puzzle() {
    let res = "";
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        res += letter;
      } else {
        res += "*";
      }
    });

    return res;
  }
}
