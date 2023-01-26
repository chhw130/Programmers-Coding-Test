function solution(left, right) {
    var answer = 0;
    for(i = left ; i <= right ; i++){
        let count = 0;
        for(j = 1 ; j <= right ; j++){
            i % j === 0 ? count ++ : count+=0
        }
            count % 2 === 0 ? answer+= i : answer -= i 
    }
    return answer;
}