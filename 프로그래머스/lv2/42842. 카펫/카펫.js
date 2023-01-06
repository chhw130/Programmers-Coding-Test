function solution(brown, yellow) {
    var answer = [];
    let div1 = 0
    let div2 = 0
    let totalYellow = 0
    for(i = 1; i <= Math.sqrt(yellow); i++){
        
        if(yellow % i ===0){
            div1 = yellow / i
            div2 = i
        }
        totalYellow = ((div1 + div2)*2) + 4
         if(brown === totalYellow){
            answer.push(div1+2,div2+2)
             break
         }
        }
    return answer;
}