function solution(n) {
    var answer = n;
    const binaryN = n.toString(2)
    
    while(true){
    answer+=1
    const binaryAns = answer.toString(2)
    
    const nLength = binaryN.split("").filter(ele => ele === '1').length;
        
    const ansLength = binaryAns.split("").filter(ele => ele === '1').length;
      
        
    if(nLength === ansLength){
        break
    }
        
    }
    
    
    

    
    
    return answer;
}