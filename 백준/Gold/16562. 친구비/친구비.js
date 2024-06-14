const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [total, relative, money] = input
  .shift()
  .split(" ")
  .map((ele) => Number(ele));

const payArr = input
  .shift()
  .split(" ")
  .map((ele) => Number(ele));

const data = input.map((ele) => ele.split(" ").map((el) => Number(el)));

const graph = Array.from({ length: total + 1 }, () => []);

data.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

function solution(gra, n, money, payList) {
  let answer = 0;

  const memo = Array.from({ length: total + 1 }, () => false);

  payList.unshift(0);

  const bfs = (target) => {
    const queue = [target];
    let minPay = payList[target];
    while (queue.length) {
      const node = queue.shift();

      const nodeArr = gra[node];

      for (let i = 0; i < nodeArr.length; i++) {
        const ele = nodeArr[i];
        if (!memo[ele]) {
          memo[ele] = true;
          minPay = Math.min(minPay, payList[ele]);
          queue.push(ele);
        }
      }
    }

    answer += minPay;
  };

  for (let i = 1; i <= n; i++) {
    if (memo[i]) {
      continue;
    }
    bfs(i);
  }

  return answer > money ? "Oh no" : answer;
}

console.log(solution(graph, total, money, payArr));
