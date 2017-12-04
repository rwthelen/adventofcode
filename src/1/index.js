const input = require('./input');

class Solution {
  constructor(input) {
    this.numbers = input.split('');
    this.solution = 0;
    this.solve();
  }

  solve() {
    this.numbers.forEach((number, index, arr) => {
      let nextNumber = this.getSisterNumber(index);
      if (number === nextNumber) {
        this.solution = this.solution + parseInt(number);
      }
    });
  }

  getSisterNumber(index) {
    if (index === this.numbers.length - 1) {
      return this.numbers[0];
    } else {
      return this.numbers[index + 1];
    }
  }
}

class Solution2 extends Solution {
  constructor(input) {
    super(input);
  }

  getSisterNumber(index) {
    let len = this.numbers.length;
    let steps = len / 2;
    if (index + steps > len) {
      return this.numbers[index + steps - len];
    } else {
      return this.numbers[index + steps];
    }
  }
}

module.exports = {Solution, Solution2, input};
