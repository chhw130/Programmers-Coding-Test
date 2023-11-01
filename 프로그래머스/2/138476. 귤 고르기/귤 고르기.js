



function solution(k, tangerine) {
    var answer = 0;
    const tDict = {};
    const arr = []
    tangerine.forEach((t) => tDict[t] = (tDict[t] || 0) + 1);
    
    for(i in tDict){
        arr.push(tDict[i])
    }
    arr.sort((a,b) => b-a)
   
    for(i = 0 ; i < arr.length ; i++){
       k = k-arr[i]
        ++answer
        if(k < 1 ){
            break
        }
    
    }
    
    return answer;
}