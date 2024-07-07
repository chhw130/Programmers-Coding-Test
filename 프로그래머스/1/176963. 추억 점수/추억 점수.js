function solution(name, yearning, photo) {
    var answer = [];
    const scoreTable = {}
    name.forEach((n,i) => scoreTable[n] = yearning[i])
    
    for(arr of photo){
        let score = 0
        for(name of arr){
            if(scoreTable[name]){
                score += scoreTable[name]
              
            }
        }
        answer.push(score)
    }
    
    return answer;
}