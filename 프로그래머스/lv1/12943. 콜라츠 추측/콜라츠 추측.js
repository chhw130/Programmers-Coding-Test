function solution(num) {
    var answer = 0;
    
    if(num === 1){
        return 0
    }
    
    while(answer !== -1 || num !== 1){
        if(num % 2 === 1){
            num = num*3 + 1
        }else{
            num = num / 2
        }
        ++answer
        
       if(num === 1){
           
           break
       }
        
        if(answer === 500){
            return answer = -1
        }
    }
    
    return answer;
}