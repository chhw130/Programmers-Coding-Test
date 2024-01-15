function solution(arr, divisor) {
    var answer = [];
    for(ele of arr){
        if(ele % divisor == 0){
            answer.push(ele)
        }
    }
    
    answer.sort((a,b) =>
               a-b)
    
    return answer.length === 0 ? [-1] : answer;
}