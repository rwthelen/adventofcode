const input = 347991;

class Solution {
  constructor(square) {
    this.square = square;
    this.solution = this.solve();
  }

  solve() {
    this.squareSize = 3;
    while (Math.pow(this.squareSize, 2) < this.square) {
      this.squareSize += 2;
      this.sideLength = this.squareSize - 1;
    }
    this.squareSize -= 2;
    let outerSquares = this.square - (Math.pow(this.squareSize, 2));
    let squarePos = outerSquares % this.sideLength;
    let middleOfSide = this.sideLength / 2;
    let dist1 = squarePos - middleOfSide;
    let dist2 = middleOfSide;
    return dist1 + dist2;
  }
}

module.exports = {Solution, input};
