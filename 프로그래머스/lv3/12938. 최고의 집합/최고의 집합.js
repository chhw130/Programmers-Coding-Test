function solution(n, s) {
    var answer = [];
    let newN = n
    let newS = s
    
    if(n > s){
        return [-1]
    }
    
    for(let i = 0 ; i < n ; i++){
        if(i === n-1){
            newS
        }
         answer.push(Math.floor(newS /newN))
        newS = newS - Math.floor(newS /newN)
       
        
        newN -= 1
        
    }
    return answer;
}