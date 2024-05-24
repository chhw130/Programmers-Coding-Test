const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();

const arr = input.map((ele) => parseInt(ele));

function solution(num, stages) {
  let answer = 0;

  const reverseStages = stages.reverse();

  for (let i = 0; i < num; i++) {
    const ele = reverseStages[i];
    const next = reverseStages[i + 1];
    if (!next) break;

    if (next >= ele) {
      const dif = next - ele + 1;
      reverseStages[i + 1] = next - dif;
      answer += dif;
    }
  }

  return answer;
}

console.log(solution(n, arr));
