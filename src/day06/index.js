const input = require('./input').split('\t').map((n) => parseInt(n));

class Solution {
  constructor(input) {
    this.input = input;
    this.solution = this.solve();
  }

  solve() {
    let cycles = 0;
    let memoryUsageLog = [];
    while (!memoryUsageLog.includes(this.input.join(', '))) {
      memoryUsageLog.push(this.input.join(', '));
      cycles++;
      let max = Math.max(...this.input);
      let banksAtMax = this.input.filter((v) => v === max);

      let startingIndex = this.input.findIndex((e) => e === banksAtMax[0]);
      let blocks = banksAtMax[0];
      let fullLoops = Math.floor(blocks / this.input.length);
      let partialSteps = blocks % this.input.length;

      let redistribution = this.input.map((val, i) => {
        let distance;
        if (i === startingIndex) {
          val = 0;
          distance = this.input.length;
        } else if (i < startingIndex) {
          distance = (this.input.length - startingIndex) + i;
        } else {
          distance = i - startingIndex;
        }
        if (distance <= partialSteps) {
          return val + fullLoops + 1;
        } else {
          return val + fullLoops;
        }
      });
      this.input = redistribution;
    }
    return cycles;
  }
}

module.exports = {Solution, input};
