const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = input.shift();
const length = input.shift();
const computers = input.map((v) => v.split(" ").map(Number));

const graph = Array.from({ length: parseInt(num) + 1 }, () => []);

computers.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

function solution(node) {
  let answer = 0;

  const visited = Array.from({ length: parseInt(num) + 1 }, () => false);
  const queue = [node[1]];
  visited[1] = true;

  while (queue.length) {
    const ele = queue.shift();

    for (let i = 0; i < ele.length; i++) {
      const target = ele[i];
      if (visited[target]) {
        continue;
      }
      visited[target] = true;
      queue.push(node[target]);
    }
  }

  const sum = visited.reduce((acc, cur) => cur + acc, 0);

  return (answer = sum - 1);
}

console.log(solution(graph));
