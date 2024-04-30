const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = Number(fs.readFileSync('/dev/stdin').toString())

function solution(num) {
  let answer = 0;

  if (num % 2) {
    answer = "SK";
  } else {
    answer = "CY";
  }

  return answer;
}

console.log(solution(input))