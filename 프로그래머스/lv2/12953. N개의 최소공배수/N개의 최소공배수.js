function maxdivision(a,b){
    let remain = 1
    let num1 = a
    let num2 = b
        while(true){
            remain = num1 % num2
            if(remain === 0){    
                 return num2
            }
            num1 = num2
            num2 = remain
        }
}

function solution(arr) {
  return arr.reduce((a, b) => (a * b) / maxdivision(a, b));
}