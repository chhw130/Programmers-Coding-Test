function solution(n) {
    var answer = 0;
    let arr = []
    for(i = 1 ; i <= n; i++){
        n % i === 0 ? arr.push(i) : arr
    }
    arr.forEach((data)=>{
        data % 2 !== 0 ?  answer++ :  answer
    })
    return answer;
}