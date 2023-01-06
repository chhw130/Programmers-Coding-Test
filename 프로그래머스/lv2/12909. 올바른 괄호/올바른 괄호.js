function solution(s){
    var answer = true;
    let count = 0;
    for(i = 0 ; i < s.length ; i++){
        s[i] === "(" ? count++ : count --
        if(count < 0){break;}
    }
    count === 0 ? answer = true : answer = false
    return answer;
}