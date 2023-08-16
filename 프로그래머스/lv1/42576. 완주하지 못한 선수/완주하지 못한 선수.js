function solution(participant, completion) {
    var answer = '';
    const partObj = {}
    
    participant.forEach((part) => {
        partObj[part] = (partObj[part] || 0) + 1
    })
    
    completion.forEach((comp) =>{
        partObj[comp] -= 1
        if(partObj[comp] === 0) return delete partObj[comp]
    })
    
    answer = Object.keys(partObj)[0]
    
  
    return answer;
}