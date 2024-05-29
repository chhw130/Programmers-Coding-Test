const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = parseInt(fs.readFileSync(filePath));
function solution(num) {
  let answer = 0;

  const dp = Array(num + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;

  for (let i = 4; i < num + 1; i++) {
    const sqrt = parseInt(Math.sqrt(i));
    if (sqrt ** 2 - i === 0) {
      dp[i] = 1;
      continue;
    }

    for (let j = 1; j < sqrt + 1; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + dp[j * j]);
    }
  }

  return (answer = dp[num]);
}

console.log(solution(input));
