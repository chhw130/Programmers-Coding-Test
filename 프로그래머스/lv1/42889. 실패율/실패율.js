function solution(N, stages) {
    var answer = [];
    const stageObj = {}
    let people = stages.length

    stages.forEach(stage => {

        if(stage > N) return
        return stageObj[stage] = (stageObj[stage] || 0)  + 1
    })
    
    for(let i = 1 ; i <= N ; i++){
        const stagePeople = stageObj[i]
        
        stageObj[i] = (stageObj[i] / people || 0)
        
        if(stagePeople) people -= stagePeople
    }
    
    
    answer = Object.keys(stageObj).sort((a,b) => stageObj[b]-stageObj[a])
    
    answer = answer.map((data)=> parseInt(data))
    
    return answer;
}