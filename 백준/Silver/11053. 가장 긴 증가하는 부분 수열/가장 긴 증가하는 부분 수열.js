const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
const arr = input
  .shift()
  .split(" ")
  .map((ele) => parseInt(ele));

function solution(num, list) {
  let answer = 0;

  const dp = Array.from({ length: num }, () => 1);

  for (let i = 1; i < num; i++) {
    const ele = list[i];

    for (let j = 0; j < i; j++) {
      const temp = list[j];
      if (ele <= temp) {
        continue;
      }
      if (ele > temp) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  return (answer = Math.max(...dp));
}

console.log(solution(n, arr));
