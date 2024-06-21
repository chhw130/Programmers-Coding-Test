const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// const cards = input[1].split(" ");
const cards = new Set(input[1].split(" "));
const targets = input[3].split(" ");

function solution(n, lists) {
  const answer = [];

  for (list of lists) {
    cards.has(list) ? answer.push(1) : answer.push(0);
  }

  return answer.join(" ");
}

console.log(solution(cards, targets));
