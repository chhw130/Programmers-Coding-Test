function solution(participant, completion) {
    var answer = '';
    
    const participantObj = {}
    
    participant.forEach(part => {
        participantObj[part] = participantObj[part] ? participantObj[part] +1 : 1
    })
    
    completion.forEach(comp => {
        participantObj[comp] = participantObj[comp] - 1
    })
    
    
    const result = Object.keys(participantObj);
    
    for(let i = 0 ;  i < result.length ; i++){
        if(participantObj[result[i]]){
            answer = result[i]
            break
        }
    }
    
    
    return answer;
}