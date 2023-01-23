function solution(numbers) {
    var answer = 0;
    const num = [1,2,3,4,5,6,7,8,9]
    let numData = 0;
    for(i of num){
        if(!numbers.includes(i)){
            answer +=i
        }
    } 
    return answer;
}