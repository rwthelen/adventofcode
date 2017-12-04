const input = require('./input');

class Solution {
  constructor(input) {
    let rows = input.split('\n');
    this.spreadsheet = rows.map((row) => {
      return row.split('\t');
    });
    this.solve();
  }

  solve() {
    let rowChecksums = this.spreadsheet.map((row) => {
      let largest = this.getLargest(row);
      let smallest = this.getSmallest(row);
      return largest - smallest;
    });
    let solution = rowChecksums.reduce((sum, row) => sum + row, 0);
    this.solution = solution;
  }

  getLargest(numberSet) {
    let largest = numberSet.reduce(function(largest, num) {
      if (parseInt(num) > largest) {
        return num;
      } else {
        return largest;
      }
    });
    return parseInt(largest);
  }

  getSmallest(numberSet) {
    let smallest = numberSet.reduce(function(smallest, num) {
      if (parseInt(num) < smallest) {
        return num;
      } else {
        return smallest;
      }
    });
    return parseInt(smallest);
  }
}

module.exports = {Solution, input};
