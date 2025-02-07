function solution(progresses, speeds) {
    var answer = [];
    let temp = 0
    
    let data = 2
    
    while(progresses.length > 0){
        
        const first = progresses[0]
        
        const toDo = Math.ceil((100 - first) / speeds[0])
        
        
        progresses = progresses.map((ele, idx) => {
            return ele + speeds[idx] * toDo
        } )
        
        
        while(progresses[0] >= 100){
            progresses.shift()
            speeds.shift()
            temp++
        }

        answer.push(temp)
        temp = 0
    }
    
    return answer;
}