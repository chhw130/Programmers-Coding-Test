function solution(progresses, speeds) {
    var answer = [];
    
    let progressArr = [...progresses]
    
    
    while(progressArr.length){
        const firstStep = Math.ceil((100 - progressArr[0])/ speeds[0])
        
        progressArr = progressArr.map((progress,idx)=> progress + firstStep *speeds[idx])
        
        let cnt = 0
        
        
        for(let i = 0 ; i < progressArr.length ; i++){
            const progress = progressArr[i]
            if(progress >= 100){
                progressArr.shift()
                speeds.shift()
                cnt++
                i--
                continue
            }
            break
        }
            answer.push(cnt)
        
        
    }
    
    
    return answer;
}