const input = 347991;

class Solution {
  constructor(square) {
    this.square = square;
    this.solution = this.solve();
  }

  solve() {
    let spiralSize = 3;
    for (; Math.pow(spiralSize, 2) < this.square; spiralSize += 2);
    let sideLength = spiralSize - 1;
    let middleOfSide = sideLength / 2;
    return Math.abs(((this.square - (Math.pow(spiralSize - 2, 2))) % sideLength) - middleOfSide)
      + middleOfSide;
  }
}

class Solution2 {
  constructor(input) {
    this.input = input;
    this.spiral = {};
    this.spiralSize = 0;
    this.solution = this.solve();
  }

  solve() {
    let value = 1;
    let coords = [0, 0];
    while (value < this.input) {
      this.spiral[coords] = value;

      if (coords[0] === this.spiralSize && coords[1] === -this.spiralSize) {
        this.spiralSize++;
        coords[0]++;
      } else if (coords[0] === this.spiralSize && coords[1] < this.spiralSize) {
        coords[1]++;
      } else if (coords[0] > -this.spiralSize && coords[1] === this.spiralSize) {
        coords[0]--;
      } else if (coords[0] === -this.spiralSize && coords[1] > -this.spiralSize) {
        coords[1]--;
      } else if (coords[0] < this.spiralSize && coords[1] === -this.spiralSize) {
        coords[0]++;
      }
      value = this.calcValue(coords);
      if (value > this.input) {
        return value;
      }
    }
  }

  getValue(coords) {
    if (this.spiral[coords] === undefined) {
      return 0;
    } else {
      return this.spiral[coords];
    }
  }

  getNeighbors(coords) {
    let x = coords[0];
    let y = coords[1];
    let neighbors = [
      [x + 1, y],
      [x + 1, y + 1],
      [x, y + 1],
      [x - 1, y + 1],
      [x - 1, y],
      [x - 1, y - 1],
      [x, y - 1],
      [x + 1, y - 1],
    ];
    return neighbors;
  }

  calcValue(coords) {
    let neighbors = this.getNeighbors(coords);
    return neighbors.reduce((sum, n) => sum + this.getValue(n), 0);
  }
}

module.exports = {Solution, Solution2, input};
