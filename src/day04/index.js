const input = require('./input');

class Solution {
  constructor(input) {
    this.input = input.split('\n');
    this.solution = this.solve();
  }

  solve() {
    let sumValid = this.input.reduce((sumValid, phrase) => {
      if (this.isPhraseValid(phrase)) {
        return sumValid + 1;
      } else {
        return sumValid;
      }
    }, 0);
    return sumValid;
  }

  isPhraseValid(phrase) {
    let words = phrase.split(' ');
    let sumDupes = words.reduce((sumDupes, word, index, phrase) => {
      let remaining = phrase.filter((w, rIndex) => {
        if (rIndex !== index) {
          return true;
        }
      });
      if (remaining.includes(word)) {
        return sumDupes + 1;
      } else {
        return sumDupes;
      }
    }, 0);
    if (sumDupes > 0) {
      return false;
    } else {
      return true;
    }
  }
}

let solution = new Solution(input);
console.log(solution.solution);

module.exports = Solution;
