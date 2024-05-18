const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input
  .shift()
  .split(" ")
  .map((ele) => parseInt(ele));

const arr = input
  .shift()
  .split(" ")
  .map((ele) => parseInt(ele));

const recursiveFn = (arr, pick) => {
  const results = [];

  if (pick === 1) return arr.map((ele) => [ele]);

  arr.forEach((target, idx, origin) => {
    const newArr = origin.slice(idx);

    const recursives = recursiveFn(newArr, pick - 1);

    const attached = recursives.map((ele) => [target, ...ele]);

    results.push(...attached);
  });

  return results;
};

function solution(x, y, data) {
  let answer = "";

  data.sort((a, b) => a - b);

  const recur = recursiveFn(data, y);

  recur.forEach((ele, idx) => {
    if (idx === recur.length - 1) {
      return (answer += `${ele.join(" ")}`);
    }
    return (answer += `${ele.join(" ")}\n`);
  });

  console.log(answer);
}

solution(n, m, arr);
