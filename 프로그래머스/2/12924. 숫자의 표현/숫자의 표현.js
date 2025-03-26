function solution(n) {
    var answer = 0;
    const originN = n
    while(n > 0){
        if(n % 2 !== 0 && originN % n === 0 ){
            answer += 1
        }
            
        n -= 1
            
    }
    return answer;
}