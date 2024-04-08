function solution(d, budget) {
    var answer = 0;
    const budgetArr = d.sort((a,b) => a-b)
    let sum = 0
   
    while(sum <= budget){
        sum += budgetArr[answer]
        answer++
    }
   
    
    return answer-1;
}