const day01 = require('./day01');
const day02 = require('./day02');
const day03 = require('./day03');
const day04 = require('./day04');
const day05 = require('./day05');
const day06 = require('./day06');

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
const day03solution2 = new day03.Solution2(day03.input);
console.log(`First value in spiral larger than input: ${day03solution2.solution}`);

console.log(`\n--- Day 4: High-Entropy Passphrases ---`);
const day04solution = new day04.Solution(day04.input);
console.log(`Number of valid passphrases: ${day04solution.solution}`);
const day04solution2 = new day04.Solution2(day04.input);
console.log(`Number of passphrases without anagrams: ${day04solution2.solution}`);

console.log(`\n--- Day 5: A Maze of Twisty Trampolines, All Alike ---`);
const day05solution = new day05.Solution(day05.input);
console.log(`Number of jumps: ${day05solution.solution}`);
const day05solution2 = new day05.Solution2(day05.input);
console.log(`Number of jumps: ${day05solution2.solution}`);

console.log(`\n--- Day 6: Memory Reallocation ---`);
const day06solution = new day06.Solution(day06.input);
console.log(`Number of redistributions: ${day06solution.solution}`);
