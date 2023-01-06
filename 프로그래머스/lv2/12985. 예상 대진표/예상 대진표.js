function solution(n,a,b){
    var answer = 1;
    let count = 0;
    for(i=0 ; i < Math.sqrt(n); i++){
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        if(a===b){
            break;
        }
        answer++
    }
    
    return answer;
}