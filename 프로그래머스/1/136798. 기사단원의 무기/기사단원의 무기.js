function solution(number, limit, power) {
    var answer = 0;
    
    for(let i = 2 ; i <= number ; i++ ){
        let temp = 1
        for(let j = 1 ; j <= Math.floor(i/2) ; j++){
            
            if(i % j === 0) temp++
        }
        
        temp = temp > limit ? power : temp
        answer += temp
    }
    
    
    
    
    return answer + 1;
}