function solution(progresses, speeds) {
    var answer = [];
    const day = [];
    let count = 0;
    progresses = progresses.map((e)=>
                  100-e)
    for(i = 0 ; i < progresses.length ; i++){
       day.push(Math.ceil(progresses[i]/speeds[i]))
    }
    let maxday = day[0]
    for(i = 0; i < day.length ; i++){
        if(maxday >= day[i]){
            count++
            if(i === day.length-1){
                answer.push(count)
            }
        }else{
            maxday = day[i]
            answer.push(count)
            count = 1
            if(i === day.length-1){
                answer.push(count)
            }
        }
        
    }
    return answer;
}