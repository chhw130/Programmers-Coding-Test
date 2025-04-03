function solution(k, tangerine) {
    var answer = 0;
    
    const tangerineObj = {}
    
    tangerine.map(ele => {
        tangerineObj[ele] = tangerineObj[ele] + 1 || 1 
    })
    
    const seperateTangerine = Object.entries(tangerineObj).sort((a,b) => b[1] - a[1])
    
    
    for(let i = 0 ; i < seperateTangerine.length ; i++){
        
        const [_ , number] = seperateTangerine[i]
        
        
        
        k -= number
        answer++
        
        if(k <= 0){
            break
        }
      
        
    }
    
    
    return answer;
}