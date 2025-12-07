const fs = require("node:fs/promises");

/**
 * @returns {Promise<string>}
 */
function readInput() {
  return fs.readFile("./2025/day2/input.txt", { encoding: "utf8" });
}

function part1(input) {
  let sum = 0;

  const ranges = input.split(",");
  for (const range of ranges) {
    const [start, end] = range.split("-").map(Number);

    for (let i = start; i <= end; i++) {
      const str = i.toString();
      const len = str.length;
      const twiceRepeated =
        len % 2 === 0 ? str.slice(0, len / 2) === str.slice(len / 2) : false;

      if (twiceRepeated) {
        sum += i;
      }
    }
  }

  console.log("Part 1:", sum);
}

function checkMatchingSubstrings(str) {
  const len = str.length;
  const subStringsToCheck = Math.floor(len / 2);
  for (let i = subStringsToCheck; i > 0; i--) {
    if (len % i !== 0) continue;

    let hasMatch = true;

    const firstSubStr = str.slice(0, i);
    for (let j = i; j <= str.length - i; j += i) {
      const nextSubStr = str.slice(j, j + i);
      if (firstSubStr !== nextSubStr) {
        hasMatch = false;
        break;
      }
    }

    if (hasMatch) {
      return true;
    }
  }

  return false;
}

function part2(input) {
  let sum = 0;

  const ranges = input.split(",");
  for (const range of ranges) {
    const [start, end] = range.split("-").map(Number);

    for (let i = start; i <= end; i++) {
      if (checkMatchingSubstrings(i.toString())) {
        sum += i;
      }
    }
  }

  console.log("Part 2:", sum);
}

async function main() {
  const input = (await readInput()).trimEnd();
  part1(input);
  part2(input);
}

main();
