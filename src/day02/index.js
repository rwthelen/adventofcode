const input = require('./input');

class Solution {
  constructor(input) {
    this.sheet = input.split('\n').map((row) => row.split('\t').map((n) => parseInt(n)));
    this.solution = this.solve();
  }

  solve() {
    let rowChecksums = this.sheet.map((row) => Math.max(...row) - Math.min(...row));
    return rowChecksums.reduce((sum, row) => sum + row, 0);
  }
}

class Solution2 extends Solution {
  constructor(input) {
    super(input);
  }

  solve() {
    let quotients = this.sheet.map((row) => this.getDivisibles(row));
    return quotients.reduce((sum, val) => sum + val, 0);
  }

  getDivisibles(row) {
    let match = row.reduce((result, num, index, arr) => {
      let remaining = arr.filter((rVal, rIndex) => !(rIndex === index));
      let evenlyDivisible = remaining.find((rVal) => num % rVal === 0);
      if (evenlyDivisible) {
        result = num / evenlyDivisible;
        return result;
      } else {
        return result;
      }
    }, undefined);
    return match;
  }
}

module.exports = {Solution, Solution2, input};
