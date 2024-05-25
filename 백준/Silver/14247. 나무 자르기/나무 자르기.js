const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();

const [a, b] = input;

const firstArr = a.split(" ").map((ele) => parseInt(ele));

const secondArr = b.split(" ").map((ele) => parseInt(ele));

function solution(n, trees, growths) {
  let answer = 0;

  const pairArr = trees
    .map((ele, idx) => [ele, growths[idx]])
    .sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < n; i++) {
    const [tree, growth] = pairArr[i];

    answer += tree + growth * i;
  }

  return answer;
}

console.log(solution(n, firstArr, secondArr));
