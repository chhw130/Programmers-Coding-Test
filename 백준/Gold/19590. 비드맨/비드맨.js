const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();

const arr = input.map((ele) => parseInt(ele));

function solution(num, data) {
  let answer = 0;

  data.sort((a, b) => b - a);
  const sum = data.reduce((acc, cur) => acc + cur, 0);

  const remainSum = data.reduce((acc, cur, idx) => {
    if (idx === 0) {
      return acc;
    }
    acc += cur;
    return acc;
  }, 0);

  if (data[0] >= sum - data[0]) {
    return (answer = data[0] - remainSum);
  }

  answer = sum % 2 === 0 ? 0 : 1;

  return answer;
}

console.log(solution(n, arr));
