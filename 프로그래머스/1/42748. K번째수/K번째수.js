function solution(array, commands) {
    var answer = [];
    
    for(com of commands){
        const [i,j,k] = com

        
        
        const ele = array.slice(i-1,j).sort((a,b) => a-b)[k-1]
        
        answer.push(ele)
    }
    
    return answer;
}