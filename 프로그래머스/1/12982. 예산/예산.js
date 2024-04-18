function solution(d, budget) {
    var answer = 0;
    
    const sortD = d.sort((a,b) => a-b)
    
    
    for(let i = 0 ; i < sortD.length ; i++){
        const payment = sortD[i]
        
        budget -= payment
        if(budget < 0){
            return answer
        }
      
        answer++
    }
    
    return answer;
}