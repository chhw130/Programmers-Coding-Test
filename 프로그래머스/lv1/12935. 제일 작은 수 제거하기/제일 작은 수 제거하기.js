function solution(arr) {
    var answer = [];
    
    if(arr.length === 1){
        return answer = [-1]
    }else {
       
    const minNum = Math.min(...arr) 
    console.log(minNum)
      answer = arr.filter(e => e !== minNum)
    }
    
    
    
    return answer;
}