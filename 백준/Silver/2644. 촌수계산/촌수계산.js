const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
const target = input
  .shift()
  .split(" ")
  .map((ele) => parseInt(ele));
const num = input.shift();
const relative = input.map((v) => v.split(" ").map(Number));

const graph = Array.from({ length: Number(n) + 1 }, () => []);

relative.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

function solution(gra, tar) {
  let answer = 0;

  const memo = Array.from({ length: Number(n) + 1 }, () => false);

  const queue = [[tar[0], 0]];

  memo[tar[0]] = true;

  while (queue.length) {
    const [temp, cnt] = queue.shift();

    if (temp === tar[1]) {
      answer = cnt;
      break;
    }

    for (let i = 0; i < gra[temp].length; i++) {
      const ele = gra[temp][i];

      if (!memo[ele]) {
        memo[ele] = true;
        queue.push([ele, cnt + 1]);
      }
    }
  }

  return answer || -1;
}

console.log(solution(graph, target));
