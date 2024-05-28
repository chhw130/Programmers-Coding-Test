const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();
const arr = input.map((ele) => parseInt(ele));

function solution(n, target) {
  let answer = "";
  const dp = Array.from({ length: Math.max(...target) + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i < Math.max(...target) + 1; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1_000_000_009;
  }

  for (let i = 0; i < n; i++) {
    const ele = dp[target[i]];
    if (i === n - 1) {
      answer += `${ele}`;
    } else {
      answer += `${ele}\n`;
    }
  }
  console.log(answer);
}

solution(num, arr);
