const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const firstArr = input
  .shift()
  .split(" ")
  .map((ele) => Number(ele));

const m = Number(input.shift());
const secondArr = input
  .shift()
  .split(" ")
  .map((ele) => Number(ele));

function solution(a, aArr, b, bArr) {
  let answer = 0;

  const stack = [];
  const obj = {};

  aArr.forEach((ele) => {
    obj[ele] = obj[ele] + 1 || 1;
  });

  bArr.forEach((ele) => {
    stack.push(obj[ele] || 0);
  });

  return (answer = stack.join(" "));
}

console.log(solution(n, firstArr, m, secondArr));
