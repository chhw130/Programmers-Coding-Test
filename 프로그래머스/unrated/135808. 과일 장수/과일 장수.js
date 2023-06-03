function solution(k, m, score) {
    var answer = 0;
    const sortArr = score.sort((a,b) => b-a)
    for(let i = m-1 ; i< sortArr.length; i+=m){
       answer += sortArr[i]*m
    }
    
    return answer;
}