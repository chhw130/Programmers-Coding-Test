function solution(n) {
    var answer = 1;
    
    for(let i = 1 ; i < n/2 ; i++){
        
        let sum = 0
        let j = i
        
        while(sum < n){
            
            sum += j
            j++
            if(sum === n){
                answer++
                break
            }
        }
    }
    
    return answer;
}