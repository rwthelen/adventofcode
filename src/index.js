const day01 = require('./day01');
const day02 = require('./day02');
const day03 = require('./day03');

console.log(`\n--- Day 1: Inverse Captcha ---`);
const day01solution = new day01.Solution(day01.input);
console.log(`Sum of matches: ${day01solution.solution}`);

const day01solution2 = new day01.Solution2(day01.input);
console.log(`Sum of matches: ${day01solution2.solution}`);

console.log(`\n--- Day 2: Corruption Checksum ---`);
const day02solution = new day02.Solution(day02.input);
console.log(`Spreadsheet checksum: ${day02solution.solution}`);

const day02solution2 = new day02.Solution2(day02.input);
console.log(`Spreadsheet divisibles quotient sum: ${day02solution2.solution}`);

console.log(`\n--- Day 3: Spiral Memory ---`);
const day03solution = new day03.Solution(day03.input);
console.log(`Position of square in spiral: ${day03solution.solution}`);
