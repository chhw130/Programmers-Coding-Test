const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => parseInt(ele));

const num = input.shift();

function solution(n, ele) {
  let answer = Number.MIN_SAFE_INTEGER;

  ele.sort((a, b) => b - a);

  ele.forEach((ele, idx) => {
    answer = Math.max(answer, (idx + 1) * ele);
  });

  return answer;
}

console.log(solution(num, input));
