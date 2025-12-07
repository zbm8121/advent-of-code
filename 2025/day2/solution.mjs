import fs from "node:fs/promises";

/**
 * @returns {Promise<string>}
 */
function readInput() {
  return fs.readFile("./2025/day2/input.txt", { encoding: "utf8" });
}

function checkMatchingSubstrings(str, fixedLength) {
  const len = str.length;
  const subStringsToCheck = fixedLength || Math.floor(len / 2);

  const minSubstr = fixedLength || 1;
  for (let i = subStringsToCheck; i >= minSubstr; i--) {
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

function part1(input) {
  let sum = 0;

  const ranges = input.split(",");
  for (const range of ranges) {
    const [start, end] = range.split("-").map(Number);

    for (let i = start; i <= end; i++) {
      const str = i.toString();
      if (str.length % 2 !== 0) continue;

      if (checkMatchingSubstrings(str, str.length / 2)) {
        sum += i;
      }
    }
  }

  console.log("Part 1:", sum);
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

await main();
