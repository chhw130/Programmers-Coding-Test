const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const list = input
  .shift()
  .split(" ")
  .map((ele) => Number(ele));

const m = Number(input.shift());

function solution(leng, target, arr) {
  let answer = 0;

  arr.sort((a, b) => a - b);
  let sum = 0;
  let start = 0;
  let end = leng - 1;

  while (start !== end) {
    sum = arr[start] + arr[end];
    if (sum === target) {
      answer++;
      start++;
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }

  return answer;
}

console.log(solution(n, m, list));
