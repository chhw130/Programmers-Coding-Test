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

const checkAbsolute = (num1, num2) => {
  return Math.abs(num1) > Math.abs(num2) ? num2 : num1;
};

function solution(leng, target, arr) {
  let answer = 0;

  let data = [];
  arr.sort((a, b) => a - b);
  let sum = 0;
  let start = 0;
  let end = leng - 1;

  data.push(arr[start], arr[end]);

  while (start !== end) {
    sum = arr[start] + arr[end];
    const current = data[0] + data[1];
    if (sum === target) {
      return `${arr[start]} ${arr[end]}`;
    } else if (sum > target) {
      if (checkAbsolute(sum, current) === sum) {
        data[0] = arr[start];
        data[1] = arr[end];
      }
      end--;
    } else {
      if (checkAbsolute(sum, current) === sum) {
        data[0] = arr[start];
        data[1] = arr[end];
      }
      start++;
    }
  }

  return (answer = data.join(" "));
}

console.log(solution(n, 0, list));
