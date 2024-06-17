const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());

const arr = input.map((el) => el.split("").map((ele) => Number(ele)));

const checkValidation = (currentArr, x, y) => {
  if (
    y < 0 ||
    y > currentArr.length - 1 ||
    x < 0 ||
    x > currentArr.length - 1
  ) {
    return false;
  }

  return true;
};

function solution(size, data) {
  let answer = 0;
  const arr = [];
  const direction = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  const bfs = (y, x) => {
    let cnt = 0;
    const queue = [[y, x]];

    while (queue.length) {
      const [tarY, tarX] = queue.shift();

      data[tarX][tarY] = 0;
      for (let i = 0; i < 4; i++) {
        const [directY, directX] = direction[i];
        const tempY = tarY + directY;
        const tempX = tarX + directX;

        if (checkValidation(data, tempX, tempY) && data[tempX][tempY]) {
          data[tempX][tempY] = 0;
          cnt++;
          queue.push([tempY, tempX]);
        }
      }
    }
    arr.push(cnt + 1);
  };

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const ele = data[i][j];

      if (!ele) {
        continue;
      }

      bfs(j, i);
      answer++;
    }
  }

  arr.sort((a, b) => a - b);
  arr.unshift(answer);

  let str = "";
  arr.forEach((ele, idx) => {
    if (idx === 0) {
      str += `${ele}`;

      return;
    }
    str += `\n${ele}`;
  });

  return str;
}

console.log(solution(n, arr));
