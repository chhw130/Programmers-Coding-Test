const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();

const data = input.map((ele) => ele.split(" ").map((el) => parseInt(el)));

function solution(num, rgbs) {
  let answer = 0;

  const dp = Array.from({ length: num }, () => [0, 0, 0]);

  dp[0] = rgbs[0];

  for (let i = 1; i < num; i++) {
    const [r, g, b] = rgbs[i];

    dp[i][0] = Math.min(dp[i - 1][1] + r, dp[i - 1][2] + r);
    dp[i][1] = Math.min(dp[i - 1][0] + g, dp[i - 1][2] + g);
    dp[i][2] = Math.min(dp[i - 1][0] + b, dp[i - 1][1] + b);
  }

  return (answer = Math.min(...dp[num - 1]));
}

console.log(solution(n, data));
