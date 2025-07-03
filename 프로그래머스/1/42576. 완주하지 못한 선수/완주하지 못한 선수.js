function solution(participant, completion) {
    var answer = '';
    
    const participantMap = {}
    
    participant.forEach((part) => {
        participantMap[part] = (participantMap[part] || 0) + 1
    })
    
    
    completion.forEach((comp) => {
        participantMap[comp] = participantMap[comp] - 1
    })
    
    answer = Object.entries(participantMap).find(([part, cnt]) => {
        return cnt > 0
    })[0]
    
    return answer;
}