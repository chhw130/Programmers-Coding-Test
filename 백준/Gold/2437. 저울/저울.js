const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
const arr = input[0].split(" ").map((ele) => parseInt(ele));

function solution(num, data) {
  let answer = 1;

  data.sort((a, b) => a - b);

  for (let i = 0; i < num; i++) {
    if (answer < data[i]) {
      break;
    }

    answer += data[i];
  }

  return answer;
}

console.log(solution(n, arr));
