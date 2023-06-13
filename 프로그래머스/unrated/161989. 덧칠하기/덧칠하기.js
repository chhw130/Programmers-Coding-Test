function solution(n, m, section) {
    var answer = 0;
    let sum = 0
    
    for(number of section){
        if(sum < number){
            answer += 1
            sum = m+number -1
        }
    }
    
  
    return answer;
}