function solution(a, b) {
    var answer = 0;    
    for(i = a ; i<= b ; i++){
        answer += i
    }
    if(a>b){
        for(i = b ; i<= a ; i++){
        answer += i
    }
    }
    
    return answer;
}