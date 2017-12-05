const day1 = require('./1');
const day2 = require('./2');

const day1solution = new day1.Solution(day1.input);
console.log(`Sum of matches: ${day1solution.solution}`);

const day1solution2 = new day1.Solution2(day1.input);
console.log(`Sum of matches: ${day1solution2.solution}`);

const day2solution = new day2.Solution(day2.input);
console.log(`Spreadsheet checksum: ${day2solution.solution}`);

const day2solution2 = new day2.Solution2(day2.input);
console.log(`Spreadsheet divisibles quotient sum: ${day2solution2.solution}`);
