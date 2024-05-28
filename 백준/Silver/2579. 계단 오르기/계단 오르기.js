const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();

const arr = input.map((ele) => parseInt(ele));

function solution(n, stairs) {
  let answer = 0;

  const dp = Array.from({ length: n }, () => 0);
  dp[0] = stairs[0];
  dp[1] = stairs[0] + stairs[1];
  dp[2] = Math.max(dp[0] + stairs[2], stairs[2] + stairs[1]);

  const maxNum = (idx) => {
    if (idx === 0) {
      return dp[0];
    } else if (idx === 1) {
      return dp[1];
    }
    if (dp[idx]) {
      return dp[idx];
    }
    const situation1 = stairs[idx] + maxNum(idx - 2);
    const situation2 = stairs[idx] + stairs[idx - 1] + maxNum(idx - 3);

    dp[idx] = Math.max(situation1, situation2);

    return dp[idx];
  };

  maxNum(n - 1);

  return (answer = dp[n - 1]);
}

console.log(solution(num, arr));
