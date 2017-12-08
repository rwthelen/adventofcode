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
      let remaining = this.filterRemaining(phrase, index);
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

  filterRemaining(phrase, wordIndex) {
    return phrase.filter((w, index) => index !== wordIndex);
  }
}

class Solution2 extends Solution {
  constructor(input) {
    super(input);
  }

  isPhraseValid(phrase) {
    let words = phrase.split(' ').map((word) => word.split('').sort());
    let sumAnagrams = words.reduce((sumAnagrams, word, index, phrase) => {
      let remaining = this.filterRemaining(phrase, index);
      let matches = remaining.reduce((matches, rWord) => {
        return JSON.stringify(word) === JSON.stringify(rWord) ? matches + 1 : matches;
      }, 0);
      return matches ? sumAnagrams + 1 : sumAnagrams;
    }, 0);
    return sumAnagrams ? false : true;
  }
}

module.exports = {Solution, Solution2, input};
