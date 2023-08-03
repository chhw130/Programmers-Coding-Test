function solution(citations) {
    var answer = 0;
    
    const sortedCitations = citations.sort((a,b) => b-a)
    
    if(sortedCitations[0] === 0){
        return 0
    }
    
    
    
    for(let i = sortedCitations[0] ; i >= 0 ; i-- ){
        let sum = 0
        
        for(let j = 0 ; j < sortedCitations.length ; j++){
            
            if(sortedCitations[j] >= i){
                sum++
            }else{
                break
            }
        }
        
        if(sum >= i){
            answer = i
            break
        }
    }
    
    return answer;
}