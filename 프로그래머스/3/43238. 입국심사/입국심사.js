function solution(n, times) {
  var answer = 0;

  times.sort((a, b) => a - b);

  let left = 1;

  let right = times[times.length - 1] * n
  

  while (left <= right) {
    let sum = 0;
    let mid = parseInt((left + right) / 2);

    for (let i = 0; i < times.length; i++) {
      const time = times[i];
      sum += parseInt(mid / time);
    }
      

    if (n > sum) {
      left = mid + 1;
    } else  {
      right = mid - 1;
    }
  }

  return left;
}