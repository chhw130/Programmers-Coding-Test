const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();

const arr = input
  .map((ele) => ele.split(" ").map((ele) => parseInt(ele)))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

function solution(n, ele) {
  let answer = 1;

  let end = ele[0][1];

  for (let i = 1; i < ele.length; i++) {
    const [tStart, tEnd] = ele[i];
    if (tStart >= end) {
      answer++;
      end = tEnd;
    }
  }

  return answer;
}

console.log(solution(num, arr));
