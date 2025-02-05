function solution(a, b, n) {
    var answer = 0;
    
    let remain = n
    
    while(remain >= a){
        const temp = Math.floor(remain / a) * b    
        remain = remain % a + temp
        
        answer += temp
    }
    
    
    return answer;
}