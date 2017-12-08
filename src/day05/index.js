const input = require('./input').split('\n').map((n) => parseInt(n));

class Solution {
  constructor(input) {
    this.input = input;
    this.solution = this.solve();
  }

  solve() {
    let currentJump = 0;
    let sumJumps = 0;
    while (currentJump < this.input.length) {
      this.input[currentJump]++;
      currentJump += (this.input[currentJump] - 1);
      sumJumps++;
    }
    return sumJumps;
  }
}

class Solution2 extends Solution {
  constructor(input) {
    super(input);
  }

  solve() {
    let currentJump = 0;
    let sumJumps = 0;
    while (currentJump < this.input.length) {
      if (this.input[currentJump] > 2) {
        this.input[currentJump]--;
        currentJump += (this.input[currentJump] + 1);
      } else {
        this.input[currentJump]++;
        currentJump += (this.input[currentJump] - 1);
      }
      sumJumps++;
    }
    return sumJumps;
  }
}

module.exports = {Solution, Solution2, input};
