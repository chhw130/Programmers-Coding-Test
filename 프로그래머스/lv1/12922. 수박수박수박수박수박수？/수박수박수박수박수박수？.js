function solution(n) {
    var answer = '';
    let conti = parseInt(n/2)
    for(i = 0 ; i < conti ; i++){
        answer += `수박`
    }
    n % 2 === 0 ? answer : answer+= `수`
    return answer;
}