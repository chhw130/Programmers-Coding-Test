function solution(n, lost, reserve) {
    var answer = 0;
   
    
    const newLost = lost.sort((a,b) => a-b).filter(ele => !reserve.includes(ele))
    const newReserve = reserve.sort((a,b) => a-b).filter(ele => !lost.includes(ele))
    answer += n - newLost.length
    
    
    while(true){
        const need = newReserve.shift()
        
      
        
        const beforeNeed = need -1
        const afterNeed = need + 1
          
        if(newLost.includes(beforeNeed)){
            answer++
            newLost.splice(newLost.indexOf(beforeNeed),1)
        }else if(newLost.includes(afterNeed)){
            answer++
            newLost.splice(newLost.indexOf(afterNeed),1)
        }
        
        if(!newReserve.length) break
    }
    
    return answer;
}